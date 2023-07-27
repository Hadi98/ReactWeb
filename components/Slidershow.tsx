'use client'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import the required CSS for the slideshow

const Slidershow: React.FC = () => {
  const images = [
    "/images/img2.png",
    "/images/img2.png",
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
  };
  

  // Custom styles for the text in the slider
  const textStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '128px',
    fontWeight: 'bold',
    lineHeight: '1.3', // Adjust the line height here
  };
  
  return (
    <div className="m-auto w-full h-full">
      <Slide {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="each-slide">
            <div className="flex w-full h-full">
              {/* Text container */}
              <div className="flex flex-col justify-center items-start w-1/4 px-4">
                <p className="font-bold" style={textStyle}>Get Thinking A long time</p>
                <p className="font-bold" style={{ ...textStyle, fontSize: '16px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                </p>
              </div>

              {/* Image container */}
              <div className="w-3/4 h-full">
                <img className="w-full h-full object-cover rounded-lg shadow-xl" src={each} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slidershow;
