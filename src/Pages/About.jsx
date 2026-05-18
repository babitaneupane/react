import React from 'react'

const About = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center px-6 py-12">
        
        <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              About Us 🌟
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We create modern, responsive, and user-friendly web applications
              using React and Tailwind CSS. Our goal is to build beautiful
              digital experiences that are fast, clean, and easy to use.
            </p>

            <p className="text-gray-400 mb-8">
              From creative UI designs to powerful frontend development,
              we focus on delivering high-quality projects with modern
              technologies.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold transition duration-300">
              Learn More
            </button>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-sm">
              
              <h2 className="text-2xl font-bold mb-6 text-center">
                Our Skills 🚀
              </h2>

              <div className="space-y-5">
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span>React</span>
                    <span>90%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-blue-500 h-3 rounded-full w-[90%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Tailwind CSS</span>
                    <span>85%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-pink-500 h-3 rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>JavaScript</span>
                    <span>80%</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-yellow-400 h-3 rounded-full w-[80%]"></div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default About