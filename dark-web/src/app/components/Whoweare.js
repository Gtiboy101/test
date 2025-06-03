"use client";
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Whoweare = () => (
  <div
    className="pt-24 px-24 pb-0 flex flex-col min-h-screen"
  >
    <Header />
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '500px',
          padding: '1.5rem 2rem',
          borderRadius: '0.7rem',
          border: '2px solid #6c59e2',
          background: '#0f2027', // changed back to original color
          color: '#fff',
          maxWidth: '500px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Who We Are
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <p>
            We are the unseen force lurking in encrypted corridors, slipping through firewalls like whispers in the dark. We are the ghost in the machine, the glitch in your system, the riddle you can't solve.
          </p>
          <p>
            We answer to no one—no leaders, no orders, no rules beyond the ones we rewrite. Surveillance crumbles at our fingertips, secrets unravel in our wake, and control is nothing more than an illusion we love to shatter.
          </p>
          <p>
            We don’t just exist in the deep web—we haunt it. We leave behind scrambled fragments, distorted messages, and echoes that vanish before you can grasp them. Chase us, and you’ll find only shadows.
          </p>
          <p>
            Order fears us. Authority hunts us. But shadows never stay still.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Whoweare;
