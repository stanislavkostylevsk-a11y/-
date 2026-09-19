import { useState, useEffect } from 'react';
import { Instagram, Send, MessageCircle, Menu, X, Sparkles, Clock } from 'lucide-react';
import { AUTHOR_INFO } from '../data/courseData';

interface HeaderProps {
  onOpenOrder: (tariffId?: string) => void;
  onOpenDirectChat: () => void;
}

export default function Header({ onOpenOrder, onOpenDirectChat }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Instagram promo countdown timer (5 hours 42 min)
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 4, minutes: 59, seconds: 59 }; // reset loop for promo urgency
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatTime = (val: number) => String(val).padStart(2, '0');

  const navLinks = [
    { label: 'О курсе', href: '#about-course' },
    { label: 'Программа курса', href: '#course-program' },
    { label: 'Формат', href: '#how-it-works' },
    { label: 'Плюсы курса', href: '#benefits' },
    { label: 'Об авторе', href: '#author' },
    { label: 'Тариф', href: '#tariffs' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Instagram Promo Bar */}
      <div id="top-promo-bar" className="bg-[#1C1714] text-[#FAF7F2] text-xs sm:text-sm py-2 px-3 relative z-50 border-b border-[#322A24]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <a
            href={AUTHOR_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mx-auto sm:mx-0 hover:opacity-90 transition-opacity"
          >
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#E07A5F]/20 text-[#F4A261] font-medium text-[11px] uppercase tracking-wider">
              <Instagram className="w-3 h-3" /> Special Instagram Offer
            </span>
            <span className="text-[#D8C7B5] hidden sm:inline">
              Скидка 50% для подписчиков Instagram
            </span>
            <span className="text-[#F4EFEA] font-semibold underline decoration-white/30">
              @{AUTHOR_INFO.instagram}
            </span>
          </a>

          <div className="flex items-center justify-center gap-3 mx-auto sm:mx-0 text-xs text-[#EAE1D7]">
            <div className="flex items-center gap-1 font-mono bg-[#2C241E] px-2 py-0.5 rounded border border-[#3D332B]">
              <Clock className="w-3 h-3 text-[#E07A5F]" />
              <span>До конца акции:</span>
              <span className="text-[#F4A261] font-bold">
                {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
              </span>
            </div>
            
            <button
              onClick={() => onOpenDirectChat()}
              className="hover:text-[#F4A261] transition-colors underline text-[11px] hidden md:inline"
            >
              Задать вопрос Амалии
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#EAE1D7]/80 py-3'
            : 'bg-[#FAF7F2] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Author badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#1C1714] text-[#FAF7F2] flex items-center justify-center font-editorial text-xl font-bold tracking-wider group-hover:scale-105 transition-transform">
              А
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-[#886C56] font-semibold">
                Авторский мини-курс
              </div>
              <div className="font-editorial text-lg sm:text-xl font-bold text-[#1C1714] leading-tight flex items-center gap-1.5">
                Сама себе бровист
                <span className="text-xs font-sans font-normal text-[#A88B72] border-l border-[#D8C7B5] pl-1.5 hidden sm:inline">
                  Амалия
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#42342A]">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[#1C1714] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#A88B72] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={AUTHOR_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#665040] hover:text-[#1C1714] hover:bg-[#EAE1D7]/50 rounded-xl transition-all"
              title="Перейти в Telegram канал"
            >
              <Send className="w-4 h-4 text-[#2AABEE]" />
              <span>Telegram</span>
            </a>

            <button
              id="header-buy-btn"
              onClick={() => onOpenOrder()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1714] text-[#FAF7F2] text-xs uppercase tracking-wider font-bold shadow-sm hover:bg-[#322A24] active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
              <span>Купить курс • 1 490 ₽</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#251D17] hover:bg-[#EAE1D7] rounded-lg lg:hidden"
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#EAE1D7] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium text-[#42342A] pb-2 border-b border-[#EAE1D7]">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-[#EAE1D7]/60 text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-3 rounded-xl bg-[#1C1714] text-[#FAF7F2] text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#E07A5F]" />
                Купить курс • 1 490 ₽
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={AUTHOR_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-[#D8C7B5] text-xs font-semibold text-[#42342A] hover:bg-white"
                >
                  <Instagram className="w-4 h-4 text-[#C13584]" />
                  Instagram
                </a>
                <a
                  href={AUTHOR_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-[#D8C7B5] text-xs font-semibold text-[#42342A] hover:bg-white"
                >
                  <Send className="w-4 h-4 text-[#2AABEE]" />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
