import { AlertCircle, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface PainPointsProps {
  onOpenOrder: () => void;
}

export default function PainPoints({ onOpenOrder: _onOpenOrder }: PainPointsProps) {
  const painItems = [
    {
      title: 'Утренняя пытка с карандашом',
      pain: 'Тратите по 25–30 минут перед зеркалом, стираете ватными палочками, а брови все равно получаются разной высоты и формы.',
      solution: 'Разметка по 3 природным точкам за 2 минуты. Брови симметричны и готовы без карандаша на 3 недели вперед.',
      icon: Clock
    },
    {
      title: 'Страх «угольных полос» из салона',
      pain: 'После визита к мастеру боитесь выйти на улицу: брови черные, графичные и визуально прибавляют 5 лет к возрасту.',
      solution: 'Авторская полупрозрачная колористика: мягкий пудровый градиент и оттенок тон-в-тон с корнями волос.',
      icon: AlertCircle
    },
    {
      title: 'Сливаете от 30 000 ₽ в год на процедуры',
      pain: 'Каждые 3–4 недели отдаете от 2 000 ₽, подстраиваете свой график под запись мастера и тратите часы на дорогу.',
      solution: 'Вся салонная процедура дома за 15 минут в удобное время. Домашняя себестоимость — всего 35 рублей!',
      icon: Sparkles
    },
    {
      title: 'Непослушные и опущенные волоски',
      pain: 'Волоски торчат вниз, создают грустный взгляд, а магазинные гели оставляют белые хлопья и осыпаются к обеду.',
      solution: 'Техника «эффекта ламинирования» и правильная выкладка щеточкой: соболиные, ухоженные брови на 24 часа.',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="audience" className="py-16 md:py-24 bg-white border-y border-[#EAE1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C7B5] text-[#886C56] text-xs font-semibold uppercase tracking-widest mb-3">
            Честный взгляд в зеркало
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1714] mb-4">
            Узнаете свои утренние сборы?
          </h2>
          <p className="text-sm sm:text-base text-[#665040] leading-relaxed">
            Большинство девушек думают, что красивые брови — это либо дорогой салон каждые две недели, либо мучительное рисование по утрам. На самом деле всё намного проще.
          </p>
        </div>

        {/* 4 Key Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#EAE1D7] flex flex-col justify-between hover:border-[#C2A992] transition-all hover:shadow-xs group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EAE1D7] text-[#1C1714] flex items-center justify-center mb-4 group-hover:bg-[#1C1714] group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-editorial text-xl font-bold text-[#1C1714] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665040] leading-relaxed mb-4">
                  {item.pain}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE1D7]/80 flex items-start gap-2 text-xs font-medium text-[#251D17]">
                <CheckCircle2 className="w-4 h-4 text-[#886C56] shrink-0 mt-0.5" />
                <span>{item.solution}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
