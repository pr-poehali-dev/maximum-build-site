import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const Prices = () => {
  const promoServices = [
    {
      title: 'Строительство домов',
      discount: '15%',
      oldPrice: '350 000',
      newPrice: '297 500',
      unit: 'от м²',
      description: 'Полный цикл строительства под ключ',
      icon: 'Home',
    },
    {
      title: 'Кровельные работы',
      discount: '20%',
      oldPrice: '2 500',
      newPrice: '2 000',
      unit: 'от м²',
      description: 'Монтаж и ремонт любой сложности',
      icon: 'Layers',
    },
    {
      title: 'Штукатурные работы',
      discount: '10%',
      oldPrice: '800',
      newPrice: '720',
      unit: 'от м²',
      description: 'Машинная и ручная штукатурка',
      icon: 'Paintbrush',
    },
    {
      title: 'Отделочные работы',
      discount: '12%',
      oldPrice: '1 500',
      newPrice: '1 320',
      unit: 'от м²',
      description: 'Чистовая отделка квартир и домов',
      icon: 'Palette',
    },
  ];

  const constructionPrices = [
    { name: 'Строительство дома (черновая отделка)', price: '35 000', unit: 'м²' },
    { name: 'Строительство дома (под ключ)', price: '50 000', unit: 'м²' },
    { name: 'Фундамент ленточный', price: '8 500', unit: 'м³' },
    { name: 'Фундамент монолитная плита', price: '12 000', unit: 'м³' },
    { name: 'Кладка кирпича', price: '2 800', unit: 'м²' },
    { name: 'Кладка газобетона', price: '2 200', unit: 'м²' },
    { name: 'Монтаж стропильной системы', price: '1 800', unit: 'м²' },
    { name: 'Монтаж металлочерепицы', price: '1 200', unit: 'м²' },
  ];

  const finishingPrices = [
    { name: 'Штукатурка стен (машинная)', price: '450', unit: 'м²' },
    { name: 'Штукатурка стен (ручная)', price: '650', unit: 'м²' },
    { name: 'Шпаклевка под обои', price: '350', unit: 'м²' },
    { name: 'Шпаклевка под покраску', price: '550', unit: 'м²' },
    { name: 'Покраска стен', price: '280', unit: 'м²' },
    { name: 'Поклейка обоев', price: '320', unit: 'м²' },
    { name: 'Укладка ламината', price: '450', unit: 'м²' },
    { name: 'Укладка плитки (пол)', price: '1 200', unit: 'м²' },
    { name: 'Укладка плитки (стены)', price: '1 400', unit: 'м²' },
  ];

  const facadePrices = [
    { name: 'Утепление фасада (пенопласт 100мм)', price: '1 800', unit: 'м²' },
    { name: 'Утепление фасада (минвата 100мм)', price: '2 200', unit: 'м²' },
    { name: 'Декоративная штукатурка', price: '950', unit: 'м²' },
    { name: 'Монтаж сайдинга', price: '850', unit: 'м²' },
    { name: 'Облицовка кирпичом', price: '3 500', unit: 'м²' },
    { name: 'Окраска фасада', price: '650', unit: 'м²' },
  ];

  const engineeringPrices = [
    { name: 'Монтаж отопления (до 150 м²)', price: '180 000', unit: 'объект' },
    { name: 'Монтаж водоснабжения', price: '85 000', unit: 'объект' },
    { name: 'Монтаж канализации', price: '75 000', unit: 'объект' },
    { name: 'Электромонтаж (под ключ)', price: '120 000', unit: 'объект' },
    { name: 'Установка септика', price: '95 000', unit: 'шт' },
    { name: 'Монтаж вентиляции', price: '65 000', unit: 'объект' },
  ];

  const projects = [
    {
      title: 'Дом "Комфорт" 120 м²',
      area: '120',
      floors: '2',
      price: '4 200 000',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
      features: ['3 спальни', 'Гараж', 'Терраса'],
    },
    {
      title: 'Дом "Премиум" 180 м²',
      area: '180',
      floors: '2',
      price: '6 300 000',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg',
      features: ['4 спальни', '2 санузла', 'Гараж на 2 авто'],
    },
    {
      title: 'Дом "Эконом" 80 м²',
      area: '80',
      floors: '1',
      price: '2 800 000',
      image: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
      features: ['2 спальни', 'Кухня-гостиная', 'Веранда'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Цены и акции</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Актуальные цены на услуги и специальные предложения
          </p>
        </div>
      </section>

      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Акции месяца</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promoServices.map((service, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-all group">
                <Badge className="absolute top-4 right-4 bg-red-500 text-white z-10">
                  -{service.discount}
                </Badge>
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground line-through text-sm">
                        {service.oldPrice} ₽
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">{service.newPrice} ₽</span>
                      <span className="text-muted-foreground text-sm">{service.unit}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6">Заказать</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Готовые проекты домов</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Square" className="h-5 w-5" />
                      <span>{project.area} м²</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Layers" className="h-5 w-5" />
                      <span>{project.floors} этажа</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-4">
                    {project.price} ₽
                  </div>
                  <Button className="w-full">Получить консультацию</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Прайс-лист на услуги</h2>
          
          <Tabs defaultValue="construction" className="w-full">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="construction">Строительство</TabsTrigger>
              <TabsTrigger value="finishing">Отделка</TabsTrigger>
              <TabsTrigger value="facade">Фасады</TabsTrigger>
              <TabsTrigger value="engineering">Инженерия</TabsTrigger>
            </TabsList>

            <TabsContent value="construction">
              <Card>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-3/5">Наименование работ</TableHead>
                        <TableHead>Цена</TableHead>
                        <TableHead>Ед. изм.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {constructionPrices.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell className="text-lg font-semibold">{item.price} ₽</TableCell>
                          <TableCell className="text-muted-foreground">{item.unit}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="finishing">
              <Card>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-3/5">Наименование работ</TableHead>
                        <TableHead>Цена</TableHead>
                        <TableHead>Ед. изм.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {finishingPrices.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell className="text-lg font-semibold">{item.price} ₽</TableCell>
                          <TableCell className="text-muted-foreground">{item.unit}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="facade">
              <Card>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-3/5">Наименование работ</TableHead>
                        <TableHead>Цена</TableHead>
                        <TableHead>Ед. изм.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {facadePrices.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell className="text-lg font-semibold">{item.price} ₽</TableCell>
                          <TableCell className="text-muted-foreground">{item.unit}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="engineering">
              <Card>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-3/5">Наименование работ</TableHead>
                        <TableHead>Цена</TableHead>
                        <TableHead>Ед. изм.</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {engineeringPrices.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.name}</TableCell>
                          <TableCell className="text-lg font-semibold">{item.price} ₽</TableCell>
                          <TableCell className="text-muted-foreground">{item.unit}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Icon name="Phone" className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Нужна консультация?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Оставьте заявку, и наш специалист рассчитает стоимость вашего проекта бесплатно
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Получить расчет
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;
