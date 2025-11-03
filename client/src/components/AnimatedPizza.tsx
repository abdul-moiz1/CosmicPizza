import { useEffect, useState } from 'react';
import pizzaImage from '@assets/generated_images/Appetizing_whole_pizza_illustration_05787be9.png';

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

  const rotation = scrollProgress * 720;
  const translateX = scrollProgress * 300;
  const translateY = scrollProgress * 100;

  return (
    <div 
      className="fixed top-20 right-4 md:right-12 pointer-events-none z-50 will-change-transform"
      style={{
        transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64">
        <img 
          src={pizzaImage} 
          alt="Pizza" 
          className="w-full h-full object-contain drop-shadow-2xl animate-spin-slow"
          style={{
            animation: 'spin 20s linear infinite',
          }}
        />
      </div>
    </div>
  );
}