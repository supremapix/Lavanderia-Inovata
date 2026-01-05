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
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Use ReturnType<typeof setTimeout> to handle both browser (number) and Node (NodeJS.Timeout) environments without relying on NodeJS namespace
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

    timer = setTimeout(handleType, 100);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, texts, speed, pause]);

  return (
    <span className={`${className} typewriter-cursor font-heading`}>
      {displayedText}
    </span>
  );
};

export default Typewriter;