import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Team = () => {
  const team = [
    {
      name: 'Сергей Максимов',
      position: 'Генеральный директор',
      experience: '20 лет в строительстве',
      description: 'Руководит компанией с момента основания. Эксперт в области деревянного домостроения.',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
    },
    {
      name: 'Андрей Петров',
      position: 'Главный инженер',
      experience: '15 лет опыта',
      description: 'Отвечает за техническую сторону проектов, контроль качества строительства.',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
    },
    {
      name: 'Мария Соколова',
      position: 'Главный архитектор',
      experience: '12 лет в проектировании',
      description: 'Создает уникальные архитектурные решения для каждого клиента.',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
    },
    {
      name: 'Дмитрий Волков',
      position: 'Руководитель отдела продаж',
      experience: '10 лет опыта',
      description: 'Помогает клиентам выбрать оптимальное решение для строительства дома.',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
    },
    {
      name: 'Ольга Кузнецова',
      position: 'Дизайнер интерьеров',
      experience: '8 лет в дизайне',
      description: 'Разрабатывает стильные и функциональные интерьерные решения.',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
    },
    {
      name: 'Иван Смирнов',
      position: 'Прораб',
      experience: '18 лет на стройках',
      description: 'Координирует работу строительных бригад, контролирует сроки выполнения работ.',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
    },
  ];

  const departments = [
    {
      icon: 'Building2',
      title: 'Строительный отдел',
      description: '50+ квалифицированных строителей',
      count: '50+',
    },
    {
      icon: 'Wrench',
      title: 'Инженерный отдел',
      description: '15 инженеров и технических специалистов',
      count: '15',
    },
    {
      icon: 'Users',
      title: 'Отдел продаж',
      description: '12 консультантов и менеджеров',
      count: '12',
    },
    {
      icon: 'Palette',
      title: 'Дизайн-бюро',
      description: '8 архитекторов и дизайнеров',
      count: '8',
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
            <span className="text-foreground">Команда</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-primary">Наша команда</h1>
          <p className="text-xl text-muted-foreground">
            Профессионалы, которые воплощают ваши мечты в реальность
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Руководство и специалисты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Опытная команда профессионалов с многолетним стажем в строительной отрасли
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <div className="text-primary font-semibold mb-2">{member.position}</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Icon name="Briefcase" className="h-4 w-4" />
                    <span>{member.experience}</span>
                  </div>
                  <p className="text-muted-foreground">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отделы компании</h2>
            <p className="text-lg text-muted-foreground">
              Структурированная команда для максимальной эффективности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={dept.icon} className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{dept.count}</div>
                <h3 className="text-xl font-semibold mb-3">{dept.title}</h3>
                <p className="text-sm text-muted-foreground">{dept.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Почему с нами работают</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Профессионализм</h3>
              <p className="text-sm text-muted-foreground">
                Все специалисты имеют профильное образование и сертификаты
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Ответственность</h3>
              <p className="text-sm text-muted-foreground">
                Индивидуальный подход к каждому проекту и клиенту
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Развитие</h3>
              <p className="text-sm text-muted-foreground">
                Постоянное обучение и внедрение новых технологий
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              title="Хотите присоединиться к команде?"
              subtitle="Отправьте резюме, и мы рассмотрим вашу кандидатуру"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;