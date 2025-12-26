import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 50) {
        gsap.to(".navbar-bg", { backgroundColor: "rgba(10, 10, 10, 0.9)", duration: 0.3 });
      } else {
        gsap.to(".navbar-bg", { backgroundColor: "rgba(255, 255, 255, 0.02)", duration: 0.3 });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Shoes', 'Customize', 'About'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12">
      <div className={`navbar-bg absolute inset-0 backdrop-blur-xl border-b border-white/5 ${isScrolled ? 'opacity-100' : 'opacity-60'}`} />
      
      <div className="relative max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-white flex items-center gap-1"
        >
          SHOSIFY<span className="text-purple-500">.</span>
        </motion.div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
          {navLinks.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05, color: '#fff' }}
              className="hover:text-white transition-colors cursor-pointer relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-500 transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="p-2 text-white relative"
          >
            <ShoppingBag size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-white text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all"
          >
            Shop Now
          </motion.button>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-premium-dark border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xl font-bold text-white uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
