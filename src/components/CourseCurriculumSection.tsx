import { Sparkles, Eye, Palette, Flame, Droplet, Wrench, ArrowRight } from 'lucide-react';

interface CourseCurriculumSectionProps {
  onOpenOrder: () => void;
}

export default function CourseCurriculumSection({ onOpenOrder }: CourseCurriculumSectionProps) {
  const blocks = [
    {
      id: 'block-1',
      number: 'Блок 1',
      title: 'Форма бровей',
      icon: <Eye className="w-6 h-6 text-[#E07A5F]" />,
      accentColor: 'border-[#E07A5F]/30 hover:border-[#E07A5F]'
    },
    {
      id: 'block-2',
      number: 'Блок 2',
      title: 'Колористика',
      icon: <Palette className="w-6 h-6 text-[#886C56]" />,
      accentColor: 'border-[#886C56]/30 hover:border-[#886C56]'
    },
    {
      id: 'block-3',
      number: 'Блок 3',
      title: 'Хна Brow Henna',
      icon: <Droplet className="w-6 h-6 text-[#2E7D32]" />,
      accentColor: 'border-[#2E7D32]/30 hover:border-[#2E7D32]'
    },
    {
      id: 'block-4',
      number: 'Блок 4',
      title: 'Коррекция бровей',
      icon: <Flame className="w-6 h-6 text-[#E07A5F]" />,
      accentColor: 'border-[#E07A5F]/30 hover:border-[#E07A5F]'
    },
    {
      id: 'block-5',
      number: 'Блок 5',
      title: 'Материалы для оформления бровей',
      icon: <Wrench className="w-6 h-6 text-[#886C56]" />,
      accentColor: 'border-[#886C56]/30 hover:border-[#886C56]'
    }
  ];

  return (
    <section id="course-program" className="py-16 md:py-20 bg-[#F5EFE6]/60 border-y border-[#D8C7B5]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#D8C7B5] text-[#886C56] text-xs font-semibold uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>Учебный план</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1714] mb-3">
            Программа курса
          </h2>

          <p className="text-sm sm:text-base text-[#665040]">
            Основные учебные блоки авторского курса «Сама себе бровист»
          </p>
        </div>

        {/* Blocks Grid: Only Titles & Block Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {blocks.map((block) => (
            <div
              key={block.id}
              className={`bg-white rounded-2xl p-6 sm:p-7 border border-[#D8C7B5] shadow-xs flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${block.accentColor}`}
            >
              <div className="w-13 h-13 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5] flex items-center justify-center shrink-0">
                {block.icon}
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#886C56] uppercase tracking-wider block mb-1">
                  {block.number}
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#1C1714] leading-snug">
                  {block.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={onOpenOrder}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1C1714] hover:bg-[#322A24] text-[#FAF7F2] font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            <span>Получить доступ к курсу • 1 490 ₽</span>
            <ArrowRight className="w-4 h-4 text-[#E07A5F]" />
          </button>
        </div>

      </div>
    </section>
  );
}
