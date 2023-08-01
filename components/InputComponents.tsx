import React, { useState } from 'react';

interface FourInputComponentProps {
  placeholderText: string;
  inputWidth: string;
  inputHeight: string;
  borderRadius: string;
  divMarginTop: string;
  inputPaddingLeft: string; 
  placeholderPaddingLeft?: string;
}

const FourInputComponent: React.FC<FourInputComponentProps> = ({ placeholderText, inputWidth, inputHeight, borderRadius, divMarginTop, inputPaddingLeft, placeholderPaddingLeft,}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const inputStyle: React.CSSProperties = {
    width: inputWidth,
    height: inputHeight,
    borderRadius: borderRadius,
    paddingLeft: inputValue ? placeholderPaddingLeft : inputPaddingLeft, // Apply padding-left when there is text in the input field
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end', // Push the input field to the right
    marginTop: divMarginTop,
  };

  return (
    <div className="mb-4" style={containerStyle}>
      <input
        type="text"
        placeholder={placeholderText}
        style={inputStyle}
        value={inputValue}
        onChange={handleInputChange} // Call the handleInputChange function on input change
      />
    </div>
  );
};

export default FourInputComponent;
