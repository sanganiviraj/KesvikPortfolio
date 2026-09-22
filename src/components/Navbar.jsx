import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X, Video, Send, Palette, HelpCircle, Film, TrendingUp, Cpu, Sparkles } from 'lucide-react';

export default function Navbar({ onScrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('hero');

  const NAV_ITEMS = [
    { id: 'showcase', label: 'Video Gallery', icon: <Film size={13} className="text-purple-400" /> },
    { id: 'graphics', label: 'Graphic & Covers', icon: <Palette size={13} className="text-cyan-400" /> },
    { id: 'results', label: 'Client Results', icon: <TrendingUp size={13} className="text-rose-400" /> },
    { id: 'pricing', label: 'Hiring Packages', icon: <Sparkles size={13} className="text-cyan-400" /> },
    { id: 'workflow', label: 'Process & Tools', icon: <Cpu size={13} className="text-amber-400" /> },
    { id: 'faq', label: 'Global FAQ', icon: <HelpCircle size={13} className="text-purple-400" /> },
    { id: 'contact', label: 'Contact', icon: <Send size={13} className="text-emerald-400" /> }
  ];

  // Dynamic ScrollSpy using IntersectionObserver for Real-time Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const sectionIds = ['hero', 'showcase', 'graphics', 'results', 'pricing', 'workflow', 'faq', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id, e) => {
    if (e) e.preventDefault();
    setActiveItem(id);
    setMobileMenuOpen(false);
    if (onScrollTo) onScrollTo(id);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3 bg-brand-dark/95 backdrop-blur-2xl shadow-2xl shadow-black/80' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={(e) => handleNavClick('hero', e)} 
          className="flex items-center gap-3 group text-decoration-none bg-transparent border-0 cursor-pointer p-0 text-left"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-purple via-indigo-600 to-brand-cyan flex items-center justify-center text-white shadow-xl shadow-brand-purple/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Video size={20} />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-brand-dark rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 border-2 border-brand-dark rounded-full"></span>
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-heading font-black text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
              KESVIK<span className="text-brand-cyan animate-pulse">.</span>CUTS
            </span>
            <span className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase mt-0.5 flex items-center gap-1">
              SENIOR EDITOR & VFX
            </span>
          </div>
        </button>

        {/* Desktop Floating Island Navigation Bar - COMPLETELY BORDERLESS */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0a0d16]/95 p-1 rounded-full border-0 backdrop-blur-2xl shadow-2xl shadow-purple-950/40 transition-all duration-300">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`relative px-2.5 py-1.5 rounded-full text-[11px] xl:text-xs font-extrabold flex items-center gap-1 border-0 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-brand-purple to-indigo-600 shadow-md shadow-brand-purple/50 scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-white/8 hover:scale-105'
                }`}
              >
                {item.icon}
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Animated Primary CTA Button */}
        <div className="flex items-center gap-3">
          <button 
            className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-black text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-lg shadow-brand-purple/50 hover:shadow-brand-purple/90 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden group border-0"
            onClick={(e) => handleNavClick('contact', e)}
          >
            <div className="absolute inset-0 w-1/2 bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 pointer-events-none"></div>
            <Sparkles size={14} className="animate-spin text-cyan-200" style={{ animationDuration: '4s' }} />
            <span>Book Call</span>
            <PhoneCall size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Mobile Toggle Button */}
          <button 
            className="lg:hidden text-white p-2 rounded-xl bg-brand-purple/20 border-0 hover:bg-brand-purple/35 transition-all cursor-pointer" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} className="text-purple-400" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer - BORDERLESS */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark/95 backdrop-blur-2xl p-6 flex flex-col gap-3 shadow-2xl animate-fadeIn border-0">
          {NAV_ITEMS.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button 
                key={item.id}
                className={`text-left py-2.5 px-4 rounded-xl font-bold text-sm flex items-center justify-between border-0 transition-all cursor-pointer ${
                  isActive ? 'bg-brand-purple/40 text-white' : 'text-slate-200 hover:bg-white/8'
                }`} 
                onClick={(e) => handleNavClick(item.id, e)}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
                <span className="text-xs text-slate-500 font-normal">→</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
}
