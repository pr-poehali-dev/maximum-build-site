import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Stock = () => {
  const promotions = [
    {
      title: 'Спецтехника в подарок',
      discount: 'Подарок',
      description: 'При заказе строительства дома — бесплатная доставка материалов и работа спецтехники на объекте',
      icon: 'Truck',
      color: 'bg-primary',
    },
    {
      title: 'Скидка до 15% на дома',
      discount: 'До -15%',
      description: 'Специальное предложение на строительство домов из нашего каталога. Акция действует до конца месяца.',
      icon: 'Home',
      color: 'bg-secondary',
    },
    {
      title: 'Обвязочный венец в подарок',
      discount: 'Подарок',
      description: 'Бесплатный обвязочный венец при заказе свайно-винтового фундамента',
      icon: 'Gift',
      color: 'bg-primary',
    },
    {
      title: 'Скидка 10% на фундамент',
      discount: '-10%',
      description: 'Скидка на устройство свайно-винтового фундамента при заказе строительства дома под ключ',
      icon: 'Building',
      color: 'bg-secondary',
    },
    {
      title: 'Антисептирование бесплатно',
      discount: 'Подарок',
      description: 'Бесплатная обработка всех деревянных конструкций антисептиком при заказе дома из бруса',
      icon: 'Shield',
      color: 'bg-primary',
    },
    {
      title: 'Принимаем материнский капитал',
      discount: 'Мат. капитал',
      description: 'Возможность использования материнского капитала для оплаты строительства вашего дома',
      icon: 'Baby',
      color: 'bg-accent',
    },
    {
      title: 'Кредит под 0.01%',
      discount: 'Кредит',
      description: 'Программа льготного кредитования на строительство дома. Ставка от 0.01% годовых.',
      icon: 'CreditCard',
      color: 'bg-accent',
    },
    {
      title: 'Тёплый угол в подарок',
      discount: 'Подарок',
      description: 'Бесплатное соединение бруса методом "теплый угол" при заказе дома из профилированного бруса',
      icon: 'Box',
      color: 'bg-primary',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <a href="/" className="hover:text-primary">Главная</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-foreground">Акции</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-primary">Акции и специальные предложения</h1>
          <p className="text-xl text-muted-foreground">
            Выгодные условия для строительства вашего дома
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className={`${promo.color} text-white p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 opacity-10">
                    <Icon name={promo.icon} className="h-32 w-32" />
                  </div>
                  <Badge className="bg-white/20 text-white mb-3 backdrop-blur-sm">
                    {promo.discount}
                  </Badge>
                  <h3 className="text-2xl font-bold relative z-10">{promo.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">
                    {promo.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    Узнать подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Phone" className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Хотите воспользоваться акцией?</h2>
            <p className="text-xl mb-8 opacity-90">
              Оставьте заявку или позвоните нам прямо сейчас, и наши специалисты проконсультируют 
              вас по всем актуальным предложениям
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Заказать звонок
              </Button>
              <a href="tel:+74951234567">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  +7 (495) 123-45-67
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Условия акций</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Срок действия</h3>
                  <p className="text-muted-foreground">
                    Акции действуют до конца текущего месяца. Успейте воспользоваться выгодными предложениями!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="FileText" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Условия участия</h3>
                  <p className="text-muted-foreground">
                    Для участия в акции необходимо заключить договор на строительство и внести предоплату.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Layers" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Комбинирование акций</h3>
                  <p className="text-muted-foreground">
                    Некоторые акции можно комбинировать между собой. Уточняйте детали у наших менеджеров.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stock;