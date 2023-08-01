import React from 'react';

interface ReadMoreProps {
  backgroundColor: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ backgroundColor }) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor === 'gray' ? 'bg-gray-100' : 'bg-blue-400',
    color: backgroundColor === 'gray' ? 'black' : 'black', // Assuming text color is white for both cases
    border: `6px solid ${backgroundColor === 'gray' ? 'blue' : 'white'}`,
    padding: '16px 32px',
    borderRadius: '40px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, border-color 0.3s',
    marginTop: '50px',
    
  };
  

  return <button style={buttonStyle}>Read More</button>;
};

export default ReadMore;
