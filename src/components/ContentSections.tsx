import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
    image: 'https://cdn.poehali.dev/projects/be2e5e38-62bb-474e-8176-b0582fbab281/files/de08542e-64c5-4fb6-95a2-fb4078168896.jpg',
    title: 'Цветные афрокосы',
    category: 'Афрокосы'
  },
  {
    image: 'https://cdn.poehali.dev/projects/be2e5e38-62bb-474e-8176-b0582fbab281/files/ba89b2be-8a00-42a0-bb58-205a9cd51a26.jpg',
    title: 'Боксерские косы',
    category: 'Боксы'
  },
  {
    image: 'https://cdn.poehali.dev/projects/be2e5e38-62bb-474e-8176-b0582fbab281/files/06e0b81c-bab9-40ad-bb95-2b6296c88acc.jpg',
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

const ContentSections = () => {
  return (
    <>
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
    </>
  );
};

export default ContentSections;