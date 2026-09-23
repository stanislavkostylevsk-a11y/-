import { useState } from 'react';
import { Menu, X, Instagram, Send, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { AUTHOR_INFO } from '../data/courseData';

interface BrowNavbarProps {
  onOpenOrder: () => void;
  onOpenDirectChat: () => void;
}

export default function BrowNavbar({ onOpenOrder, onOpenDirectChat }: BrowNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'О курсе', href: '#about-course' },
    { label: 'Программа', href: '#course-program' },
    { label: 'Результаты', href: '#results' },
    { label: 'Тариф', href: '#tariffs' },
    { label: 'Об авторе', href: '#author' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE1D7] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Logo variant="light" size="sm" showSubtitle={true} showText={true} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#554336]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#1C1714] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#886C56] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDirectChat}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#554336] hover:text-[#1C1714] hover:bg-[#EAE1D7]/50 transition-colors"
              title="Задать вопрос в мессенджер"
            >
              <Send className="w-3.5 h-3.5 text-[#886C56]" />
              <span>Задать вопрос</span>
            </button>

            <button
              onClick={onOpenOrder}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1C1714] hover:bg-[#322A24] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
              <span>Занять место</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenOrder}
              className="px-3.5 py-1.5 rounded-lg bg-[#1C1714] text-[#FAF7F2] text-xs font-bold"
            >
              1 490 ₽
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1C1714] hover:bg-[#EAE1D7]/60"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF7F2] border-b border-[#EAE1D7] px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#382C23]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-[#EAE1D7]/50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#EAE1D7] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrder();
              }}
              className="w-full py-3 rounded-xl bg-[#1C1714] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#E07A5F]" />
              <span>Занять место со скидкой 50%</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDirectChat();
              }}
              className="w-full py-2.5 rounded-xl border border-[#D8C7B5] text-[#382C23] text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4 text-[#C13584]" />
              <span>Написать в Instagram Direct (@{AUTHOR_INFO.instagram})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
