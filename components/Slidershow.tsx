'use client'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Import the required CSS for the slideshow

const Slidershow: React.FC = () => {
  const images = [
    "../public/img2.png",
    "../public/logo.png",
  ];

  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div style={{ width: '30px', marginRight: '-30px', cursor: 'pointer' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#2e2e2e">
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: '30px', marginLeft: '-30px', cursor: 'pointer' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#2e2e2e">
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };
  

  return (
    <div className="m-10 w-1/2 h-1/2">
      <h1 className="text-center text-6xl font-bold pb-10">
        Responsive Next.js <span className="text-indigo-600">Image Slider</span>
      </h1>
      <Slide {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="each-slide">
            <div className="flex justify-center w-full h-full">
              <p>{`Slide ${index + 1}`}</p>
              <img className="w-3/4 rounded-lg shadow-xl" src={each} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slidershow;
