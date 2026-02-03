import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      category: 'Проектирование домов',
      items: [],
    },
    {
      category: 'Строительство домов',
      items: [],
    },
    {
      category: 'Очистные сооружения',
      items: ['Септики', 'Станции биологической очистки', 'Установка септика'],
    },
    {
      category: 'Дренажные работы',
      items: [],
    },
    {
      category: 'Ливневая канализация',
      items: [],
    },
    {
      category: 'Заборы и ограждения',
      items: [],
    },
    {
      category: 'Фундаментные работы',
      items: [],
    },
    {
      category: 'Кровельные работы',
      items: ['Плоская крыша', 'Скатная крыша'],
    },
    {
      category: 'Утепление фасадов',
      items: [],
    },
    {
      category: 'Отделочные работы',
      items: [],
    },
    {
      category: 'Штукатурные работы',
      items: ['Гипсовая штукатурка стен', 'Механизированная штукатурка', 'Цементно-известковая штукатурка'],
    },
    {
      category: 'Стяжка пола',
      items: [],
    },
    {
      category: 'Гидроизоляция',
      items: [],
    },
    {
      category: 'Благоустройство территории',
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
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {services.map((service, index) => (
              <div key={index}>
                <Link
                  to={`/services/${service.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-lg font-semibold hover:text-primary transition-colors hover:underline"
                >
                  {service.category}
                </Link>
                {service.items.length > 0 && (
                  <ul className="mt-2 ml-6 space-y-1">
                    {service.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={`/services/${service.category.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-base text-muted-foreground hover:text-primary transition-colors hover:underline"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
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
