import React from 'react'
import {Sparkles, MessageSquare, Lightbulb } from "lucide-react"

const Feature = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
<div className="container px-4 mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Use Our Prompt Generator?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
        <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold mb-3">Intelligent Suggestions</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Our AI analyzes your requirements and generates prompts optimized for the best possible responses.
      </p>
    </div>
    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
        <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold mb-3">Context-Aware</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Provide your specific scenario and get prompts tailored to your exact needs and use case.
      </p>
    </div>
    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
        <Sparkles className="h-6 w-6 text-green-600 dark:text-green-400" />
      </div>
      <h3 className="text-xl font-semibold mb-3">Better Results</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Get more accurate, relevant, and useful responses from AI models with our expertly crafted prompts.
      </p>
    </div>
  </div>
</div>
</section>
  )
}

export default Feature
