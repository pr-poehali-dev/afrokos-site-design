import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Sparkles" size={28} />
              <h3 className="text-xl font-bold">Не волосы</h3>
            </div>
            <p className="text-slate-300 text-sm">
              Студия афроплетения и дредов в самом сердце города
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (999) 123-45-67
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@nevolosy.ru
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                г. Москва, ул. Примерная, 123
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p>Пн-Пт: 10:00 - 21:00</p>
              <p>Сб-Вс: 11:00 - 20:00</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-0">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-0">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-0">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          © 2024 Не волосы. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
