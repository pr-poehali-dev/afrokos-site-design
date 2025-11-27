import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#price', label: 'Прайс' },
    { href: '#portfolio', label: 'Портфолио' },
    { href: '#masters', label: 'Мастера' },
    { href: '#reviews', label: 'Отзывы' },
    { href: '#booking', label: 'Запись' }
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Не волосы
            </h1>
          </div>
          
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <Button className="hidden md:inline-flex" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (999) 123-45-67
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-2 pb-4 border-b">
                  <Icon name="Sparkles" className="text-primary" size={28} />
                  <h2 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Не волосы
                  </h2>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="pt-4 border-t">
                  <Button className="w-full" size="lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (999) 123-45-67
                  </Button>
                </div>

                <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    г. Москва, ул. Примерная, 123
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    Пн-Пт: 10:00 - 21:00
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
