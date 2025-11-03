import { useEffect, useState } from 'react';
import pizzaImage from '@assets/image_1762163062581.png';

export default function AnimatedPizza() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / documentHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rotation = scrollProgress * 1080;
  const maxScroll = typeof window !== 'undefined' ? (document.documentElement.scrollHeight - window.innerHeight) : 1000;
  const translateY = scrollProgress * maxScroll * 0.85;
  
  const initialTop = 'calc(50vh + 120px)';

  return (
    <div 
      className="fixed left-1/2 pointer-events-none z-30 will-change-transform"
      style={{
        top: initialTop,
        transform: `translateX(-50%) translateY(${translateY}px) rotate(${rotation}deg)`,
        transition: 'transform 0.05s ease-out',
      }}
    >
      <img 
        src={pizzaImage} 
        alt="Pizza" 
        className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl"
        style={{
          filter: 'drop-shadow(0 10px 30px rgba(255, 107, 53, 0.3))',
        }}
      />
    </div>
  );
}