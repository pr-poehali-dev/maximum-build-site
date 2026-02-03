import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      category: 'Проектирование домов',
      icon: 'FileText',
      description: 'Разработка индивидуальных проектов домов любой сложности',
      items: [],
    },
    {
      category: 'Строительство домов',
      icon: 'Home',
      description: 'Строительство загородных домов и коттеджей под ключ',
      items: [],
    },
    {
      category: 'Очистные сооружения',
      icon: 'Droplets',
      description: 'Установка систем автономной канализации',
      items: ['Септики', 'Станции биологической очистки', 'Установка септика'],
    },
    {
      category: 'Дренажные работы',
      icon: 'Waves',
      description: 'Отвод грунтовых и поверхностных вод с участка',
      items: [],
    },
    {
      category: 'Ливневая канализация',
      icon: 'CloudRain',
      description: 'Системы сбора и отвода дождевой воды',
      items: [],
    },
    {
      category: 'Заборы и ограждения',
      icon: 'Fence',
      description: 'Установка заборов из любых материалов',
      items: [],
    },
    {
      category: 'Фундаментные работы',
      icon: 'Box',
      description: 'Устройство фундаментов всех типов',
      items: [],
    },
    {
      category: 'Кровельные работы',
      icon: 'Triangle',
      description: 'Монтаж и ремонт кровли любой сложности',
      items: ['Плоская крыша', 'Скатная крыша'],
    },
    {
      category: 'Утепление фасадов',
      icon: 'Shield',
      description: 'Теплоизоляция наружных стен зданий',
      items: [],
    },
    {
      category: 'Отделочные работы',
      icon: 'Paintbrush',
      description: 'Внутренняя и наружная отделка помещений',
      items: [],
    },
    {
      category: 'Штукатурные работы',
      icon: 'Layers',
      description: 'Машинная и ручная штукатурка стен',
      items: ['Гипсовая штукатурка стен', 'Механизированная штукатурка', 'Цементно-известковая штукатурка'],
    },
    {
      category: 'Стяжка пола',
      icon: 'Square',
      description: 'Выравнивание полов под финишное покрытие',
      items: [],
    },
    {
      category: 'Гидроизоляция',
      icon: 'Umbrella',
      description: 'Защита конструкций от влаги и воды',
      items: [],
    },
    {
      category: 'Благоустройство территории',
      icon: 'Trees',
      description: 'Ландшафтный дизайн и озеленение участка',
      items: [
        'Автоматический полив',
        'Газон под ключ (посев, посадка)',
        'Ландшафтный дизайн',
        'Ландшафтный проект',
        'Озеленение территории',
        'Укладка тротуарной плитки',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Наши услуги</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Полный спектр строительных услуг от проектирования до благоустройства
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const slug = service.category.toLowerCase().replace(/\s+/g, '-');
              return (
              <Link key={index} to={`/services/${slug}`}>
                <Card
                  className="p-6 hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary/50 h-full"
                >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.category}
                    </h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                {service.items.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Icon name="ChevronRight" className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button variant="outline" className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground">
                  Подробнее
                </Button>
              </Card>
              </Link>
            );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="Award" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">350+</h3>
                <p className="text-muted-foreground">Выполненных проектов</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="Users" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">16</h3>
                <p className="text-muted-foreground">Лет опыта работы</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon name="ThumbsUp" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">98%</h3>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Phone" className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Нужна консультация?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист расскажет подробнее о наших услугах
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Получить консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;