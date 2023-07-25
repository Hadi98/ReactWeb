import React from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "../../components/Footer.js";
import SliderSection from "../app/slidersection"; 

export default function Home() {
  return (
    <div className="flex items-center justify-between h-screen">
      {/* Next.js Logo */}
      {/* Your logo code here */}
      {/* ... */}

      <div className="flex items-center space-x-4">
        {/* Home Button */}
        <a href="#" className="m-4 p-2 rounded-md bg-gray-300 hover:bg-gray-400">
          Home
        </a>

        {/* About Button */}
        <a href="#" className="m-4 p-2 rounded-md bg-gray-300 hover:bg-gray-400">
          About
        </a>

        {/* Work Button */}
        <a href="#" className="m-4 p-2 rounded-md bg-gray-300 hover:bg-gray-400">
          Work
        </a>

        {/* Contact Button */}
        <a href="#" className="m-4 p-2 rounded-md bg-gray-300 hover:bg-gray-400">
          Contact
        </a>
      </div>
      <div>
        <SliderSection />
        <Footer />
      </div>
    </div>
  );
}
