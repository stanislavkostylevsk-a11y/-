import { Instagram, Send, Mail } from 'lucide-react';
import { AUTHOR_INFO } from '../data/courseData';

interface FooterProps {
  onOpenOrder: () => void;
  onOpenDirectChat: () => void;
  onOpenLegal: (type: 'offer' | 'privacy') => void;
}

export default function Footer({ onOpenOrder, onOpenDirectChat, onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-[#18130E] text-[#FAF7F2] pt-14 pb-20 md:pb-12 border-t border-[#322A24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 text-center md:text-left">
          
          {/* Brand & Author Info */}
          <div className="md:col-span-5 space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#1C1714] flex items-center justify-center font-editorial text-xl font-bold">
                А
              </div>
              <div className="text-left">
                <div className="text-[11px] uppercase tracking-widest text-[#A88B72] font-semibold">
                  Авторский онлайн мини-курс
                </div>
                <div className="font-editorial text-xl font-bold text-white">
                  Сама себе бровист
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D8C7B5] max-w-sm leading-relaxed text-center md:text-left">
              Обучающий онлайн-курс от топ-мастера Амалии. Помогаем девушкам обрести уверенность и идеальные брови без переплат салонным мастерам.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={AUTHOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C13584] text-white flex items-center justify-center transition-colors"
                title={`Instagram: ${AUTHOR_INFO.instagram}`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={AUTHOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2AABEE] text-white flex items-center justify-center transition-colors"
                title={`Telegram: ${AUTHOR_INFO.telegram}`}
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${AUTHOR_INFO.email}`}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E07A5F] text-white flex items-center justify-center transition-colors"
                title={`Email: ${AUTHOR_INFO.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#A88B72]">
              Навигация:
            </div>
            <ul className="space-y-2 text-[#D8C7B5]">
              <li><a href="#hero-section" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="#about-course" className="hover:text-white transition-colors">О курсе</a></li>
              <li><a href="#course-program" className="hover:text-white transition-colors">Программа курса</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Формат обучения</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Плюсы курса</a></li>
              <li><a href="#author" className="hover:text-white transition-colors">Об авторе (Амалия)</a></li>
              <li><a href="#tariffs" className="hover:text-white transition-colors">Тариф «Я сама»</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>

          {/* Quick Contact & Legal info */}
          <div className="md:col-span-4 space-y-3 text-xs flex flex-col items-center md:items-start">
            <div className="text-xs font-bold uppercase tracking-wider text-[#A88B72]">
              Связь с Амалией:
            </div>
            <div className="space-y-1.5 text-[#D8C7B5] leading-relaxed">
              <div>
                Instagram Direct: <a href={AUTHOR_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-semibold">@{AUTHOR_INFO.instagram}</a>
              </div>
              <div>
                Telegram: <a href={AUTHOR_INFO.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-semibold">{AUTHOR_INFO.telegram}</a>
              </div>
              <div>
                Email: <a href={`mailto:${AUTHOR_INFO.email}`} className="text-white hover:underline font-semibold">{AUTHOR_INFO.email}</a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenOrder()}
                className="px-5 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-white text-[#1C1714] font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
              >
                Купить курс • 1 490 ₽
              </button>
            </div>

            <div className="pt-2 text-[11px] text-[#886C56] space-y-1 text-center md:text-left">
              <div className="text-[#D8C7B5] font-semibold">{AUTHOR_INFO.fullName}</div>
              <div>Самозанятая • ИНН {AUTHOR_INFO.inn}</div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#886C56]">
          <div>
            © {new Date().getFullYear()} Курс «Сама себе бровист». Автор — {AUTHOR_INFO.name}. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('offer')}
              className="hover:text-white transition-colors underline decoration-dotted underline-offset-2 cursor-pointer"
            >
              Публичная оферта
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors underline decoration-dotted underline-offset-2 cursor-pointer"
            >
              Политика конфиденциальности
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
