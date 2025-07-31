import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Навигация */}
      <header className="bg-sport-blue text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Trophy" size={32} className="text-sport-red" />
            <h1 className="text-2xl font-montserrat font-bold">СПОРТ ФОНД</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-sport-red transition-colors font-pt-sans">О нас</a>
            <a href="#documents" className="hover:text-sport-red transition-colors font-pt-sans">Документы</a>
            <a href="#apply" className="hover:text-sport-red transition-colors font-pt-sans">Заявки</a>
            <a href="#partners" className="hover:text-sport-red transition-colors font-pt-sans">Партнеры</a>
            <a href="#contacts" className="hover:text-sport-red transition-colors font-pt-sans">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero секция */}
      <section className="relative bg-gradient-to-r from-sport-blue to-sport-red py-20 px-6 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 animate-fade-in">
              РАЗВИВАЕМ РОССИЙСКИЙ СПОРТ
            </h1>
            <p className="text-xl md:text-2xl font-pt-sans mb-8 opacity-90">
              Государственный фонд поддержки спортивных достижений и развития массового спорта в России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sport-red hover:bg-red-700 text-white font-montserrat font-semibold px-8 py-3">
                <Icon name="FileText" className="mr-2" size={20} />
                Подать заявку
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sport-blue font-montserrat font-semibold px-8 py-3">
                <Icon name="Download" className="mr-2" size={20} />
                Документы
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <img 
            src="/img/62333bcd-c44c-4b59-b020-8aa08f441808.jpg" 
            alt="Российский спортсмен празднует победу"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
      </section>

      {/* О нас - 3 ценности */}
      <section id="about" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-sport-blue mb-4">
              НАШИ ЦЕННОСТИ
            </h2>
            <p className="text-xl font-pt-sans text-sport-gray max-w-3xl mx-auto">
              Мы работаем для развития спорта в России, поддерживая спортсменов на всех уровнях
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-sport-blue/10">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-sport-blue rounded-full flex items-center justify-center">
                  <Icon name="Target" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold text-sport-blue">
                  ПРЕВОСХОДСТВО
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg font-pt-sans text-sport-gray">
                  Стремимся к высочайшим стандартам в спорте, поддерживая атлетов на пути к международным победам и олимпийским медалям
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-sport-red/10">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-sport-red rounded-full flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold text-sport-red">
                  ДОСТУПНОСТЬ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg font-pt-sans text-sport-gray">
                  Делаем спорт доступным для всех слоев населения, развивая массовый спорт и создавая равные возможности для каждого
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-sport-gray/10">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-sport-gray rounded-full flex items-center justify-center">
                  <Icon name="Flag" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold text-sport-gray">
                  ПАТРИОТИЗМ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg font-pt-sans text-sport-gray">
                  Воспитываем гордость за Россию через спортивные достижения, укрепляя дух нации и национальную идентичность
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Документы */}
      <section id="documents" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-sport-blue mb-4">
              ДОКУМЕНТЫ
            </h2>
            <p className="text-xl font-pt-sans text-sport-gray">
              Нормативные акты, отчеты и документация фонда
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Icon name="FileText" size={24} className="text-sport-blue" />
                  <CardTitle className="font-montserrat font-semibold text-sport-blue">
                    Устав фонда
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-pt-sans text-sport-gray mb-4">
                  Основополагающий документ, определяющий цели и задачи фонда
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Icon name="BarChart3" size={24} className="text-sport-red" />
                  <CardTitle className="font-montserrat font-semibold text-sport-blue">
                    Годовой отчет 2024
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-pt-sans text-sport-gray mb-4">
                  Подробный отчет о деятельности и финансовых показателях
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Scale" size={24} className="text-sport-gray" />
                  <CardTitle className="font-montserrat font-semibold text-sport-blue">
                    Положение о грантах
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-pt-sans text-sport-gray mb-4">
                  Условия и порядок предоставления грантовой поддержки
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Форма заявки */}
      <section id="apply" className="py-16 px-6 bg-gradient-to-br from-sport-blue/5 to-sport-red/5">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-sport-blue mb-4">
              ПОДАЧА ЗАЯВКИ
            </h2>
            <p className="text-xl font-pt-sans text-sport-gray">
              Получите поддержку для развития спорта в вашем регионе
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat font-bold text-sport-blue">
                Заявка на грант
              </CardTitle>
              <CardDescription className="font-pt-sans">
                Заполните форму для получения финансовой поддержки
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="font-pt-sans font-semibold">Имя организации</Label>
                  <Input id="name" placeholder="Название спортивной организации" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="region" className="font-pt-sans font-semibold">Регион</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Выберите регион" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow">Москва</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                      <SelectItem value="ekb">Екатеринбург</SelectItem>
                      <SelectItem value="nsk">Новосибирск</SelectItem>
                      <SelectItem value="kzn">Казань</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="sport" className="font-pt-sans font-semibold">Вид спорта</Label>
                <Input id="sport" placeholder="Например: футбол, хоккей, легкая атлетика" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="amount" className="font-pt-sans font-semibold">Запрашиваемая сумма (руб.)</Label>
                <Input id="amount" type="number" placeholder="1000000" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="description" className="font-pt-sans font-semibold">Описание проекта</Label>
                <Textarea 
                  id="description" 
                  placeholder="Подробно опишите ваш спортивный проект и его цели..."
                  className="mt-1 min-h-[100px]"
                />
              </div>
              
              <Button className="w-full bg-sport-red hover:bg-red-700 font-montserrat font-semibold" size="lg">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Партнеры */}
      <section id="partners" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-sport-blue mb-4">
              НАШИ ПАРТНЕРЫ
            </h2>
            <p className="text-xl font-pt-sans text-sport-gray">
              Ведущие организации российского спорта
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-center">
                <Icon name="Building2" size={48} className="text-sport-blue mx-auto mb-2" />
                <p className="font-montserrat font-semibold text-sport-blue">Минспорт России</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-center">
                <Icon name="Award" size={48} className="text-sport-red mx-auto mb-2" />
                <p className="font-montserrat font-semibold text-sport-blue">ОКР</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-center">
                <Icon name="Zap" size={48} className="text-sport-gray mx-auto mb-2" />
                <p className="font-montserrat font-semibold text-sport-blue">РФС</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-center">
                <Icon name="Crown" size={48} className="text-sport-blue mx-auto mb-2" />
                <p className="font-montserrat font-semibold text-sport-blue">ФХР</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer id="contacts" className="bg-sport-blue text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Trophy" size={28} className="text-sport-red" />
                <h3 className="text-xl font-montserrat font-bold">СПОРТ ФОНД</h3>
              </div>
              <p className="font-pt-sans text-gray-300">
                Государственный фонд развития российского спорта
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 font-pt-sans text-gray-300">
                <li><a href="#about" className="hover:text-sport-red transition-colors">О нас</a></li>
                <li><a href="#documents" className="hover:text-sport-red transition-colors">Документы</a></li>
                <li><a href="#apply" className="hover:text-sport-red transition-colors">Заявки</a></li>
                <li><a href="#partners" className="hover:text-sport-red transition-colors">Партнеры</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 font-pt-sans text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@sportfond.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Москва, ул. Спортивная, 1</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-sport-red hover:border-sport-red">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-sport-red hover:border-sport-red">
                  <Icon name="Share2" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-sport-red hover:border-sport-red">
                  <Icon name="Youtube" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="font-pt-sans text-gray-300">
              © 2024 Государственный спортивный фонд России. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;