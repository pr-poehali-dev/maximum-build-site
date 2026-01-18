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
      title: 'ЖК "Новые горизонты"',
      location: 'Москва',
      year: '2024',
      type: 'Жилой комплекс',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
      description: 'Современный жилой комплекс премиум-класса на 500 квартир',
    },
    {
      category: 'commercial',
      title: 'Бизнес-центр "Максимум"',
      location: 'Санкт-Петербург',
      year: '2023',
      type: 'Офисное здание',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg',
      description: 'Офисный центр класса А с подземным паркингом',
    },
    {
      category: 'industrial',
      title: 'Производственный комплекс',
      location: 'Екатеринбург',
      year: '2023',
      type: 'Промышленный объект',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
      description: 'Завод по производству строительных материалов',
    },
    {
      category: 'residential',
      title: 'Коттеджный поселок',
      location: 'Московская область',
      year: '2024',
      type: 'Частная застройка',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
      description: 'Элитный поселок из 50 коттеджей с инфраструктурой',
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
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">Все проекты</TabsTrigger>
              <TabsTrigger value="residential">Жилые</TabsTrigger>
              <TabsTrigger value="commercial">Коммерческие</TabsTrigger>
              <TabsTrigger value="industrial">Промышленные</TabsTrigger>
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