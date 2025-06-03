import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.add('glitch-bg');
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex items-center justify-center w-full">
        <h1
          style={{
            width: '100%',
            fontSize: '7vw',
            fontWeight: 'bold',
            opacity: 1,
            textAlign: 'center',
            letterSpacing: '0.2em',
          }}
        >
          Welcome to Shadow Protocol
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
