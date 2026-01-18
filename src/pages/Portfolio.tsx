import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video'; url: string } | null>(null);

  const projects = [
    {
      category: 'residential',
      title: 'ЖК "Новослободский"',
      location: 'Москва, ул. Новослободская',
      year: '2025',
      type: 'Жилой комплекс',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
      description: 'Жилой комплекс комфорт-класса на 280 квартир с подземным паркингом и детской площадкой',
    },
    {
      category: 'residential',
      title: 'ЖК "Бутово Парк"',
      location: 'Москва, р-н Северное Бутово',
      year: '2024',
      type: 'Жилой комплекс',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg',
      description: 'Малоэтажный жилой комплекс на 150 квартир с благоустроенной территорией',
    },
    {
      category: 'residential',
      title: 'Коттеджный поселок "Лесной"',
      location: 'Московская область, Истринский р-н',
      year: '2024',
      type: 'Частная застройка',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
      description: 'Коттеджный поселок из 35 домов премиум-класса с развитой инфраструктурой',
    },
    {
      category: 'commercial',
      title: 'Бизнес-центр "Технопарк"',
      location: 'Москва, Варшавское ш.',
      year: '2023',
      type: 'Офисное здание',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
      description: 'Офисный центр класса B+ площадью 12 000 м² с конференц-залами',
    },
    {
      category: 'commercial',
      title: 'Торговый центр "Мега"',
      location: 'Москва, МКАД',
      year: '2024',
      type: 'Торговое здание',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg',
      description: 'Торгово-развлекательный центр площадью 25 000 м² с многоуровневым паркингом',
    },
    {
      category: 'industrial',
      title: 'Логистический комплекс',
      location: 'Московская область, Подольск',
      year: '2023',
      type: 'Промышленный объект',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
      description: 'Складской комплекс класса А площадью 30 000 м² с современным оборудованием',
    },
    {
      category: 'industrial',
      title: 'Производственный цех',
      location: 'Московская область, Химки',
      year: '2024',
      type: 'Промышленный объект',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
      description: 'Производственное здание площадью 8 000 м² с административным корпусом',
    },
    {
      category: 'government',
      title: 'Школа №1575',
      location: 'Москва, р-н Южное Бутово',
      year: '2023',
      type: 'Образовательное учреждение',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg',
      description: 'Строительство средней школы на 825 мест с современными учебными классами',
    },
    {
      category: 'government',
      title: 'Детский сад №2548',
      location: 'Москва, р-н Ново-Переделкино',
      year: '2024',
      type: 'Дошкольное учреждение',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
      description: 'Детский сад на 220 мест с игровыми площадками и спортивным залом',
    },
    {
      category: 'government',
      title: 'Поликлиника №175',
      location: 'Москва, р-н Коньково',
      year: '2025',
      type: 'Медицинское учреждение',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
      description: 'Реконструкция поликлиники с установкой современного медицинского оборудования',
    },
  ];

  const mediaGallery = [
    { type: 'image' as const, url: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg', title: 'Строительство БЦ' },
    { type: 'image' as const, url: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg', title: 'Жилой комплекс' },
    { type: 'image' as const, url: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg', title: 'Команда на объекте' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Портфолио</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Наши реализованные проекты — от идеи до готового объекта
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-12">
              <TabsTrigger value="all">Все проекты</TabsTrigger>
              <TabsTrigger value="residential">Жилые</TabsTrigger>
              <TabsTrigger value="commercial">Коммерческие</TabsTrigger>
              <TabsTrigger value="industrial">Промышленные</TabsTrigger>
              <TabsTrigger value="government">Гос заказы</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.year}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-primary font-medium mb-2">{project.type}</div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Icon name="MapPin" className="h-4 w-4" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <Button variant="outline" className="w-full">
                        Подробнее
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="residential">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'residential').map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'commercial').map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="industrial">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'industrial').map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="government">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.filter(p => p.category === 'government').map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.year}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-primary font-medium mb-2">{project.type}</div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <Icon name="MapPin" className="h-4 w-4" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <Button variant="outline" className="w-full">
                        Подробнее
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Фото и видео</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaGallery.map((media, index) => (
              <Card 
                key={index} 
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow group"
                onClick={() => setSelectedMedia(media)}
              >
                <div className="relative h-64">
                  <img 
                    src={media.url} 
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Icon name="ZoomIn" className="h-12 w-12 text-white" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedMedia(null)}
          >
            <Icon name="X" className="h-8 w-8" />
          </button>
          <img 
            src={selectedMedia.url} 
            alt="Просмотр"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Portfolio;