import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import pizzaImage from '@assets/generated_images/Appetizing_whole_pizza_illustration_05787be9.png';

const menuItems = [
  { name: 'Pepperoni Classic', description: 'Loaded with premium pepperoni', price: '$14.99' },
  { name: 'Vegetarian Supreme', description: 'Fresh veggies on every slice', price: '$13.99' },
  { name: 'Meat Lovers', description: 'All your favorite meats', price: '$16.99' },
  { name: 'Hawaiian Paradise', description: 'Ham and pineapple perfection', price: '$14.99' },
  { name: 'BBQ Chicken', description: 'Tangy BBQ with tender chicken', price: '$15.99' },
  { name: 'Cosmic Special', description: 'Our signature combination', price: '$17.99' },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Menu
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Fresh from Pizza Menu
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            100% Halal. Our Specialty Pizzas are the most selling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up bg-gradient-to-br from-card to-card/80"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-menu-${index}`}
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={pizzaImage} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute top-4 right-4 z-20">
                  <Badge variant="default" className="bg-primary/90 backdrop-blur-sm">
                    Popular
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Starting from</p>
                    <p className="text-3xl font-bold text-primary">{item.price}</p>
                  </div>
                  <Button 
                    size="default"
                    className="group-hover:scale-105 transition-transform duration-300"
                    onClick={() => console.log(`Add ${item.name} to cart`)}
                    data-testid={`button-add-menu-${index}`}
                  >
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}