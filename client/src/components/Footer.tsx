import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">COSMIC</h3>
            <p className="text-muted-foreground mb-4">
              Canada's Best Halal Pizza & Donair. Where Quality Meets Customer Service.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => console.log('Facebook clicked')}
                data-testid="button-facebook"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => console.log('Instagram clicked')}
                data-testid="button-instagram"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => console.log('Twitter clicked')}
                data-testid="button-twitter"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="link-footer-menu"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => document.getElementById('combos')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="link-footer-combos"
                >
                  Combos
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="link-footer-locations"
                >
                  Locations
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => console.log('Catering clicked')}
                  data-testid="link-footer-catering"
                >
                  Catering
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@cosmicpizza.ca</li>
              <li>Phone: 1-800-COSMIC-1</li>
              <li>Hours: Mon-Sun 11AM - 11PM</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border text-center text-muted-foreground">
          <p>&copy; 2025 COSMIC Pizza & Donair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}