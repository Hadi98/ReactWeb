// ReadMore.tsx
import React from 'react';

interface ReadMoreProps {
  backgroundColor: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ backgroundColor }) => {
  // Define a dynamic className based on the backgroundColor prop
  const buttonClassName = `px-8 py-4 border-4 rounded-full ${backgroundColor === 'gray' ? 'border-custom-blue bg-gray-100 text-black' : 'border-white bg-custom-blue text-black'} transition-colors`;

  // Define the hover effect styles based on the backgroundColor prop
  const hoverStyle = backgroundColor === 'gray' ? 'hover:bg-[#00AEEC] hover:border-custom-blue hover:text-white' : 'hover:bg-black hover:text-white';

  return (
    <button className={`${buttonClassName} ${hoverStyle}`} >
      Read More
    </button>
  );
};

export default ReadMore;
