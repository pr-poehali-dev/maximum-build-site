import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://cdn.poehali.dev/projects/9bd6482d-e2fc-4bbc-a391-5c1e524b4183/files/f8515404-dd43-4733-8529-9498a2ea986c.jpg" 
                alt="Максимум Строй" 
                className="h-8 w-8 object-contain rounded"
              />
              <div className="font-bold text-lg">Максимум Строй</div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Профессиональное строительство и качественный сервис с 2005 года
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">О компании</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Услуги</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Проекты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Портфолио</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Команда</Link></li>
              <li><Link to="/certificates" className="hover:text-primary transition-colors">Сертификаты</Link></li>
              <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Phone" className="h-4 w-4 mt-0.5 text-primary" />
                <a href="tel:+74992901234" className="hover:text-primary transition-colors">
                  +7 (499) 290-12-34
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" className="h-4 w-4 mt-0.5 text-primary" />
                <a href="mailto:info@maksimumstroy.ru" className="hover:text-primary transition-colors">
                  info@maksimumstroy.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="h-4 w-4 mt-0.5 text-primary" />
                <span>г. Москва, ул. Новослободская, д. 14/19, стр. 8</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" className="h-4 w-4 mt-0.5 text-primary" />
                <span>Пн-Пт: 9:00-18:00</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://wa.me/74992901234" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">WhatsApp</a>
              <a href="https://vk.com/maksimumstroy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">VK</a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-secondary-foreground/60">
            © 2005-2026 Максимум Строй. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Linkedin" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;