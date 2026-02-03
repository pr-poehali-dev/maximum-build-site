import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCalculatorProps {
  slug: string | undefined;
}

const ServiceCalculator = ({ slug }: ServiceCalculatorProps) => {
  const [calcData, setCalcData] = useState({
    material: '',
    foundation: '',
    floors: '1',
    area: '',
  });
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  if (slug !== 'строительство-домов') {
    return null;
  }

  return (
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
  );
};

export default ServiceCalculator;
