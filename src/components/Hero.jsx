import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-futuristic-gradient pt-20">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" 
      />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.3em] text-purple-400"
        >
          Revolutionizing Ergonomics
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter"
        >
          CRAFTED FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">COMFORT.</span><br />
          DESIGNED FOR <span className="italic font-serif font-light text-white/90">YOU.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
        >
          Experience Gen-Z luxury with India's first fully customizable 
          ergonomic footwear brand. Built by students, for the world.
        </motion.p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(109, 40, 217, 0.4)" }}
            className="group px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-2xl flex items-center gap-3 transition-all"
          >
            Explore Collection
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </motion.button>
          
          <motion.button 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            className="px-10 py-5 bg-transparent border border-white/20 text-white font-black text-sm uppercase tracking-widest rounded-2xl backdrop-blur-sm transition-all"
          >
            Customize Your Shoe
          </motion.button>
        </div>
      </div>
      
      {/* Visual Background Text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1.5 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
      >
        <span className="text-[35vw] font-black text-white/[0.02] tracking-tighter leading-none">SHOSIFY</span>
      </motion.div>

      {/* Floating Image Placeholder */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-0 md:right-20 w-64 h-64 opacity-20 pointer-events-none md:opacity-40"
      >
        <img 
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" 
          alt="Premium Shoe"
          className="w-full h-full object-contain rotate-12"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
