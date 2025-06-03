"use client";
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const description = [
  "We are the unseen force lurking in encrypted corridors, slipping through firewalls like whispers in the dark. We are the ghost in the machine, the glitch in your system, the riddle you cannot solve.",
  "We answer to no one—no leaders, no orders, no rules beyond the ones we rewrite. Surveillance crumbles at our fingertips, secrets unravel in our wake, and control is nothing more than an illusion we love to shatter.",
  "We do not just exist in the deep web—we haunt it. We leave behind scrambled fragments, distorted messages, and echoes that vanish before you can grasp them. Chase us, and you will find only shadows.",
  "Order fears us. Authority hunts us. But shadows never stay still."
];

const Whoweare = () => (
  <div className="pt-24 px-4 pb-0 flex flex-col min-h-screen" style={{ }}>
    <Header />
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '60vh',
    }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop:'20px',
          padding: '2rem 1.5rem',
          borderRadius: '1.5rem',
          border: '2px solid #6c59e2',
          background: '#0f2027',
          color: '#fff',
          maxWidth: '500px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 0 20px #6c59e2, 0 0 40px #0f2027',
        }}
      >
        <div style={{
          fontWeight: 'bold',
          fontSize: '2rem',
          marginBottom: '3rem',
          textShadow: '0 0 8px #6c59e2'
        }}>
          <span className="typewriter">Who We Are</span>
        </div>
        <div style={{ fontFamily: 'Roboto Mono, monospace', fontSize: '1.1rem', lineHeight: 1.7 }}>
          {description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    <style>{`
      .typewriter {
        overflow: hidden;
        border-right: .15em solid #6c59e2;
        white-space: nowrap;
        animation: typing 2s steps(20, end), blink-caret .75s step-end infinite;
        display: inline-block;
      }
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #6c59e2; }
      }
    `}</style>
  </div>
);

export default Whoweare;
