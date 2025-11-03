import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const locations = [
  {
    name: 'Downtown Location',
    address: '123 Main Street, Toronto, ON',
    phone: '(416) 555-0100',
    hours: 'Mon-Sun: 11AM - 11PM',
  },
  {
    name: 'North York',
    address: '456 Yonge Street, North York, ON',
    phone: '(416) 555-0200',
    hours: 'Mon-Sun: 11AM - 12AM',
  },
  {
    name: 'Mississauga',
    address: '789 Hurontario Street, Mississauga, ON',
    phone: '(905) 555-0300',
    hours: 'Mon-Sun: 11AM - 11PM',
  },
  {
    name: 'Scarborough',
    address: '321 Kennedy Road, Scarborough, ON',
    phone: '(416) 555-0400',
    hours: 'Mon-Sun: 11AM - 12AM',
  },
];

function LocationCard({ location, index }: { location: typeof locations[0], index: number }) {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <Card 
      ref={elementRef}
      className={`card-hover-lift gradient-hover card-gradient-overlay hover-glow scroll-animate ${isVisible ? 'animate-fade-in-up' : ''}`}
      style={{ animationDelay: `${index * 0.15}s` }}
      data-testid={`card-location-${index}`}
    >
      <CardHeader>
        <CardTitle className="text-2xl">{location.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <CardDescription className="text-base">
            {location.address}
          </CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary flex-shrink-0" />
          <CardDescription className="text-base">
            {location.phone}
          </CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary flex-shrink-0" />
          <CardDescription className="text-base">
            {location.hours}
          </CardDescription>
        </div>
        <Button 
          variant="outline" 
          className="w-full mt-4 btn-hover-lift gradient-border-hover"
          onClick={() => console.log(`Get directions to ${location.name}`)}
          data-testid={`button-directions-${index}`}
        >
          Get Directions
        </Button>
      </CardContent>
    </Card>
  );
}

export default function LocationsSection() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="locations" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-12 scroll-animate ${headerVisible ? 'animate-fade-in-up' : ''}`}
        >
          <Badge variant="secondary" className="mb-4">
            Visit Us
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Locations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Find your Favorite Store close by
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <LocationCard key={index} location={location} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}