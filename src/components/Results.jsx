import React from 'react';
import { TrendingUp, Star, Quote } from 'lucide-react';

export default function Results() {
  const TESTIMONIALS = [
    {
      id: 1,
      name: 'Meet Vekariya',
      role: 'Personal Branding',
      avatar: '/avatars/meet_vekariya.png',
      metric: '+300% Retention Rate',
      text: 'Kesvik deeply understands personal branding pacing for Instagram Reels. He knows exactly where to place sound SFX, animated text, and pattern interrupts to boost retention.'
    },
    {
      id: 2,
      name: 'Nikunj Ramani',
      role: 'Informational Creator',
      avatar: '/avatars/nikunj_ramani.png',
      metric: '+180% Reel Reach',
      text: "Kesvik's editing style for my informational reels is top-notch. His hook pacing, kinetic captions, and visual B-roll keep viewers engaged from start to finish!"
    },
    {
      id: 3,
      name: 'Abhinav Gajjar',
      role: 'Eye Doctor',
      avatar: '/avatars/abhinav_gajjar.png',
      metric: '92% Reel Completion Rate',
      text: 'Fast turnaround, crisp 4K vertical exports, and seamless sound design. Kesvik helps me publish educational eye health Reels smoothly without missing any posting schedule.'
    },
    {
      id: 5,
      name: 'Pragalbh Jewels',
      role: 'Personal Branding',
      avatar: '/avatars/pragalbh_jewels.png',
      metric: '4x Conversion Boost',
      text: 'The luxury product reels and custom brand edits Kesvik created for Pragalbh Jewels are top tier. The color grading and motion graphics made our jewelry collection stand out!'
    },
    {
      id: 6,
      name: 'Harshil Shah',
      role: 'Gynecologist',
      avatar: '/avatars/harshil_shah.png',
      metric: '3.5x Reel Engagement',
      text: 'Explaining medical concepts on Instagram Reels was tough, but Kesvik turned my medical content into visual, clean, and highly engaging Reels that my followers love.'
    }
  ];

  // Duplicate testimonials for seamless 100% infinite marquee loop
  const marqueeList = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="results" className="py-12 sm:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="badge-rose mb-3">
            <TrendingUp size={14} /> Proven Client Growth & Wins
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl my-4">
            Creator & Brand <span className="gradient-text-vibrant">Client Results</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            What top creators, brands, and personal brand founders say about working with Kesvik Savaliya.
          </p>
        </div>
      </div>

      {/* 🚀 INFINITE AUTO-SCROLLING TESTIMONIAL CARDS MARQUEE */}
      <div className="w-full relative overflow-hidden py-4">
        {/* Gradient Overlay Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-6">
          {marqueeList.map((t, idx) => (
            <div key={idx} className="w-[350px] sm:w-[400px] shrink-0 gradient-border-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4 relative">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-brand-purple shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">{t.name}</h4>
                    <div className="text-[11px] text-slate-400">{t.role}</div>
                  </div>
                  <Quote size={20} className="absolute right-0 top-0 text-white/10" />
                </div>

                <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <TrendingUp size={13} /> {t.metric}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">"{t.text}"</p>
              </div>

              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
