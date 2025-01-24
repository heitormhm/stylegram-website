import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto relative bg-gray-100">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
