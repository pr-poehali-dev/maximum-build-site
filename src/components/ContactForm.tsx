import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showServiceSelect?: boolean;
}

const ContactForm = ({ 
  title = "Остались вопросы?", 
  subtitle = "Заполните форму, и мы свяжемся с вами в ближайшее время",
  showServiceSelect = false 
}: ContactFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <Card className="p-8">
      <div className="mb-6">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="name">Ваше имя <span className="text-destructive">*</span></Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Иван Иванов"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Телефон <span className="text-destructive">*</span></Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+7 (___) ___-__-__"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="example@mail.ru"
          />
        </div>

        {showServiceSelect && (
          <div>
            <Label htmlFor="service">Интересующая услуга</Label>
            <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="timber">Дома из бруса</SelectItem>
                <SelectItem value="frame">Каркасные дома</SelectItem>
                <SelectItem value="bath">Бани и сауны</SelectItem>
                <SelectItem value="foundation">Фундаменты</SelectItem>
                <SelectItem value="roofing">Кровельные работы</SelectItem>
                <SelectItem value="finishing">Отделка</SelectItem>
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div>
          <Label htmlFor="message">Сообщение</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Расскажите о вашем проекте или задайте вопрос..."
            rows={5}
          />
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" className="mr-2 h-5 w-5 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Icon name="Send" className="mr-2 h-5 w-5" />
              Отправить заявку
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
        </p>
      </form>
    </Card>
  );
};

export default ContactForm;