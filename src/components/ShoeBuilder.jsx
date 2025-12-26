import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings2, Zap, Palette } from 'lucide-react';

const ShoeBuilder = () => {
  const [activeColor, setActiveColor] = useState('#6D28D9');
  const [materialType, setMaterialType] = useState('Premium Knit');

  const COLORS = [
    { name: 'Hyper Purple', hex: '#6D28D9' },
    { name: 'Gold Leaf', hex: '#D4AF37' },
    { name: 'Ghost White', hex: '#FFFFFF' },
    { name: 'Onyx Black', hex: '#1A1A1A' },
  ];

  return (
    <section id="customize" className="py-32 px-6 md:px-12 bg-premium-dark border-t border-white/5 relative overflow-hidden">
      {/* Accent Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2 z-10">
          <motion.div 
            animate={{ color: activeColor }}
            className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] mb-6"
          >
            <Zap size={16} /> Interactive Lab
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">BUILD YOUR<br />LEGEND.</h2>
          
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
            Choose from premium materials, holographic stickers, and ergonomic soles 
            to create a pair as unique as your vibe. 
          </p>
          
          <div className="space-y-12">
            <div>
              <label className="flex items-center gap-2 text-[10px] uppercase text-gray-500 font-black mb-6 tracking-widest">
                <Palette size={14} /> Base Chassis Color
              </label>
              <div className="flex flex-wrap gap-4">
                {COLORS.map(c => (
                  <button 
                    key={c.hex}
                    onClick={() => setActiveColor(c.hex)}
                    className={`group relative flex items-center justify-center p-1 rounded-full border-2 transition-all ${activeColor === c.hex ? 'border-white' : 'border-transparent'}`}
                  >
                    <div 
                      style={{ backgroundColor: c.hex }}
                      className="w-10 h-10 rounded-full shadow-lg"
                    />
                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white whitespace-nowrap uppercase font-bold tracking-tighter">
                      {c.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <span className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                  <Settings2 size={14} /> Performance Sole
                </span>
                <span className="text-purple-400 text-xs font-black uppercase tracking-widest">{materialType}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="2" 
                onChange={(e) => {
                  const types = ['Classic', 'Premium Knit', 'Ergo-Grip'];
                  setMaterialType(types[e.target.value]);
                }}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500" 
              />
              <div className="flex justify-between mt-3 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                <span>Light</span>
                <span>Hybrid</span>
                <span>Pro</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative">
          <div className="relative h-[450px] md:h-[600px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeColor}
                initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: -10 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative z-10 w-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200" 
                  alt="3D Preview"
                  style={{ filter: `hue-rotate(${activeColor === '#6D28D9' ? '0' : activeColor === '#D4AF37' ? '45deg' : '0'} ) brightness(${activeColor === '#1A1A1A' ? '0.3' : '1'})` }}
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(109,40,217,0.3)]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Glowing Backdrop */}
            <motion.div 
               animate={{ 
                 backgroundColor: activeColor,
                 scale: [1, 1.1, 1],
                 opacity: [0.1, 0.2, 0.1]
               }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[100px]" 
            />
            
            <div className="absolute inset-0 border border-white/5 rounded-[60px] pointer-events-none" />
            
            <div className="absolute bottom-10 left-10 flex gap-4">
              <div className="px-4 py-2 border border-white/10 rounded-full backdrop-blur-md text-[10px] font-black text-white uppercase tracking-widest">
                360° PREVIEW
              </div>
              <div className="px-4 py-2 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest">
                4K REALTIME
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoeBuilder;
