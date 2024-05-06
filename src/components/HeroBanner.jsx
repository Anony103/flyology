import React, { useEffect, useState } from 'react';
import videoBg from '../assets/landTrim.gif'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroBanner = () => {
  const [text, setText] = useState('');
  const words = ["We ", "develop ", "✨ ", "amazing ", "websites ", "for ", "your ", "business "];

  useEffect(() => {
    let currentIndex = words[0].slice(0, text.length + 1);
    if(currentIndex === text) return;
    
    const interval = setInterval(() => {
      setText(words.slice(0, text.length + 1));
    }, 300);

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []); // Make sure to add empty dependency array to run once on component mount

  return (
    <section className="w-full px-2">
      <img src={videoBg} className='w-full h-72 md:h-4/6 object-cover' />
    </section>
  );
};

export default HeroBanner;
