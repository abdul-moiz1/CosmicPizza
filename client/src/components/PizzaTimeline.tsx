import { useEffect, useRef, useState } from 'react';
import doughImage from '@assets/generated_images/Pizza_dough_preparation_9691709b.png';
import sauceImage from '@assets/generated_images/Pizza_sauce_application_94a5bdf2.png';
import toppingsImage from '@assets/generated_images/Adding_pizza_toppings_1a13d69b.png';
import bakeImage from '@assets/generated_images/Pizza_baking_in_oven_f4f2fc96.png';
import sliceImage from '@assets/generated_images/Slicing_fresh_pizza_619ddb95.png';
import deliveryImage from '@assets/generated_images/Pizza_delivery_service_f8c1fcc3.png';

const timelineSteps = [
  {
    id: 1,
    title: 'Dough Prep',
    description: 'Hand-kneaded fresh daily with premium Italian flour',
    image: doughImage,
  },
  {
    id: 2,
    title: 'Sauce',
    description: 'Homemade marinara from vine-ripened San Marzano tomatoes',
    image: sauceImage,
  },
  {
    id: 3,
    title: 'Toppings',
    description: 'Fresh ingredients sourced locally every morning',
    image: toppingsImage,
  },
  {
    id: 4,
    title: 'Bake',
    description: 'Stone-fired at 800°F for perfect crispy crust',
    image: bakeImage,
  },
  {
    id: 5,
    title: 'Slice & Serve',
    description: 'Cut fresh and served piping hot with care',
    image: sliceImage,
  },
  {
    id: 6,
    title: 'Delivery',
    description: 'Fast delivery to your door in eco-friendly packaging',
    image: deliveryImage,
  },
];

export default function PizzaTimeline() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepId = parseInt(entry.target.getAttribute('data-step-id') || '0');
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => {
              if (!prev.includes(stepId)) {
                return [...prev, stepId];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#0B132B] text-white py-16 md:py-24 overflow-hidden" data-testid="section-pizza-timeline">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{ textShadow: '0 2px 10px rgba(255, 195, 0, 0.3)' }}
            data-testid="text-timeline-title"
          >
            Our Cosmic Pizza Journey
          </h2>
          <p className="text-lg md:text-xl text-white/85" data-testid="text-timeline-subtitle">
            From dough to delivery — made fresh every step of the way.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFC300] via-[#FFD700] to-[#FFC300] opacity-30 md:-translate-x-1/2"
            data-testid="element-progress-fill"
          />

          <div className="space-y-12 md:space-y-16" data-testid="container-timeline-scroll">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleSteps.includes(step.id);
              
              return (
                <div
                  key={step.id}
                  ref={(el) => (stepRefs.current[index] = el)}
                  data-step-id={step.id}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  data-testid={`card-timeline-step-${step.id}`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div 
                    className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}
                    data-testid={`container-step-content-${step.id}`}
                  >
                    <h3 
                      className="text-2xl md:text-3xl font-bold text-[#FFC300] mb-3 animate-fade-in-left"
                      style={{ animationDelay: `${index * 150 + 100}ms` }}
                      data-testid={`text-step-title-${step.id}`}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-base md:text-lg text-white/80 max-w-md mx-auto md:mx-0 animate-fade-in-left"
                      style={{ animationDelay: `${index * 150 + 200}ms` }}
                      data-testid={`text-step-description-${step.id}`}
                    >
                      {step.description}
                    </p>
                  </div>

                  <div 
                    className="relative z-10 flex-shrink-0 group"
                    data-testid={`container-step-image-${step.id}`}
                  >
                    <div className="absolute inset-0 bg-[#FFC300]/20 rounded-full blur-xl group-hover:bg-[#FFC300]/40 transition-all duration-500 animate-pulse" />
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#FFC300]/30 bg-white/5 transition-all duration-500 ease-in-out hover:scale-110 hover:border-[#FFC300] hover:shadow-[0_0_30px_rgba(255,195,0,0.5)] animate-scale-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        data-testid={`img-step-${step.id}`}
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0B132B] px-4 py-1 rounded-full border-2 border-[#FFC300]/50">
                      <span className="text-[#FFC300] font-bold text-sm">Step {step.id}</span>
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
