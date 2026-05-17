import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-1 mt-10 padding-0,0,100px,0"> 
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between ">
        
        <h1 className="text-xl font-bold mb-4 md:mb-0">
          MyWebsite
        </h1>

        <ul className="flex gap-1 text-gray-100">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>

        <p className="text-gray-400 mt-4 md:mt-0">
          © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
