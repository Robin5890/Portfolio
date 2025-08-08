import React from 'react'

const Bio = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-900 px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
        Robin Chalhoub
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
        Full-Stack Developer & Software Engineer
      </h2>
      <p className="max-w-xl text-gray-600 dark:text-gray-400 mb-8">
        I build modern, responsive web applications with a focus on performance, accessibility, and great user experience.
      </p>
      <a
        href="#projects"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
      >
        View Projects
      </a>
    </section>
  )
}

export default Bio
