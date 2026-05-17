import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between px-4 bg-green-400'>
        <h1>logo</h1>
        <ul className='flex gap-2'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
   </div>
  )
}

export default Navbar