import React, { useState } from 'react';
import { Palette, Eye, Sparkles, X, Image as ImageIcon, Smartphone } from 'lucide-react';

export const YOUTUBE_THUMBNAILS = [
  {
    id: 101,
    title: 'Multi Millionaire Mindset',
    category: 'YouTube Thumbnails',
    aspectRatio: '16:9',
    orientation: 'horizontal',
    client: 'Wealth & Personal Growth Creator',
    ctr: '+12.4% High CTR',
    image: 'https://res.cloudinary.com/fawcz6om/image/upload/v1784898710/Multi_Milionaire.png',
    tools: ['Photoshop', 'Canva Pro'],
    description: 'High-CTR horizontal 16:9 YouTube thumbnail engineered for extreme click-through rates. Features high-contrast typography, portrait lighting isolation, and vibrant color grading.'
  },
  {
    id: 102,
    title: 'Ambitions & Goal Setting',
    category: 'YouTube Thumbnails',
    aspectRatio: '16:9',
    orientation: 'horizontal',
    client: 'Motivation & Business Creator',
    ctr: '+10.8% High CTR',
    image: 'https://res.cloudinary.com/fawcz6om/image/upload/v1784898679/Ambitions_Goal.png',
    tools: ['Photoshop', 'Lightroom'],
    description: 'Eye-catching 16:9 landscape YouTube thumbnail with bold custom typography, glow highlights, and high visual hierarchy to stand out on desktop and mobile feeds.'
  },
  {
    id: 103,
    title: 'Top Gun High Performance',
    category: 'YouTube Thumbnails',
    aspectRatio: '16:9',
    orientation: 'horizontal',
    client: 'Peak Performance Creator',
    ctr: '+14.2% Top Trending',
    image: 'https://res.cloudinary.com/fawcz6om/image/upload/v1784898702/TopGun_Goal.png',
    tools: ['Photoshop', 'Illustrator'],
    description: 'Cinematic 16:9 YouTube thumbnail featuring high-action color contrast, intense visual composition, and bold dynamic text typography.'
  }
];

export const INSTAGRAM_COVERS = [
  {
    id: 201,
    title: 'Personal Brand Viral Reel Cover',
    category: 'Instagram Reel Covers',
    aspectRatio: '9:16',
    orientation: 'vertical',
    client: 'Creator Personal Brand',
    ctr: 'Viral Cover',
    image: 'https://res.cloudinary.com/fawcz6om/image/upload/v1784899698/KS_cover.jpg',
    tools: ['Photoshop', 'Canva Pro'],
    description: 'Custom 9:16 vertical Instagram reel cover poster designed with neon lighting, subject cutout isolation, and bold kinetic headline typography.'
  },
  {
    id: 202,
    title: 'High-Retention Creator Cover Design',
    category: 'Instagram Reel Covers',
    aspectRatio: '9:16',
    orientation: 'vertical',
    client: 'Influencer Creator',
    ctr: 'High Engagement',
    image: 'https://res.cloudinary.com/fawcz6om/image/upload/v1784899382/Coverpic.png',
    tools: ['Photoshop', 'Lightroom'],
    description: 'Sleek 9:16 vertical portrait reel cover poster engineered to stop scrolling on Instagram Explore feeds and boost profile visits.'
  },
  {
    id: 203,
    title: 'Kesvik Savaliya Official Reel Cover',
    category: 'Instagram Reel Covers',
    aspectRatio: '9:16',
    orientation: 'vertical',
    client: 'Kesvik Savaliya',
    ctr: 'Top Performer',
    image: 'https://res.cloudinary.com/fawcz6om/image/upload/v1784899744/KS_cover_jidbk1.jpg',
    tools: ['Photoshop', 'Illustrator'],
    description: 'High-impact 9:16 vertical branding cover poster featuring crisp lighting overlays, custom color grading, and modern typography.'
  }
];

