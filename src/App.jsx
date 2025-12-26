import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ShoeBuilder from './components/ShoeBuilder';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-premium-black selection:bg-purple-500 selection:text-white">
      <Navbar />
      <Hero />  
      <Categories />
      <ShoeBuilder />
      <Footer />
    </main>
  );
}

export default App;
