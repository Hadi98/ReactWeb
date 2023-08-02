import React, { useState } from 'react';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    padding: '6px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    backgroundColor: isHovered ? 'white' : 'rgb(0, 174, 236)',
    color: isHovered ? 'rgb(0, 174, 236)' : 'white',
    transition: 'height 0.3s, background-color 0.3s, color 0.3s',
    height: isHovered ? '30px' : '40px',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <a
      href={href}
      className="m-2"
      style={{ ...buttonStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{ flex: '1' }}>{children}</span>
    </a>
  );
};

const MyComponent: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <NavButton href="#">Home</NavButton>
      <NavButton href="#">About</NavButton>
      <NavButton href="#">Work</NavButton>
      <NavButton href="#">Contact</NavButton>
    </div>
  );
};

export default MyComponent;
