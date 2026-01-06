import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-8 left-8 z-40 group transition-all duration-500 animate-float"
    >
      {/* Outer Glow/Ripple Effect */}
      <div className="absolute inset-0 rounded-full bg-primary-blue/30 blur-md group-hover:blur-xl transition-all duration-500"></div>
      
      {/* The Bubble Button */}
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-400/90 via-primary-blue/80 to-blue-600/90 backdrop-blur-md border border-white/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,0,0,0.2)] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 overflow-hidden">
        
        {/* Shine/Reflection effect top-left */}
        <div className="absolute top-2 left-3 w-4 h-2 bg-white/40 rounded-[100%] blur-[1px] rotate-[-45deg]"></div>
        
        {/* Icon */}
        <ArrowUp 
          className="text-white relative z-10 group-hover:-translate-y-1 transition-transform duration-300" 
          size={24} 
          strokeWidth={3}
        />

        {/* Inner Sparkle (Optional decorative element) */}
        <Sparkles 
          size={12} 
          className="absolute bottom-3 right-3 text-primary-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" 
        />
      </div>
    </button>
  );
};

export default BackToTop;