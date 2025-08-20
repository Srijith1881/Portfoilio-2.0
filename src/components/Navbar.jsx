import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed bg1 top-1 left-1/2 transform -translate-x-1/2 w-auto text-white z-[9999] rounded-2xl hidden sm:block '>
      <ul className='flex flex-row justify-center items-center space-x-4 md:space-x-8 p-4 font-bold text-xl'>
        <li><a href="#hero" className="hover:text-red-600">Home</a></li>
        <li><a href="#about" className="hover:text-red-600">About</a></li>
        <li><a href="#projects" className="hover:text-red-600">Projects</a></li>
        <li><a href="#techs" className="hover:text-red-600">Tech</a></li>
        <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar