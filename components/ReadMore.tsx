// ReadMore.tsx
import React from 'react';

interface ReadMoreProps {
  backgroundColor: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ backgroundColor }) => {
  // Define a dynamic className based on the backgroundColor prop
  const buttonClassName = `px-8 py-4 border-4 ${backgroundColor === 'gray' ? 'border-custom-blue bg-gray-100 text-black' : 'border-white bg-custom-blue text-black'} transition-colors`;

  // Define the hover effect styles based on the backgroundColor prop
  const hoverStyle = backgroundColor === 'gray' ? 'hover:bg-blue-400 hover:border-custom-blue hover:text-white' : 'hover:bg-black hover:text-white';

  // Define the border radius based on the backgroundColor prop
  const borderRadius = backgroundColor === 'gray' ? '12px' : '24px';

  // Define the button style with the border radius
  const buttonStyle: React.CSSProperties = {
    borderRadius: borderRadius,
  };

  return (
    <button className={`${buttonClassName} ${hoverStyle}`} style={buttonStyle}>
      Read More
    </button>
  );
};

export default ReadMore;
