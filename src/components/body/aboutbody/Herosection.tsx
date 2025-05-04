
import { aboutText } from "@/lib/about"

const Herosection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container px-4 mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                {aboutText.heading}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {aboutText.description}
              </p>
            </div>
          </section>
  )
}

export default Herosection
