import React from "react";
import Image from "next/image";
import ReadMore from './ReadMore';

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
    <div className="flex items-center justify-center bg-gray-100 p-4 h-full"> {/* Set the height to h-full */}
      {imageOnLeft ? (
        <>
          {/* Image on the left */}
          <div className="relative w-1/2 h-full flex items-center justify-center m-4">
            <Image src={imageUrl} alt={imageAlt} width={600} height={600} />
          </div>
          {/* Text on the right */}
          <div className="w-1/2 flex flex-col justify-center m-4">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-5xl font-bold" style={{ textAlign: 'left' }}>
                <span>About</span> <span className="text-blue-500">Software</span>
              </h1>
            </div>
            <p style={{marginTop:'30px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            </p>
            <div className="flex justify-end" style={{ marginRight: '100px',marginTop:'30px' }}>
              <ReadMore backgroundColor="gray" />
            </div>
            
          </div>
          {/* New div in the footer */}
          
        </>
      ) : (
        <>
          {/* Text on the left */}
          <div className="w-1/2 flex flex-col justify-center m-4">
            <div className="flex flex-col justify-center h-full">
              <h1 className="text-5xl font-bold" style={{ textAlign: 'left' }}>
              <span>How It</span> <span className="text-blue-500">Works</span>
              </h1>
            </div>
            <p style={{marginTop:'30px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br />commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            </p>
            <div className="flex justify-start" style={{marginTop:'30px'}}>
              <ReadMore backgroundColor="gray" />
            </div>
          </div>
          {/* Image on the right */}
          <div className="relative w-1/2 h-full flex items-center justify-center m-4">
            <Image src={imageUrl} alt={imageAlt} width={600} height={600} />
          </div>
        </>
      )}
    </div>
  );
};

export default TwoDivsComponent;
