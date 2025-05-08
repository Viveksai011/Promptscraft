import { NextResponse } from "next/server";
import Groq from "groq-sdk";

// Initialize Groq API using GROQ_CLOUD_API_KEY
const groq = new Groq({ apiKey: process.env.GROQ_CLOUD_API_KEY });

// Function to generate prompts using the Groq API
const generatePromptsGroq = async (userInput: string): Promise<string[]> => {
  try {
    // Request chat completion using the "allam-2-7b" model
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: userInput,
        },
      ],
      model: "allam-2-7b", // Specify the model as "allam-2-7b"
      temperature: 1, // Adjust temperature if needed
      max_completion_tokens: 1024,
      top_p: 1,
      stream: true, // Enable streaming if desired
      stop: null,
    }); // Collect the response text from the streamed message

    let generatedText: string[] = []; // Iterate over the response stream to collect generated text

    for await (const chunk of chatCompletion) {
      if (chunk.choices[0]?.delta?.content) {
        generatedText.push(chunk.choices[0].delta.content);
      }
    }

    return generatedText;
  } catch (error: any) {
    throw new Error(`Groq API failed: ${error?.message || "Unknown error"}`);
  }
};

// Handle the POST request for generating prompts
export async function POST(req: Request) {
  try {
    const { userInput }: { userInput: string } = await req.json(); // Type the request body
    if (!userInput) {
      return NextResponse.json({ error: "Input required" }, { status: 400 });
    } // Generate prompts using the Groq API

    let prompts: string[] = [];
    try {
      prompts = await generatePromptsGroq(userInput);
    } catch (error) {
      console.error("Groq API failed:", error);
      return NextResponse.json(
        { error: "Failed to generate prompts" },
        { status: 500 }
      );
    }

    return NextResponse.json({ prompts });
  } catch (error: any) {
    console.error("Error while generating prompts:", error);
    return NextResponse.json(
      { error: "Failed to generate prompts" },
      { status: 500 }
    );
  }
}
