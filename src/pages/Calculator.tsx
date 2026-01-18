import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Calculator = () => {
  const [houseType, setHouseType] = useState('');
  const [area, setArea] = useState([100]);
  const [floors, setFloors] = useState('');
  const [foundation, setFoundation] = useState('');
  const [roofType, setRoofType] = useState('');
  const [finishing, setFinishing] = useState('');
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const calculateCost = () => {
    let baseCost = 0;
    
    switch(houseType) {
      case 'timber': baseCost = 25000; break;
      case 'frame': baseCost = 20000; break;
      case 'brick': baseCost = 35000; break;
      case 'block': baseCost = 30000; break;
      default: baseCost = 25000;
    }

    let totalCost = baseCost * area[0];

    if (floors === '2') totalCost *= 1.3;
    if (floors === '3') totalCost *= 1.5;

    if (foundation === 'pile') totalCost += 300000;
    if (foundation === 'strip') totalCost += 500000;
    if (foundation === 'slab') totalCost += 700000;

    if (roofType === 'gable') totalCost += 200000;
    if (roofType === 'hip') totalCost += 350000;
    if (roofType === 'complex') totalCost += 500000;

    if (finishing === 'basic') totalCost += area[0] * 5000;
    if (finishing === 'standard') totalCost += area[0] * 10000;
    if (finishing === 'premium') totalCost += area[0] * 20000;

    setEstimatedCost(Math.round(totalCost));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <a href="/" className="hover:text-primary">Главная</a>
            <Icon name="ChevronRight" className="h-4 w-4" />
            <span className="text-foreground">Предварительный расчёт</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-primary">Предварительный расчёт стоимости</h1>
          <p className="text-xl text-muted-foreground">
            Рассчитайте примерную стоимость строительства вашего дома
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Параметры дома</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="houseType" className="text-base mb-2 block">Тип дома</Label>
                  <Select value={houseType} onValueChange={setHouseType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип дома" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="timber">Дом из бруса</SelectItem>
                      <SelectItem value="frame">Каркасный дом</SelectItem>
                      <SelectItem value="brick">Кирпичный дом</SelectItem>
                      <SelectItem value="block">Дом из блоков</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base mb-3 block">
                    Площадь дома: <span className="font-bold text-primary">{area[0]} м²</span>
                  </Label>
                  <Slider 
                    value={area} 
                    onValueChange={setArea}
                    min={50}
                    max={500}
                    step={10}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>50 м²</span>
                    <span>500 м²</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="floors" className="text-base mb-2 block">Этажность</Label>
                  <Select value={floors} onValueChange={setFloors}>
                    <SelectTrigger>
                      <SelectValue placeholder="Количество этажей" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 этаж</SelectItem>
                      <SelectItem value="2">2 этажа</SelectItem>
                      <SelectItem value="3">3 этажа</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="foundation" className="text-base mb-2 block">Тип фундамента</Label>
                  <Select value={foundation} onValueChange={setFoundation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите фундамент" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pile">Свайно-винтовой</SelectItem>
                      <SelectItem value="strip">Ленточный</SelectItem>
                      <SelectItem value="slab">Монолитная плита</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="roofType" className="text-base mb-2 block">Тип кровли</Label>
                  <Select value={roofType} onValueChange={setRoofType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите кровлю" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gable">Двускатная</SelectItem>
                      <SelectItem value="hip">Четырехскатная</SelectItem>
                      <SelectItem value="complex">Сложная кровля</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="finishing" className="text-base mb-2 block">Отделка</Label>
                  <Select value={finishing} onValueChange={setFinishing}>
                    <SelectTrigger>
                      <SelectValue placeholder="Уровень отделки" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">Без отделки</SelectItem>
                      <SelectItem value="basic">Базовая</SelectItem>
                      <SelectItem value="standard">Стандартная</SelectItem>
                      <SelectItem value="premium">Премиум</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  size="lg" 
                  className="w-full text-lg"
                  onClick={calculateCost}
                  disabled={!houseType || !floors || !foundation || !roofType}
                >
                  <Icon name="Calculator" className="mr-2 h-5 w-5" />
                  Рассчитать стоимость
                </Button>
              </div>
            </Card>

            <div className="space-y-6">
              {estimatedCost !== null ? (
                <Card className="p-8 bg-primary text-primary-foreground">
                  <div className="text-center">
                    <div className="text-sm opacity-90 mb-2">Предварительная стоимость</div>
                    <div className="text-5xl font-bold mb-4">
                      {estimatedCost.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-sm opacity-90">
                      Примерная стоимость строительства
                    </div>
                  </div>

                  <div className="border-t border-white/20 my-6"></div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="opacity-90">Площадь:</span>
                      <span className="font-bold">{area[0]} м²</span>
                    </div>
                    {houseType && (
                      <div className="flex justify-between">
                        <span className="opacity-90">Тип дома:</span>
                        <span className="font-bold">
                          {houseType === 'timber' && 'Дом из бруса'}
                          {houseType === 'frame' && 'Каркасный'}
                          {houseType === 'brick' && 'Кирпичный'}
                          {houseType === 'block' && 'Из блоков'}
                        </span>
                      </div>
                    )}
                    {floors && (
                      <div className="flex justify-between">
                        <span className="opacity-90">Этажей:</span>
                        <span className="font-bold">{floors}</span>
                      </div>
                    )}
                  </div>
                </Card>
              ) : (
                <Card className="p-8 bg-muted">
                  <div className="text-center text-muted-foreground">
                    <Icon name="Calculator" className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Заполните параметры дома и нажмите "Рассчитать стоимость"</p>
                  </div>
                </Card>
              )}

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Получить точный расчёт</h3>
                <p className="text-muted-foreground mb-6">
                  Оставьте заявку, и наш специалист подготовит детальную смету с учётом всех ваших пожеланий
                </p>
                
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@mail.ru" />
                  </div>
                  <div>
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea id="comment" placeholder="Расскажите о ваших пожеланиях..." rows={4} />
                  </div>
                  <Button size="lg" className="w-full">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </Button>
                </form>
              </Card>

              <Card className="p-6 bg-accent text-accent-foreground">
                <div className="flex items-start gap-4">
                  <Icon name="Info" className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Обратите внимание</h4>
                    <p className="text-sm opacity-90">
                      Это предварительный расчёт. Точная стоимость определяется после составления проекта 
                      и выезда специалиста на участок.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Что входит в стоимость</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Home', title: 'Материалы', text: 'Все строительные материалы высокого качества' },
              { icon: 'Users', title: 'Работа бригады', text: 'Опытные специалисты с квалификацией' },
              { icon: 'Truck', title: 'Доставка', text: 'Доставка материалов на объект' },
              { icon: 'Shield', title: 'Гарантия', text: 'Гарантия на все виды работ 5 лет' },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calculator;