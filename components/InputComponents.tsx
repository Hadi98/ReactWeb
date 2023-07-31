// InputComponents.tsx

import React from 'react';

interface FourInputComponentProps {
  placeholderText: string;
  inputWidth: string;
  inputHeight: string;
  borderRadius: string;
  divMarginTop: string;
  inputPaddingLeft: string; 
}

const FourInputComponent: React.FC<FourInputComponentProps> = ({ placeholderText, inputWidth, inputHeight, borderRadius, divMarginTop, inputPaddingLeft }) => {
  const inputStyle: React.CSSProperties = {
    width: inputWidth,
    height: inputHeight,
    borderRadius: borderRadius,
  };

  return (
    <div className="mb-4" style={{ marginTop: divMarginTop, paddingLeft: inputPaddingLeft }}> {/* Added style with marginTop */}
      <input
        type="text"
        placeholder={placeholderText}
        style={inputStyle}
      />
    </div>
  );
};

export default FourInputComponent;
