import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-primary text-primary-foreground">Студия афроплетения в Казани</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Твой стиль —{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                твои правила
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Профессиональное афроплетение, дреды и боксерские косы в Казани и селе Высокая Гора. Более 500 довольных клиентов!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                <a href="#booking" className="flex items-center">
                  Записаться онлайн
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <a href="#portfolio" className="flex items-center">
                  <Icon name="Image" size={20} className="mr-2" />
                  Наши работы
                </a>
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">7</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Качество</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl opacity-20 blur-3xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/be2e5e38-62bb-474e-8176-b0582fbab281/files/de08542e-64c5-4fb6-95a2-fb4078168896.jpg"
              alt="Афроплетение"
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;