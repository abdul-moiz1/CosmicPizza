import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Briefcase, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import cateringImage from '@assets/generated_images/Elegant_catering_event_scene_baa4b6e0.png';

const occasions = [
  { icon: Heart, name: 'Weddings' },
  { icon: Briefcase, name: 'Corporate Events' },
  { icon: Users, name: 'Special Occasions' },
];

export default function CateringSection() {
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className={`scroll-animate ${imageVisible ? 'animate-slide-in-left' : ''}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl card-hover-lift">
              <img 
                src={cateringImage} 
                alt="Catering Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div 
            ref={textRef}
            className={`scroll-animate ${textVisible ? 'animate-slide-in-right' : ''}`}
          >
            <Badge variant="secondary" className="mb-4">
              Catering Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-card-foreground mb-6">
              Perfect for Every<br />
              Occasion
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Whether it's a wedding, corporate gathering, or any special occasion, COSMIC Pizza & Donair has you covered with our premium catering services.
            </p>

            <Card className="p-6 mb-8 bg-background">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {occasions.map((occasion, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center text-center gap-3"
                    data-testid={`occasion-${index}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <occasion.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{occasion.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto btn-hover-lift"
                onClick={() => console.log('Request Quote clicked')}
                data-testid="button-request-quote"
              >
                Request a Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto btn-hover-lift"
                onClick={() => console.log('Contact Us clicked')}
                data-testid="button-contact-catering"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}