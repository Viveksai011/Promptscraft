import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { CohereClientV2 } from 'cohere-ai';  // Correct import for CohereClientV2

// Initialize OpenAI API
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1', // Ensure this URL is correct
  apiKey: process.env.OPENROUTER_API_KEY, // Ensure your API key is loaded
});

// Initialize Cohere API using CohereClientV2
const cohereClient = new CohereClientV2({ token: process.env.COHERE_API_KEY }); // Use the correct API token

// Function to generate prompts using OpenAI API
const generatePromptsOpenAI = async (userInput: string, model: string): Promise<string[]> => {
  try {
    const completion = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'user',
          content: userInput,
        },
      ],
    });

    const prompts = completion.choices
      .map(choice => choice.message.content)
      .filter((content): content is string => content !== null);

    return prompts;
  } catch (error: any) {
    throw new Error(`OpenAI model failed: ${error?.message || 'Unknown error'}`);
  }
};

// Function to generate prompts using Cohere API
const generatePromptsCohere = async (userInput: string): Promise<string[]> => {
  try {
    // Use CohereClientV2 for chatStream
    const response = await cohereClient.chatStream({
      model: 'command-a-03-2025',  // Adjust model name here
      messages: [{ role: 'user', content: userInput }],
      temperature: 0.3,  // Adjust temperature as needed
    });

    // Collect messages from the response stream
    let generatedText: string[] = [];

    // Iterate over the stream of messages
    for await (const message of response as AsyncIterable<{ type: string; text?: string }>) {
      // Check if the message is of type MessageChoice, which contains the generated text
      if (message.type === 'MessageChoice' && message.text) {
        // The generated message is in the 'text' property of the MessageChoice
        generatedText.push(message.text);
      }
    }

    return generatedText;
  } catch (error: any) {
    throw new Error(`Cohere API failed: ${error?.message || 'Unknown error'}`);
  }
};

// Handle the POST request for generating prompts
export async function POST(req: Request) {
  try {
    const { userInput }: { userInput: string } = await req.json();  // Type the request body

    if (!userInput) {
      return NextResponse.json({ error: 'Input required' }, { status: 400 });
    }

    let prompts: string[] = [];

    // Try the OpenAI primary model first
    try {
      prompts = await generatePromptsOpenAI(userInput, 'huggingfaceh4/zep7b-beta:free');
    } catch (error) {
      console.error('Primary OpenAI model failed, attempting fallback OpenAI model:', error);
      // If the primary OpenAI model fails, try the secondary OpenAI model
      try {
        prompts = await generatePromptsOpenAI(userInput, 'thudm/g:free');
      } catch (fallbackError) {
        console.error('Both OpenAI models failed, attempting Cohere:', fallbackError);
        // If both OpenAI models fail, fallback to Cohere
        try {
          prompts = await generatePromptsCohere(userInput);
        } catch (cohereError) {
          console.error('Cohere API also failed:', cohereError);
          return NextResponse.json({ error: 'Failed to generate prompts after OpenAI and Cohere attempts.' }, { status: 500 });
        }
      }
    }

    return NextResponse.json({ prompts });

  } catch (error: any) {
    console.error('Error while generating prompts:', error);
    return NextResponse.json({ error: 'Failed to generate prompts' }, { status: 500 });
  }
}
