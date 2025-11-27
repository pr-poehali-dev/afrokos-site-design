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

  const socialLinks = [
    { href: 'https://www.instagram.com/afro_vg?igsh=MTBhZ3d2MzEwOThjcg==', icon: 'Instagram', label: 'Instagram' },
    { href: 'https://t.me/Galisenok', icon: 'Send', label: 'Telegram' },
    { href: 'https://wa.me/message/QIHVUFNF4BLWB1', icon: 'MessageCircle', label: 'WhatsApp' },
    { href: 'https://vk.com/afro_vg', icon: 'Share2', label: 'VK' }
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
          
          <div className="hidden lg:flex gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 ml-2">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <a href="tel:+79083308803" className="hidden lg:inline-flex">
            <Button size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (908) 330-88-03
            </Button>
          </a>

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
                  <a href="tel:+79083308803" className="block">
                    <Button className="w-full" size="lg">
                      <Icon name="Phone" size={20} className="mr-2" />
                      +7 (908) 330-88-03
                    </Button>
                  </a>
                </div>

                <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} />
                    С. Высокая Гора, Мелиораторов 9в, 225 кабинет
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    Пн-Пт: 10:00 - 20:00
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-3">Мы в соцсетях</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                        aria-label={social.label}
                      >
                        <Icon name={social.icon} size={20} className="text-primary" />
                      </a>
                    ))}
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