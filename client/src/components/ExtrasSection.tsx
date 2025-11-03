import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coffee, Pizza, Cake, Sandwich } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const extras = [
  { icon: Sandwich, name: 'Wings & Sides', description: 'Crispy chicken wings and garlic bread', price: 'From $6.99' },
  { icon: Coffee, name: 'Beverages', description: 'Soft drinks and juices', price: 'From $2.99' },
  { icon: Cake, name: 'Desserts', description: 'Sweet treats to complete your meal', price: 'From $4.99' },
  { icon: Pizza, name: 'Dipping Sauces', description: 'Extra ranch, garlic, BBQ and more', price: 'From $1.99' },
];

function ExtraCard({ extra, index }: { extra: typeof extras[0], index: number }) {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <Card 
      ref={elementRef}
      className={`text-center card-hover-lift gradient-hover card-gradient-overlay hover-glow bg-background scroll-animate ${isVisible ? 'animate-fade-in-up' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      data-testid={`card-extra-${index}`}
    >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shimmer pulse-glow">
                    <extra.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">{extra.name}</CardTitle>
                <CardDescription>{extra.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">{extra.price}</p>
              </CardContent>
            </Card>
  );
}

export default function ExtrasSection() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-animate ${headerVisible ? 'animate-fade-in-up' : ''}`}
        >
          <Badge variant="secondary" className="mb-4">
            Add-Ons
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-card-foreground mb-4">
            Extras
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Compliment your main dish!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extras.map((extra, index) => (
            <ExtraCard key={index} extra={extra} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}