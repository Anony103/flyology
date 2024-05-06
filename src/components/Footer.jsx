import React from 'react';
import fly from '../assets/fly.png';
import book from '../assets/book.png';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center px-4 gap-2">
      <div>
        <h2 className="text-green-600 text-center font-bold text-2xl md:text-3xl font-IM">THE FLY SHOP</h2>
      </div>
      <div className='flex gap-4 md:gap-20'>
        <img src={fly} alt="Fly" />
        <img src={book} alt="Book" />
      </div>
      <div className='text-white mt-2 mb-4 font-Rubik'><span><>&#169;</> copyright FLYOLOGY 2024</span></div>
    </footer>
  );
};

export default Footer;
