import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 h-50vh">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Address */}
          <div>
            <h3 className="text-white font-bold text-4xl mb-2">Address</h3>
            <p className="text-gray-500">
              It is a long established fact that a 
              <br />
              reader will be distracted by the
              <br />
              readable content of a page when
              <br />
              looking at its layout. The point of
              <br />
              using Lorem Ipsum is that it has a
              <br />
              more-or-less normal distribution of
              <br />
              letters,
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-4xl mb-2">Links</h3>
            <ul className="list-disc text-white space-y-2">
              <li>
                <a href="#" className="text-white hover:text-blue-500">Home</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">About</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">Work</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500">Contact</a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-bold text-4xl mb-2">Follow Us</h3>
            <ul className="list text-white space-y-2">
              <li>
                <a href="#" className="text-white hover:text-blue-500 ">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500 ">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500 ">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500 ">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-500 ">
                  Instagram
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-4xl mb-2">Newsletter</h3>
            <form className="flex flex-col">
              <input type="email" placeholder="Enter Your Email" className="py-2 px-4 rounded-md mb-2 w-60 h-30" />
              <button type="submit" className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-32 h-10">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
