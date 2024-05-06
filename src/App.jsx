import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import music from './assets/land.mp3';
import splash from './assets/eat.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LoadingComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="loading flex justify-center items-center h-screen bg-black">
      <img src={splash} alt="" data-aos="zoom-in" />
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Simulating a 10-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <audio id="backgroundAudio" autoPlay>
        <source src={music} type="audio/mpeg" />
      </audio>

      <section
        className="min-h-screen background bg-cover md:bg-cover bg-no-repeat"
      >
        {isLoading && <LoadingComponent />}
        {!isLoading && (
          <section className="px-10 md:max-w-screen-xl md:mx-auto md:px-4">
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </section>
        )}
      </section>
    </>
  );
}

export default App;
