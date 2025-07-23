import { tipsForEffectivePrompts } from "@/lib/about";
import { CircleCheckBig } from "lucide-react";

const Tipsprompt = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Tips for Effective Prompts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tipsForEffectivePrompts.map(({ title, text }, idx) => (
            <div key={idx} className="flex items-start">
              <CircleCheckBig className="text-purple-600 dark:text-purple-400 mr-3 mt-1 h-[18px] w-[18px] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tipsprompt;
