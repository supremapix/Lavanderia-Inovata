import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  pause?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  texts, 
  speed = 80, 
  pause = 3000, 
  className = '' 
}) => {
  // Initialize with the first text to ensure server/client match on first render (SEO friendly)
  const [displayedText, setDisplayedText] = useState(texts[0] || '');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Prevent animation in Headless browsers (Prerendering) to ensure snapshot matches initial state
    if (typeof window !== 'undefined' && ((window as any).__PRERENDER__ === true || /HeadlessChrome/.test(navigator.userAgent))) {
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    const handleType = () => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        timer = setTimeout(handleType, speed / 2);
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        timer = setTimeout(handleType, speed);
      }

      if (!isDeleting && displayedText === fullText) {
        clearTimeout(timer);
        timer = setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    // Start the animation loop
    // Note: If we initialized with full text, we wait for pause before deleting
    if (!isDeleting && displayedText === texts[currentTextIndex]) {
       timer = setTimeout(() => setIsDeleting(true), pause);
    } else {
       timer = setTimeout(handleType, 100);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, texts, speed, pause]);

  return (
    <span className={`${className} typewriter-cursor font-heading`}>
      {displayedText}
    </span>
  );
};

export default Typewriter;