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
                src="https://cdn.poehali.dev/files/Frame 25.png" 
                alt="Максимум Строй" 
                className="h-10 w-auto object-contain"
              />
              <div className="font-bold text-lg">Максимум Строй</div>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-2">
              Профессиональное строительство жилых и нежилых зданий
            </p>
            <p className="text-xs text-secondary-foreground/60">
              ИНН 3900039662 | ОГРН 1253900003917
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
                <a href="tel:+74012345678" className="hover:text-primary transition-colors">
                  +7 (4012) 34-56-78
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" className="h-4 w-4 mt-0.5 text-primary" />
                <a href="mailto:info@maksimumstroy39.ru" className="hover:text-primary transition-colors">
                  info@maksimumstroy39.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="h-4 w-4 mt-0.5 text-primary" />
                <span>г. Калининград, ул. Левитана, д. 61, кв. 10</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Clock" className="h-4 w-4 mt-0.5 text-primary" />
                <span>Пн-Пт: 9:00-18:00</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="https://wa.me/74012345678" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">WhatsApp</a>
              <a href="https://t.me/maksimumstroy39" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm">Telegram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm mb-4">
            <p className="text-secondary-foreground/60">
              © 2025-2026 ООО "Максимум Строй". Все права защищены.
            </p>

          </div>
          <div className="text-xs text-secondary-foreground/50 text-center md:text-left">
            <p>ООО "Максимум Строй" | ИНН 3900039662 | ОГРН 1253900003917 | КПП 390001001</p>
            <p className="mt-1">Юридический адрес: 236034, Калининградская область, г. Калининград, ул. Левитана, д. 61, кв. 10</p>
            <p className="mt-1">Генеральный директор: Бычковский Максим Игоревич</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;