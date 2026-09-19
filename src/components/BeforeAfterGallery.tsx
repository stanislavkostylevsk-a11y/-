import { useState } from 'react';
import { Instagram, Sparkles, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/courseData';

interface BeforeAfterGalleryProps {
  onOpenOrder: () => void;
}

export default function BeforeAfterGallery({ onOpenOrder }: BeforeAfterGalleryProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  return (
    <section id="results" className="py-16 md:py-24 bg-white border-b border-[#EAE1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C7B5] text-[#886C56] text-xs font-semibold uppercase tracking-widest mb-3">
            Реальные работы учениц
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1714] mb-4">
            До и После: результаты за 3 дня
          </h2>
          <p className="text-sm sm:text-base text-[#665040]">
            Посмотрите, как преобразились брови девушек, которые никогда раньше не держали профессиональный пинцет и краску в руках.
          </p>
        </div>

        {/* Featured Interactive Case Showcase */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#D8C7B5] mb-12 shadow-xs">
          
          {/* Case Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                  activeCaseIndex === idx
                    ? 'bg-[#1C1714] text-white shadow-xs'
                    : 'bg-white text-[#42342A] border border-[#D8C7B5] hover:border-[#886C56]'
                }`}
              >
                <span>Кейс {idx + 1}: {item.studentName}</span>
                <span className="text-[10px] opacity-75">{item.instagramHandle}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Comparison: Before & After Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* BEFORE Photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-sm border-2 border-[#EAE1D7] bg-white group">
                  <div className="aspect-4/5 overflow-hidden">
                    <img
                      src={currentCase.beforeImg}
                      alt={`До курса — ${currentCase.studentName}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute top-3 left-3 bg-[#1C1714]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider">
                    ДО КУРСА
                  </div>
                  <div className="p-3.5 bg-white border-t border-[#EAE1D7]">
                    <div className="text-[11px] text-[#A88B72] uppercase font-semibold">Проблема:</div>
                    <div className="text-xs text-[#251D17] font-medium mt-0.5 line-clamp-2">
                      {currentCase.problem}
                    </div>
                  </div>
                </div>

                {/* AFTER Photo */}
                <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-[#886C56] bg-white group">
                  <div className="aspect-4/5 overflow-hidden">
                    <img
                      src={currentCase.afterImg}
                      alt={`После курса — ${currentCase.studentName}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute top-3 left-3 bg-[#E07A5F] text-white px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> ПОСЛЕ
                  </div>
                  <div className="p-3.5 bg-white border-t border-[#EAE1D7]">
                    <div className="text-[11px] text-[#886C56] uppercase font-semibold">Решение Амалии:</div>
                    <div className="text-xs text-[#1C1714] font-medium mt-0.5 line-clamp-2">
                      {currentCase.solution}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Details & Story */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#1C1714] text-white flex items-center justify-center font-bold text-xs">
                    {currentCase.studentName.charAt(0)}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#1C1714]">
                      {currentCase.studentName}
                    </h3>
                    <div className="text-xs text-[#C13584] font-semibold flex items-center gap-1">
                      <Instagram className="w-3 h-3" />
                      {currentCase.instagramHandle}
                    </div>
                  </div>
                </div>

                {/* Quote bubble */}
                <div className="bg-white p-5 rounded-2xl border border-[#D8C7B5] relative mb-6 shadow-xs">
                  <span className="text-3xl font-editorial text-[#D8C7B5] leading-none absolute top-2 left-3">“</span>
                  <p className="text-xs sm:text-sm text-[#42342A] italic leading-relaxed pt-2 relative z-10">
                    {currentCase.story}
                  </p>
                </div>

                <div className="space-y-2 mb-6 text-xs text-[#382C23]">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#886C56]" />
                    <span>Время на процедуру: <strong>{currentCase.timeSpent}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#886C56]" />
                    <span>Стойкость окрашивания: <strong>3–4 недели</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#886C56]" />
                    <span>Себестоимость материалов: <strong>менее 40 ₽ за раз</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D8C7B5] flex items-center justify-between gap-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveCaseIndex((prev) => (prev > 0 ? prev - 1 : BEFORE_AFTER_CASES.length - 1))}
                    className="p-2 rounded-xl border border-[#D8C7B5] hover:bg-white text-[#42342A] transition-colors"
                    aria-label="Предыдущий кейс"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveCaseIndex((prev) => (prev < BEFORE_AFTER_CASES.length - 1 ? prev + 1 : 0))}
                    className="p-2 rounded-xl border border-[#D8C7B5] hover:bg-white text-[#42342A] transition-colors"
                    aria-label="Следующий кейс"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={onOpenOrder}
                  className="px-5 py-2.5 rounded-xl bg-[#1C1714] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider hover:bg-[#322A24] transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>Хочу такой результат</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
