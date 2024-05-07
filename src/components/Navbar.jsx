// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import reactLogo from '../assets/logo.png';
// import SidebarMenu from './SidebarMenu';
// import { Disclosure } from '@headlessui/react';

// const Navbar = ({ scroll, scroll1, scroll2, scroll3 }) => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen((prevState) => !prevState);
//   };

//   return (
//     <section className='md:max-w-screen-xl md:mx-auto md:px-4'>
//        <Disclosure as="nav">
//         {({ open }) => (
//           <header className='flex justify-between items-center p-4 md:p-8 sticky top-0 z-50 bg-tahiti border-b border-gray-500'>
//             <section className='flex items-center'>
//               <NavLink to='/' className='flex items-center'>
//                 <div>
//                   <img src={reactLogo} alt="Logo" className='h-12 w-12' />
//                 </div>
//                 <h1 className='font-markazi text-3xl text-emerald-800 ml-2'>Flyology</h1>
//               </NavLink>
//             </section>

//             <section className='hidden md:flex'>
//               <nav className='flex gap-6 font-markazi text-2xl'>
//                 <NavLink className='hover:text-emerald-800' onClick={scroll}>Why us</NavLink>
//                 {/* <NavLink className='hover:text-emerald-800' onClick={scroll}>Services</NavLink> */}
//                 <NavLink className='hover:text-emerald-800' onClick={scroll1}>Testimonials</NavLink>
//                 <NavLink className='hover:text-emerald-800' onClick={scroll2}>Pricing</NavLink>
//               </nav>
//             </section>

//             <section>
//               <button type="button" className='bg-emerald-800 text-white p-3 rounded-md hidden md:block'>Contact Us</button>
//             </section>

//             {/* Toggle button for small screens */}
//             <button type="button" className="md:hidden" onClick={toggleSidebar}>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </header>
//         )}
//       </Disclosure>

//       {/* Pass toggleSidebar function to SidebarMenu */}
//       <SidebarMenu
//         isOpen={isSidebarOpen}
//         toggleSidebar={toggleSidebar}
//         scroll={scroll}
//         scroll1={scroll1}
//         scroll2={scroll2}
//         scroll3={scroll3}
//       />
//     </section>
//   );
// };

// export default Navbar;

import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center py-8'>
      <h1 className='font-chalk text-4xl  lg:text-[140px] md:text-7xl text-white'>FLYOLOGY UNIV.</h1>
    </div>
  )
}

export default Navbar
