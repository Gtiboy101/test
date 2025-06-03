import React from 'react';

const Footer = () => (
  <footer className="footer py-4 text-center text-gray-400">
    <div>
      &copy; {new Date().getFullYear()} Shadow Protocol. All rights reserved.
    </div>
  </footer>
);

export default Footer;