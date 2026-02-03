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
  const isLogo = service.heroImage.includes('cfc42900-ec0c-4c4e-936a-ddb1c898241c');

  return (
    <section 
      className={`relative py-32 ${isLogo ? 'bg-gradient-to-br from-primary/10 via-accent/5 to-background' : 'bg-cover bg-center'}`}
      style={!isLogo ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.heroImage})` } : undefined}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex items-center gap-2 text-sm mb-6 ${isLogo ? 'text-muted-foreground' : 'text-white/80'}`}>
          <Link to="/" className={isLogo ? 'hover:text-primary' : 'hover:text-white'}>Главная</Link>
          <Icon name="ChevronRight" className="h-4 w-4" />
          <Link to="/services" className={isLogo ? 'hover:text-primary' : 'hover:text-white'}>Услуги</Link>
          <Icon name="ChevronRight" className="h-4 w-4" />
          <span className={isLogo ? 'text-foreground' : 'text-white'}>{service.title}</span>
        </div>
        {isLogo && (
          <div className="flex justify-center mb-8">
            <img src={service.heroImage} alt="Логотип" className="h-48 w-auto object-contain" />
          </div>
        )}
        <div className="max-w-3xl mx-auto">
          <h1 className={`text-5xl font-bold mb-4 ${isLogo ? 'text-foreground text-center' : 'text-white'}`}>{service.title}</h1>
          <p className={`text-2xl mb-8 ${isLogo ? 'text-muted-foreground text-center' : 'text-white/90'}`}>{service.subtitle}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {service.features.map((feature: string, index: number) => (
              <div key={index} className={`flex items-center gap-2 ${isLogo ? 'text-foreground' : 'text-white'}`}>
                <Icon name="Check" className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="mt-8 bg-green-600 hover:bg-green-700 text-white text-lg px-8">
              Заказать расчет
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;