import React from 'react';
import Button from './Button';
import Link from 'next/link';
 const Header = () => (
  <header className="header">
  <div className="header-logo">
    <div className="circle-text">
      SP
    </div>
  </div>
    <div className="header-buttons">
      <Link href="/">
        <Button className="header-btn" onClick={() => {}}>Home</Button>
      </Link>
      <Link href="/services">
        <Button className="header-btn" onClick={() => {}}>Services</Button>
      </Link>
      <Link href="/Whoweare">
        <Button className="header-btn" onClick={() => {}}>
          Who we are
        </Button>
      </Link>
      <Link href="/Payment">
        <Button className="header-btn" onClick={() => {}}>Payment</Button>
      </Link>
    </div>
  </header>
);

export default Header;
