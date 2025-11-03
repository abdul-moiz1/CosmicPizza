import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

type MenuCategory = 'all' | 'pizzas' | 'wings' | 'platters' | 'sides' | 'drinks' | 'desserts';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

const menuItems: MenuItem[] = [
  { id: 1, name: 'Pepperoni Classic', description: 'Premium pepperoni on our signature crust', price: '$14.99', category: 'pizzas', popular: true },
  { id: 2, name: 'Canadian Bacon', description: 'Peameal bacon, mushrooms, and mozzarella', price: '$16.99', category: 'pizzas', popular: true },
  { id: 3, name: 'Montreal Smoked Meat', description: 'Montreal-style smoked meat, pickles, mustard drizzle', price: '$18.99', category: 'pizzas' },
  { id: 4, name: 'Vegetarian Supreme', description: 'Fresh garden vegetables and herbs', price: '$13.99', category: 'pizzas', vegetarian: true },
  { id: 5, name: 'Meat Lovers', description: 'Pepperoni, sausage, bacon, and ham', price: '$17.99', category: 'pizzas' },
  { id: 6, name: 'BBQ Chicken', description: 'Tangy BBQ sauce with tender chicken', price: '$15.99', category: 'pizzas' },
  { id: 7, name: 'Cosmic Special', description: 'Our signature combination of premium toppings', price: '$19.99', category: 'pizzas', popular: true },
  { id: 8, name: 'Margherita', description: 'Classic tomato, basil, and fresh mozzarella', price: '$12.99', category: 'pizzas', vegetarian: true },
  
  { id: 9, name: 'Honey Garlic Wings', description: '1 lb of wings tossed in honey garlic sauce', price: '$12.99', category: 'wings', popular: true },
  { id: 10, name: 'BBQ Wings', description: '1 lb of wings with smoky BBQ sauce', price: '$12.99', category: 'wings' },
  { id: 11, name: 'Hot Wings', description: '1 lb of spicy buffalo-style wings', price: '$12.99', category: 'wings', spicy: true },
  { id: 12, name: 'Maple Chipotle Wings', description: 'Canadian maple syrup with chipotle kick', price: '$13.99', category: 'wings', spicy: true, popular: true },
  { id: 13, name: 'Salt & Pepper Wings', description: 'Crispy wings with seasoned salt', price: '$11.99', category: 'wings' },
  { id: 14, name: 'Teriyaki Wings', description: 'Sweet teriyaki glazed wings', price: '$12.99', category: 'wings' },
  
  { id: 15, name: 'Family Pizza Platter', description: '2 large pizzas, 2 lb wings, garlic bread', price: '$54.99', category: 'platters', popular: true },
  { id: 16, name: 'Party Pack', description: '3 large pizzas, 3 lb wings, 2L pop, dessert', price: '$79.99', category: 'platters' },
  { id: 17, name: 'Game Day Special', description: '4 lb wings, large pizza, poutine, 2L pop', price: '$64.99', category: 'platters', popular: true },
  { id: 18, name: 'Wing Lover Platter', description: '4 lb wings (mix flavors), fries, 4 dips', price: '$45.99', category: 'platters' },
  
  { id: 19, name: 'Classic Poutine', description: 'Fresh-cut fries, cheese curds, gravy', price: '$7.99', category: 'sides', popular: true },
  { id: 20, name: 'Loaded Poutine', description: 'Poutine topped with bacon and green onions', price: '$10.99', category: 'sides' },
  { id: 21, name: 'Garlic Bread', description: 'Fresh baked with butter and garlic', price: '$4.99', category: 'sides' },
  { id: 22, name: 'Cheesy Garlic Bread', description: 'Garlic bread with melted mozzarella', price: '$6.99', category: 'sides' },
  { id: 23, name: 'Fresh Cut Fries', description: 'Crispy golden fries with seasoning', price: '$5.99', category: 'sides' },
  { id: 24, name: 'Caesar Salad', description: 'Romaine, parmesan, croutons, dressing', price: '$7.99', category: 'sides', vegetarian: true },
  { id: 25, name: 'Garden Salad', description: 'Mixed greens with fresh vegetables', price: '$6.99', category: 'sides', vegetarian: true },
  { id: 26, name: 'Onion Rings', description: 'Crispy breaded onion rings', price: '$6.99', category: 'sides', vegetarian: true },
  
  { id: 27, name: 'Coca-Cola (2L)', description: 'Classic Coca-Cola', price: '$3.99', category: 'drinks' },
  { id: 28, name: 'Sprite (2L)', description: 'Lemon-lime soda', price: '$3.99', category: 'drinks' },
  { id: 29, name: 'Canada Dry Ginger Ale (2L)', description: 'Classic Canadian ginger ale', price: '$3.99', category: 'drinks', popular: true },
  { id: 30, name: 'Iced Tea (2L)', description: 'Refreshing iced tea', price: '$3.99', category: 'drinks' },
  { id: 31, name: 'Bottled Water', description: 'Spring water 500ml', price: '$1.99', category: 'drinks' },
  { id: 32, name: 'Orange Juice', description: 'Fresh orange juice 1L', price: '$4.99', category: 'drinks' },
  
  { id: 33, name: 'Chocolate Brownie', description: 'Warm fudge brownie with chocolate chips', price: '$5.99', category: 'desserts', popular: true },
  { id: 34, name: 'Cookies (6 pack)', description: 'Chocolate chip cookies, fresh baked', price: '$6.99', category: 'desserts' },
  { id: 35, name: 'Cinnamon Sticks', description: 'Sweet cinnamon sticks with icing', price: '$7.99', category: 'desserts' },
  { id: 36, name: 'Ice Cream Tub', description: 'Vanilla ice cream 500ml', price: '$5.99', category: 'desserts' },
];

