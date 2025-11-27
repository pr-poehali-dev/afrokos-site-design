import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

const priceList = [
  { category: 'Афрокосы', items: [
    { name: 'Афрокосы до лопаток', price: '3000₽', time: '4-6 часов' },
    { name: 'Афрокосы длинные', price: '4500₽', time: '6-8 часов' },
    { name: 'Афрокосы с канекалоном', price: '3500₽', time: '5-7 часов' }
  ]},
  { category: 'Боксерские косы', items: [
    { name: '2 косы', price: '2500₽', time: '2-3 часа' },
    { name: '4 косы', price: '3000₽', time: '3-4 часа' },
    { name: '6+ кос', price: '3500₽', time: '4-5 часов' }
  ]},
  { category: 'Дреды', items: [
    { name: 'Дреды короткие', price: '4000₽', time: '5-7 часов' },
    { name: 'Дреды средние', price: '5500₽', time: '7-9 часов' },
    { name: 'Дреды длинные', price: '7000₽', time: '9-12 часов' }
  ]},
  { category: 'Дополнительно', items: [
    { name: 'Расплетение', price: '1500₽', time: '2-3 часа' },
    { name: 'Украшения (бусины, кольца)', price: 'от 500₽', time: '30 мин' },
    { name: 'Коррекция', price: 'от 2000₽', time: '3-4 часа' }
  ]}
];

const portfolio = [
  {
    image: 'https://cdn.poehali.dev/projects/be2e5e38-62bb-474e-8176-b0582fbab281/files/654985ba-71d9-4730-a57d-c6646429efb5.jpg',
    title: 'Цветные афрокосы',
    category: 'Афрокосы'
  },
  {
    image: 'https://cdn.poehali.dev/projects/be2e5e38-62bb-474e-8176-b0582fbab281/files/dd70c363-1a97-47b4-a409-5fc7cc96d7d7.jpg',
    title: 'Боксерские косы',
    category: 'Боксы'
  },
  {
    image: 'https://cdn.poehali.dev/projects/be2e5e38-62bb-474e-8176-b0582fbab281/files/2e59d9ab-7c69-4967-bfda-6b07ab31be84.jpg',
    title: 'Процесс плетения',
    category: 'Работа'
  }
];

const masters = [
  {
    name: 'Анна Петрова',
    specialty: 'Специалист по афрокосам',
    experience: '5 лет опыта',
    description: 'Мастер классических и цветных афрокос, обладатель сертификата международной школы плетения'
  },
  {
    name: 'Мария Сидорова',
    specialty: 'Эксперт по дредам',
    experience: '7 лет опыта',
    description: 'Специализируется на безопасных дредах и сложных техниках плетения'
  },
  {
    name: 'Елена Иванова',
    specialty: 'Стилист-универсал',
    experience: '4 года опыта',
    description: 'Работает со всеми видами афроплетения, любит эксперименты с цветом'
  }
];

const reviews = [
  {
    name: 'Екатерина',
    rating: 5,
    text: 'Потрясающая работа! Афрокосы держатся уже месяц, выглядят как новые. Мастер очень внимательная и аккуратная.',
    date: '2 недели назад'
  },
  {
    name: 'Алина',
    rating: 5,
    text: 'Делала боксерские косы для отпуска - идеально! Быстро, качественно, красиво. Рекомендую всем!',
    date: '1 месяц назад'
  },
  {
    name: 'Дарья',
    rating: 5,
    text: 'Студия "Не волосы" - лучшая! Приятная атмосфера, профессиональные мастера, отличный результат.',
    date: '3 недели назад'
  }
];

const Index = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
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

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary text-primary-foreground">Студия афроплетения №1</Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Твой стиль —{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  твои правила
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональное афроплетение, дреды и боксерские косы. Более 500 довольных клиентов за 2024 год!
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
                src="https://cdn.poehali.dev/projects/be2e5e38-62bb-474e-8176-b0582fbab281/files/654985ba-71d9-4730-a57d-c6646429efb5.jpg"
                alt="Афроплетение"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что мы предлагаем
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр услуг афроплетения для создания вашего уникального образа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white">
                      Подробнее
                      <Icon name="ChevronRight" size={16} className="ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Прайс-лист</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Цены на услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей. Точная стоимость зависит от длины волос
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2">
                {priceList.map((category, index) => (
                  <TabsTrigger key={index} value={index.toString()} className="text-sm">
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {priceList.map((category, index) => (
                <TabsContent key={index} value={index.toString()} className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex} 
                            className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-white to-purple-50 hover:shadow-md transition-shadow"
                          >
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">{item.name}</h4>
                              <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                                <Icon name="Clock" size={14} />
                                {item.time}
                              </p>
                            </div>
                            <div className="text-2xl font-bold text-primary">{item.price}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Посмотрите на результаты работы наших мастеров
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="mb-2 bg-white text-primary">{item.category}</Badge>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="masters" className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наша команда</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши мастера
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с многолетним опытом и любовью к своему делу
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masters.map((master, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="text-white" size={48} />
                  </div>
                  <CardTitle className="text-2xl">{master.name}</CardTitle>
                  <Badge className="mx-auto">{master.specialty}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-accent mb-2">{master.experience}</p>
                  <p className="text-muted-foreground">{master.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Что говорят клиенты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы гордимся каждым отзывом наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
