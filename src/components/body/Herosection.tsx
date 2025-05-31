import React from 'react'
import Link from "next/link"
import { ArrowRight, Sparkles} from "lucide-react"
import { Button } from '@/components/ui/button'
const Herosection = () => {
  return (
    <section className=" py-20 md:py-32 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center md:justify-between">
            <div className="md:w-1/2 md:mb-0">
              <h1 className="text-4xl md:text-[50px] leading-normal font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                Craft Perfect Prompts for AI
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Transform your ideas into powerful prompts that get the best results from AI models. Our intelligent
                prompt generator help you communicate effectively with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
               
                  <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                >
                  <Link href="/generator">
                    Try Generator <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-2/5 md:pl-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-6 w-6 text-purple-500 mr-2" />
                  <h3 className="font-semibold text-lg">Sample Prompt</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Create a detailed tutorial on how to build a responsive website using React and Tailwind CSS,
                  including code examples and best practices.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-sm text-gray-600 dark:text-gray-300">
                <p className="font-mono">
  Generated for: {`"I need help creating a website tutorial"`}
</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Herosection
