import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-200 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Landing Page
        </h1>
        <p className="text-lg md:text-xl mb-8">
          This is a responsive landing page built with React and Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
