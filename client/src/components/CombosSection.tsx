import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import comboImage from '@assets/generated_images/Pizza_combo_meal_photo_2b68e7ef.png';

const combos = [
  {
    title: 'Classic Combo',
    description: 'Large pizza with 2 toppings + 2L pop',
    price: '$11.99',
    image: comboImage,
  },
  {
    title: 'Family Feast',
    description: '2 Large pizzas with 3 toppings each + wings',
    price: '$29.99',
    image: comboImage,
  },
  {
    title: 'Party Special',
    description: '3 X-Large pizzas + garlic bread + pop',
    price: '$44.99',
    image: comboImage,
  },
];

export default function CombosSection() {
  return (
    <section id="combos" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Special Offers
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Combos - Pickup Special
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Pizzas Starting from $11.99 only
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combos.map((combo, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-combo-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={combo.image} 
                  alt={combo.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{combo.title}</CardTitle>
                <CardDescription className="text-base">
                  {combo.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{combo.price}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={() => console.log(`Order ${combo.title}`)}
                  data-testid={`button-order-combo-${index}`}
                >
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}