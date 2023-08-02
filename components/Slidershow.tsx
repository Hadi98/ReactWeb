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
            <div className="flex w-full h-full items-center justify-between"> {/* Add items-center and justify-between */}
              {/* Text container */}
              <div className="w-1/4 px-4"> {/* Remove flex-col and justify-center */}
                <p className="poppins-extra-bold" style={textStyle}>Get<br />Thinking A<br />long time</p>
                <p className="text-white" style={{ fontSize: '16px', marginTop: '30px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                </p>
                <div className="flex justify-start" style={{ marginTop: '30px' }}>
                  <ReadMore backgroundColor="bg-custom-blue" />
                </div>

              </div>

              {/* Image container */}
              <div className="w-3/5 h-3/5"> {/* Remove flex and justify-end */}
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
