import React from "react";
import Image from "next/image";
import Head from "next/head";

import Slidersection from "../app/slidersection";

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
    <div className="flex flex-col bg-blue-500 min-h-screen">
      {/* Container with logo and buttons */}
      <div className="flex justify-between items-center p-4" style={{ height: imageContainerHeight }}>
        {/* Image */}
        <div className="relative" style={{ width: imageContainerWidth, height: "100%" }}>
          {/* Replace background image with Image component */}
          <Image src="/cross_top.png" alt="background" width={originalWidth} height={originalHeight} />

          {/* Add your logo image here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/logo.png" alt="Logo" width={128} height={128} />
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
      <div className="flex justify-center flex-grow">
        <Slidersection />
      </div>
    </div>
  );
}
