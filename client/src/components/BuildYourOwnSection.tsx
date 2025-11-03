import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import ingredientsImage from '@assets/generated_images/Fresh_pizza_ingredients_display_b1a8f202.png';

const features = [
  'Any number of toppings',
  'Multiple crust options',
  'Choice of sauces',
  'Half and half available',
  'Fresh ingredients only',
  'No soggy or oily pizzas',
];

export default function BuildYourOwnSection() {
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section id="build-your-own" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={textRef}
            className={`order-2 lg:order-1 scroll-animate ${textVisible ? 'animate-slide-in-left' : ''}`}
          >
            <Badge variant="secondary" className="mb-4">
              Customize
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-card-foreground mb-6">
              Build-Your-Own<br />
              Halal Pizza
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Create your perfect pizza exactly how you want it. Any toppings, crusts, and sauces. Enjoy half and half options.
            </p>

            <Card className="p-6 mb-8 bg-background">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3"
                    data-testid={`feature-build-${index}`}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            <p className="text-xl font-semibold text-primary mb-6">
              Say bye bye to soggy and oily pizzas.
            </p>

            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto btn-hover-lift"
              onClick={() => console.log('Start Building clicked')}
              data-testid="button-start-building"
            >
              Start Building Your Pizza
            </Button>
          </div>

          <div 
            ref={imageRef}
            className={`order-1 lg:order-2 scroll-animate ${imageVisible ? 'animate-slide-in-right' : ''}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl card-hover-lift">
              <img 
                src={ingredientsImage} 
                alt="Fresh Pizza Ingredients"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}