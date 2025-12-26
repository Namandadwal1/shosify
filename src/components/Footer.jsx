import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-premium-black border-t border-white/5 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black text-white tracking-tighter mb-8">
              SHOSIFY<span className="text-purple-500">.</span>
            </h2>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              We are redefining footwear for the digital generation. 
              Merging ergonomic precision with futuristic design aesthetics.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Explore</h4>
            <ul className="space-y-4">
              {['Collection', 'Customize', 'Our Story', 'Impact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-purple-400 text-sm font-bold transition-colors flex items-center gap-1 group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8">Stay Updated</h4>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-xs font-bold text-white outline-none focus:border-purple-500 transition-all"
              />
              <button className="bg-white text-black font-black text-xs uppercase tracking-[0.2em] py-4 rounded-xl hover:bg-purple-600 hover:text-white transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          <p>© 2024 SHOSIFY LABS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
