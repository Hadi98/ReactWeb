

import React from 'react';

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
  const inputStyle: React.CSSProperties = {
    width: inputWidth,
    height: inputHeight,
    borderRadius: borderRadius,
  };
  const placeholderStyle: React.CSSProperties = {
    paddingLeft: placeholderPaddingLeft, 
  };

  return (
    <div className="mb-4" style={{ marginTop: divMarginTop,paddingLeft: inputPaddingLeft}}> {/* Added style with marginTop */}
      <input
        type="text"
        placeholder={placeholderText}
        style={inputStyle}
      />
      <style jsx>
        {`
          ::placeholder {
            /* Apply the placeholder left padding */
            ${placeholderStyle.paddingLeft && `padding-left: ${placeholderStyle.paddingLeft};`}
          }
        `}
      </style>
    </div>
  );
};

export default FourInputComponent;
