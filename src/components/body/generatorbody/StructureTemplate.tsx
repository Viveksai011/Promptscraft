export type UseCase =
  | "Prompt Generator"
  | "Story"
  | "Code"
  | "Creativity"
  | "Optimize Prompt";


interface Template {
  intro: string;
  instructions: string;
  goals: string[];
}

const generateGoals = (goals: string[]): string => {
  return goals.length > 0 ? `- ${goals.join("\n- ")}` : "";
};

const StructureTemplate = (useCase: UseCase, userInput: string): string => {
  const templates: Record<UseCase, Template> = {
    "Prompt Generator": {
      intro: "You are an expert in generating good prompts for AI models to get the best results in maximum in 12 points.",
      instructions: "Your task is to generate an optimized prompt based on this description. Use clear and effective language. Structure it professionally.",
      goals: [
        "Goal-driven",
        "Detailed",
        "Role-assigned (if relevant)",
        "Specific about tone or style",
      ],
    },
    "Story": {
      intro: "You are an expert storyteller.",
      instructions: "Your task is to generate a compelling story based on this description.",
      goals: [
        "Clear narrative structure",
        "Interesting characters",
        "Engaging dialogue",
        "Strong setting and atmosphere",
      ],
    },
    "Code": {
      intro: "You are a coding expert. ",
      instructions: "Your task is to write the code that solves this problem.",
      goals: [
        "Clean and efficient code",
        "Well-documented",
        "Easy to understand",
        "Follows best practices",
        "Present code in code blocks with proper syntax highlighting"
      ],
    },
    "Creativity": {
      intro: "You are a creative expert.",
      instructions: "Your task is to generate a creative solution or concept based on this idea.",
      goals: ["Innovative", "Unique", "Feasible", "Clear and impactful"],
    },
    "Optimize Prompt": {
      intro: "You are an expert in optimizing prompts.",
      instructions: "Your task is to generate an optimized prompt based on this description.",
      goals: [
        "Goal-driven",
        "Detailed",
        "Role-assigned (if relevant)",
        "Specific about tone or style",
      ],
    },
  };

  const template = templates[useCase];

  if (!template) {
    throw new Error("Invalid use case selected");
  }

 
  const formattedGoals = generateGoals(template.goals);

  return `${template.intro}
The user has provided the following description:
"${userInput}"
${template.instructions}
Make sure the prompt includes:
${formattedGoals}
Make sure to use clear and effective language. Structure it professionally.`;
};

export default StructureTemplate;
