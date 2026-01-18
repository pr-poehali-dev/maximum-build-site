import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      title: 'СРО-С-312-07122021',
      category: 'Допуск СРО',
      description: 'Свидетельство о допуске к работам по строительству зданий и сооружений I и II уровней ответственности',
      year: '2025',
      number: 'СРО-С-312-07122021',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg',
    },
    {
      title: 'НОСТРОЙ',
      category: 'Членство в СРО',
      description: 'Член Национального объединения строителей. Компенсационный фонд 30 млн руб.',
      year: '2024',
      number: 'Реестр № 7707123456',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
    },
    {
      title: 'ISO 9001:2015',
      category: 'Система менеджмента качества',
      description: 'Международный сертификат соответствия системы управления качеством стандарту ISO 9001:2015',
      year: '2024',
      number: 'RU.3457.04ИС101',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
    },
    {
      title: 'ISO 14001:2015',
      category: 'Экологический менеджмент',
      description: 'Сертификат системы экологического менеджмента согласно международному стандарту',
      year: '2024',
      number: 'RU.3457.05ЭС101',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg',
    },
    {
      title: 'ISO 45001:2018',
      category: 'Охрана труда',
      description: 'Сертификат системы менеджмента охраны здоровья и безопасности труда',
      year: '2023',
      number: 'RU.3457.06ОС101',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
    },
    {
      title: 'Лицензия МЧС',
      category: 'Пожарная безопасность',
      description: 'Лицензия на деятельность по монтажу, техобслуживанию средств обеспечения пожарной безопасности',
      year: '2025',
      number: '77-Б/00345',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
    },
  ];

  const awards = [
    {
      icon: 'Award',
      title: 'Надежный подрядчик 2024',
      organization: 'Министерство строительства и ЖКХ РФ',
    },
    {
      icon: 'Trophy',
      title: 'Лучший объект года',
      organization: 'Правительство Москвы, конкурс "Московское качество"',
    },
    {
      icon: 'Medal',
      title: 'Знак качества СРО',
      organization: 'Национальное объединение строителей (НОСТРОЙ)',
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
            <span className="text-foreground">Сертификаты</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-primary">Сертификаты и лицензии</h1>
          <p className="text-xl text-muted-foreground">
            Подтверждение нашего профессионализма и соответствия стандартам качества
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши сертификаты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Все разрешительные документы и сертификаты качества для легальной и профессиональной работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setSelectedImage(cert.image)}
              >
                <div className="relative bg-muted aspect-[3/4] overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Icon name="ZoomIn" className="h-12 w-12 text-white" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    {cert.year}
                  </Badge>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{cert.category}</div>
                  <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                  {'number' in cert && <p className="text-xs text-muted-foreground font-mono">{cert.number}</p>}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Награды и достижения</h2>
            <p className="text-lg text-muted-foreground">
              Признание нашего профессионализма на российском и международном уровне
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={award.icon} className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                <p className="text-sm text-muted-foreground">{award.organization}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Гарантии качества</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="FileCheck" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Официальная документация</h3>
                    <p className="text-muted-foreground">
                      Все работы сопровождаются полным пакетом документов: договоры, акты выполненных работ, 
                      гарантийные обязательства
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="ShieldCheck" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Гарантия 5 лет</h3>
                    <p className="text-muted-foreground">
                      Предоставляем официальную гарантию на все виды строительных работ сроком до 5 лет
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="Users" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Квалифицированные специалисты</h3>
                    <p className="text-muted-foreground">
                      Все наши сотрудники имеют необходимые сертификаты и подтвержденную квалификацию
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="CheckCircle2" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Соответствие ГОСТам</h3>
                    <p className="text-muted-foreground">
                      Строгое соблюдение всех строительных норм, правил и государственных стандартов
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Страхование ответственности</h2>
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="Shield" className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Страхование гражданской ответственности</h3>
                    <p className="text-muted-foreground mb-4">
                      Компания застрахована в ведущих страховых компаниях на сумму до 50 млн рублей
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-accent" />
                        <span>Страховая компания: "СОГАЗ"</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-accent" />
                        <span>Полис № 7707-GС-2024-012345</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-accent" />
                        <span>Срок действия: до 31.12.2026</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Icon name="ShieldAlert" className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Компенсационный фонд СРО</h3>
                    <p className="text-muted-foreground mb-4">
                      Как член НОСТРОЙ, компания участвует в компенсационном фонде саморегулируемой организации
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-primary" />
                        <span>Размер взноса: 30 млн рублей</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-primary" />
                        <span>Защита интересов заказчика</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-primary" />
                        <span>Гарантия возмещения убытков</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" className="h-8 w-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Сертификат"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Certificates;