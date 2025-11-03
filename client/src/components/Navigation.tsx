import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl md:text-3xl font-bold text-primary">
                COSMIC
              </h1>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('combos')}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-combos"
              >
                Combos
              </button>
              <button 
                onClick={() => scrollToSection('build-your-own')}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-build"
              >
                Build Your Own
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-menu"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('locations')}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-locations"
              >
                Locations
              </button>
              <Button 
                variant="default" 
                size="default"
                onClick={() => console.log('Order Now clicked')}
                data-testid="button-order-nav"
              >
                Order Now
              </Button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background md:hidden pt-20">
          <div className="flex flex-col gap-4 p-8">
            <button
              onClick={() => scrollToSection('combos')}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors text-left"
              data-testid="link-combos-mobile"
            >
              Combos
            </button>
            <button
              onClick={() => scrollToSection('build-your-own')}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors text-left"
              data-testid="link-build-mobile"
            >
              Build Your Own
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors text-left"
              data-testid="link-menu-mobile"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('locations')}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors text-left"
              data-testid="link-locations-mobile"
            >
              Locations
            </button>
            <Button 
              variant="default" 
              size="lg" 
              className="mt-4"
              onClick={() => {
                console.log('Order Now clicked');
                setIsMobileMenuOpen(false);
              }}
              data-testid="button-order-mobile"
            >
              Order Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
}