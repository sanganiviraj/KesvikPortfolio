import React, { useState, useRef } from 'react';
import { Play, Flame, Layers, Sparkles, Smartphone } from 'lucide-react';

/* ==========================================================================
   KESVIK SAVALIYA - REAL PORTFOLIO PROJECTS CONFIGURATION
   ========================================================================== */

export const VIDEO_PROJECTS = [
  {
    id: 1,
    title: 'Start Observing',
    category: 'Viral Shorts & Hooks',
    client: 'Personal Brand Breakdown',
    views: '1.8M Views',
    duration: '0:45',
    aspectRatio: '9:16',
    thumbnail: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784897020/Start_Observing_zkctde.jpg',
    videoUrl: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784897020/Start_Observing_zkctde.mp4',
    rawImage: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784897020/Start_Observing_zkctde.jpg',
    gradedImage: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784897020/Start_Observing_zkctde.jpg',
    description: 'Insightful breakdown reel focusing on mindset and observation. Features punchy animated captions, B-roll overlays, pattern interrupt zooms, and voice enhancement.',
    tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
    highlights: ['Viral Hook Pacing', 'Kinetic Subtitles & Emoji FX', 'Curated Stock B-Roll Overlay'],
    notes: {
      pacing: 'Dynamic subtitle animation with colored keyphrase highlights.',
      audio: 'Whooshes, pops, and subtle page-turn sound effects.',
      captions: 'Word-by-word active captions with dynamic emoji popups.',
      color: 'Cinematic film grain overlay with natural skin tone grading.'
    }
  },
  {
    id: 2,
    title: 'Dwarka',
    category: 'Personal Branding Reels',
    client: 'Personal Branding Reel',
    views: '2.4M Views',
    duration: '0:58',
    aspectRatio: '9:16',
    thumbnail: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784894630/Dwarka_1_1_alhl3x.jpg',
    videoUrl: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784894630/Dwarka_1_1_alhl3x.mp4',
    rawImage: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784894630/Dwarka_1_1_alhl3x.jpg',
    gradedImage: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784894630/Dwarka_1_1_alhl3x.jpg',
    description: 'Cinematic 9:16 personal branding reel edited for maximum audience engagement. Combines Premiere Pro rhythmic pacing, custom Lumetri color grading, and crisp voice EQ.',
    tools: ['Premiere Pro', 'After Effects', 'Audition', 'Photoshop'],
    highlights: ['High Retention Pacing', 'Cinematic Teal/Orange Grade', 'Custom Voice EQ & Compression'],
    notes: {
      pacing: 'High-hook opening with seamless jump cuts and vocal emphasis.',
      audio: 'Background ambient score mixed with crisp vocal clarity.',
      captions: 'Animated lower thirds and highlighted keyphrase subtitles.',
      color: 'Lumetri Color pass optimized for mobile OLED screens.'
    }
  },
  {
    id: 3,
    title: 'Custom Pieces Jewellery',
    category: 'Viral Shorts & Hooks',
    client: 'Pragalbh Jewels (Brand Client)',
    views: '1.8M Views',
    duration: '0:18',
    aspectRatio: '9:16',
    thumbnail: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784891929/23-7_Custom_Pieces_yi5dny.jpg',
    videoUrl: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784891929/23-7_Custom_Pieces_yi5dny.mp4',
    rawImage: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784891929/23-7_Custom_Pieces_yi5dny.jpg',
    gradedImage: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784891929/23-7_Custom_Pieces_yi5dny.jpg',
    description: 'High-converting commercial reel for Pragalbh Jewels. Features elegant macro product cuts, shimmer light leaks, motion-tracked price callouts, and smooth speed ramping.',
    tools: ['Premiere Pro', 'After Effects', 'Audition'],
    highlights: ['High CTR Commercial Edit', 'Motion Tracked Price Tags', 'Macro Shimmer Light Leaks'],
    notes: {
      pacing: 'Elegant product showcase with fast zoom transitions.',
      audio: 'Soft luxury acoustic scoring with subtle chime accents.',
      captions: 'Tracked jewelry labels and gold-accented callout text.',
      color: 'Rich warm gold Lumetri grade highlighting diamond reflections.'
    }
  },
  {
    id: 4,
    title: '4 Powerful AI Tools',
    category: 'VFX Motion Graphics',
    client: 'AI & Tech Creator Content',
    views: '4.1M Views',
    duration: '0:35',
    aspectRatio: '9:16',
    thumbnail: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784894555/4_Powerfull_AI_Tools_1_egdwvb.jpg',
    videoUrl: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784894555/4_Powerfull_AI_Tools_1_egdwvb.mp4',
    rawImage: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784894555/4_Powerfull_AI_Tools_1_egdwvb.jpg',
    gradedImage: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784894555/4_Powerfull_AI_Tools_1_egdwvb.jpg',
    description: 'Dynamic 9:16 breakdown reel showcasing 4 game-changing AI tools. Features After Effects 3D camera tracking, custom kinetic typography, glowing lower thirds, and fast-paced sound design.',
    tools: ['After Effects', 'Premiere Pro', 'Photoshop'],
    highlights: ['+160% Retention Boost', 'Kinetic AI Text & Callouts', 'AE 3D Camera Tracking'],
    notes: {
      pacing: 'Fast pattern interrupt cuts every 1.8s to keep tech audience locked.',
      audio: 'Multi-layered digital risers, UI clicks, and deep bass impacts.',
      captions: 'Neon glowing text tracking and dynamic screen mockups.',
      color: 'Cyberpunk contrast Lumetri pass for vivid mobile screens.'
    }
  }
];

