import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ServiceContentSectionsProps {
  service: {
    title: string;
    description: string;
    whyNeed: string[];
    advantages: Array<{ icon: string; title: string; text: string }>;
    stages: Array<{ title: string; description: string; duration: string }>;
    prices: Array<{ name: string; price: string; unit: string }>;
  };
}

const ServiceContentSections = ({ service }: ServiceContentSectionsProps) => {
  return (
    <>
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
    </>
  );
};

export default ServiceContentSections;
