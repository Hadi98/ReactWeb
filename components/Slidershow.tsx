'use client'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import the required CSS for the slideshow
import ReadMore from './ReadMore';

const Slidershow: React.FC = () => {
  const images = [
    "/images/img2.png",
    "/images/img2.png",
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 0.8, // Reduce the image size by changing the scale
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: false,
  };

  // Custom styles for the text in the slider
  const textStyle: React.CSSProperties = {
    color: 'white',
    fontSize: '50px',
    fontFamily: 'Poppins-ExtraBold', // Apply the font here
    lineHeight: '1.3', // Adjust the line height here
    border: 'none', // Remove border
    boxShadow: 'none', // Remove elevation
  };

  return (
    <div className="m-auto w-full h-full pt-20">
      <Slide {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="each-slide">
            <div className="flex w-full h-full justify-end"> {/* Add justify-end to push the elements to the right */}
              {/* Text container */}
              <div className="w-1/4 px-4 justify-end"> {/* Add justify-end to push the text to the right */}
                <p className="poppins-extra-bold" style={textStyle}>Get<br/>Thinking A<br/>long time</p>
                <p className="text-white" style={{ fontSize: '16px', textAlign: 'left',marginTop:'30px' }}>{/* Add textAlign: 'right' to align text to the right */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                </p>
                <div className="flex justify-start" style={{marginTop:'30px'}}>
              <ReadMore backgroundColor="bg-custom-blue"/>
            </div>
               
              </div>

              {/* Image container */}
              <div className="w-3/5 h-3/5 flex justify-end"> {/* Add justify-end to push the image to the right */}
                <img className="w-full h-full object-cover rounded-lg" src={each} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slidershow;
