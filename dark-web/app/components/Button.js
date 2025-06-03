import React from 'react';

// Reusable Button component for use in Header and elsewhere
const Button = ({ children, onClick, className = "", ...props }) => (
  <button onClick={onClick} className={className} {...props}>
    {children}
  </button>
);

export default Button;
