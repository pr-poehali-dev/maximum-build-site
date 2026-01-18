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
      title: 'ISO 9001:2015',
      category: 'Система менеджмента качества',
      description: 'Сертификат соответствия системы управления качеством международному стандарту',
      year: '2024',
      image: 'https://cdn.poehali.dev/files/image.png',
    },
    {
      title: 'Лицензия на строительство',
      category: 'Строительная лицензия',
      description: 'Лицензия на осуществление строительной деятельности',
      year: '2024',
      image: 'https://cdn.poehali.dev/files/image.png',
    },
    {
      title: 'СРО строителей',
      category: 'Членство в СРО',
      description: 'Свидетельство о допуске к строительным работам',
      year: '2024',
      image: 'https://cdn.poehali.dev/files/image.png',
    },
    {
      title: 'Экологический сертификат',
      category: 'Экология',
      description: 'Сертификат соответствия экологическим нормам и требованиям',
      year: '2023',
      image: 'https://cdn.poehali.dev/files/image.png',
    },
    {
      title: 'Сертификат качества материалов',
      category: 'Качество материалов',
      description: 'Подтверждение качества используемых строительных материалов',
      year: '2024',
      image: 'https://cdn.poehali.dev/files/image.png',
    },
    {
      title: 'Пожарная безопасность',
      category: 'Безопасность',
      description: 'Сертификат соответствия требованиям пожарной безопасности',
      year: '2023',
      image: 'https://cdn.poehali.dev/files/image.png',
    },
  ];

  const awards = [
    {
      icon: 'Award',
      title: 'Лучшая строительная компания 2023',
      organization: 'Национальная строительная премия',
    },
    {
      icon: 'Trophy',
      title: 'Победитель конкурса "Дом года"',
      organization: 'Союз строителей России',
    },
    {
      icon: 'Medal',
      title: 'За качество и надежность',
      organization: 'Министерство строительства РФ',
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
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
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