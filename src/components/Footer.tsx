import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const socialLinks = [
    { href: 'https://www.instagram.com/afro_vg?igsh=MTBhZ3d2MzEwOThjcg==', icon: 'Instagram', label: 'Instagram' },
    { href: 'https://t.me/Galisenok', icon: 'Send', label: 'Telegram' },
    { href: 'https://wa.me/message/QIHVUFNF4BLWB1', icon: 'MessageCircle', label: 'WhatsApp' },
    { href: 'https://vk.com/afro_vg', icon: 'Share2', label: 'VK' }
  ];

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
              Студия афроплетения и дредов в селе Высокая Гора, Казань
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <a href="tel:+79083308803" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="Phone" size={16} />
                +7 (908) 330-88-03
              </a>
              <a href="mailto:nevolosy@studio.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="Mail" size={16} />
                nevolosy@studio.ru
              </a>
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                <span>С. Высокая Гора, Мелиораторов 9в, 225 кабинет</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <p>Пн-Пт: 10:00 - 20:00</p>
              <p className="text-xs">(По предварительной записи)</p>
              <p className="pt-2">Сб-Вс: 10:00 - 19:00</p>
              <p className="text-xs">(По предварительной записи)</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-0">
                    <Icon name={social.icon} size={20} />
                  </Button>
                </a>
              ))}
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
