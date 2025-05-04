
import {  howToGetPrompts, PromptItem } from "@/lib/about"

const Suggestion = () => {
  return (
       <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
                How to Get the Best Prompts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {howToGetPrompts.map(({ icon: Icon, title, text }: PromptItem, idx) => (
                  <div key={idx} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}

export default Suggestion
