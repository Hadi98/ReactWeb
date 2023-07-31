import React from "react";
import Image from "next/image";
import Head from "next/head";

import Slidersection from "../components/Slidersection";
import TwoDivsComponent from "../components/TwoDivsComponent";
import VerticalTabs from "../components/Tabs";
import FourInputComponent from "../components/InputComponents"
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

export default function Home() {
  // Original aspect ratio of the cross_top.png image
  const originalWidth = 1024;
  const originalHeight = 256;
  const aspectRatio = originalWidth / originalHeight;

  // Desired height for the image container (minimized height)
  const imageContainerHeight = 100; // Adjust this value as needed for the minimized height

  // Calculate the width based on the desired height and aspect ratio
  const imageContainerWidth = imageContainerHeight * aspectRatio;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Container with logo and buttons */}
      <div className="flex justify-between bg-blue-500 items-center p-4" style={{ height: imageContainerHeight }}>
        {/* Image */}
        <div className="relative" style={{ width: imageContainerWidth, height: "100%" }}>
          {/* Replace background image with Image component */}
          <Image src="/images/cross_top.png" alt="background" width={originalWidth} height={originalHeight} />
          {/* Add your logo image here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/images/logo.png" alt="Logo" width={128} height={128} />
          </div>
        </div>

        {/* Buttons set at the top right position */}
        <div className="flex space-x-4">
          {/* Home Button */}
          <a href="#" className="p-2 rounded-md bg-gray-300 hover:bg-gray-400">
            Home
          </a>

          {/* About Button */}
          <a href="#" className="p-2 rounded-md bg-gray-300 hover:bg-gray-400">
            About
          </a>

          {/* Work Button */}
          <a href="#" className="p-2 rounded-md bg-gray-300 hover:bg-gray-400">
            Work
          </a>

          {/* Contact Button */}
          <a href="#" className="p-2 rounded-md bg-gray-300 hover:bg-gray-400">
            Contact
          </a>
        </div>
      </div>

      {/* Slider placed below the logo and buttons */}
      <div className="flex justify-center bg-blue-500 flex-grow">
        <Slidersection />
      </div>

      {/* Container for TwoDivsComponent */}
      <div className="flex flex-col flex-grow h-90vh bg-white">
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
        <VerticalTabs />
      </div>

      <div className="flex flex-col flex-grow h-90vh bg-white">
        <TwoDivsComponent
          imageUrl="/images/img2.png"
          imageAlt="Image 2"
          text="This is some text on the left of Image 2"
          imageOnLeft={false} // Image will be on the right
        />
      </div>


      <div className="bg-blue-500 h-90vh flex">
  <div className="flex-1">
    <div className="p-4 pl-40 pt-32">
      <h1 className="text-4xl font-bold">
        <span className="text-black">Request</span> <span className="text-white">A call Back</span>
      </h1>
    </div>
    <div className="p-4">
      <FourInputComponent placeholderText="Full Name" inputWidth="500px" inputHeight="60px" borderRadius="35px" divMarginTop="60px" inputPaddingLeft="150px" />
      <FourInputComponent placeholderText="Email" inputWidth="500px" inputHeight="60px" borderRadius="35px" divMarginTop="30px" inputPaddingLeft="150px" />
      <FourInputComponent placeholderText="Phone Number" inputWidth="500px" inputHeight="60px" borderRadius="35px" divMarginTop="30px" inputPaddingLeft="150px" />
      <FourInputComponent placeholderText="Message" inputWidth="500px" inputHeight="150px" borderRadius="35px" divMarginTop="30px" inputPaddingLeft="150px" />
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
