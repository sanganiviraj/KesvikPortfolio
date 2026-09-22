import React from 'react';
import { Layers, Scissors, Sparkles, Volume2, Sliders, Cpu } from 'lucide-react';

export default function Workflow() {
  const STEPS = [
    {
      num: '01',
      title: 'Assembly & Hook Structuring',
      icon: <Scissors size={20} />,
      desc: 'Ingesting raw footage, audio syncing multitracks in Premiere Pro, and crafting a magnetic first 15-second hook to arrest viewer scrolling.'
    },
    {
      num: '02',
      title: 'Pacing & Micro-Trimming',
      icon: <Layers size={20} />,
      desc: 'Removing dead air, stutters, and filler phrases. Applying dynamic punch-in zooms and speed ramps to keep viewer focus tight.'
    },
    {
      num: '03',
      title: 'After Effects Motion & VFX',
      icon: <Sparkles size={20} />,
      desc: 'Integrating animated lower-thirds, pop-up infographics, kinetic typography, kinetic hooks, and 2D/3D visual metaphors.'
    },
    {
      num: '04',
      title: '30+ Layer Audio Design',
      icon: <Volume2 size={20} />,
      desc: 'Designing rich audio environments in Adobe Audition: impact hits, risers, ambient texture, vocal compression, and ducked musical scoring.'
    },
    {
      num: '05',
      title: 'Color Grading & Final Render',
      icon: <Sliders size={20} />,
      desc: 'Mastering skin tones, film grain emulation, teal & orange color separation, and 4K ProRes / H.265 master export.'
    }
  ];

  const TOOLS = [
    { name: 'Adobe Premiere Pro', category: 'Timeline Editing & Pacing', icon: '/logos/premiere.svg' },
    { name: 'Adobe After Effects', category: 'Motion Graphics & Kinetic VFX', icon: '/logos/aftereffects.svg' },
    { name: 'DaVinci Resolve Studio', category: 'Color Grading & Mastering', icon: '/logos/davinci.svg' },
    { name: 'Adobe Audition', category: 'Audio Mastering & SFX', icon: '/logos/audition.svg' },
    { name: 'Adobe Photoshop', category: 'Thumbnail & Asset Design', icon: '/logos/photoshop.svg' },
    { name: 'Adobe Illustrator', category: 'Vector Asset Graphics', icon: '/logos/illustrator.svg' }
  ];

  return (
    <section id="workflow" className="py-12 sm:py-14 relative border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="badge-purple mb-3">
            <Cpu size={14} /> Master Editing Blueprint
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl my-4">
            The 5-Step <span className="gradient-text-vibrant">Post-Production Workflow</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            A battle-tested post-production pipeline refined over 5+ years to guarantee broadcast-level quality and maximum audience retention.
          </p>
        </div>

        {/* Steps Grid - BORDERLESS */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">
          {STEPS.map((s, idx) => (
            <div key={idx} className="gradient-border-card p-6 flex flex-col relative border-0 shadow-2xl">
              <div className="font-heading font-black text-3xl text-white/10 absolute top-4 right-4">{s.num}</div>
              <div className="w-11 h-11 rounded-xl bg-brand-purple/15 text-purple-300 border-0 flex items-center justify-center mb-5 shadow">
                {s.icon}
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-2 leading-snug">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Software Suite Card - BORDERLESS */}
        <div className="glass-panel p-8 sm:p-12 text-center border-0 shadow-2xl">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">Industry Standard Software Suite</h3>
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-10">Only state-of-the-art tools and hardware utilized for pixel-perfect delivery.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {TOOLS.map((t, i) => (
              <div key={i} className="bg-brand-purple/10 border-0 hover:bg-brand-purple/20 p-4 rounded-xl flex items-center gap-4 transition-all group shadow-lg">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-lg shadow-black/40 group-hover:scale-105 transition-transform border-0">
                  <img src={t.icon} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white group-hover:text-purple-300 transition-colors">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
