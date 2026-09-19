import { useState } from 'react';
import { ChevronDown, HelpCircle, Instagram, Send } from 'lucide-react';
import { FAQ_ITEMS, AUTHOR_INFO } from '../data/courseData';

interface FaqSectionProps {
  onOpenDirectChat: () => void;
}

export default function FaqSection({ onOpenDirectChat }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-[#EAE1D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C7B5] text-[#886C56] text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>Частые вопросы</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1714] mb-4">
            Ответы на все ваши сомнения
          </h2>
          <p className="text-sm sm:text-base text-[#665040]">
            Всё, что нужно знать перед стартом обучения на курсе «Сама себе бровист»
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-3 mb-12">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-[#FAF7F2] border-[#C2A992] shadow-xs'
                    : 'bg-white border-[#EAE1D7] hover:border-[#D8C7B5]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-lg sm:text-xl font-bold text-[#1C1714] leading-snug">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white text-[#1C1714] transition-transform duration-200 shrink-0 border border-[#EAE1D7] ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#EAE1D7] animate-in fade-in duration-200">
                    <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#D8C7B5] text-center max-w-xl mx-auto shadow-xs">
          <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#1C1714] mb-2">
            Остались сомнения или вопрос по материалам?
          </h3>
          <p className="text-xs sm:text-sm text-[#665040] mb-5">
            Напишите лично Амалии в Telegram или Instagram Direct — она проконсультирует и ответит на все вопросы.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={AUTHOR_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#1C1714] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider hover:bg-[#322A24] transition-all flex items-center gap-2 shadow-xs"
            >
              <Send className="w-4 h-4 text-[#2AABEE]" />
              <span>Telegram: {AUTHOR_INFO.telegram}</span>
            </a>
            <a
              href={AUTHOR_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white border border-[#D8C7B5] text-[#251D17] text-xs font-bold hover:bg-[#FAF7F2] transition-all flex items-center gap-2 shadow-xs"
            >
              <Instagram className="w-4 h-4 text-[#C13584]" />
              <span>Instagram: @{AUTHOR_INFO.instagram}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
