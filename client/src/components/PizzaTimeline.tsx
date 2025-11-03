import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
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
  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-pizza-timeline">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Process
          </Badge>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            data-testid="text-timeline-title"
          >
            Our Cosmic Pizza Journey
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground" data-testid="text-timeline-subtitle">
            From dough to delivery — made fresh every step of the way.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {timelineSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineStep 
                key={step.id}
                step={step}
                isEven={isEven}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineStep({ step, isEven }: { step: typeof timelineSteps[0], isEven: boolean }) {
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <div 
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      data-testid={`card-timeline-step-${step.id}`}
    >
      <div 
        ref={textRef}
        className={`${isEven ? 'order-2 lg:order-1' : 'order-2'} scroll-animate ${textVisible ? (isEven ? 'animate-slide-in-left' : 'animate-slide-in-right') : ''}`}
      >
        <Badge variant="outline" className="mb-4">
          Step {step.id}
        </Badge>
        <h3 
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          data-testid={`text-step-title-${step.id}`}
        >
          {step.title}
        </h3>
        <p 
          className="text-lg md:text-xl text-muted-foreground"
          data-testid={`text-step-description-${step.id}`}
        >
          {step.description}
        </p>
      </div>

      <div 
        ref={imageRef}
        className={`${isEven ? 'order-1 lg:order-2' : 'order-1'} scroll-animate ${imageVisible ? (isEven ? 'animate-slide-in-right' : 'animate-slide-in-left') : ''}`}
        data-testid={`container-step-image-${step.id}`}
      >
        <div className="rounded-2xl overflow-hidden shadow-2xl card-hover-lift">
          <img 
            src={step.image} 
            alt={step.title}
            className="w-full h-full object-cover"
            data-testid={`img-step-${step.id}`}
          />
        </div>
      </div>
    </div>
  );
}
