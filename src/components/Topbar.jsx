/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/


export default function Topbar() {
    return (
        <div className={"flex gap-4 py-2 px-12 "}>
            <button
                type="button"
                className="inline-flex items-center px-6 py-1 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                All Units
            </button>

            <button
                type="button"
                className="inline-flex items-center px-6 py-1 border border-transparent text-sm font-medium rounded-full shadow-sm  bg-gray-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-2 hover:text-gray-100 focus:text-white"
            >
                SBU-1
            </button>

            <button
                type="button"
                className="inline-flex items-center px-6 py-1 border border-transparent text-sm font-medium rounded-full shadow-sm  bg-gray-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  border-2 hover:text-gray-100 focus:text-white"
            >
                SBU-2
            </button>

            <button
                type="button"
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm  bg-gray-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  border-2 hover:text-gray-100 focus:text-white"
            >
                SBU-3
            </button>

            <button
                type="button"
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm  bg-gray-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  border-2 hover:text-gray-100 focus:text-white"
            >
                SBU-4
            </button>

            <button
                type="button"
                className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm  bg-gray-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  border-2 hover:text-gray-100 focus:text-white"
            >
                SBU-5
            </button>
        </div>
    )
}
