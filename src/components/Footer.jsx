import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-300">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
