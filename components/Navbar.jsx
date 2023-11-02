import React, { useState } from 'react'

const Navbar = () => {
  const [showNav, setShowNav] = useState(true)
  const toggleNav = () => {
    setShowNav(!showNav)
  }
  return (
   <>
  
<nav className="bg-white border-gray-200 shadow-sm sticky top-0 z-10">
  <div className="max-w-[1200px] flex flex-wrap items-center justify-between mx-auto py-4">
    <a href="/" className="flex items-center">
        <img src="https://supreme-chem.com/images/logo.png" className="w-40" alt="Flowbite Logo" />
    </a>
    <button data-collapse-toggle="navbar-default"  onClick={toggleNav} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 rounded md:text-[color:var(--main-color)] md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text[color:var(--dark-color)] rounded md:border-0 hover:text-[color:var(--main-color)] md:p-0">Our Story</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text[color:var(--dark-color)] rounded md:border-0 hover:text-[color:var(--main-color)] md:p-0">Products & Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text[color:var(--dark-color)] rounded md:border-0 hover:text-[color:var(--main-color)] md:p-0">News</a>
        </li>
      </ul>
    </div>
    <button className='text-[color:var(--main-color)] border border-[color:var(--main-color)] px-3 py-1 rounded-full hover:text-white hover:bg-[color:var(--main-color)] hidden md:block'>Contact Us</button>
  </div>
  {/* Nav Model Repsonive */}
  <div 
   style={{
    display: showNav ? "hidden" : "block",
    opacity: showNav ? "1" : "0",
    transition: ".4s",
  }}
  className='bg-white hidden'>
     <div className="border pl-2 py-5 mt-2">
      <ul className="">
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text[color:var(--dark-color)] rounded md:border-0 hover:text-[color:var(--main-color)] md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text[color:var(--dark-color)] rounded md:border-0 hover:text-[color:var(--main-color)] md:p-0">Our Story</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text[color:var(--dark-color)] rounded md:border-0 hover:text-[color:var(--main-color)] md:p-0">Products & Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text[color:var(--dark-color)] rounded md:border-0 hover:text-[color:var(--main-color)] md:p-0">News</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


   </>
  )
}

export default Navbar