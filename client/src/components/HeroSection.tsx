import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import pizzaImage from '@assets/stock_images/whole_pizza_circular_a3f1c49d.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background via-50% to-accent/15">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,107,53,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,107,53,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(255,107,53,0.05)_100%)]" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      
      <div className="absolute top-[42%] right-[5%] md:right-[10%] lg:right-[5%] -translate-y-1/2 pointer-events-none opacity-80 animate-fade-in">
        <img 
          src={pizzaImage} 
          alt="Pizza" 
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] object-contain animate-spin-slow"
          style={{ filter: 'drop-shadow(0 20px 60px rgba(255, 107, 53, 0.3))' }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-28 md:py-36 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          <div className="flex mb-8 animate-fade-in">
            <Badge variant="secondary" className="px-6 py-3 text-sm md:text-base gap-2 shadow-lg">
              <Award className="w-5 h-5" />
              100% Halal Certified
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 animate-fade-in-up leading-[1.1]">
            We make the best<br />
            <span className="text-primary">Pizzas & Donair</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-medium mb-4 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Where Quality Meets the Customer Service
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            100% Halal - Canada's Best Pizza & Donair
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            <Button 
              variant="default" 
              size="lg" 
              className="text-base md:text-lg px-10 py-7 h-auto btn-hover-lift shadow-xl"
              onClick={() => console.log('Order Now clicked')}
              data-testid="button-order-hero"
            >
              Order Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base md:text-lg px-10 py-7 h-auto btn-hover-lift"
              onClick={() => {
                const menu = document.getElementById('menu');
                menu?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="button-view-menu"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}