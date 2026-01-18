import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Building2',
      title: 'Жилищное строительство',
      description: 'Строительство многоквартирных домов, таунхаусов и частных коттеджей',
      features: [
        'Многоквартирные дома',
        'Частные коттеджи и таунхаусы',
        'Малоэтажное строительство',
        'Строительство под ключ',
      ],
    },
    {
      icon: 'Factory',
      title: 'Промышленное строительство',
      description: 'Возведение производственных и складских комплексов любой сложности',
      features: [
        'Производственные цеха',
        'Складские комплексы',
        'Логистические центры',
        'Ангары и навесы',
      ],
    },
    {
      icon: 'Store',
      title: 'Коммерческая недвижимость',
      description: 'Строительство торговых центров, офисов и бизнес-центров',
      features: [
        'Торговые центры',
        'Офисные здания',
        'Бизнес-центры класса А',
        'Гостиницы и отели',
      ],
    },
    {
      icon: 'Wrench',
      title: 'Реконструкция и ремонт',
      description: 'Капитальный ремонт и полная реконструкция существующих зданий',
      features: [
        'Капитальный ремонт',
        'Реконструкция фасадов',
        'Усиление конструкций',
        'Модернизация инженерных систем',
      ],
    },
    {
      icon: 'Layers',
      title: 'Фундаментные работы',
      description: 'Устройство фундаментов любых типов для различных видов грунтов',
      features: [
        'Ленточные фундаменты',
        'Свайные фундаменты',
        'Плитные основания',
        'Монолитные работы',
      ],
    },
    {
      icon: 'Zap',
      title: 'Инженерные системы',
      description: 'Проектирование и монтаж всех видов инженерных коммуникаций',
      features: [
        'Водоснабжение и канализация',
        'Отопление и вентиляция',
        'Электроснабжение',
        'Системы безопасности',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Наши услуги</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Полный спектр строительных услуг для реализации проектов любой сложности
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={service.icon} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Icon name="Check" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Нужна консультация?</h2>
          <p className="text-xl mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист свяжется с вами в ближайшее время
          </p>
          <Button size="lg" className="text-lg px-8">
            <Icon name="Phone" className="mr-2 h-5 w-5" />
            Заказать звонок
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;