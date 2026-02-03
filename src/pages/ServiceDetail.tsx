import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });
  const [calcData, setCalcData] = useState({
    material: '',
    foundation: '',
    floors: '1',
    area: '',
  });
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const servicesData: Record<string, any> = {
    'проектирование-домов': {
      title: 'Проектирование домов',
      subtitle: 'Индивидуальный проект дома под ваши пожелания',
      icon: 'FileText',
      heroImage: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
      description: 'Разработаем полный комплект проектной документации для строительства вашего дома. Учтем все пожелания, особенности участка и требования нормативов.',
      features: [
        'Архитектурный раздел (АР)',
        'Конструктивный раздел (КР)',
        'Инженерные разделы (ОВ, ВК, ЭО)',
        '3D визуализация фасадов',
        'Планировочные решения',
        'Расчет фундаментов',
      ],
      advantages: [
        { icon: 'Shield', title: 'Опытные проектировщики', text: 'Более 15 лет в проектировании' },
        { icon: 'FileCheck', title: 'Все разделы проекта', text: 'АР, КР, инженерные сети' },
        { icon: 'Home', title: 'Учет ваших пожеланий', text: 'Индивидуальный подход' },
        { icon: 'Calculator', title: 'Точная смета', text: 'Расчет материалов и работ' },
      ],
      stages: [
        { 
          title: 'Техническое задание', 
          description: 'Встреча с архитектором, обсуждение планировки, этажности, материалов стен, кровли',
          duration: '1 день'
        },
        { 
          title: 'Эскизный проект', 
          description: 'Разработка концепции дома: планировки этажей, фасады, общий вид',
          duration: '5-7 дней'
        },
        { 
          title: 'Рабочий проект', 
          description: 'Детальная проработка: конструктив, узлы, спецификации, инженерия',
          duration: '20-30 дней'
        },
        { 
          title: 'Согласование и передача', 
          description: 'Внесение правок, печать чертежей, передача полного комплекта',
          duration: '3-5 дней'
        },
      ],
      prices: [
        { name: 'Эскизный проект', price: '25 000', unit: 'проект' },
        { name: 'Архитектурный раздел (АР)', price: '350', unit: 'м²' },
        { name: 'Конструктивный раздел (КР)', price: '450', unit: 'м²' },
        { name: 'Полный проект (АР+КР+ОВ+ВК+ЭО)', price: '1 200', unit: 'м²' },
        { name: '3D визуализация', price: '15 000', unit: 'ракурс' },
      ],
      whyNeed: [
        'Получить разрешение на строительство',
        'Правильно рассчитать фундамент под грунт',
        'Избежать ошибок при строительстве',
        'Рассчитать точную смету материалов',
        'Согласовать проект в надзорных органах',
        'Получить техплан для регистрации дома',
      ],
    },
    'строительство-домов': {
      title: 'Строительство домов',
      subtitle: 'Строим загородные дома под ключ',
      icon: 'Home',
      heroImage: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/ff90d193-120f-4342-87e3-18cfd9b34443.jpg',
      description: 'Построим дом вашей мечты из любых материалов: газобетон, кирпич, каркас. Полный цикл работ от фундамента до чистовой отделки.',
      features: [
        'Любые материалы стен',
        'Все типы фундаментов',
        'Собственная бригада',
        'Строгий контроль качества',
        'Гарантия 5 лет',
        'Договор с фиксацией цены',
      ],
      advantages: [
        { icon: 'Award', title: '350+ домов построено', text: 'Большой опыт работы' },
        { icon: 'Users', title: 'Своя бригада', text: 'Без субподрядчиков' },
        { icon: 'Clock', title: 'Соблюдение сроков', text: 'Штрафы за просрочку' },
        { icon: 'ShieldCheck', title: 'Гарантия 5 лет', text: 'На все виды работ' },
      ],
      stages: [
        { title: 'Подготовка участка', description: 'Расчистка, завоз материалов, бытовка для рабочих', duration: '3-5 дней' },
        { title: 'Фундамент', description: 'Разметка, земляные работы, армирование, бетонирование', duration: '2-3 недели' },
        { title: 'Коробка дома', description: 'Кладка стен, монтаж перекрытий, установка окон', duration: '1-2 месяца' },
        { title: 'Кровля', description: 'Стропильная система, утепление, монтаж покрытия', duration: '2-3 недели' },
        { title: 'Инженерия', description: 'Электрика, водоснабжение, отопление, канализация', duration: '3-4 недели' },
        { title: 'Отделка', description: 'Штукатурка, стяжка, чистовая отделка помещений', duration: '1-2 месяца' },
      ],
      prices: [
        { name: 'Строительство дома (черновая отделка)', price: '35 000', unit: 'м²' },
        { name: 'Строительство дома (под ключ)', price: '50 000', unit: 'м²' },
        { name: 'Фундамент ленточный', price: '8 500', unit: 'м³' },
        { name: 'Кладка газобетона', price: '2 200', unit: 'м²' },
        { name: 'Монтаж кровли', price: '1 800', unit: 'м²' },
      ],
      whyNeed: [
        'Дом простоит 100+ лет при правильном строительстве',
        'Экономия до 30% по сравнению с готовым домом',
        'Планировка точно под ваши потребности',
        'Контроль качества на каждом этапе',
        'Современные материалы и технологии',
        'Гарантия на все виды работ',
      ],
    },
    'фундаментные-работы': {
      title: 'Фундаментные работы',
      subtitle: 'Надежный фундамент — основа вашего дома',
      icon: 'Box',
      heroImage: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/b64704d8-8ba4-48d5-b0dc-6dbeed1ca6f9.jpg',
      description: 'Устроим фундамент любого типа с учетом геологии участка. Ленточный, свайный, плитный — выберем оптимальное решение.',
      features: [
        'Геологические изыскания',
        'Все типы фундаментов',
        'Гидроизоляция',
        'Утепление цоколя',
        'Дренаж и отмостка',
        'Гарантия на работы',
      ],
      advantages: [
        { icon: 'Layers', title: 'Любые типы фундаментов', text: 'Ленточный, свайный, плитный' },
        { icon: 'TestTube', title: 'Геология участка', text: 'Исследование грунта' },
        { icon: 'Droplets', title: 'Гидроизоляция', text: 'Защита от влаги' },
        { icon: 'Shield', title: 'Гарантия качества', text: 'На все виды работ' },
      ],
      stages: [
        { title: 'Геологические изыскания', description: 'Определение типа грунта, уровня грунтовых вод', duration: '1-2 дня' },
        { title: 'Разметка и земляные работы', description: 'Вынос осей, рытье траншей/котлована', duration: '3-5 дней' },
        { title: 'Подготовка основания', description: 'Песчаная подушка, уплотнение, гидроизоляция', duration: '2-3 дня' },
        { title: 'Армирование', description: 'Установка арматурного каркаса по проекту', duration: '3-5 дней' },
        { title: 'Бетонирование', description: 'Заливка бетона, уход за бетоном 28 дней', duration: '1-2 дня + выдержка' },
        { title: 'Гидроизоляция и утепление', description: 'Обмазочная гидроизоляция, утеплитель', duration: '3-5 дней' },
      ],
      prices: [
        { name: 'Ленточный фундамент', price: '8 500', unit: 'м³' },
        { name: 'Свайно-ростверковый', price: '12 000', unit: 'м³' },
        { name: 'Монолитная плита', price: '15 000', unit: 'м³' },
        { name: 'Геология участка', price: '15 000', unit: 'участок' },
        { name: 'Гидроизоляция', price: '800', unit: 'м²' },
      ],
      whyNeed: [
        'Неправильный фундамент — главная причина трещин в доме',
        'Экономия на фундаменте обернется дорогим ремонтом',
        'Геология участка покажет оптимальный тип фундамента',
        'Гидроизоляция защитит от сырости в доме',
        'Правильный фундамент служит 100+ лет',
      ],
    },
    'отделочные-работы': {
      title: 'Отделочные работы',
      subtitle: 'Чистовая отделка квартир и домов под ключ',
      icon: 'Paintbrush',
      heroImage: 'https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/5b951649-1d40-4a93-bebd-db8dd39693bc.jpg',
      description: 'Выполним все виды отделочных работ: от черновой штукатурки до финишной покраски. Работаем с любыми материалами.',
      features: [
        'Штукатурка и шпаклевка',
        'Покраска и обои',
        'Укладка плитки',
        'Монтаж ламината и паркета',
        'Натяжные потолки',
        'Электрика и сантехника',
      ],
      advantages: [
        { icon: 'Users', title: 'Опытные мастера', text: 'Более 15 лет опыта' },
        { icon: 'Palette', title: 'Любые материалы', text: 'Работаем со всеми видами' },
        { icon: 'Clock', title: 'Соблюдение сроков', text: 'Четкий график работ' },
        { icon: 'Sparkles', title: 'Уборка после работ', text: 'Сдаем чистый объект' },
      ],
      stages: [
        { title: 'Черновая отделка', description: 'Штукатурка стен, стяжка пола, разводка электрики', duration: '2-3 недели' },
        { title: 'Чистовая отделка', description: 'Шпаклевка, покраска/обои, укладка плитки', duration: '3-4 недели' },
        { title: 'Монтаж покрытий', description: 'Ламинат, паркет, натяжные потолки', duration: '1-2 недели' },
        { title: 'Установка сантехники', description: 'Ванна, душевая, раковины, унитаз', duration: '3-5 дней' },
        { title: 'Электроустановочные изделия', description: 'Розетки, выключатели, светильники', duration: '2-3 дня' },
        { title: 'Финишные работы', description: 'Плинтусы, наличники, пороги, уборка', duration: '3-5 дней' },
      ],
      prices: [
        { name: 'Штукатурка стен (машинная)', price: '450', unit: 'м²' },
        { name: 'Шпаклевка под покраску', price: '550', unit: 'м²' },
        { name: 'Покраска стен', price: '280', unit: 'м²' },
        { name: 'Укладка плитки', price: '1 400', unit: 'м²' },
        { name: 'Укладка ламината', price: '450', unit: 'м²' },
        { name: 'Комплексная отделка под ключ', price: '15 000', unit: 'м²' },
      ],
      whyNeed: [
        'Качественная отделка служит 15-20 лет',
        'Правильная подготовка — залог долговечности',
        'Красивая отделка повышает стоимость жилья',
        'Профессиональные мастера сделают быстрее',
        'Помощь в подборе материалов и дизайна',
      ],
    },
  };

  const service = servicesData[slug || ''] || servicesData['строительство-домов'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.heroImage})` }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6">
            <Link to="/" className="hover:text-white">Главная</Link>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <Link to="/services" className="hover:text-white">Услуги</Link>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-white">{service.title}</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-2xl text-white/90 mb-8">{service.subtitle}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <Icon name="Check" className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="mt-8 bg-green-600 hover:bg-green-700 text-white text-lg px-8">
              Заказать расчет
            </Button>
          </div>
        </div>
      </section>

      {slug === 'строительство-домов' && (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Калькулятор стоимости строительства</h2>
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Материал стен</label>
                    <select
                      value={calcData.material}
                      onChange={(e) => setCalcData({...calcData, material: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Выберите материал</option>
                      <option value="gazobeton">Газобетон</option>
                      <option value="kirpich">Кирпич</option>
                      <option value="karkas">Каркас</option>
                      <option value="brus">Брус</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип фундамента</label>
                    <select
                      value={calcData.foundation}
                      onChange={(e) => setCalcData({...calcData, foundation: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Выберите тип</option>
                      <option value="lentochny">Ленточный</option>
                      <option value="svai">Свайно-ростверковый</option>
                      <option value="plita">Монолитная плита</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Количество этажей</label>
                    <select
                      value={calcData.floors}
                      onChange={(e) => setCalcData({...calcData, floors: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
                    >
                      <option value="1">1 этаж</option>
                      <option value="2">2 этажа</option>
                      <option value="3">3 этажа</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Площадь дома (м²)</label>
                    <input
                      type="number"
                      value={calcData.area}
                      onChange={(e) => setCalcData({...calcData, area: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="Например, 120"
                      min="50"
                    />
                  </div>
                </div>
                <Button
                  onClick={() => {
                    if (calcData.material && calcData.foundation && calcData.area) {
                      const basePrice = 35000;
                      const materialMultiplier: Record<string, number> = {
                        gazobeton: 1,
                        kirpich: 1.3,
                        karkas: 0.9,
                        brus: 1.1,
                      };
                      const foundationMultiplier: Record<string, number> = {
                        lentochny: 1,
                        svai: 1.2,
                        plita: 1.4,
                      };
                      const price = basePrice * 
                        materialMultiplier[calcData.material] * 
                        foundationMultiplier[calcData.foundation] * 
                        parseInt(calcData.area);
                      setCalculatedPrice(Math.round(price));
                    }
                  }}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!calcData.material || !calcData.foundation || !calcData.area}
                >
                  Рассчитать стоимость
                </Button>
                {calculatedPrice && (
                  <div className="mt-6 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-center">
                    <p className="text-lg mb-2">Примерная стоимость строительства:</p>
                    <p className="text-4xl font-bold text-green-600">
                      {calculatedPrice.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      * Окончательная цена рассчитывается индивидуально
                    </p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Зачем это нужно?</h2>
            <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {service.whyNeed.map((reason: string, index: number) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {service.advantages.map((adv: any, index: number) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={adv.icon} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{adv.title}</h3>
                <p className="text-sm text-muted-foreground">{adv.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Этапы работ</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            {service.stages.map((stage: any, index: number) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{stage.title}</h3>
                      <Badge variant="secondary">{stage.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground">{stage.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Цены на услуги</h2>
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="text-left p-4">Наименование работ</th>
                    <th className="text-right p-4">Цена</th>
                    <th className="text-right p-4">Ед. изм.</th>
                  </tr>
                </thead>
                <tbody>
                  {service.prices.map((item: any, index: number) => (
                    <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-4">{item.name}</td>
                      <td className="text-right p-4 font-semibold text-lg">{item.price} ₽</td>
                      <td className="text-right p-4 text-muted-foreground">{item.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <p className="text-center text-muted-foreground mt-6">
            * Окончательная стоимость зависит от объема и сложности работ
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Получить расчет стоимости</h2>
            <p className="text-center mb-8 opacity-90">
              Оставьте заявку, и мы рассчитаем точную стоимость для вашего объекта
            </p>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Комментарий</label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary h-24"
                    placeholder="Расскажите о вашем объекте..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                  Получить расчет
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;