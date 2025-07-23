import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_CLOUD_API_KEY });


const generatePromptsGroq = async (userInput: string): Promise<string> => {
  try {
 
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: userInput,
        },
      ],
      model: "allam-2-7b", 
      temperature: 1, 
      max_completion_tokens: 1024,
      top_p: 1,
      stream: true, 
      stop: null,
    }); 

    let generatedText = ""; 

    for await (const chunk of chatCompletion) {
      if (chunk.choices[0]?.delta?.content) {
        generatedText += chunk.choices[0].delta.content;
      }
    }

    return generatedText;
  } catch (error: any) {
    throw new Error(`Groq API failed: ${error?.message || "Unknown error"}`);
  }
};


export async function POST(req: Request) {
  try {
    const { userInput }: { userInput: string } = await req.json(); 
    if (!userInput) {
      return NextResponse.json({ error: "Input required" }, { status: 400 });
    } 

    let prompts: string = "";
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
