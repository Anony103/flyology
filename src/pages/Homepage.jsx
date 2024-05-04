import React, { useRef } from 'react';
import HeroBanner from '../components/HeroBanner'
import Testimonial from '../components/Testimonial'
import Services from '../components/Services'
import Prices from '../components/Prices'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Homepage = () => {

  const overviewRef = useRef(null);
  const overviewRef1 = useRef(null);
  const overviewRef2 = useRef(null);
  const overviewRef3 = useRef(null);

  const scrollToOverview = () => {
    if (overviewRef.current) {
      overviewRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOverview1 = () => {
    if (overviewRef1.current) {
      overviewRef1.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOverview2 = () => {
    if (overviewRef2.current) {
      overviewRef2.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOverview3 = () => {
    if (overviewRef3.current) {
      overviewRef3.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
        <Navbar
        scroll={scrollToOverview}
        scroll1={scrollToOverview1}
        scroll2={scrollToOverview2}
        scroll3={scrollToOverview3}
        />
        <HeroBanner/>
        <div ref={overviewRef}>
        <Services/>
        </div>
        <div ref={overviewRef1}>
        <Testimonial/>
        </div>
        <div ref={overviewRef2}>
        <Prices/>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Homepage
