import React from "react";
import Image from "next/image";
import Head from "next/head";

import Slidersection from "../components/Slidersection";
import TwoDivsComponent from "../components/TwoDivsComponent";
import VerticalTabs from "../components/Tabs";
import FourInputComponent from "../components/InputComponents"
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import MyComponent from "../components/NavButtonComponents";

export default function Home() {
  // Original aspect ratio of the cross_top.png image
  const originalWidth = 1024;
  const originalHeight = 256;
  const aspectRatio = originalWidth / originalHeight;

  // Desired height for the image container (minimized height)
  const imageContainerHeight = 130; // Adjust this value as needed for the minimized height

  // Calculate the width based on the desired height and aspect ratio
  const imageContainerWidth = imageContainerHeight * aspectRatio;
  const updatedHeight = 60;
  return (
    
<div className="flex flex-col min-h-screen bg-custom-blue">
  {/* Container with logo, MyComponent, and buttons */}
  <div className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-[#008FC8] items-center" style={{ height: updatedHeight }}>
    {/* Add your logo image here */}
    <div className="flex items-center space-x-4" style={{ marginLeft: '50px' }}>
      <Image src="/images/logo.png" alt="Logo" width={128} height={128} />
    </div>

    {/* Buttons set at the top right position */}
    <div className="flex space-x-4">
      <MyComponent/>
    </div>
  </div>

  {/* Image */}
  

      <div className="h-16" />
      {/* Slider placed below the logo and buttons */}
      <div className="flex justify-center bg-custom-blue flex-grow">
        <Slidersection />
      </div>

      {/* Container for TwoDivsComponent */}
      <div className="flex flex-col flex-grow h-90vh bg-gray-100">
        {/* TwoDivsComponent placed under the main div */}
        <TwoDivsComponent
          imageUrl="/images/img2.png"
          imageAlt="Image 1"
          text="This is some text on the right of Image 1"
          imageOnLeft={true} // Image will be on the left
        />
        
      </div>


      {/* Material-UI Tabs */}
      <div className="flex flex-col flex-grow h-90vh">
        <div className="text-center py-16 bg-white h-30vh">
          <h2 className="text-4xl font-Poppins-ExtraBold">
            <span>Why</span>  <span className="text-custom-blue">Choose Us</span> 
          </h2>
        </div>
        <VerticalTabs />
      </div>

      <div className="flex flex-col flex-grow h-90vh bg-gray-100 py-20">
        <TwoDivsComponent
          imageUrl="/images/img2.png"
          imageAlt="Image 2"
          text="This is some text on the left of Image 2"
          imageOnLeft={false} // Image will be on the right
        />
      </div>


      <div className="bg-custom-blue h-90vh flex">
        <div className="flex-1">
          <div className="p-4 pl-40 pt-32">
            <h1 className="text-4xl font-Poppins-ExtraBold text-black">
              <span>Request</span> <span className="text-white">A call Back</span>
            </h1>
          </div>
          <div className="p-4">
            <FourInputComponent placeholderText="Full Name" inputWidth="500px" inputHeight="60px" borderRadius="35px" divMarginTop="60px" inputPaddingLeft="30px" placeholderPaddingLeft="30px" />
            <FourInputComponent placeholderText="Email" inputWidth="500px" inputHeight="60px" borderRadius="35px" divMarginTop="30px" inputPaddingLeft="30px" placeholderPaddingLeft="30px"/>
            <FourInputComponent placeholderText="Phone Number" inputWidth="500px" inputHeight="60px" borderRadius="35px" divMarginTop="30px" inputPaddingLeft="30px" placeholderPaddingLeft="30px"/>
            <FourInputComponent placeholderText="Message" inputWidth="500px" inputHeight="150px" borderRadius="35px" divMarginTop="30px" inputPaddingLeft="30px" placeholderPaddingLeft="30px"/>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center mt-40">
          <Image src="/images/map.jpg" alt="map" width={500} height={1200} />
        </div>
      </div>

      <div>
        <Footer />
      </div>
      <div>
        <Copyright />
      </div>
    </div>
  );
}