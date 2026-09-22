import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Check, Flame, Send, Smartphone } from 'lucide-react';

export default function VideoModal({ project, onClose, onContactClick }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Start muted to guarantee Chrome 0.00s Instant Autoplay
  const [progress, setProgress] = useState(0);
  const [formattedCurrentTime, setFormattedCurrentTime] = useState('0:00');
  const [formattedDuration, setFormattedDuration] = useState(project ? project.duration || '0:00' : '0:00');
  const [activeTab, setActiveTab] = useState('overview');

  // Lock background scroll & Trigger Instant 0.00s Autoplay on Mount
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  // Format seconds to M:SS (e.g. 14 -> 0:14)
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Handle Play/Pause toggle
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle Mute/Unmute toggle
  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle live continuous time & progress update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration;
      setFormattedCurrentTime(formatTime(cur));
      if (dur && !isNaN(dur)) {
        setFormattedDuration(formatTime(dur));
        setProgress((cur / dur) * 100);
      }
    }
  };

  // Handle loaded metadata for initial duration setup
  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setFormattedDuration(formatTime(videoRef.current.duration));
      videoRef.current.play().catch(() => {});
    }
  };

  // Handle seeking on progress bar click
  const handleSeek = (e) => {
    if (videoRef.current && videoRef.current.duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const seekTime = (clickX / width) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setFormattedCurrentTime(formatTime(seekTime));
      setProgress((clickX / width) * 100);
    }
  };

  if (!project) return null;

  // Universal Video Embed Resolver (Supports YouTube, Shorts, Vimeo, Google Drive, Streamable, Cloudinary, etc.)
  const getOptimizedEmbedUrl = (url) => {
    if (!url) return null;

    // 1. YouTube & YouTube Shorts
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=)|shorts\/)([\w-]{11})/);
      const videoId = match ? match[1] : '';
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd1080&modestbranding=1&rel=0`;
    }

    // 2. Vimeo
    if (url.includes('vimeo.com')) {
      const match = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+\/)?video\/|video\/|)(\d+)/);
      const videoId = match ? match[1] : '';
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&quality=1080p`;
    }

    // 3. Google Drive Shareable Links
    if (url.includes('drive.google.com')) {
      const match = url.match(/\/file\/d\/([^\/]+)/);
      const fileId = match ? match[1] : '';
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }

    // 4. Streamable Links
    if (url.includes('streamable.com')) {
      const match = url.match(/streamable\.com\/([a-zA-Z0-9]+)/);
      const streamableId = match ? match[1] : '';
      return `https://streamable.com/e/${streamableId}`;
    }

    return null;
  };

  const embedUrl = getOptimizedEmbedUrl(project.videoUrl);

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn" onClick={onClose}>
      <div 
        className="w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0c101a] border-0 rounded-3xl p-5 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 mb-6 relative">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="badge-purple">{project.category}</span>
              <span className="badge-cyan flex items-center gap-1">
                <Smartphone size={12} /> 9:16 Vertical Reel
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-1">{project.title}</h3>
            <span className="text-xs text-slate-400 font-medium">Client: {project.client}</span>
          </div>
          <button 
            className="w-9 h-9 rounded-full bg-brand-purple/20 hover:bg-rose-500/30 text-white flex items-center justify-center transition-colors cursor-pointer border-0"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        {/* Player & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 📱 Left Column: 9:16 VERTICAL REEL MOBILE PLAYER */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* 9:16 Phone Mockup Container */}
            <div className="w-full max-w-[300px] aspect-[9/16] rounded-[32px] overflow-hidden relative bg-black border-0 shadow-2xl shadow-brand-purple/50 group">
              
              {/* iPhone Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-3 bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-slate-900 border-0"></div>
              </div>

              {embedUrl ? (
                /* Ultra-fast Cloud Video Embed (YouTube, Vimeo, Google Drive, Streamable) */
                <iframe
                  src={embedUrl}
                  title={project.title}
                  className="w-full h-full border-0 object-cover"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                /* Direct MP4 / Cloudinary Progressive Video Streamer with Instant Autoplay & Live Timer */
                <div className="relative w-full h-full">
                  <video 
                    ref={videoRef}
                    src={project.videoUrl} 
                    poster={project.thumbnail}
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay 
                    loop 
                    muted={isMuted}
                    playsInline
                    preload="auto"
                    onLoadedMetadata={handleLoadedMetadata}
                    onTimeUpdate={handleTimeUpdate}
                    onCanPlay={(e) => {
                      e.target.play().catch(() => {});
                    }}
                    onClick={handlePlayPause}
                  />
                  
                  {/* Player Overlay Controls with Dynamic Live Timer (0:05 / 0:18) */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex flex-col gap-2 z-10 pointer-events-auto">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <button 
                          className="text-white hover:text-brand-cyan transition-colors cursor-pointer border-0 bg-transparent p-1" 
                          onClick={handlePlayPause}
                          title={isPlaying ? "Pause Video" : "Play Video"}
                        >
                          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                        </button>
                        <button 
                          className="text-white hover:text-brand-cyan transition-colors cursor-pointer border-0 bg-transparent p-1" 
                          onClick={handleToggleMute}
                          title={isMuted ? "Unmute Sound" : "Mute Sound"}
                        >
                          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        </button>
                      </div>

                      {/* ⏱️ DYNAMIC LIVE REAL-TIME TIMER COUNTER */}
                      <span className="text-[10px] text-cyan-300 font-extrabold bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border-0 shadow">
                        {formattedCurrentTime} / {formattedDuration}
                      </span>
                    </div>

                    {/* Interactive Live Seek Bar */}
                    <div 
                      className="w-full h-2 bg-white/20 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all duration-150 relative"
                      onClick={handleSeek}
                    >
                      <div 
                        className="h-full bg-gradient-to-r from-brand-purple via-indigo-500 to-brand-cyan rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-2.5 w-full max-w-[300px] mt-4">
              <div className="bg-brand-purple/15 border-0 p-2.5 rounded-xl text-center shadow-md">
                <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Quality</span>
                <span className="font-heading font-extrabold text-xs sm:text-sm text-cyan-300 flex items-center justify-center gap-0.5 mt-0.5">
                  <Flame size={12} /> High Retention
                </span>
              </div>
              <div className="bg-brand-purple/15 border-0 p-2.5 rounded-xl text-center shadow-md">
                <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Aspect Ratio</span>
                <span className="font-heading font-extrabold text-xs sm:text-sm text-purple-300 mt-0.5 block">{project.aspectRatio || '9:16'}</span>
              </div>
              <div className="bg-brand-purple/15 border-0 p-2.5 rounded-xl text-center shadow-md">
                <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Resolution</span>
                <span className="font-heading font-extrabold text-xs sm:text-sm text-emerald-300 mt-0.5 block">4K Master</span>
              </div>
            </div>

          </div>

          {/* 📝 Right Column: Editing Breakdown & Tools */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              {/* Tab Navigation */}
              <div className="flex items-center gap-2 mb-5 bg-brand-purple/10 p-1.5 rounded-xl">
                <button
                  className={`flex-1 text-xs font-extrabold py-2.5 rounded-lg transition-all cursor-pointer border-0 ${
                    activeTab === 'overview' 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview & Impact
                </button>
                <button
                  className={`flex-1 text-xs font-extrabold py-2.5 rounded-lg transition-all cursor-pointer border-0 ${
                    activeTab === 'breakdown' 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('breakdown')}
                >
                  Post-Production Notes
                </button>
              </div>

              {activeTab === 'overview' ? (
                <div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">{project.description}</p>
                  
                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">Key Project Impact</h4>
                  <ul className="space-y-2.5 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 bg-brand-purple/10 p-2.5 rounded-xl border-0">
                        <Check size={16} className="text-brand-cyan shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2.5">Software & Plugins Used</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((t, idx) => (
                      <span key={idx} className="text-xs font-extrabold bg-brand-purple/20 text-purple-300 border-0 px-3.5 py-1.5 rounded-full shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3 mb-6">
                  <div className="bg-brand-purple/15 p-3.5 rounded-2xl border-0 shadow-sm">
                    <span className="block text-[11px] font-extrabold text-brand-cyan uppercase tracking-wider mb-1">Retention Pacing Strategy</span>
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {project.notes?.pacing || 'Fast-paced scene cuts every 2.2 seconds with pattern interrupt transitions to maximize watch time.'}
                    </span>
                  </div>
                  <div className="bg-brand-purple/15 p-3.5 rounded-2xl border-0 shadow-sm">
                    <span className="block text-[11px] font-extrabold text-brand-cyan uppercase tracking-wider mb-1">Custom SFX & Audio Mix</span>
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {project.notes?.audio || 'Multi-layer sound design including wooshes, pops, risers, and voice EQ compression.'}
                    </span>
                  </div>
                  <div className="bg-brand-purple/15 p-3.5 rounded-2xl border-0 shadow-sm">
                    <span className="block text-[11px] font-extrabold text-brand-cyan uppercase tracking-wider mb-1">Animated Auto-Captions & FX</span>
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {project.notes?.captions || 'High-engagement kinetic subtitles, highlighted keyphrases, and custom After Effects lower thirds.'}
                    </span>
                  </div>
                  <div className="bg-brand-purple/15 p-3.5 rounded-2xl border-0 shadow-sm">
                    <span className="block text-[11px] font-extrabold text-brand-cyan uppercase tracking-wider mb-1">Color Grading Pipeline</span>
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {project.notes?.color || 'Vibrant Premiere Lumetri color management tailored for OLED smartphone screens.'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Modal CTA Button */}
            <button 
              className="h-[52px] w-full rounded-full text-full text-sm font-extrabold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 shadow-xl shadow-purple-600/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2.5 border-0 mt-4"
              onClick={() => {
                onClose();
                if (onContactClick) onContactClick();
              }}
            >
              <Send size={16} /> Book Similar Project
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}
