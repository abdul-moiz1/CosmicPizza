import { useEffect, useState } from 'react';
import pizzaImage from '@assets/generated_images/3D_round_pizza_render_8830be4d.png';

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

  const rotation = scrollProgress * 1440;
  const maxScroll = typeof window !== 'undefined' ? (document.documentElement.scrollHeight - window.innerHeight) : 1000;
  const translateY = scrollProgress * maxScroll * 0.9;
  
  const initialTop = 'calc(50vh - 80px)';

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
        className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
        style={{
          filter: 'drop-shadow(0 15px 40px rgba(255, 107, 53, 0.4))',
        }}
      />
    </div>
  );
}