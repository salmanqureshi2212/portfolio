
import { useEffect, useState } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  speed?: number;
}

const AnimatedText = ({ text, className = '', once = true, speed = 50 }: AnimatedTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete && once) return;

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsComplete(true);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isComplete, once, text, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default AnimatedText;
