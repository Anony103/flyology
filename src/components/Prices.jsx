import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { princing } from '../data'

const Prices = () => {

    useEffect(()=>{
        AOS.init({duration:1200})
    })
  return (
    <section className='max-w-screen-xl mx-auto px-4'>
    <section className="px-4 py-8 md:px-8 lg:px-16 xl:px-20" data-aos="zoom-in">

        <section className='p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4' data-aos="fade-up">
            {princing.map((item,index)=>(
            <section key={item.id} className='flex flex-col mt-12 max-w-sm gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:opacity-90 hover:scale-105  hover:text-black' >
                <section>
                <h1 className={`font-Grechen text-2xl font-bold text-center ${item.color}`}>{item.title}</h1>
                <h2 className="font-Grechen font-bold text-xl text-center text-white">PACKAGE</h2>
                </section>

                <ul className='border-r-4 border-gray-100 md:p-4 flex flex-col items-center justify-center'>
                    {item.list.map((items,index)=>
                    <li className='flex gap-2' key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-emerald-800">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    <span className="fonts-Karla text-white text-base font-medium">{items}</span>
                    </li>
                    )}
                </ul>
                {/* <button type="button" className='p-2 border-2 border-emerald-100 hover:bg-emerald-800 hover:text-white'>Get started</button> */}
            </section>
            ))}
        </section>
    </section>
    </section>
  )
}

export default Prices
