import React from 'react';
import { Play, Eye, Flame, Award, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero({ onOpenShowreel, onSelectProject, onScrollTo }) {
  const handleBookClick = (e) => {
    if (e) e.preventDefault();
    if (onScrollTo) onScrollTo('contact');
  };

  const TICKER_ITEMS = [
    'PERSONAL BRAND REELS',
    'AFTER EFFECTS MOTION GRAPHICS',
    'HIGH-RETENTION EDITING',
    'VIRAL SHORT-FORM HOOKS',
    'CUSTOM SFX & SOUND DESIGN',
    'CINEMATIC COLOR GRADING',
    'ANIMATED SUBTITLES & TEXT'
  ];

  // 🎯 REAL CLOUDINARY PROJECT OBJECTS FOR POPUP MODALS
  const projectStartObserving = {
    id: 101,
    title: 'Start Observing',
    category: 'Viral Shorts & Hooks',
    client: 'Nikunj Ramani • Informational Creator',
    views: '1.8M Views',
    duration: '0:45',
    aspectRatio: '9:16',
    thumbnail: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784897020/Start_Observing_zkctde.jpg',
    videoUrl: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784897020/Start_Observing_zkctde.mp4',
    description: 'Insightful breakdown reel focusing on mindset and observation. Features punchy animated captions, B-roll overlays, pattern interrupt zooms, and voice enhancement.',
    tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
    highlights: ['Viral Hook Pacing', 'Kinetic Subtitles & Emoji FX', 'Curated Stock B-Roll Overlay'],
    notes: {
      pacing: 'Dynamic subtitle animation with colored keyphrase highlights.',
      audio: 'Whooshes, pops, and subtle page-turn sound effects.',
      captions: 'Word-by-word active captions with dynamic emoji popups.',
      color: 'Cinematic film grain overlay with natural skin tone grading.'
    }
  };

  const projectDwarka = {
    id: 102,
    title: 'Dwarka',
    category: 'Personal Branding Reels',
    client: 'Meet Vekariya • Personal Branding',
    views: '2.4M Views',
    duration: '0:58',
    aspectRatio: '9:16',
    thumbnail: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784894630/Dwarka_1_1_alhl3x.jpg',
    videoUrl: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784894630/Dwarka_1_1_alhl3x.mp4',
    description: 'High-retention 9:16 vertical reel for Dwarka project. Fast-paced scene cuts, custom sound FX, After Effects motion graphics, and animated kinetic typography.',
    tools: ['Premiere Pro', 'After Effects', 'Audition', 'Photoshop'],
    highlights: ['+140% Watch Time Increase', 'Custom Kinetic Captions', 'Film Grain & Teal/Orange Color Grade']
  };

  const projectJewellery = {
    id: 103,
    title: 'Custom Pieces Jewellery',
    category: 'Viral Shorts & Hooks',
    client: 'Pragalbh Jewels • Personal Branding',
    views: '1.8M Views',
    duration: '0:18',
    aspectRatio: '9:16',
    thumbnail: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784891929/23-7_Custom_Pieces_yi5dny.jpg',
    videoUrl: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784891929/23-7_Custom_Pieces_yi5dny.mp4',
    description: 'High-converting 9:16 vertical reel for Custom Pieces Jewellery. Pacing optimized with custom sound design and motion tracked overlays.',
    tools: ['Premiere Pro', 'After Effects', 'Audition'],
    highlights: ['54% Average View Duration', '3D Infographic Overlays', 'Multitrack Audio Design']
  };

  const handlePhoneClick = (project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else if (onOpenShowreel) {
      onOpenShowreel();
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-10 overflow-hidden">
      {/* Dynamic Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-brand-purple/15 blur-[130px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-brand-cyan/12 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
          <span className="badge-purple">
            <Zap size={14} /> 5+ Years Premiere Pro & After Effects Specialist
          </span>
          <span className="flex items-center gap-2 text-xs text-slate-300 font-bold bg-brand-purple/15 px-3.5 py-1.5 rounded-full border-0 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400"></span> 
            Open For Personal Branding & Creator Projects
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-tight max-w-5xl mb-4">
          Scale Your <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-rose-400 bg-clip-text text-transparent">Personal Brand</span> <br />
          With High-Retention 9:16 Viral Reels.
        </h1>

        <p className="text-base sm:text-lg text-slate-400 max-w-3xl mb-7 leading-relaxed font-normal">
          Hi, I'm <strong className="text-white">Kesvik Savaliya</strong>. I specialize in turning raw footage into high-converting personal branding videos, viral 9:16 Reels/Shorts, and creator content using Adobe Premiere Pro & After Effects.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {/* Primary CTA */}
          <button 
            className="h-[52px] px-7 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 shadow-xl shadow-purple-600/40 hover:shadow-purple-600/60 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2.5 border-0" 
            onClick={() => handlePhoneClick(projectDwarka)}
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Play size={14} fill="currentColor" />
            </div>
            <span>Watch Live Showreel</span>
          </button>

          {/* Secondary CTA */}
          <button 
            className="h-[52px] px-7 rounded-full text-sm font-extrabold text-white bg-[#101424] border border-brand-purple/50 shadow-xl shadow-purple-950/60 hover:bg-brand-purple/30 hover:border-brand-cyan hover:shadow-brand-cyan/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2.5" 
            onClick={handleBookClick}
          >
            <span>Book Project Discussion</span>
            <ArrowRight size={16} className="text-brand-cyan" />
          </button>
        </div>

        {/* 📱 9:16 TRIPLE REAL MOBILE MOCKUP DISPLAY */}
        <div className="w-full max-w-5xl mb-8 relative flex items-center justify-center gap-3 sm:gap-6 py-2">
          
          {/* 👈 LEFT MOBILE PREVIEW (1. Start Observing) */}
          <div 
            className="hidden md:flex w-52 sm:w-60 aspect-[9/16] rounded-[32px] border-0 bg-black overflow-hidden relative shadow-2xl scale-95 opacity-90 hover:opacity-100 hover:scale-100 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            onClick={() => handlePhoneClick(projectStartObserving)}
          >
            {/* iPhone Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-3 bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-slate-900 border-0"></div>
            </div>

            {/* Start Observing Cover Poster Image */}
            <img 
              src={projectStartObserving.thumbnail}
              alt={projectStartObserving.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Compact Play Button Overlay */}
            <div className="absolute inset-0 bg-brand-dark/20 hover:bg-transparent flex items-center justify-center z-10 transition-colors">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan text-white flex items-center justify-center shadow-lg shadow-brand-purple/60 group-hover:scale-110 transition-transform">
                <Play size={18} fill="currentColor" />
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 p-3.5 flex flex-col justify-end z-10 pointer-events-none">
              <div className="bg-black/85 backdrop-blur-md p-2.5 rounded-xl border-0 text-center shadow">
                <span className="font-extrabold text-xs text-white group-hover:text-purple-300 transition-colors block">Start Observing</span>
              </div>
            </div>
          </div>

          {/* 🎯 CENTER MAIN MOBILE MOCKUP (2. Dwarka) */}
          <div 
            className="w-72 sm:w-80 aspect-[9/16] rounded-[36px] border-0 bg-black overflow-hidden relative shadow-2xl shadow-brand-purple/60 cursor-pointer group transition-all duration-300 transform hover:-translate-y-2 z-20"
            onClick={() => handlePhoneClick(projectDwarka)}
          >
            {/* iPhone Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-slate-900 border-0"></div>
            </div>

            {/* Dwarka Optimized Video Stream */}
            <video 
              src={projectDwarka.videoUrl}
              poster={projectDwarka.thumbnail}
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Compact Sleek Play Button Overlay */}
            <div className="absolute inset-0 bg-brand-dark/10 hover:bg-transparent flex items-center justify-center z-10 transition-colors">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-14 h-14 rounded-full border border-brand-purple/60 animate-ping opacity-30"></div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan text-white flex items-center justify-center shadow-lg shadow-brand-purple/80 group-hover:scale-110 transition-transform">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Top & Bottom Badges */}
            <div className="absolute top-10 inset-x-4 z-10 flex justify-between items-center pointer-events-none">
              <span className="bg-rose-500/40 backdrop-blur-md text-rose-100 text-[10px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 border-0 shadow">
                <Flame size={12} /> MAIN FEATURED REEL
              </span>
              <span className="bg-emerald-500/40 backdrop-blur-md text-emerald-100 text-[10px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 border-0 shadow">
                <Eye size={12} /> Ultra HD
              </span>
            </div>

            <div className="absolute bottom-5 inset-x-4 z-10 text-center bg-black/85 backdrop-blur-md p-3.5 rounded-2xl border-0 shadow pointer-events-none">
              <div className="text-xs font-extrabold text-white mb-0.5 group-hover:text-purple-300 transition-colors">Dwarka</div>
              <div className="text-[10px] text-slate-300 font-medium">Cloudinary Fast Stream • Premier & AE SFX</div>
            </div>
          </div>

          {/* 👉 RIGHT MOBILE PREVIEW (3. Custom Pieces Jewellery) */}
          <div 
            className="hidden md:flex w-52 sm:w-60 aspect-[9/16] rounded-[32px] border-0 bg-black overflow-hidden relative shadow-2xl scale-95 opacity-90 hover:opacity-100 hover:scale-100 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            onClick={() => handlePhoneClick(projectJewellery)}
          >
            {/* iPhone Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-3 bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-slate-900 border-0"></div>
            </div>

            {/* Custom Pieces Jewellery Cover Poster Image */}
            <img 
              src={projectJewellery.thumbnail}
              alt={projectJewellery.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Compact Play Button Overlay */}
            <div className="absolute inset-0 bg-brand-dark/20 hover:bg-transparent flex items-center justify-center z-10 transition-colors">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan text-white flex items-center justify-center shadow-lg shadow-brand-purple/60 group-hover:scale-110 transition-transform">
                <Play size={18} fill="currentColor" />
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 p-3.5 flex flex-col justify-end z-10 pointer-events-none">
              <div className="bg-black/85 backdrop-blur-md p-2.5 rounded-xl border-0 text-center shadow">
                <span className="font-extrabold text-xs text-white group-hover:text-purple-300 transition-colors block">Custom Pieces Jewellery</span>
              </div>
            </div>
          </div>

        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-8">
          <div className="glass-panel p-6 flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-purple/15 text-purple-300 flex items-center justify-center shrink-0 border-0">
              <Flame size={22} />
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-white">5+ Years</div>
              <div className="text-xs text-slate-400 font-medium">Editing Experience</div>
            </div>
          </div>

          <div className="glass-panel p-6 flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/15 text-cyan-300 flex items-center justify-center shrink-0 border-0">
              <Award size={22} />
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-white">200+</div>
              <div className="text-xs text-slate-400 font-medium">Videos Delivered</div>
            </div>
          </div>

          <div className="glass-panel p-6 flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-rose/15 text-rose-300 flex items-center justify-center shrink-0 border-0">
              <Eye size={22} />
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-white">100%</div>
              <div className="text-xs text-slate-400 font-medium">On-Time Delivery</div>
            </div>
          </div>

          <div className="glass-panel p-6 flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-emerald/15 text-emerald-300 flex items-center justify-center shrink-0 border-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="font-heading font-extrabold text-2xl text-white">98%</div>
              <div className="text-xs text-slate-400 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* 🚀 INFINITE SLOW AUTO-SCROLLING SPECIALIZATION MARQUEE */}
        <div className="w-full pt-6 overflow-hidden relative">
          <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-6 text-center">
            SPECIALIZING IN PERSONAL BRANDING & CREATOR CONTENT
          </p>

          {/* Infinite Marquee Strip (Slower Speed: 55s) */}
          <div className="flex overflow-hidden py-3">
            <div className="animate-marquee-slow flex items-center gap-6 whitespace-nowrap">
              {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 bg-brand-purple/15 text-slate-200 px-5 py-2.5 rounded-full font-heading font-extrabold text-xs tracking-wider border-0 shadow-lg hover:bg-brand-purple/30 hover:text-white transition-colors cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-sm shadow-brand-cyan"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