// 🎥 INDIVIDUAL PROJECT CARD WITH SMOOTH MOUSE HOVER VIDEO PREVIEW
function ProjectCard({ project, onSelectProject, colorMode }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="gradient-border-card flex flex-col overflow-hidden cursor-pointer group border-0"
      onClick={() => onSelectProject(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 9:16 Vertical Thumbnail Box with Instant Hover Video Stream */}
      <div className="relative w-full aspect-[9/14] bg-black overflow-hidden border-0">
        {/* Cover Thumbnail Image */}
        <img
          src={colorMode === 'RAW' ? (project.rawImage || project.thumbnail) : (project.gradedImage || project.thumbnail)}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Hover Live Video Stream */}
        <video
          ref={videoRef}
          src={project.videoUrl}
          poster={project.thumbnail}
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Overlay Play Icon */}
        <div className={`absolute inset-0 bg-brand-dark/30 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan text-white flex items-center justify-center shadow-lg shadow-brand-purple/80 group-hover:scale-110 transition-transform">
            <Play size={18} fill="currentColor" />
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3.5 right-3.5 flex justify-end items-center pointer-events-none z-10">
          <span className="bg-black/80 backdrop-blur-md text-slate-300 font-bold text-xs px-2.5 py-1 rounded-full border-0 shadow">
            {project.duration}
          </span>
        </div>

        {/* Aspect Ratio Badge */}
        <div className="absolute bottom-3 right-3 pointer-events-none z-10">
          <span className="bg-brand-purple/90 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow flex items-center gap-1 border-0">
            <Smartphone size={10} /> 9:16 Vertical
          </span>
        </div>
      </div>

      {/* Card Body - BORDERLESS */}
      <div className="p-5 flex flex-col flex-1 border-0">
        <div className="text-[11px] font-extrabold text-brand-purple uppercase tracking-wider mb-1">
          {project.client}
        </div>
        <h3 className="font-heading font-extrabold text-base sm:text-lg text-white mb-2 leading-snug group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Software Badges - BORDERLESS */}
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tools.map((t, idx) => (
            <span key={idx} className="text-[11px] font-extrabold bg-brand-purple/20 text-purple-200 px-3 py-1 rounded-full border-0 shadow-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VideoGallery({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [colorMode, setColorMode] = useState('GRADED'); // 'RAW' or 'GRADED'

  const categories = ['All', 'Personal Branding Reels', 'Viral Shorts & Hooks', 'VFX Motion Graphics', 'Creator Edits'];

  const filteredProjects = activeCategory === 'All'
    ? VIDEO_PROJECTS
    : VIDEO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="showcase" className="py-12 sm:py-14 relative border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="badge-purple mb-3">
            <Sparkles size={14} /> Featured Portfolio Showcase
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl my-4">
            High-Retention <span className="gradient-text-vibrant">9:16 Viral Edits</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Explore 9:16 vertical reels and shorts engineered for maximum audience retention, viral hooks, and broadcast-level post-production. Hover over any card for a live preview!
          </p>
        </div>

        {/* Interactive Controls Bar - 100% BORDERLESS */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-6 sm:mb-8">

          {/* Category Filter Tabs - BORDERLESS */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                className={`px-4 py-2.5 rounded-full font-extrabold text-xs transition-all duration-200 cursor-pointer border-0 ${activeCategory === cat
                    ? 'bg-gradient-to-r from-brand-purple via-indigo-600 to-cyan-600 text-white shadow-lg shadow-brand-purple/40 scale-105'
                    : 'bg-brand-purple/15 text-slate-300 hover:bg-brand-purple/30 hover:text-white'
                  }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Color Grading Comparison Toggle - BORDERLESS */}
          <div className="flex items-center gap-3 bg-[#0a0d16] p-1.5 rounded-full border-0 shadow-2xl">
            <span className="text-[11px] font-bold text-slate-400 pl-3 uppercase tracking-wider flex items-center gap-1">
              <Layers size={13} className="text-purple-400" /> Color Pass:
            </span>
            <button
              className={`px-3.5 py-1 rounded-full text-xs font-black transition-all cursor-pointer border-0 ${colorMode === 'RAW'
                  ? 'bg-slate-700 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
                }`}
              onClick={() => setColorMode('RAW')}
            >
              RAW LOG
            </button>
            <button
              className={`px-3.5 py-1 rounded-full text-xs font-black transition-all cursor-pointer border-0 ${colorMode === 'GRADED'
                  ? 'bg-gradient-to-r from-brand-purple to-cyan-500 text-white shadow-md shadow-brand-purple/40'
                  : 'text-slate-400 hover:text-slate-200'
                }`}
              onClick={() => setColorMode('GRADED')}
            >
              COLOR GRADED ✨
            </button>
          </div>
        </div>

        {/* 📱 9:16 VERTICAL REEL VIDEO GRID WITH INSTANT HOVER VIDEO PREVIEWS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
              colorMode={colorMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
