import React from "react";
import Image from "next/image";

interface TwoDivsComponentProps {
  imageUrl: string;
  imageAlt: string;
  text: string;
  imageOnLeft: boolean;
}

const TwoDivsComponent: React.FC<TwoDivsComponentProps> = ({
  imageUrl,
  imageAlt,
  text,
  imageOnLeft,
}) => {
  return (
    <div className="flex items-center justify-center bg-white p-4 h-100vh">
      {imageOnLeft ? (
        <>
          {/* Image on the left */}
          <div className="relative w-1/2 h-full flex items-center justify-center m-4">
            <Image src="/about_img.jpg" alt="about" width={600} height={600} />
          </div>
          {/* Text on the right */}
          <div className="w-1/2 flex flex-col justify-center m-4">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-4xl font-bold p-4">
                <span>About</span> <span className="text-blue-500">Software</span>
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Text on the left */}
          <div className="w-1/2 flex flex-col justify-center m-4">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-4xl font-bold p-4">
                <span>How To</span> <span className="text-blue-500">Works it</span>
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            </p>
          </div>
          {/* Image on the right */}
          <div className="relative w-1/2 h-full flex items-center justify-center m-4">
            <Image src="/work_img.jpg" alt="work" width={600} height={600} />
          </div>
        </>
      )}
    </div>
  );
};

export default TwoDivsComponent;
