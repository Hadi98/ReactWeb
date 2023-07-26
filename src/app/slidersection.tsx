import React from "react";
import Slideshow from "../../components/Slidershow";

export const useClient = true;

function Slidersection() {
  return (
    <div className="container mx-auto p-4">
      <div className="w-full h-80vh">
        <Slideshow />
      </div>
    </div>
  );
}

export default Slidersection;
