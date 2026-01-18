import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Контакты</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Напишите нам</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="example@mail.ru" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={6}
                  />
                </div>
                <Button size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8">Контактная информация</h2>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес офиса</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Строителей, д. 15, офис 301
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground mb-1">
                      <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                        +7 (495) 123-45-67
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="tel:+74951234568" className="hover:text-primary transition-colors">
                        +7 (495) 123-45-68
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground mb-1">
                      <a href="mailto:info@maksimum-stroy.ru" className="hover:text-primary transition-colors">
                        info@maksimum-stroy.ru
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="mailto:office@maksimum-stroy.ru" className="hover:text-primary transition-colors">
                        office@maksimum-stroy.ru
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                    <p className="text-muted-foreground mb-1">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                  </div>
                </div>
              </Card>

              <div className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-muted hover:bg-primary hover:text-white p-3 rounded-lg transition-colors">
                    <Icon name="Facebook" className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-muted hover:bg-primary hover:text-white p-3 rounded-lg transition-colors">
                    <Icon name="Instagram" className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-muted hover:bg-primary hover:text-white p-3 rounded-lg transition-colors">
                    <Icon name="Linkedin" className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-muted hover:bg-primary hover:text-white p-3 rounded-lg transition-colors">
                    <Icon name="Youtube" className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Карта офиса</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;