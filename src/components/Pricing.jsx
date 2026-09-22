import React from 'react';
import { Check, Zap, Sparkles, Clock, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Pricing({ onSelectPackage }) {
  const PACKAGES = [
    {
      id: 'per-reel',
      name: 'Single Reel / Sprint Cut',
      subtitle: 'Best for testing hook pacing & retention quality',
      tag: 'Pay As You Go',
      highlight: false,
      features: [
        '1 High-Retention 9:16 Vertical Reel (up to 60s)',
        'Kinetic Subtitles & Emoji Popups',
        'After Effects VFX & Lower Thirds',
        '30+ Track Audio SFX & Vocal EQ',
        'Lumetri Color Pass & Film Grain',
        '48 to 72 Hour Express Delivery',
        '2 Rounds of Unlimited Revisions'
      ],
      cta: 'Book Single Project'
    },
    {
      id: 'monthly-retainer',
      name: 'Creator Growth Retainer',
      subtitle: 'Most popular for US/UK personal branding creators',
      tag: '🔥 MOST POPULAR',
      highlight: true,
      features: [
        '8 to 12 Viral 9:16 Reels per Month',
        'High-CTR Instagram Reel Cover & YouTube Thumbnail',
        'Priority Timeline Queue & Instant Slack Access',
        'Pattern Interrupts & B-Roll Overlay Ingestion',
        '48-Hour Standard Turnaround per Cut',
        'Weekly Hook & Retention Strategy Sync',
        'Commercial Royalty-Free Audio Licenses'
      ],
      cta: 'Claim Retainer Slot'
    },
    {
      id: 'agency-partner',
      name: 'Dedicated Video Partner',
      subtitle: 'For high-volume channels, brands & agencies',
      tag: 'Full Pipeline',
      highlight: false,
      features: [
        '15+ Short-Form Cuts + YouTube Longform Edits',
        'Dedicated 1-on-1 Communication & Project Hub',
        'Raw Footage Drive Ingestion & Multitrack Sync',
        'Multi-Platform Re-formatting (Reels, TikTok, Shorts)',
        '24-Hour Rush Turnaround Available',
        'Custom Motion Graphics Brand Style Guide',
        'Full Non-Disclosure Agreement (NDA) Protection'
      ],
      cta: 'Discuss Agency Plan'
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-14 relative border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="badge-purple mb-3">
            <Zap size={14} /> International Engagement Models
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl my-4">
            Flexible <span className="gradient-text-vibrant">Client Engagement</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Transparent, result-driven working arrangements tailored for international creators, brand founders, and agencies.
          </p>
        </div>

        {/* Global Timezone Banner - Sleek Glass Panel */}
        <div className="glass-panel p-5 sm:p-6 mb-10 border-0 shadow-2xl bg-gradient-to-r from-brand-purple/20 via-[#0a0d16] to-brand-cyan/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/25 text-purple-300 flex items-center justify-center shrink-0 border-0 shadow">
              <Globe size={20} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-sm sm:text-base">Seamless Global Remote Collaboration</h4>
              <p className="text-xs text-slate-400">Overlapping active working hours across major international timezones</p>
            </div>
          </div>

          {/* Timezone Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-extrabold bg-white/10 text-slate-200 px-3 py-1.5 rounded-full border-0">
              🇺🇸 US PST / EST
            </span>
            <span className="text-[11px] font-extrabold bg-white/10 text-slate-200 px-3 py-1.5 rounded-full border-0">
              🇬🇧 UK GMT
            </span>
            <span className="text-[11px] font-extrabold bg-white/10 text-slate-200 px-3 py-1.5 rounded-full border-0">
              🇦🇪 Dubai GST
            </span>
            <span className="text-[11px] font-extrabold bg-white/10 text-slate-200 px-3 py-1.5 rounded-full border-0">
              🇦🇺 Australia AEST
            </span>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              className={`gradient-border-card flex flex-col p-7 border-0 relative transition-all duration-300 ${
                pkg.highlight 
                  ? 'bg-gradient-to-b from-[#141228] to-[#0a0d16] shadow-2xl shadow-brand-purple/40 ring-1 ring-brand-purple/50 scale-102 z-10' 
                  : 'bg-[#0b0e17]'
              }`}
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                  pkg.highlight 
                    ? 'bg-gradient-to-r from-brand-purple to-cyan-500 text-white shadow-md shadow-brand-purple/50' 
                    : 'bg-white/10 text-slate-300'
                }`}>
                  {pkg.tag}
                </span>
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <Clock size={12} className="text-brand-cyan" /> Fast Delivery
                </span>
              </div>

              {/* Package Title */}
              <h3 className="font-heading font-extrabold text-xl text-white mb-1">{pkg.name}</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">{pkg.subtitle}</p>

              {/* Feature List */}
              <div className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug">
                    <div className="w-4 h-4 rounded-full bg-brand-purple/30 text-purple-300 flex items-center justify-center shrink-0 mt-0.5 border-0">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => onSelectPackage(pkg)}
                className={`w-full py-3.5 px-5 rounded-full text-xs font-extrabold cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 border-0 shadow-lg ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white hover:shadow-purple-600/60 hover:-translate-y-0.5'
                    : 'bg-white/10 text-white hover:bg-brand-purple/30 hover:text-white'
                }`}
              >
                <span>{pkg.cta}</span>
                <ArrowRight size={14} />
              </button>

            </div>
          ))}
        </div>

        {/* NDA & Guarantee Footer */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-400" /> 100% Strict NDA Protection
          </span>
          <span className="flex items-center gap-2">
            <Sparkles size={16} className="text-brand-cyan" /> 4K Broadcast Quality Export
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} className="text-brand-purple" /> 24/7 Slack / WhatsApp Communication
          </span>
        </div>

      </div>
    </section>
  );
}
