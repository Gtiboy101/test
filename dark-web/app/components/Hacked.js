"use client";
import React, { useEffect } from 'react';

const Hacked = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open('', '_self', '');
      window.close();
      window.location.href = 'about:blank';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hacked-overlay">
      <div className="hacked-text">HACKED</div>
      <style>{`
        .hacked-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #000;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: glitch-bg 0.5s infinite alternate;
        }
        .hacked-text {
          color:rgb(60, 0, 255);
          font-size: 5rem;
          font-family: 'Roboto Mono', monospace;
          text-shadow: 0 0 10px #fff, 0 0 20pxrgb(8, 0, 255);
          animation: glitch 0.2s infinite alternate;
        }
        @keyframes glitch {
          0% { transform: translate(0, 0); }
          20% { transform: translate(-5px, 2px); }
          40% { transform: translate(5px, -2px); }
          60% { transform: translate(-3px, 1px); }
          80% { transform: translate(3px, -1px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes glitch-bg {
          0% { background: #000; }
          100% { background: #111; }
        }
      `}</style>
    </div>
  );
};

export default Hacked;
