import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Качество',
      description: 'Используем только проверенные материалы и современные технологии строительства',
    },
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Предоставляем гарантию на все виды выполненных работ',
    },
    {
      icon: 'Users',
      title: 'Профессионализм',
      description: 'Команда опытных специалистов с лицензиями и сертификатами',
    },
    {
      icon: 'TrendingUp',
      title: 'Развитие',
      description: 'Постоянно внедряем инновационные решения в строительстве',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">О компании</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            ООО "Максимум Строй" — ваш надежный партнер в строительстве с 2005 года
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Кто мы</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  ООО "Максимум Строй" (ИНН 7707123456, ОГРН 1057712345678) работает на строительном 
                  рынке Москвы и Московской области с 2005 года. За это время мы реализовали 
                  более 500 проектов различной сложности — от частных домов до крупных государственных объектов.
                </p>
                <p>
                  Наша команда — это более 150 высококвалифицированных специалистов: 
                  архитекторов, инженеров, прорабов и строителей. Все работы выполняются 
                  в соответствии с СНиП, ГОСТ и с применением современных технологий строительства.
                </p>
                <p>
                  Компания имеет все необходимые лицензии и допуски СРО. Мы являемся членом 
                  Национального объединения строителей (НОСТРОЙ) и гордимся репутацией надежного 
                  подрядчика для государственных и коммерческих заказчиков.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg" 
                alt="Наше здание"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Этапы работы</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: '01', title: 'Консультация', text: 'Обсуждаем ваши идеи и требования к проекту' },
              { step: '02', title: 'Проектирование', text: 'Разрабатываем техническую документацию и смету' },
              { step: '03', title: 'Согласование', text: 'Утверждаем проект и подписываем договор' },
              { step: '04', title: 'Строительство', text: 'Выполняем работы с контролем качества на каждом этапе' },
              { step: '05', title: 'Сдача объекта', text: 'Передаем готовый объект с полным пакетом документов' },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-primary text-primary-foreground text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ContactForm 
              title="Есть вопросы о компании?"
              subtitle="Свяжитесь с нами, и мы расскажем подробнее о наших проектах и возможностях"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;