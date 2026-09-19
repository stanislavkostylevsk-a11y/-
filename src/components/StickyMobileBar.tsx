import { useState, useEffect } from 'react';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenOrder: () => void;
}

export default function StickyMobileBar({ onOpenOrder }: StickyMobileBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero (approx 350px)
      setIsVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Быстрый заказ"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#1C1714]/95 backdrop-blur-md text-[#FAF7F2] p-3 sm:py-3.5 px-4 border-t border-[#3D332B] shadow-2xl transition-all duration-300 md:hidden animate-in slide-in-from-bottom-3"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] text-[#E07A5F] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F] animate-ping" />
            <span>Спеццена -50%</span>
          </div>
          <div className="text-base font-extrabold text-white font-editorial leading-tight">
            1 490 ₽
            <span className="text-xs font-sans text-[#A88B72] line-through ml-1.5 font-normal">
              2 990 ₽
            </span>
          </div>
        </div>

        <button
          onClick={onOpenOrder}
          className="py-2.5 px-5 rounded-xl bg-[#FAF7F2] hover:bg-white text-[#1C1714] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 active:scale-95 transition-all shadow-md shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
          <span>Занять место</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
