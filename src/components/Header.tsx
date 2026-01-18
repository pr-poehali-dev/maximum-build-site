import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import CallbackModal from "@/components/CallbackModal";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const location = useLocation();

  const mainNav = [
    {
      label: "О компании",
      path: "/about",
      submenu: [
        { label: "О нас", path: "/about" },
        { label: "Производство", path: "/production" },
        { label: "Вакансии", path: "/vacancies" },
        { label: "FAQ", path: "/faq" },
      ],
    },
    {
      label: "Проекты",
      path: "/projects",
      submenu: [
        { label: "Все проекты", path: "/projects" },
        { label: "Дома из бруса", path: "/projects/timber" },
        { label: "Каркасные дома", path: "/projects/frame" },
        { label: "Бани", path: "/projects/baths" },
      ],
    },
    {
      label: "Услуги",
      path: "/services",
      submenu: [
        { label: "Строительство", path: "/services/construction" },
        { label: "Отделка", path: "/services/finishing" },
        { label: "Кровельные работы", path: "/services/roofing" },
        { label: "Фундаменты", path: "/services/foundation" },
      ],
    },
    { label: "Акции", path: "/stock" },
    { label: "Портфолио", path: "/portfolio" },
    { label: "Команда", path: "/team" },
    { label: "Сертификаты", path: "/certificates" },
    { label: "Отзывы", path: "/reviews" },
    { label: "Контакты", path: "/contacts" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/files/Frame 25.png"
              alt="Максимум Строй"
              className="h-12 w-auto object-contain"
            />
            <div>
              <div className="font-bold text-2xl text-primary">
                Максимум Строй
              </div>
              <div className="text-xs text-muted-foreground">
                Строительная компания
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col">
              <div className="text-sm font-bold text-primary space-y-1">
                <a href="tel:+79097800008" className="block hover:underline">+7 909 780 0008 Тимур</a>
                <a href="tel:+79118679247" className="block hover:underline">+7 911 867 9247 Максим</a>
              </div>
              <span className="text-xs text-muted-foreground">
                Бесплатная консультация
              </span>
            </div>
            <Button
              onClick={() => setCallbackModalOpen(true)}
              className="bg-primary hover:bg-primary/90"
            >
              Заказать звонок
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Link to="/calculator">Рассчитать проект</Link>
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-1 mt-4 border-t pt-4">
          {mainNav.map((item) => (
            <div
              key={item.path}
              className="relative group"
              onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  isActive(item.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
                {item.submenu && (
                  <Icon name="ChevronDown" className="h-4 w-4" />
                )}
              </Link>

              {item.submenu && activeDropdown === item.label && (
                <div className="absolute top-full left-0 bg-white border border-border shadow-lg rounded-md py-2 min-w-[200px]">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.path}
                      to={subitem.path}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            {mainNav.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => !item.submenu && setMobileMenuOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-2 mt-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.path}
                        to={subitem.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-sm text-muted-foreground hover:text-primary"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 space-y-3">
              <div className="space-y-2">
                <a href="tel:+79097800008" className="block text-lg font-bold text-primary">+7 909 780 0008 Тимур</a>
                <a href="tel:+79118679247" className="block text-lg font-bold text-primary">+7 911 867 9247 Максим</a>
              </div>
              <Button
                onClick={() => {
                  setCallbackModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full"
              >
                Заказать звонок
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/calculator">Рассчитать проект</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>

      <CallbackModal
        open={callbackModalOpen}
        onOpenChange={setCallbackModalOpen}
      />
    </header>
  );
};

export default Header;