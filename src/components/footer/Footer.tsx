import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800 mt-auto">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400">PromptCraft</h2>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                About
              </Link>
              <Link href="/generator" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                Generator
              </Link>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} PromptCraft. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
