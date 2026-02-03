import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ServiceDetail = () => {
  const { slug } = useParams();

  const servicesData: Record<string, any> = {
    'проектирование-домов': {
      title: 'Проектирование домов',
      icon: 'FileText',
      description: 'Разработка индивидуальных проектов домов и коттеджей любой сложности с учетом всех ваших пожеланий',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
      advantages: [
        'Индивидуальный подход к каждому проекту',
        'Учет особенностей участка и грунта',
        'Соответствие всем строительным нормам',
        'Полный комплект документации',
        'Бесплатные консультации архитектора',
        '3D визуализация проекта',
      ],
      stages: [
        { title: 'Консультация', description: 'Встреча с архитектором, обсуждение пожеланий' },
        { title: 'Эскизный проект', description: 'Разработка концепции и планировки' },
        { title: 'Рабочий проект', description: 'Детальная проработка всех узлов' },
        { title: 'Смета', description: 'Расчет стоимости строительства' },
      ],
      price: 'от 30 000 ₽',
    },
    'строительство-домов': {
      title: 'Строительство домов',
      icon: 'Home',
      description: 'Строительство загородных домов и коттеджей под ключ из любых материалов с гарантией качества',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg',
      advantages: [
        'Строительство под ключ',
        'Собственная бригада мастеров',
        'Гарантия на работы 5 лет',
        'Контроль качества на каждом этапе',
        'Строгое соблюдение сроков',
        'Прозрачное ценообразование',
      ],
      stages: [
        { title: 'Подготовка участка', description: 'Расчистка, разметка, подъездные пути' },
        { title: 'Фундамент', description: 'Устройство фундамента выбранного типа' },
        { title: 'Коробка', description: 'Возведение стен, монтаж перекрытий' },
        { title: 'Кровля', description: 'Монтаж кровельной системы' },
        { title: 'Отделка', description: 'Внутренняя и наружная отделка' },
      ],
      price: 'от 35 000 ₽/м²',
    },
    'очистные-сооружения': {
      title: 'Очистные сооружения',
      icon: 'Droplets',
      description: 'Установка автономных систем канализации - септиков и станций биологической очистки',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
      advantages: [
        'Подбор оптимальной системы',
        'Монтаж за 1-2 дня',
        'Гарантия на установку',
        'Все необходимые материалы в комплекте',
        'Консультации по эксплуатации',
        'Сервисное обслуживание',
      ],
      stages: [
        { title: 'Выбор системы', description: 'Расчет объема и типа очистного сооружения' },
        { title: 'Подготовка котлована', description: 'Земляные работы, песчаная подушка' },
        { title: 'Установка', description: 'Монтаж септика, подключение труб' },
        { title: 'Запуск', description: 'Пусконаладочные работы, инструктаж' },
      ],
      price: 'от 95 000 ₽',
    },
    'фундаментные-работы': {
      title: 'Фундаментные работы',
      icon: 'Box',
      description: 'Устройство фундаментов всех типов: ленточные, свайные, плитные с учетом особенностей грунта',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
      advantages: [
        'Геологическое исследование участка',
        'Расчет оптимального типа фундамента',
        'Использование качественных материалов',
        'Гидроизоляция и утепление',
        'Гарантия на работы',
        'Контроль качества бетона',
      ],
      stages: [
        { title: 'Геология', description: 'Исследование грунта и расчет нагрузок' },
        { title: 'Разметка', description: 'Вынос осей, земляные работы' },
        { title: 'Армирование', description: 'Установка арматурного каркаса' },
        { title: 'Бетонирование', description: 'Заливка бетона, уход за бетоном' },
      ],
      price: 'от 8 500 ₽/м³',
    },
    'кровельные-работы': {
      title: 'Кровельные работы',
      icon: 'Triangle',
      description: 'Монтаж и ремонт кровли любой сложности - от простой двускатной до многоуровневой',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg',
      advantages: [
        'Монтаж любых кровельных материалов',
        'Профессиональные кровельщики',
        'Гарантия герметичности',
        'Утепление и пароизоляция',
        'Монтаж водосточной системы',
        'Установка снегозадержателей',
      ],
      stages: [
        { title: 'Стропильная система', description: 'Монтаж стропил и обрешетки' },
        { title: 'Гидроизоляция', description: 'Укладка гидроизоляционной пленки' },
        { title: 'Утепление', description: 'Монтаж утеплителя и пароизоляции' },
        { title: 'Кровельное покрытие', description: 'Укладка финишного покрытия' },
      ],
      price: 'от 1 200 ₽/м²',
    },
    'отделочные-работы': {
      title: 'Отделочные работы',
      icon: 'Paintbrush',
      description: 'Внутренняя и наружная отделка помещений любой сложности под ключ',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
      advantages: [
        'Полный цикл отделочных работ',
        'Опытные мастера-отделочники',
        'Работа с любыми материалами',
        'Помощь в подборе материалов',
        'Гарантия на все виды работ',
        'Уборка после завершения',
      ],
      stages: [
        { title: 'Черновая отделка', description: 'Штукатурка, стяжка, электрика' },
        { title: 'Чистовая отделка', description: 'Шпаклевка, покраска, обои' },
        { title: 'Укладка покрытий', description: 'Ламинат, плитка, другие материалы' },
        { title: 'Финишные работы', description: 'Установка плинтусов, розеток, выключателей' },
      ],
      price: 'от 1 500 ₽/м²',
    },
  };

  const service = servicesData[slug || ''] || servicesData['строительство-домов'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-12 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Главная</Link>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <Link to="/services" className="hover:text-primary">Услуги</Link>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span>{service.title}</span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon name={service.icon} className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{service.title}</h1>
              <Badge variant="secondary" className="mt-2">
                {service.price}
              </Badge>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Наши преимущества</h2>
              <div className="space-y-4">
                {service.advantages.map((advantage: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Этапы работ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.stages.map((stage: any, index: number) => (
              <Card key={index} className="p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 pr-16">{stage.title}</h3>
                <p className="text-muted-foreground">{stage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="Phone" className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Заинтересовала услуга?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист рассчитает стоимость именно для вашего объекта
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Получить расчет
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Задать вопрос
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" className="h-5 w-5" />
                  <span>Ответим за 15 минут</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="h-5 w-5" />
                  <span>Гарантия качества</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Другие услуги</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(servicesData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, data]: [string, any]) => (
                <Link key={key} to={`/services/${key}`}>
                  <Card className="p-6 hover:shadow-xl transition-shadow group cursor-pointer h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon name={data.icon} className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {data.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {data.description}
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-primary">
                      <span className="text-sm font-medium">Подробнее</span>
                      <Icon name="ArrowRight" className="h-4 w-4" />
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
