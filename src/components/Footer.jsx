import { Link } from "react-router-dom";
import reactLogo from '../assets/logo.png';
import facebook from '../assets/service2.svg';
import x from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';




const Footer = () => {
  return (
    <section className='md:max-w-screen-xl md:mx-auto md:px-4'>
    <footer className="flex flex-col md:flex-row justify-center items-center py-3 px-4 border-t-2 border-gray-100 gap-2">
      <div className="flex-1">
        <Link to="/">
          <img src={reactLogo} alt="Root16" className="w-16 h-auto" />
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex">
          <a href="#" target="_blank" rel="noopener noreferrer" className="mr-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img src={instagram} alt="Instagram" className="w-6 h-auto" />
            </div>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="mr-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img src={x} alt="TikTok" className="w-6 h-auto" />
            </div>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={facebook} alt="WhatsApp" className="w-6 h-auto" />
            </div>
          </a>
        </div>
      </div>
      <div className="flex-1 text-right">
        <div className="text-sm">&copy; Copyright Flyology</div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
