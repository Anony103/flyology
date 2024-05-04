import React from 'react';
import { NavLink } from "react-router-dom";

const SidebarMenu = ({ isOpen, toggleSidebar, scroll, scroll1, scroll2, scroll3 }) => {

  const handleScrollClick = (scrollFunc) => {
    scrollFunc(); // Call the scroll function
    toggleSidebar(); // Close the sidebar
  };

  return (
    <div className={`fixed inset-0 overflow-hidden z-50 bg-black ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-y-0 right-0 max-w-md w-4/5 bg-white text-black shadow-xl h-full transition-transform duration-300 transform translate-x-0 px-6 py-8">
        <NavLink className="flex items-center justify-between text-center mb-12">
          <div></div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={toggleSidebar}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </NavLink>
        <div className="flex flex-col justify-center gap-4 font-markazi text-2xl">
          <NavLink className='hover:text-emerald-800' onClick={() => handleScrollClick(scroll1)}>Why us</NavLink>
          {/* <NavLink className='hover:text-emerald-800'>Services</NavLink> */}
          <NavLink className='hover:text-emerald-800' onClick={() => handleScrollClick(scroll2)}>Testimonials</NavLink>
          <NavLink className='hover:text-emerald-800' onClick={() => handleScrollClick(scroll3)}>Pricing</NavLink>
        </div>
        <section>
          <button type="button" className='bg-emerald-800 text-white p-3 rounded-md hidden md:block'>Contact Us</button>
        </section>
      </div>
    </div>
  )
}

export default SidebarMenu;
