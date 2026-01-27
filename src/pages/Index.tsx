import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [bookingType, setBookingType] = useState<'individual' | 'group'>('individual');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-blue-50 to-orange-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold font-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              🚃 Мальчики VS Девочки
            </h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О квизе</button>
              <button onClick={() => scrollToSection('booking')} className="text-sm font-medium hover:text-primary transition-colors">Бронирование</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                <span className="text-primary">Мальчики</span> VS{' '}
                <span className="text-secondary">Девочки</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                Увлекательный детский квиз в романтическом ретро трамвае! 
                Веселые битвы умов, смех и незабываемые эмоции 🎉
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all animate-bounce-gentle"
                  onClick={() => scrollToSection('booking')}
                >
                  Забронировать место 🎫
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 rounded-full transition-all"
                  onClick={() => scrollToSection('about')}
                >
                  Узнать подробнее
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/fc541f70-57bb-4821-83a9-87387c8c9752/files/202fc28a-4a31-49d4-8710-be09a6192f82.jpg" 
                alt="Ретро трамвай"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">7-14 лет</p>
                <p className="text-sm">Возраст участников</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 animate-fade-in">
            Что такое квиз <span className="text-primary">Мальчики</span> VS <span className="text-secondary">Девочки</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-xl animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Brain" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading">Интеллектуальные битвы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Увлекательные вопросы на логику, эрудицию и сообразительность. 
                  Командная работа и честная конкуренция!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary transition-all hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="PartyPopper" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl font-heading">Веселая атмосфера</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Яркие декорации, музыка и интерактивные игры. 
                  Дети в восторге от каждой минуты!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent transition-all hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Train" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-2xl font-heading">Ретро трамвай</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Уникальная локация — настоящий трамвай 1950-х годов. 
                  Романтика и ностальгия в каждой детали!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold font-heading mb-6 text-center">Как проходит квиз?</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Деление на команды</h4>
                      <p className="text-gray-600">Мальчики против девочек! Каждая команда выбирает капитана</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">5 раундов вопросов</h4>
                      <p className="text-gray-600">Разные темы: от мультфильмов до науки. Баллы за правильные ответы!</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Активные игры</h4>
                      <p className="text-gray-600">Между раундами — веселые подвижные задания и конкурсы</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Награждение победителей</h4>
                      <p className="text-gray-600">Призы для всех участников! Никто не уходит без подарков 🎁</p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/projects/fc541f70-57bb-4821-83a9-87387c8c9752/files/5fb992c5-be29-4ed5-bf61-96c8e3fa938f.jpg"
                  alt="Дети на квизе"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4 animate-fade-in">
            Забронировать участие 🎫
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Заполните форму, и мы свяжемся с вами для подтверждения
          </p>

          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <Label className="text-lg mb-3 block">Тип бронирования</Label>
                <RadioGroup value={bookingType} onValueChange={(v) => setBookingType(v as any)}>
                  <div className="flex items-center space-x-2 mb-3 p-4 border-2 rounded-xl hover:border-primary transition-colors cursor-pointer">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="cursor-pointer flex-grow">
                      <div className="font-semibold">Индивидуальное</div>
                      <div className="text-sm text-gray-600">Для 1-5 детей</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border-2 rounded-xl hover:border-secondary transition-colors cursor-pointer">
                    <RadioGroupItem value="group" id="group" />
                    <Label htmlFor="group" className="cursor-pointer flex-grow">
                      <div className="font-semibold">Групповое (школьный класс)</div>
                      <div className="text-sm text-gray-600">От 10 детей — специальная цена!</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input id="name" placeholder="Как к вам обращаться?" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="children">Количество детей *</Label>
                  <Input id="children" type="number" min="1" placeholder="Сколько детей?" className="mt-1" />
                </div>

                {bookingType === 'group' && (
                  <div className="animate-fade-in">
                    <Label htmlFor="school">Название школы/организации</Label>
                    <Input id="school" placeholder="Школа №..." className="mt-1" />
                  </div>
                )}

                <div>
                  <Label htmlFor="date">Предпочтительная дата</Label>
                  <Input id="date" type="date" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="comments">Комментарий</Label>
                  <Textarea 
                    id="comments" 
                    placeholder="Особые пожелания, вопросы..." 
                    className="mt-1 min-h-24"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Отправить заявку 🚀
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Обязательные поля
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4 animate-fade-in">
            Галерея 📸
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Посмотрите, как проходят наши квизы!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-semibold">Фото {i}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8"
            >
              Смотреть все фото
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 animate-fade-in">
            Контакты 📞
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" className="text-primary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">+7 (999) 123-45-67</p>
                <p className="text-sm text-gray-600 mt-1">Звоните с 10:00 до 20:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" className="text-secondary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold text-secondary">quiz@tram.ru</p>
                <p className="text-sm text-gray-600 mt-1">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-accent" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold">г. Москва, ул. Трамвайная, д. 1</p>
                <p className="text-sm text-gray-600 mt-1">5 минут от метро "Парк культуры"</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" className="text-primary" />
                  Время работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold">Суббота и воскресенье</p>
                <p className="text-sm text-gray-600">11:00, 14:00, 17:00</p>
                <p className="text-sm text-gray-600 mt-2">Будни — по договоренности</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Icon name="MessageCircle" size={32} className="text-primary" />
                <h3 className="text-2xl font-bold font-heading">Мы в соцсетях</h3>
              </div>
              <div className="flex gap-4">
                <Button size="lg" variant="outline" className="border-2">
                  <Icon name="Instagram" className="mr-2" /> Instagram
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  <Icon name="MessageCircle" className="mr-2" /> Telegram
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  <Icon name="Share2" className="mr-2" /> VK
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold font-heading mb-2">🚃 Мальчики VS Девочки</h3>
          <p className="text-white/80 mb-6">Квиз в ретро трамвае — незабываемые приключения для детей!</p>
          <p className="text-sm text-white/60">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
