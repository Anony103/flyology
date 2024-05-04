import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { services } from '../data'

const Services = () => {

    useEffect(()=>{
        AOS.init({duration:1200})
    })

  return (
    <section className='max-w-screen-xl mx-auto px-4'>
    <section className="px-4 py-8 md:px-8 lg:px-16 xl:px-20" data-aos="zoom-in">
      <section className="flex flex-col items-center justify-center">
        <h6 className="fonts-markazi text-xs font-semibold text-gray-500">SERVICE</h6>
        <h2 className="fonts-markazi text-2xl md:text-4xl lg:text-5xl font-medium text-gray-900 mt-2">Exceeding Expectations</h2>
        <p className="font-karla text-lg text-gray-600 mt-2">We're just another agency, we're your path to exceptional web projects.</p>
        </section>

        <section className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' data-aos="fade-up">
            {services.map((item, index) => (
           <section key={index} className='flex flex-col p-8 border-2 border-emerald-100 rounded-xl max-w-sm gap-2 mt-12'>
                <div className={`bg-gray-100 rounded-md p-2 w-12`}>
                <img src={item.img} alt="Client" className='w-8 h-8 rounded-full'/>
                </div>
                <h3 className='fonts-markazi text-md font-semibold'>{item.title}</h3>
                <p className='font-karla text-sm text-gray-600'>{item.desc}</p>
                <button type='submit' className='border-2 border-emerald-100 p-3 text-md w-14 hover:bg-emerald-800 hover:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>

                </button>
            </section>
            ))}
        </section>
    </section>
    </section>
  )
}

export default Services
