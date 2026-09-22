import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Calendar, Send, CheckCircle2, MessageSquare, ShieldCheck, Zap, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import CustomDropdown from './CustomDropdown';

export default function Contact({ initialQuote }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channelOrBrand: '',
    projectType: initialQuote ? initialQuote.videoType : 'Personal Branding Video',
    details: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const PROJECT_TYPE_OPTIONS = [
    { label: 'Personal Branding Video', value: 'Personal Branding Video' },
    { label: 'Viral Reels & Shorts', value: 'Viral Reels & Shorts' },
    { label: 'YouTube Longform Pacing', value: 'YouTube Longform Pacing' },
    { label: 'After Effects Motion Graphics', value: 'After Effects Motion Graphics' },
    { label: 'Monthly Retainer', value: 'Monthly Retainer' }
  ];

  // Enterprise Live Field Validation Rules
  const validateField = (name, value) => {
    let error = '';
    if (name === 'name') {
      if (!value || value.trim().length < 2) {
        error = 'Please enter your full name';
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value || !value.trim()) {
        error = 'Email address is required';
      } else if (!emailRegex.test(value.trim())) {
        error = 'Please enter a valid email address (e.g. name@domain.com)';
      }
    } else if (name === 'details') {
      if (!value || value.trim().length < 8) {
        error = 'Please share a brief description of your project (min 8 characters)';
      }
    }
    return error;
  };

  // Live input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation update
    const fieldError = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: fieldError }));
  };

  // Input focus/blur handler
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: fieldError }));
  };

  const handleDropdownChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  // Form Submit Handler with Live Web3Forms/Formspree/Mailto Delivery to kesvikss@gmail.com
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = { name: true, email: true, details: true };
    setTouched(allTouched);

    // Validate all fields
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const detailsError = validateField('details', formData.details);

    const validationErrors = {
      name: nameError,
      email: emailError,
      details: detailsError
    };

    setErrors(validationErrors);

    // Check if form has any error
    const hasErrors = Object.values(validationErrors).some(err => err !== '');

    if (hasErrors) {
      // Trigger error shake animation
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 400);
      return;
    }

    setIsSending(true);

    try {
      // 🚀 LIVE SERVERLESS FORM API (WEBSERVICE FOR KESVIKSS@GMAIL.COM)
      // Free Web3Forms Access Key endpoint or custom EmailJS service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'cb3767ed-e481-4cde-98f8-7e716a80281c', // Kesvik Official Web3Forms Access Key
          name: formData.name,
          email: formData.email,
          channelOrBrand: formData.channelOrBrand || 'Not Provided',
          projectType: formData.projectType,
          message: formData.details,
          subject: `🎬 New Portfolio Inquiry from ${formData.name} (${formData.projectType})`,
          from_name: `${formData.name} via Kesvik Portfolio`
        })
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setSubmitted(true);
        try {
          confetti({
            particleCount: 120,
            spread: 100,
            origin: { y: 0.5 }
          });
        } catch (err) {}
      } else {
        // Fallback: Open pre-filled Mailto client
        triggerMailtoFallback();
      }
    } catch (err) {
      // Fallback: Open pre-filled Mailto client
      triggerMailtoFallback();
    } finally {
      setIsSending(false);
    }
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`🎬 New Video Project Inquiry - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Kesvik,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSocial/Channel: ${formData.channelOrBrand || 'N/A'}\nProject Type: ${formData.projectType}\n\nProject Details:\n${formData.details}`
    );
    window.location.href = `mailto:kesvikss@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Kesvik! My name is ${formData.name || 'a Creator'}. I'm looking for ${formData.projectType} editing. Email: ${formData.email || 'N/A'}. Details: ${formData.details || 'Let us connect!'}`
    );
    window.open(`https://wa.me/918238787327?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-14 relative border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="badge-purple mb-3">
            <Zap size={14} /> Ready to Scale Your Content?
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl my-4">
            Work With <span className="gradient-text-vibrant">Kesvik Savaliya</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Have a personal branding video, YouTube longform, or viral reel project in mind? Connect directly with me.
          </p>
        </div>

        {/* Grid Layout with Equal Heights - BORDERLESS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="glass-panel p-7 sm:p-8 flex flex-col justify-between h-full border-0 shadow-2xl">
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">Direct Connection</h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  Fastest way to reach me. I respond to all creator and brand inquiries within 2 hours.
                </p>

                <div className="space-y-3.5 mb-6">
                  <a href="https://wa.me/918238787327" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3.5 rounded-xl bg-[#0b0e17] border-0 hover:bg-brand-purple/20 hover:translate-x-1 transition-all text-white shadow-lg">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-semibold">Fast Track WhatsApp</div>
                      <div className="font-bold text-sm">+91 82387 87327</div>
                    </div>
                  </a>

                  <a href="mailto:kesvikss@gmail.com" className="flex items-center gap-4 p-3.5 rounded-xl bg-[#0b0e17] border-0 hover:bg-brand-purple/20 hover:translate-x-1 transition-all text-white shadow-lg">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 border-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-semibold">Direct Email Inbox</div>
                      <div className="font-bold text-sm">kesvikss@gmail.com</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#0b0e17] border-0 text-white shadow-lg">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border-0">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-semibold">Discovery Call</div>
                      <div className="font-bold text-sm">Book a Project Discussion</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="pt-5 space-y-2.5 mt-auto border-0">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <ShieldCheck size={16} className="text-brand-purple shrink-0" />
                  <span>Strict Confidentiality & RAW Footage Safety</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Zap size={16} className="text-brand-purple shrink-0" />
                  <span>Fast Turnaround with Unlimited Revisions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column with Live Email Delivery & Live Validation */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <form 
              noValidate
              onSubmit={handleSubmit}
              className={`gradient-border-card p-7 sm:p-8 flex flex-col justify-between h-full border-0 shadow-2xl transition-transform ${isShaking ? 'animate-shake' : ''}`}
            >
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-5">Send Project Details</h3>

                {submitted ? (
                  <div className="text-center py-10 animate-fadeIn">
                    <CheckCircle2 size={56} className="text-emerald-400 mx-auto mb-4 animate-bounce" />
                    <h4 className="font-heading font-extrabold text-2xl text-white mb-2">Email Delivered to Kesvik! 📧</h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>! Your project brief has been sent directly to <strong>kesvikss@gmail.com</strong>. I will review your details and respond within 2 hours.
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button 
                        type="button" 
                        onClick={handleWhatsAppDirect}
                        className="px-5 py-2.5 rounded-full text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors inline-flex items-center gap-2 cursor-pointer border-0 shadow-lg shadow-emerald-900/40"
                      >
                        <MessageSquare size={14} /> Send Instant WhatsApp Copy <ExternalLink size={12} />
                      </button>
                      
                      <button 
                        type="button" 
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', channelOrBrand: '', projectType: 'Personal Branding Video', details: '' });
                          setTouched({});
                          setErrors({});
                        }}
                        className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer border-0"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Name Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Your Name <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            name="name"
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 bg-[#080b12] rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none transition-all shadow-inner border-0 ${
                              touched.name && errors.name 
                                ? 'ring-2 ring-rose-500/80 bg-rose-950/20 shadow-rose-500/10' 
                                : touched.name && !errors.name && formData.name
                                ? 'ring-1 ring-emerald-500/60 bg-emerald-950/10'
                                : 'focus:ring-2 focus:ring-brand-purple/60'
                            }`}
                          />
                          {touched.name && !errors.name && formData.name && (
                            <CheckCircle2 size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none" />
                          )}
                        </div>
                        {touched.name && errors.name && (
                          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-rose-400 font-semibold animate-fadeIn">
                            <AlertCircle size={14} className="shrink-0 text-rose-400" />
                            <span>{errors.name}</span>
                          </div>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">
                          Email Address <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <input 
                            type="email" 
                            name="email"
                            placeholder="rahul@creator.com"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3 bg-[#080b12] rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none transition-all shadow-inner border-0 ${
                              touched.email && errors.email 
                                ? 'ring-2 ring-rose-500/80 bg-rose-950/20 shadow-rose-500/10' 
                                : touched.email && !errors.email && formData.email
                                ? 'ring-1 ring-emerald-500/60 bg-emerald-950/10'
                                : 'focus:ring-2 focus:ring-brand-purple/60'
                            }`}
                          />
                          {touched.email && !errors.email && formData.email && (
                            <CheckCircle2 size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none" />
                          )}
                        </div>
                        {touched.email && errors.email && (
                          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-rose-400 font-semibold animate-fadeIn">
                            <AlertCircle size={14} className="shrink-0 text-rose-400" />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>

                    </div>

                    {/* Social Link & Project Type Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1.5">Instagram / Creator Handle</label>
                        <input 
                          type="text" 
                          name="channelOrBrand"
                          placeholder="instagram.com/yourhandle or @handle"
                          value={formData.channelOrBrand}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#080b12] border-0 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/60 transition-all shadow-inner"
                        />
                      </div>

                      <div>
                        <CustomDropdown
                          label="Project Type"
                          options={PROJECT_TYPE_OPTIONS}
                          value={formData.projectType}
                          onChange={(val) => handleDropdownChange('projectType', val)}
                        />
                      </div>
                    </div>

                    {/* Project Brief Textarea */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5">
                        Project Brief & Details <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <textarea 
                          name="details" 
                          rows="3"
                          placeholder="Tell me about your video goals, footage type, deadlines, or reference style links..."
                          value={formData.details}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 bg-[#080b12] rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none transition-all shadow-inner resize-none border-0 ${
                            touched.details && errors.details 
                              ? 'ring-2 ring-rose-500/80 bg-rose-950/20 shadow-rose-500/10' 
                              : touched.details && !errors.details && formData.details
                              ? 'ring-1 ring-emerald-500/60 bg-emerald-950/10'
                              : 'focus:ring-2 focus:ring-brand-purple/60'
                          }`}
                        ></textarea>
                        {touched.details && !errors.details && formData.details && (
                          <CheckCircle2 size={16} className="absolute right-3.5 top-4 text-emerald-400 pointer-events-none" />
                        )}
                      </div>
                      {touched.details && errors.details && (
                        <div className="flex items-center gap-1.5 mt-1.5 text-xs text-rose-400 font-semibold animate-fadeIn">
                          <AlertCircle size={14} className="shrink-0 text-rose-400" />
                          <span>{errors.details}</span>
                        </div>
                      )}
                    </div>

                  </div>
                )}
              </div>

              {!submitted && (
                <button 
                  type="submit" 
                  disabled={isSending}
                  className="btn-gradient-primary w-full py-4 text-sm mt-4 border-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSending ? (
                    <>
                      <Loader2 size={18} className="animate-spin text-white" /> Sending Email to Kesvik...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message To Kesvik
                    </>
                  )}
                </button>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