const categories = [
  { id: 'all', label: 'All Items' },
  { id: 'pizzas', label: 'Pizzas' },
  { id: 'wings', label: 'Wings' },
  { id: 'platters', label: 'Platters' },
  { id: 'sides', label: 'Sides' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'desserts', label: 'Desserts' },
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#0B132B] to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4" data-testid="badge-menu">
              Our Menu
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" data-testid="text-menu-title">
              Canadian Favorites
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto" data-testid="text-menu-subtitle">
              100% Halal. Fresh ingredients. Made with love for Canadians.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                data-testid="input-search-menu"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id as MenuCategory)}
                className={`transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#FFC300] text-black hover:bg-[#FFD700]'
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                }`}
                data-testid={`button-category-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground" data-testid="text-no-results">
                No items found. Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card 
                  key={item.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/80"
                  data-testid={`card-menu-item-${item.id}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300" data-testid={`text-item-name-${item.id}`}>
                        {item.name}
                      </CardTitle>
                      <div className="flex flex-col gap-1">
                        {item.popular && (
                          <Badge variant="default" className="bg-[#FFC300] text-black text-xs whitespace-nowrap">
                            Popular
                          </Badge>
                        )}
                        {item.spicy && (
                          <Badge variant="destructive" className="text-xs whitespace-nowrap">
                            Spicy 🌶️
                          </Badge>
                        )}
                        {item.vegetarian && (
                          <Badge variant="secondary" className="text-xs whitespace-nowrap">
                            Vegetarian
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-sm" data-testid={`text-item-description-${item.id}`}>
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Price</p>
                        <p className="text-2xl font-bold text-[#FFC300]" data-testid={`text-item-price-${item.id}`}>
                          {item.price}
                        </p>
                      </div>
                      <Button 
                        size="default"
                        className="bg-[#FFC300] text-black hover:bg-[#FFD700] transition-all duration-300"
                        onClick={() => console.log(`Add ${item.name} to cart`)}
                        data-testid={`button-add-item-${item.id}`}
                      >
                        Add to Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
