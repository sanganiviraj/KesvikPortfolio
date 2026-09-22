import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverType, setHoverType] = useState('default'); // 'button' | 'media' | 'input' | 'default'

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePosRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const requestRef = useRef(null);

  useEffect(() => {
    // Desktop fine pointer check
    const isPointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isPointerFine) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mousePosRef.current = { x: clientX, y: clientY };

      if (!isVisible) setIsVisible(true);

      // Check hovered element (only interactive buttons, links, inputs, and video play cards)
      const target = e.target;
      if (target) {
        const interactiveEl = target.closest('button, a, input, textarea, select, [role="button"], .cursor-pointer, video');

        if (interactiveEl) {
          setIsHovered(true);
          if (interactiveEl.tagName === 'VIDEO' || interactiveEl.closest('.gradient-border-card')) {
            setHoverType('media');
          } else if (['INPUT', 'TEXTAREA', 'SELECT'].includes(interactiveEl.tagName)) {
            setHoverType('input');
          } else {
            setHoverType('button');
          }
        } else {
          setIsHovered(false);
          setHoverType('default');
        }
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // ⚡ 120FPS Direct Hardware Accelerated Animation Loop (Instant Tight Sync)
    const animate = () => {
      const lerpFactor = 0.45; // Tight, instant follower sync

      ringPosRef.current.x += (mousePosRef.current.x - ringPosRef.current.x) * lerpFactor;
      ringPosRef.current.y += (mousePosRef.current.y - ringPosRef.current.y) * lerpFactor;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePosRef.current.x}px, ${mousePosRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* 🔮 ELEGANT, COMPACT OUTER FOLLOWER RING */}
      <div
        ref={ringRef}
        className={`absolute top-0 left-0 rounded-full flex items-center justify-center transition-[width,height,background-color,border-color,box-shadow,opacity] duration-200 ease-out ${
          isHovered
            ? hoverType === 'media'
              ? 'w-12 h-12 bg-brand-purple/20 border border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.5)]'
              : hoverType === 'input'
              ? 'w-10 h-10 bg-emerald-500/15 border border-emerald-400/70 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
              : 'w-11 h-11 bg-brand-purple/25 border border-purple-400/80 shadow-[0_0_18px_rgba(168,85,247,0.6)]'
            : 'w-8 h-8 border border-purple-400/50 shadow-[0_0_12px_rgba(168,85,247,0.35)]'
        } ${isClicked ? 'scale-75 opacity-90' : 'scale-100'}`}
        style={{
          willChange: 'transform'
        }}
      />

      {/* 🎯 INNER PRECISION CORE DOT */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 rounded-full transition-[width,height,background-color,box-shadow] duration-150 ease-out ${
          isHovered
            ? 'w-2.5 h-2.5 bg-cyan-300 shadow-[0_0_10px_#06b6d4]'
            : 'w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_8px_#a855f7]'
        } ${isClicked ? 'bg-rose-400 scale-125' : ''}`}
        style={{
          willChange: 'transform'
        }}
      />
    </div>
  );
}
