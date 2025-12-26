import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CATEGORIES = [
  { 
    name: 'Sneakers', 
    desc: 'Streetwear essentials for the modern explorer.', 
    color: 'from-blue-500/20',
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Classy Vibe', 
    desc: 'Minimalism perfected with premium leather.', 
    color: 'from-purple-500/20',
    img: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&q=80&w=800'
  },
  { 
    name: 'Party Wear', 
    desc: 'Bold statements for neon nights and events.', 
    color: 'from-pink-500/20',
    img: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800'
  },
];

const Categories = () => {
  return (
    <section id="shoes" className="py-32 px-6 md:px-12 bg-premium-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              CURATED<br />COLLECTIONS
            </h2>
            <div className="w-20 h-1 bg-purple-600 rounded-full" />
          </div>
          <p className="text-gray-500 max-w-sm font-medium">
            Explore our diverse ranges, each designed with a unique narrative and uncompromising comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className={`relative h-[500px] group overflow-hidden rounded-[40px] border border-white/10 p-10 flex flex-col justify-between`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${cat.color} to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Card Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-transform duration-700" />
              </div>

              <div className="relative z-10">
                <div className="text-6xl font-black text-white/5 mb-4">0{idx + 1}</div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{cat.name}</h3>
              </div>

              <div className="relative z-10">
                <p className="text-gray-400 mb-8 leading-relaxed font-medium">{cat.desc}</p>
                <button className="group flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest">
                  View Collection 
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight size={18} />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
