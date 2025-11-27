import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
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
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#price" className="text-sm font-medium hover:text-primary transition-colors">Прайс</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <a href="#masters" className="text-sm font-medium hover:text-primary transition-colors">Мастера</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#booking" className="text-sm font-medium hover:text-primary transition-colors">Запись</a>
          </div>
          <Button className="hidden md:inline-flex" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
