import React from 'react'

const Navbar = () => {

  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"

  return (
    <>
      <nav className="bg-gray-900 text-white px-8 py-4 shadow-lg">
        
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12"
            />

            <h1 className="text-2xl font-bold text-cyan-400">
              navbar
            </h1>

          </div>

          {/* Menu */}
          <ul className="flex gap-8">
            <li>
              <a href="/" className="hover:text-cyan-400 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-cyan-400 cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-400 cursor-pointer">
                Contact
              </a>
            </li>
          </ul>

        </div>

      </nav>
    </>
  )
}

export default Navbar