
import { ourStoryText } from "@/lib/about"

const Story = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
           <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2 relative">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg flex flex-col items-center gap-3 justify-center h-80 w-full">
                 <h3 className="text-4xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">Crafting Perfect Prompts</h3>
                 <p className="text-xl">Bridging the gap between human ideas and AI understanding</p>
                </div>
                   <div className="absolute backdrop-blur-lg -bottom-6 -right-6 bg-purple-500 h-40 w-40 rounded-lg"></div>
                   <div className="absolute backdrop-blur-lg -top-6 -left-6 bg-blue-500 h-40 w-40 rounded-lg"></div>
             </div>
             <div className="md:w-1/2">
               <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{ourStoryText.heading}</h2>
               {ourStoryText.paragraphs.map((para, idx) => (
                 <p key={idx} className="text-gray-600 dark:text-gray-300 mb-4">
                   {para}
                 </p>
               ))}
             </div>
           </div>
         </section>
  )
}

export default Story
