import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Sparkles',
    title: 'Афрокосы',
    description: 'Классические и цветные косички любой длины',
    price: 'от 3000₽'
  },
  {
    icon: 'Heart',
    title: 'Боксерские косы',
    description: 'Стильные французские косы для активного образа',
    price: 'от 2500₽'
  },
  {
    icon: 'Star',
    title: 'Дреды',
    description: 'Безопасные и натуральные дреды',
    price: 'от 4000₽'
  },
  {
    icon: 'Zap',
    title: 'Косы с канекалоном',
    description: 'Объемные косы с добавлением искусственных волос',
    price: 'от 3500₽'
  },
  {
    icon: 'Crown',
    title: 'Сенегальские косы',
    description: 'Элегантные тонкие косички',
    price: 'от 4500₽'
  },
  {
    icon: 'Gem',
    title: 'Брейды с украшениями',
    description: 'Косы с бусинами, кольцами и аксессуарами',
    price: 'от 3000₽'
  }
];

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', service: '', date: '', message: '' });
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Онлайн-запись</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Запишитесь на процедуру
            </h2>
            <p className="text-xl text-muted-foreground">
              Заполните форму, и мы свяжемся с вами для подтверждения записи
            </p>
          </div>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Услуга</label>
                  <select 
                    className="w-full px-3 py-2 rounded-md border border-input bg-background"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Желаемая дата</label>
                  <Input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <Textarea 
                    placeholder="Расскажите о ваших пожеланиях" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
