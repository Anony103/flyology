import React, { useEffect, useState } from 'react';
import videoBg from '../assets/land.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HeroBanner = () => {
  const [text, setText] = useState('');
  const words = ["We ", "develop ", "✨ ", "amazing ", "websites ", "for ", "your ", "business "];

  useEffect(() => {
      let currentIndex = words[0].slice(0, text.length + 1);
    if(currentIndex === text) return
        const interval = setInterval(() => {
        setText(words.slice(0, text.length + 1));
      },300)

      return () => clearInterval(interval)
    }, [text]);

    useEffect(()=>{
      AOS.init({duration:1200})
  })

  return (
    <section className="w-full h-screen px-2" >
      <video src={videoBg} autoPlay loop muted className='w-full h-full object-cover'/>
    </section>
  );
};

export default HeroBanner;
