import { BookOpen, Zap, Target, CheckCircle } from "lucide-react"

// Define types for the prompt objects
export type PromptItem = {
  icon: React.ElementType;
  title: string;
  text: string;
}

export const aboutText = {
  heading: "About PromptCraft",
  description: "We're on a mission to help you communicate more effectively with AI systems through expertly crafted prompts.",
};

export const ourStoryText = {
  heading: "Our Story",
  paragraphs: [
    "PromptCraft was born from a simple observation: the quality of AI outputs depends heavily on the quality of prompts. We noticed that many users struggle to articulate their needs in a way that AI systems can understand and respond to effectively.",
    "Our team of AI experts, linguists, and UX designers came together to create a tool that bridges this communication gap. We've analyzed thousands of prompts and their results to develop an intelligent system that helps you craft the perfect prompt for any scenario.",
    "Today, PromptCraft is used by professionals, students, and creators worldwide to enhance their AI interactions and get better results from various AI models.",
  ],
};

export const howToGetPrompts: PromptItem[] = [
  {
    icon: BookOpen,
    title: "1. Describe Your Needs",
    text: "Start by clearly explaining what you're trying to achieve. The more specific you are about your requirements, the better our system can tailor prompts to your needs.",
  },
  {
    icon: Zap,
    title: "2. Generate Options",
    text: "Our AI analyzes your requirements and generates multiple prompt options optimized for different aspects of your request. Each prompt is designed to elicit the best possible response.",
  },
  {
    icon: Target,
    title: "3. Refine & Use",
    text: "Choose the prompt that best fits your needs, or refine it further. Copy the prompt and use it with your preferred AI model to get superior results.",
  },
];

export const tipsForEffectivePrompts = [
  {
    title: "Be Specific",
    text: "Include details about your target audience, desired tone, format, and any specific requirements. The more specific you are, the more tailored the response will be.",
  },
  {
    title: "Provide Context",
    text: "Give background information that helps the AI understand the bigger picture. This context helps generate more relevant and useful responses.",
  },
  {
    title: "Use Clear Structure",
    text: "Organize your requirements logically. Break down complex requests into steps or bullet points to make them easier for the AI to process.",
  },
  {
    title: "Specify Format",
    text: "Indicate how you want the information presented: as a list, essay, table, step-by-step guide, etc. This helps structure the AI's response in the most useful way.",
  },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/generator", label: "Generator" },
];
