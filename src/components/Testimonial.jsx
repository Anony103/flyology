import React, { useState, useEffect } from 'react';
import { testimonial } from '../data';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonial.length;

  useEffect(()=>{
    AOS.init({duration:1200})
})

  const prev = () =>{
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () =>{
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className='max-w-screen-xl mx-auto px-4'>
    <section className="px-4 py-8 md:px-8 lg:px-16 xl:px-20" data-aos="zoom-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h6 className="font-markazi text-xs font-semibold text-gray-500">TESTIMONIALS</h6>
          <h2 className="font-markazi text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">Our clients say</h2>
          <p className="font-karla text-lg text-gray-600 mt-2">Don't take our word for it. Hear it from our happy clients</p>
        </div>
        {testimonial.map((item, index) => index === current && (
          <div key={index} className="flex flex-col items-center justify-center md:flex-row gap-4 mt-12" data-aos="flip-left">
            <button type='button' onClick={prev} className='p-6 border-4 border-emerald-100 rounded-xl hover:bg-emerald-800 hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <p className="text-lg font-karla text-gray-700 leading-relaxed">{item.desc}</p>
              <div className="mt-8 flex items-center">
                <img src={item.img} alt="Client" className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h3 className="font-markazi text-lg font-semibold text-gray-900">{item.user}</h3>
                  <p className="font-karla text-sm text-gray-600">{item.job}</p>
                </div>
              </div>
            </div>
            <button type='button' onClick={next} className='p-6 border-4 border-emerald-100 rounded-xl hover:bg-emerald-800 hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
    </section>
  );
};

export default Testimonial;