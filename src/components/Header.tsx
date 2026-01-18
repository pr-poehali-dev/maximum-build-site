import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О компании' },
    { path: '/services', label: 'Услуги' },
    { path: '/projects', label: 'Проекты' },
    { path: '/portfolio', label: 'Портфолио' },
    { path: '/team', label: 'Команда' },
    { path: '/certificates', label: 'Сертификаты' },
    { path: '/contacts', label: 'Контакты' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded">
              <Icon name="Building2" className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold text-xl text-secondary">Максимум Строй</div>
              <div className="text-xs text-muted-foreground">Строительная компания</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+74951234567" className="flex items-center gap-2 text-sm font-medium">
              <Icon name="Phone" className="h-4 w-4 text-primary" />
              <span>+7 (495) 123-45-67</span>
            </a>
            <Button>Оставить заявку</Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 space-y-3">
              <a href="tel:+74951234567" className="flex items-center gap-2 text-sm font-medium">
                <Icon name="Phone" className="h-4 w-4 text-primary" />
                <span>+7 (495) 123-45-67</span>
              </a>
              <Button className="w-full">Оставить заявку</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;