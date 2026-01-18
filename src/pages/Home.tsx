import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  const stats = [
    { value: '500+', label: 'Реализованных проектов' },
    { value: '18', label: 'Лет на рынке' },
    { value: '150+', label: 'Специалистов' },
    { value: '98%', label: 'Довольных клиентов' },
  ];

  const services = [
    {
      icon: 'Building2',
      title: 'Жилищное строительство',
      description: 'Строительство многоквартирных домов и частных коттеджей под ключ',
    },
    {
      icon: 'Factory',
      title: 'Промышленные объекты',
      description: 'Возведение производственных комплексов и складских помещений',
    },
    {
      icon: 'Store',
      title: 'Коммерческая недвижимость',
      description: 'Строительство торговых центров, офисных зданий и бизнес-центров',
    },
    {
      icon: 'Wrench',
      title: 'Реконструкция',
      description: 'Полная реконструкция и капитальный ремонт зданий любой сложности',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section 
        className="relative bg-cover bg-center py-32 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.7)), url('https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Строим будущее с максимальным качеством
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Профессиональное строительство жилых, коммерческих и промышленных объектов. 
              Работаем по всей России с 2005 года.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр строительных услуг для реализации проектов любой сложности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Гарантия качества</h3>
              <p className="text-muted-foreground">
                Все работы выполняются в соответствии с ГОСТами и СНиПами
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Сроки в договоре</h3>
              <p className="text-muted-foreground">
                Четкое соблюдение сроков строительства без задержек
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Опытная команда</h3>
              <p className="text-muted-foreground">
                Более 150 квалифицированных специалистов
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-secondary text-secondary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Готовы начать проект?</h2>
            <p className="text-xl mb-8 text-secondary-foreground/80">
              Свяжитесь с нами для бесплатной консультации и расчета стоимости
            </p>
            <Button size="lg" className="text-lg px-8">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;