import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const stats = [
    { value: "500+", label: "Реализованных проектов" },
    { value: "18", label: "Лет на рынке" },
    { value: "150+", label: "Специалистов" },
    { value: "98%", label: "Довольных клиентов" },
  ];

  const services = [
    {
      icon: "Building2",
      title: "Дома из бруса",
      description:
        "Экологичные и долговечные дома из профилированного и клееного бруса",
      link: "/projects/timber",
    },
    {
      icon: "Home",
      title: "Каркасные дома",
      description: "Быстровозводимые энергоэффективные каркасные дома под ключ",
      link: "/projects/frame",
    },
    {
      icon: "Waves",
      title: "Бани и сауны",
      description: "Строительство бань из бруса и бревна с русской парной",
      link: "/projects/baths",
    },
    {
      icon: "Wrench",
      title: "Фундаменты",
      description: "Устройство свайно-винтовых и ленточных фундаментов",
      link: "/services/foundation",
    },
  ];

  const promotions = [
    { title: "Спецтехника в подарок", badge: "Подарок" },
    { title: "Скидка до 15% на дома", badge: "До -15%" },
    { title: "Принимаем мат. капитал", badge: "Мат. капитал" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section
        className="relative bg-cover bg-center py-40 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.7)), url('https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg')`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="bg-secondary text-white mb-4 text-sm py-1 px-3">
              С 2005 года строим дома мечты
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Строительство домов из бруса под ключ
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Профессиональное строительство деревянных домов, бань и коттеджей.
              Собственное производство. Гарантия 5 лет.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8"
              >
                Рассчитать проект
              </Button>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8"
              >
                Каталог проектов
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white">
            {promotions.map((promo, index) => (
              <Link
                key={index}
                to="/stock"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <Icon name="Tag" className="h-6 w-6" />
                <div>
                  <div className="text-sm opacity-80">{promo.badge}</div>
                  <div className="font-bold">{promo.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
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
              Полный цикл строительства деревянных домов от проектирования до
              сдачи под ключ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon
                      name={service.icon}
                      className="h-7 w-7 text-primary group-hover:text-white"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Factory" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Собственное производство
              </h3>
              <p className="text-muted-foreground">
                Контроль качества на всех этапах изготовления
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Гарантия 5 лет</h3>
              <p className="text-muted-foreground">
                Официальная гарантия на все виды работ
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Сроки в договоре</h3>
              <p className="text-muted-foreground">
                Четкое соблюдение сроков строительства
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Кредит и рассрочка</h3>
              <p className="text-muted-foreground">
                Гибкие условия оплаты и материнский капитал
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary text-white mb-4">
                Предварительный расчёт
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Рассчитайте стоимость вашего дома
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Используйте наш калькулятор для предварительного расчета
                стоимости строительства. Результат мгновенно. Бесплатно и без
                обязательств.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Расчет по вашим параметрам",
                  "Учет типа дома и материалов",
                  "Прозрачная смета без скрытых платежей",
                  "Консультация специалиста",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Icon
                      name="CheckCircle2"
                      className="h-6 w-6 text-primary flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/calculator">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8"
                >
                  Перейти к калькулятору
                </Button>
              </Link>
            </div>
            <Card className="p-8 lg:p-12">
              <img
                src="https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg"
                alt="Калькулятор"
                className="rounded-lg shadow-xl"
              />
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Готовы начать строительство?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Оставьте заявку на бесплатную консультацию, и наш специалист
            свяжется с вами в течение 15 минут
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8"
            >
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Посмотреть проекты
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
