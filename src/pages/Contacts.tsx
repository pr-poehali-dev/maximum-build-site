import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Card } from '@/components/ui/card';
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
            <ContactForm 
              title="Напишите нам"
              subtitle="Заполните форму, и мы ответим на все ваши вопросы"
              showServiceSelect={true}
            />

            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-8">Контактная информация</h2>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Юридический адрес</h3>
                    <p className="text-muted-foreground">
                      236034, Калининградская обл., г. Калининград, ул. Левитана, д. 61, кв. 10
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
                      <a href="tel:+79097800008" className="hover:text-primary transition-colors">
                        +7 909 780 0008 (Тимур)
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="tel:+79118679247" className="hover:text-primary transition-colors">
                        +7 911 867 9247 (Максим)
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
                      <a href="mailto:info@maksimumstroy39.ru" className="hover:text-primary transition-colors">
                        info@maksimumstroy39.ru
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="mailto:zakaz@maksimumstroy39.ru" className="hover:text-primary transition-colors">
                        zakaz@maksimumstroy39.ru
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