import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGallery from './components/VideoGallery';
import GraphicsShowcase from './components/GraphicsShowcase';
import Pricing from './components/Pricing';
import VideoModal from './components/VideoModal';
import Results from './components/Results';
import Workflow from './components/Workflow';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Master Showreel Modal Project
  const showreelProject = {
    id: 99,
    title: 'Dwarka',
    category: 'Master Showreel',
    client: 'Kesvik Savaliya (Self Edit)',
    views: '50M+ Aggregate Views',
    duration: '0:58',
    aspectRatio: '9:16',
    description: 'A high-retention 9:16 vertical reel montage showcasing 5+ years of video editing, motion graphics in After Effects, Premiere Pro pacing, and custom sound design for top creators and personal brands.',
    videoUrl: 'https://res.cloudinary.com/fawcz6om/video/upload/f_auto,q_auto/v1784894630/Dwarka_1_1_alhl3x.mp4',
    tools: ['Premiere Pro', 'After Effects', 'Audition', 'Photoshop'],
    highlights: ['Personal Branding Highlights', 'Custom Audio Scoring & SFX', 'High-Retention Dynamic Pacing']
  };

  const handleOpenShowreel = () => {
    setSelectedProject(showreelProject);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  // Programmatic Smooth Scroll keeping URL bar 100% clean without any #hash
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Remove any #hash from browser address bar
      if (window.history.pushState) {
        window.history.pushState(null, null, window.location.pathname);
      }
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* 🌟 Ultra-Smooth Custom Animated Inertia Glow Cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar 
        onOpenShowreel={handleOpenShowreel}
        onScrollTo={handleScrollTo}
      />

      {/* Hero Section */}
      <Hero 
        onOpenShowreel={handleOpenShowreel}
        onSelectProject={handleSelectProject}
        onScrollTo={handleScrollTo}
      />

      {/* Video Portfolio Showcase Gallery */}
      <VideoGallery onSelectProject={handleSelectProject} />

      {/* Graphic & Thumbnail Design Gallery Section */}
      <GraphicsShowcase />

      {/* Client Performance & Retention Results */}
      <Results />

      {/* Flexible International Engagement & Pricing Packages */}
      <Pricing onSelectPackage={() => handleScrollTo('contact')} />

      {/* Workflow & Software Suite */}
      <Workflow />

      {/* International Clients FAQ & Timezone Guide Section */}
      <Faq />

      {/* High-Converting Contact & Booking Form */}
      <Contact />

      {/* Footer */}
      <Footer onScrollTo={handleScrollTo} />

      {/* Video Lightbox Modal */}
      {selectedProject && (
        <VideoModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
          onContactClick={() => {
            setSelectedProject(null);
            handleScrollTo('contact');
          }}
        />
      )}
    </div>
  );
}
