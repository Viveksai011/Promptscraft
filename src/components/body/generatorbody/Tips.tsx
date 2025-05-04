

const Tips = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Tips for Better Results</h3>
    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
      <li className="flex items-start">
        <span className="text-purple-500 mr-2">•</span>
        <span>Be specific about your target audience, tone, and format</span>
      </li>
      <li className="flex items-start">
        <span className="text-purple-500 mr-2">•</span>
        <span>Include relevant context and background information</span>
      </li>
      <li className="flex items-start">
        <span className="text-purple-500 mr-2">•</span>
        <span>Mention any specific requirements or constraints</span>
      </li>
      <li className="flex items-start">
        <span className="text-purple-500 mr-2">•</span>
        <span>Specify the desired length or depth of the response</span>
      </li>
    </ul>
  </div>
  )
}

export default Tips
