import React from 'react'

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center px-6">
        
        <div className="text-center text-white max-w-2xl">
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to My Website 🚀
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-8">
            Build modern web applications with React and Tailwind CSS.
            Fast, responsive, and beautiful UI design.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Get Started
            </button>

            <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Learn More
            </button>
          </div>

        </div>

      </section>
    </>
  )
}

export default Home