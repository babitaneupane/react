import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
        
        <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl">
          
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-3">
            Contact Us 📩
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Have questions? Feel free to reach out anytime.
          </p>

          <form className="space-y-6">
            
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>
    </>
  )
}

export default Contact;