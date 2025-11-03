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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pizza-timeline-section" data-testid="section-pizza-timeline">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 timeline-title" data-testid="text-timeline-title">
            Our Cosmic Pizza Journey
          </h2>
          <p className="text-lg md:text-xl timeline-subtitle" data-testid="text-timeline-subtitle">
            From dough to delivery — made fresh every step of the way.
          </p>
        </div>

        <div className="relative">
          <div className="progress-bar-container" data-testid="container-progress-bar">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${scrollProgress}%` }}
              data-testid="element-progress-fill"
            />
          </div>

          <div 
            ref={scrollContainerRef}
            className="timeline-scroll-container"
            data-testid="container-timeline-scroll"
          >
            <div className="timeline-content">
              {timelineSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  className="timeline-step"
                  data-testid={`card-timeline-step-${step.id}`}
                >
                  <div className="step-image-wrapper" data-testid={`container-step-image-${step.id}`}>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="step-image"
                      data-testid={`img-step-${step.id}`}
                    />
                  </div>
                  <h3 className="step-title" data-testid={`text-step-title-${step.id}`}>
                    {step.title}
                  </h3>
                  <p className="step-description" data-testid={`text-step-description-${step.id}`}>
                    {step.description}
                  </p>
                  {index < timelineSteps.length - 1 && (
                    <div className="step-connector" data-testid={`element-connector-${step.id}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pizza-timeline-section {
          background-color: #0B132B;
          color: white;
          overflow: hidden;
        }

        .timeline-title {
          color: white;
          text-shadow: 0 2px 10px rgba(255, 195, 0, 0.3);
        }

        .timeline-subtitle {
          color: rgba(255, 255, 255, 0.85);
        }

        .progress-bar-container {
          width: 100%;
          height: 4px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          margin-bottom: 3rem;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #FFC300 0%, #FFD700 100%);
          border-radius: 2px;
          transition: width 0.3s ease-out;
          box-shadow: 0 0 10px rgba(255, 195, 0, 0.6);
        }

        .timeline-scroll-container {
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #FFC300 rgba(255, 255, 255, 0.1);
        }

        .timeline-scroll-container::-webkit-scrollbar {
          height: 8px;
        }

        .timeline-scroll-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .timeline-scroll-container::-webkit-scrollbar-thumb {
          background: #FFC300;
          border-radius: 4px;
        }

        .timeline-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #FFD700;
        }

        .timeline-content {
          display: flex;
          gap: 2rem;
          padding: 2rem 1rem;
          min-width: min-content;
        }

        .timeline-step {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 280px;
          max-width: 280px;
          flex-shrink: 0;
        }

        .step-image-wrapper {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 1.5rem;
          border: 3px solid rgba(255, 195, 0, 0.3);
          transition: all 0.4s ease-in-out;
          background: rgba(255, 255, 255, 0.05);
        }

        .step-image-wrapper:hover {
          transform: scale(1.1);
          border-color: #FFC300;
          box-shadow: 
            0 0 20px rgba(255, 195, 0, 0.4),
            0 0 40px rgba(255, 195, 0, 0.2);
        }

        .step-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease-in-out;
        }

        .step-image-wrapper:hover .step-image {
          transform: scale(1.05);
        }

        .step-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #FFC300;
          margin-bottom: 0.75rem;
          text-align: center;
        }

        .step-description {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          line-height: 1.5;
          max-width: 260px;
        }

        .step-connector {
          position: absolute;
          top: 90px;
          right: -2rem;
          width: 2rem;
          height: 2px;
          background: linear-gradient(90deg, #FFC300 0%, rgba(255, 195, 0, 0.3) 100%);
        }

        @media (max-width: 768px) {
          .timeline-content {
            gap: 1.5rem;
            padding: 1.5rem 0.5rem;
          }

          .timeline-step {
            min-width: 240px;
            max-width: 240px;
          }

          .step-image-wrapper {
            width: 150px;
            height: 150px;
          }

          .step-title {
            font-size: 1.25rem;
          }

          .step-description {
            font-size: 0.875rem;
          }

          .step-connector {
            top: 75px;
          }
        }

        @media (max-width: 480px) {
          .timeline-step {
            min-width: 200px;
            max-width: 200px;
          }

          .step-image-wrapper {
            width: 130px;
            height: 130px;
          }

          .step-connector {
            top: 65px;
          }
        }
      `}</style>
    </section>
  );
}