export default function GraphicsShowcase() {
  const [selectedGraphic, setSelectedGraphic] = useState(null);

  return (
    <section id="graphics" className="py-12 sm:py-14 relative border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="badge-cyan mb-3">
            <Palette size={14} /> Creative Graphic & Cover Design Gallery
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl my-4">
            Creative Graphic & <span className="gradient-text-vibrant">Cover Design Showcase</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            High-CTR 16:9 YouTube Thumbnails and 9:16 Instagram Reel Cover Posters engineered by Kesvik Savaliya to maximize clicks, views, and audience growth.
          </p>
        </div>

        {/* 🎬 1. YOUTUBE THUMBNAILS SECTION (16:9 HORIZONTAL LANDSCAPE - 3 CARDS) */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold border-0">
              <ImageIcon size={20} />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-white">YouTube High-CTR Thumbnails (16:9 Horizontal)</h3>
              <p className="text-xs text-slate-400">Landscape high-conversion thumbnails tailored for desktop & mobile YouTube feeds</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {YOUTUBE_THUMBNAILS.map(graphic => (
              <div 
                key={graphic.id}
                className="gradient-border-card flex flex-col overflow-hidden cursor-pointer group border-0"
                onClick={() => setSelectedGraphic(graphic)}
              >
                {/* 16:9 Horizontal Image Container */}
                <div className="relative w-full aspect-[16/9] bg-black overflow-hidden border-0">
                  <img 
                    src={graphic.image} 
                    alt={graphic.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-brand-cyan text-white flex items-center justify-center shadow-lg shadow-brand-cyan/50 group-hover:scale-110 transition-transform">
                      <Eye size={20} />
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="bg-black/80 backdrop-blur-md text-cyan-300 font-bold text-xs px-3 py-1 rounded-full border-0 shadow flex items-center gap-1.5">
                      <Sparkles size={12} /> {graphic.ctr}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/80 backdrop-blur-md text-slate-300 text-[10px] font-black px-2.5 py-1 rounded-full border-0 shadow">
                      16:9 Landscape
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 border-0">
                  <div className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-1">
                    {graphic.client}
                  </div>
                  <h4 className="font-heading font-extrabold text-lg text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {graphic.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {graphic.description}
                  </p>

                  {/* Design Tools Badges */}
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {graphic.tools.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-bold bg-cyan-500/20 text-cyan-200 px-3 py-1 rounded-full border-0 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 📱 2. INSTAGRAM REEL COVERS SECTION (9:16 VERTICAL PORTRAIT - 3 CARDS) */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold border-0">
              <Smartphone size={20} />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-white">Instagram Vertical Reel Covers (9:16 Portrait)</h3>
              <p className="text-xs text-slate-400">Mobile 9:16 portrait covers designed for Instagram Reels & Shorts feeds</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSTAGRAM_COVERS.map(graphic => (
              <div 
                key={graphic.id}
                className="gradient-border-card flex flex-col overflow-hidden cursor-pointer group border-0"
                onClick={() => setSelectedGraphic(graphic)}
              >
                {/* 9:16 Vertical Image Container */}
                <div className="relative w-full aspect-[9/14] bg-black overflow-hidden border-0">
                  <img 
                    src={graphic.image} 
                    alt={graphic.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center shadow-lg shadow-brand-purple/50 group-hover:scale-110 transition-transform">
                      <Eye size={20} />
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="bg-black/80 backdrop-blur-md text-purple-300 font-bold text-xs px-3 py-1 rounded-full border-0 shadow flex items-center gap-1.5">
                      <Sparkles size={12} /> {graphic.ctr}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-brand-purple/90 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full border-0 shadow flex items-center gap-1">
                      <Smartphone size={10} /> 9:16 Vertical
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 border-0">
                  <div className="text-xs font-bold text-brand-purple uppercase tracking-wider mb-1">
                    {graphic.client}
                  </div>
                  <h4 className="font-heading font-extrabold text-lg text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
                    {graphic.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {graphic.description}
                  </p>

                  {/* Design Tools Badges */}
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {graphic.tools.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-bold bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full border-0 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Graphic Lightbox Preview Modal */}
      {selectedGraphic && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn" onClick={() => setSelectedGraphic(null)}>
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0c101a] border-0 rounded-3xl p-6 sm:p-8 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between pb-4 mb-4 border-0">
              <div>
                <span className="badge-cyan">{selectedGraphic.category}</span>
                <h3 className="font-heading font-extrabold text-2xl text-white mt-2">{selectedGraphic.title}</h3>
                <span className="text-xs text-slate-400">Client: {selectedGraphic.client}</span>
              </div>
              <button 
                className="w-9 h-9 rounded-full bg-brand-cyan/20 hover:bg-rose-500/30 text-white flex items-center justify-center transition-colors cursor-pointer border-0"
                onClick={() => setSelectedGraphic(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="w-full rounded-2xl overflow-hidden mb-6 border-0 bg-black flex items-center justify-center shadow-xl">
              <img src={selectedGraphic.image} alt={selectedGraphic.title} className="w-full h-auto object-contain max-h-[70vh]" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-0">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Design Tools:</span>
                {selectedGraphic.tools.map((t, idx) => (
                  <span key={idx} className="text-xs font-bold text-cyan-300 bg-cyan-500/20 border-0 px-3 py-1 rounded-full shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/20 border-0 px-3.5 py-1 rounded-full shadow-sm">
                {selectedGraphic.ctr}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
