import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Globe, ShieldCheck, Clock, CreditCard, Layers, MessageSquare } from 'lucide-react';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0); // First item open by default

  const FAQS = [
    {
      q: 'How do we share heavy RAW footage files for international projects?',
      a: 'We use Google Drive, Frame.io, Dropbox, or WeTransfer Pro for instant high-speed file transfers. You can upload your raw camera files or proxy files, and I ingest them directly into Premiere Pro.',
      icon: <Layers size={18} className="text-brand-purple shrink-0" />
    },
    {
      q: 'What is your turnaround time per 9:16 Reel / Short or YouTube edit?',
      a: 'Standard turnaround for 9:16 Personal Branding Reels is 24 to 48 hours. For YouTube long-form videos, standard delivery is 3 to 5 business days. Express 24-hour rush delivery is also available for tight launch deadlines.',
      icon: <Clock size={18} className="text-brand-cyan shrink-0" />
    },
    {
      q: 'How do revisions work for remote / overseas clients?',
      a: 'I provide a private Frame.io review link for every project cut. You can click on exact video timestamps and draw directly on the screen to request tweaks. Revisions are fast, precise, and hassle-free.',
      icon: <MessageSquare size={18} className="text-brand-rose shrink-0" />
    },
    {
      q: 'Which international payment methods do you accept?',
      a: 'I accept Wise (TransferWise), PayPal, Payoneer, Stripe, and Direct International Bank Wires in USD ($), EUR (€), GBP (£), and AED. Clear invoices and milestone receipts are provided.',
      icon: <CreditCard size={18} className="text-brand-emerald shrink-0" />
    },
    {
      q: 'What timezones are you available for team calls & daily updates?',
      a: 'I maintain flexible overlapping working hours for US (PST / EST), UK (GMT), Dubai (GST), and Australia (AEST). Communication happens via 24/7 Slack, Discord, WhatsApp, or scheduled Zoom calls.',
      icon: <Globe size={18} className="text-brand-purple shrink-0" />
    },
    {
      q: 'Do you sign NDAs for unreleased client footage or launch videos?',
      a: 'Yes, 100%. I sign standard non-disclosure agreements (NDAs) to guarantee that your raw footage, strategy, and unreleased content remain strictly confidential and secure.',
      icon: <ShieldCheck size={18} className="text-brand-cyan shrink-0" />
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-14 relative border-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="badge-purple mb-3">
            <HelpCircle size={14} /> Global Client Guide & FAQs
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl my-4">
            Frequently Asked <span className="gradient-text-vibrant">Questions</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Everything international creators, agencies, and personal brand founders need to know about working remotely with Kesvik Savaliya.
          </p>
        </div>

        {/* Global Timezone & Communication Banner - BORDERLESS */}
        <div className="glass-panel p-6 mb-12 flex flex-wrap items-center justify-between gap-4 border-0 shadow-2xl bg-gradient-to-r from-brand-purple/15 via-brand-dark to-brand-cyan/15">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/20 text-purple-300 flex items-center justify-center shrink-0 border-0 shadow">
              <Globe size={20} />
            </div>
            <div className="text-left">
              <div className="font-heading font-bold text-sm text-white">Global Timezone & Agency Compatible</div>
              <div className="text-xs text-slate-400">🇺🇸 US (PST/EST) • 🇬🇧 UK (GMT) • 🇦🇪 Dubai (GST) • 🇦🇺 Australia (AEST)</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-brand-purple/15 border-0 px-4 py-2 rounded-full text-xs font-semibold text-slate-300 shadow">
            <span>24/7 Slack / Discord / WhatsApp Comm</span>
          </div>
        </div>

        {/* Accordion List - BORDERLESS */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className={`gradient-border-card transition-all duration-300 overflow-hidden border-0 shadow-xl ${
                  isOpen ? 'bg-brand-card/95 shadow-2xl' : 'bg-brand-card/70'
                }`}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer border-0"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                >
                  <div className="flex items-center gap-3.5">
                    {faq.icon}
                    <span className="font-heading font-bold text-base sm:text-lg text-white leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-brand-purple/15 flex items-center justify-center text-slate-400 transition-transform duration-300 shrink-0 border-0 ${isOpen ? 'rotate-180 text-brand-purple bg-brand-purple/25' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-300 leading-relaxed border-0 mt-2 animate-fadeIn">
                    <p className="pt-2">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
