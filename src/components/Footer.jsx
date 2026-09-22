import React from 'react';
import { Video, Globe, Share2, ExternalLink, ArrowUpRight, Zap, MessageSquare } from 'lucide-react';

export default function Footer({ onScrollTo }) {
  const handleNavClick = (id, e) => {
    if (e) e.preventDefault();
    if (onScrollTo) onScrollTo(id);
  };

  return (
    <footer className="relative bg-[#060810] pt-20 pb-10 border-0 overflow-hidden">
      {/* Background Studio Ambient Glow Orbs - NO LINES */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top High-Converting Footer Banner - ZERO BORDER OUTLINES */}
        <div className="glass-panel p-8 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 border-0 bg-gradient-to-r from-brand-purple/20 via-[#090c16] to-brand-cyan/20 shadow-2xl">
          <div>
            <span className="badge-purple mb-2 border-0">
              <Zap size={13} /> High-Retention Post Production
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
              Ready to elevate your <span className="gradient-text-vibrant">content strategy?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Let's craft high-converting 9:16 reels and broadcast-quality edits for your brand.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button 
              onClick={(e) => handleNavClick('contact', e)}
              className="px-6 py-3 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-purple-600 to-indigo-700 shadow-lg shadow-purple-600/40 hover:-translate-y-0.5 transition-all cursor-pointer flex items-center gap-2 border-0"
            >
              <span>Start Project Discussion</span>
              <ArrowUpRight size={15} />
            </button>
            
            <a 
              href="https://wa.me/918238787327"
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-3 rounded-full text-xs font-extrabold text-white bg-brand-purple/20 hover:bg-brand-purple/35 transition-all flex items-center gap-2 border-0"
            >
              <MessageSquare size={14} className="text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* 4-Column Studio Navigation - ZERO HORIZONTAL DIVIDER LINES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 pb-6 border-0">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={(e) => handleNavClick('hero', e)} className="flex items-center gap-3 bg-transparent border-0 cursor-pointer p-0 text-left group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center text-white shadow-xl shadow-brand-purple/30 group-hover:scale-105 transition-transform">
                <Video size={22} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-extrabold text-xl tracking-wider text-white group-hover:text-purple-300 transition-colors">
                  KESVIK<span className="text-brand-cyan">.</span>CUTS
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mt-1">
                  SENIOR EDITOR & VFX
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Specializing in high-retention 9:16 vertical reels, personal branding edits, and After Effects motion graphics for creators and global brands.
            </p>

            {/* Software Suite Pill Icons */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[11px] font-bold text-slate-400 mr-1">Suite:</span>
              <img src="/logos/premiere.svg" alt="Premiere Pro" className="w-6 h-6 rounded shadow border-0" title="Premiere Pro" />
              <img src="/logos/aftereffects.svg" alt="After Effects" className="w-6 h-6 rounded shadow border-0" title="After Effects" />
              <img src="/logos/davinci.svg" alt="DaVinci Resolve" className="w-6 h-6 rounded shadow border-0" title="DaVinci Resolve" />
              <img src="/logos/audition.svg" alt="Audition" className="w-6 h-6 rounded shadow border-0" title="Audition" />
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-wider text-purple-400">Navigation</h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><button onClick={(e) => handleNavClick('hero', e)} className="hover:text-purple-300 transition-colors bg-transparent border-0 cursor-pointer">Home</button></li>
              <li><button onClick={(e) => handleNavClick('showcase', e)} className="hover:text-purple-300 transition-colors bg-transparent border-0 cursor-pointer">Video Gallery</button></li>
              <li><button onClick={(e) => handleNavClick('graphics', e)} className="hover:text-purple-300 transition-colors bg-transparent border-0 cursor-pointer">Graphic & Covers</button></li>
              <li><button onClick={(e) => handleNavClick('results', e)} className="hover:text-purple-300 transition-colors bg-transparent border-0 cursor-pointer">Client Results</button></li>
              <li><button onClick={(e) => handleNavClick('faq', e)} className="hover:text-purple-300 transition-colors bg-transparent border-0 cursor-pointer">FAQs</button></li>
            </ul>
          </div>

          {/* Col 3: Specializations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-wider text-cyan-400">Specializations</h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><button onClick={(e) => handleNavClick('contact', e)} className="hover:text-cyan-300 transition-colors bg-transparent border-0 cursor-pointer">Personal Branding 9:16 Reels</button></li>
              <li><button onClick={(e) => handleNavClick('contact', e)} className="hover:text-cyan-300 transition-colors bg-transparent border-0 cursor-pointer">YouTube Longform Pacing</button></li>
              <li><button onClick={(e) => handleNavClick('contact', e)} className="hover:text-cyan-300 transition-colors bg-transparent border-0 cursor-pointer">After Effects VFX Motion</button></li>
              <li><button onClick={(e) => handleNavClick('contact', e)} className="hover:text-cyan-300 transition-colors bg-transparent border-0 cursor-pointer">High-CTR Cover Graphics</button></li>
            </ul>
          </div>

          {/* Col 4: Social Connect (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-wider text-rose-400">Direct Connect</h4>
            <p className="text-xs text-slate-400 mb-3">Available for international creator & agency retainer contracts.</p>
            
            <div className="flex flex-wrap gap-2.5">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-brand-purple/20 text-purple-300 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all shadow border-0" title="YouTube"><Video size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-brand-cyan/20 text-cyan-300 flex items-center justify-center hover:bg-brand-cyan hover:text-white transition-all shadow border-0" title="Instagram"><Globe size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all shadow border-0" title="X/Twitter"><Share2 size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow border-0" title="LinkedIn"><ExternalLink size={18} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Rights Line - ZERO WHITE DIVIDER LINE */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium pt-4 border-0">
          <div>© 2026 Kesvik Savaliya. All rights reserved.</div>
          <div className="text-slate-400">
            Crafted for High-Impact Content Creators & Personal Brands
          </div>
        </div>

      </div>
    </footer>
  );
}
