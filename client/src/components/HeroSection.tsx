import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import pizzaImage from '@assets/generated_images/3D_round_pizza_render_8830be4d.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background via-50% to-accent/15">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,107,53,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,107,53,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(255,107,53,0.05)_100%)]" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      
      <div className="absolute top-1/2 left-[68%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <img 
          src={pizzaImage} 
          alt="Pizza" 
          className="w-[450px] h-[450px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] object-contain animate-spin-slow"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 w-full">
        <div className="max-w-2xl">
          <div className="flex mb-6 animate-fade-in">
            <Badge variant="secondary" className="px-6 py-2 text-sm md:text-base gap-2">
              <Award className="w-4 h-4" />
              100% Halal Certified
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight">
            COSMIC Pizza<br />
            <span className="text-primary">& Donair</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Canada's Best Halal Pizza & Donair
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Where Quality Meets Customer Service
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              variant="default" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => console.log('Order Now clicked')}
              data-testid="button-order-hero"
            >
              Order Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
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