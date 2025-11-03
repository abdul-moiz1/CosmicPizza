import { Award, Leaf, Truck, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const features = [
  { icon: Award, text: '100% Halal Certified' },
  { icon: Leaf, text: 'Fresh Ingredients' },
  { icon: Truck, text: 'Fast Delivery' },
  { icon: MapPin, text: 'Multiple Locations' },
];

function TrustFeature({ feature, index }: { feature: typeof features[0], index: number }) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.5 });
  
  return (
    <div 
      ref={elementRef}
      className={`flex flex-col md:flex-row items-center gap-3 text-center md:text-left scroll-animate ${isVisible ? 'animate-fade-in-up' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      data-testid={`feature-${index}`}
    >
      <feature.icon className="w-8 h-8 text-primary flex-shrink-0 transition-transform duration-300 hover:scale-110" />
      <span className="text-sm md:text-base font-medium text-card-foreground">
        {feature.text}
      </span>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="py-8 bg-card border-y border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <TrustFeature key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}