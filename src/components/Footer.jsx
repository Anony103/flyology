import React from 'react';
import fly from '../assets/fly.png';
import book from '../assets/book.png';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center px-4">
      <div>
        <h2 className="text-green-600 text-center font-bold text-3xl text-markazi">THE FLY SHOP</h2>
      </div>
      <div className='flex gap-4 md:gap-20'>
        <img src={fly} alt="Fly" />
        <img src={book} alt="Book" />
      </div>
    </footer>
  );
};

export default Footer;
