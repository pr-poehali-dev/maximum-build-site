import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ServiceHeroSectionProps {
  service: {
    title: string;
    subtitle: string;
    heroImage: string;
    features: string[];
  };
}

const ServiceHeroSection = ({ service }: ServiceHeroSectionProps) => {
  return (
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
  );
};

export default ServiceHeroSection;
