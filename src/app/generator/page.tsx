import Tips from "@/components/body/generatorbody/Tips";
import Aigenerator from "@/components/body/generatorbody/Aigenerator";

export default function Generator() {
  return (
    <div className="min-h-[92.5dvh] bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            AI Prompt Generator
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Describe your requirements or scenario, and we will generate
            optimized prompts to help you get the best results from AI models.
          </p>

          <div className="flex-col gap-2 mb-5 text-center">
            <div>What do you need help with?</div>
            <div>
              The more details you provide, the better prompts we can generate.
            </div>
          </div>

          <Aigenerator />

          <Tips />
        </div>
      </div>
    </div>
  );
}
