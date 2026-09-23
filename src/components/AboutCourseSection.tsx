import { CheckCircle2, Sparkles, Send, BookOpen, Video, ShieldCheck, HeartHandshake, Eye, Palette, Wrench, AlertTriangle, Paintbrush, ArrowRight } from 'lucide-react';
import { COURSE_ABOUT, WHAT_YOU_WILL_LEARN, HOW_IT_WORKS, COURSE_BENEFITS, AUTHOR_PHOTOS, AUTHOR_INFO } from '../data/courseData';

interface AboutCourseSectionProps {
  onOpenOrder: () => void;
}

export default function AboutCourseSection({ onOpenOrder }: AboutCourseSectionProps) {
  const getLearnIcon = (id: string) => {
    switch (id) {
      case 'form': return <Eye className="w-5 h-5 text-[#886C56]" />;
      case 'color': return <Palette className="w-5 h-5 text-[#886C56]" />;
      case 'tools': return <Wrench className="w-5 h-5 text-[#886C56]" />;
      case 'safety': return <AlertTriangle className="w-5 h-5 text-[#886C56]" />;
      case 'coloring': return <Paintbrush className="w-5 h-5 text-[#886C56]" />;
      case 'maintenance': return <ShieldCheck className="w-5 h-5 text-[#886C56]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#886C56]" />;
    }
  };

  return (
    <section id="about-course" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BLOCK 1: О чем этот курс? */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C7B5] text-[#886C56] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>Концепция обучения</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1714] mb-6 leading-tight">
            {COURSE_ABOUT.title}
          </h2>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#D8C7B5] shadow-xs">
            <p className="font-editorial text-xl sm:text-2xl text-[#251D17] leading-relaxed font-medium">
              «{COURSE_ABOUT.description}»
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#886C56]">
              <span className="font-semibold text-[#1C1714]">Автор курса:</span>
              <span>Амалия — топ-мастер и преподаватель</span>
            </div>
          </div>
        </div>

        {/* BLOCK 2: Чему вы научитесь? */}
        <div id="learning-outcomes" className="mb-20 md:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C7B5] text-[#886C56] text-xs font-semibold uppercase tracking-widest mb-3">
              Программа навыков
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1C1714] mb-4">
              Чему вы научитесь?
            </h3>
            <p className="text-sm sm:text-base text-[#665040] leading-relaxed">
              На курсе «Сама себе бровист» вы научитесь всему, что нужно для самостоятельного и грамотного оформления бровей — от теории до уверенной практики.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_YOU_WILL_LEARN.map((item, idx) => (
              <div
                key={item.id}
                className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#D8C7B5] hover:border-[#886C56] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#D8C7B5] flex items-center justify-center shadow-xs">
                      {getLearnIcon(item.id)}
                    </div>
                    <span className="text-[11px] font-semibold text-[#886C56] bg-white px-2.5 py-1 rounded-full border border-[#EAE1D7]">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-editorial text-xl font-bold text-[#1C1714] mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#665040] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EAE1D7] flex items-center gap-2 text-xs font-medium text-[#251D17]">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                  <span>От теории до уверенной практики</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 3: Как проходит курс? */}
        <div id="how-it-works" className="mb-20 md:mb-24 bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D8C7B5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-block px-3 py-1 rounded-full bg-white border border-[#D8C7B5] text-[#886C56] text-xs font-semibold uppercase tracking-widest mb-3">
                Формат обучения
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1C1714] mb-4">
                {HOW_IT_WORKS.title}
              </h3>

              <p className="text-base sm:text-lg text-[#251D17] font-medium leading-relaxed mb-8">
                {HOW_IT_WORKS.description}
              </p>

              {/* 3 Highlights */}
              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE1D7] flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#2AABEE] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h5 className="font-bold text-sm sm:text-base text-[#1C1714]">
                        Закрытый Telegram-канал
                      </h5>
                      <span className="px-2 py-0.5 rounded-md bg-[#2AABEE]/10 text-[#0088cc] text-[11px] font-semibold">
                        Без лишних платформ
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#665040] leading-relaxed">
                      Обучение проходит в закрытом Telegram-канале, а не на сторонних платформах. Сразу после оплаты вам приходит ссылка: уроки, видео и таблицы всегда под рукой в привычном мессенджере 24/7.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE1D7] flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1714] text-white flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5 text-[#E07A5F]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm sm:text-base text-[#1C1714] mb-1">
                      Очень ясная теоретическая часть
                    </h5>
                    <p className="text-xs sm:text-sm text-[#665040] leading-relaxed">
                      Без лишней «воды», сложных салонных терминов и путаницы. Только понятные ориентиры, схемы и точные шаги.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE1D7] flex items-start gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1714] text-white flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5 text-[#E07A5F]" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm sm:text-base text-[#1C1714] mb-1">
                      Два видео материала с практикой
                    </h5>
                    <p className="text-xs sm:text-sm text-[#665040] leading-relaxed">
                      Подробные наглядные видео-уроки: постановка руки, правильный захват пинцета, замешивание краски и нанесение на брови.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={onOpenOrder}
                  className="px-6 py-3.5 rounded-xl bg-[#1C1714] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#322A24] transition-all flex items-center gap-2 shadow-md"
                >
                  <span>Начать обучение • 1 490 ₽</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Studio Photo of Amaliya at Work */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <div className="aspect-4/5 overflow-hidden relative">
                  <img
                    src={AUTHOR_PHOTOS.studioWork}
                    onError={(e) => {
                      e.currentTarget.src = AUTHOR_PHOTOS.studioWorkFallback;
                    }}
                    alt="Амалия за работой в студии с клиентом"
                    className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="inline-block px-2.5 py-1 rounded-full bg-[#E07A5F] text-white text-[11px] font-bold uppercase tracking-wider mb-1.5 shadow-sm">
                      Практика мастера
                    </div>
                    <div className="font-editorial text-xl font-bold">
                      Амалия в процессе работы в студии
                    </div>
                    <p className="text-xs text-[#EAE1D7] mt-1">
                      Все приемы из курса отточены на сотнях реальных клиентов
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BLOCK 4: ПЛЮСЫ после прохождения курса для себя «Сама себе бровист» */}
        <div id="benefits" className="mb-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#D8C7B5] text-[#886C56] text-xs font-semibold uppercase tracking-widest mb-3">
              Ваши преимущества
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1714] mb-4">
              Плюсы после прохождения курса для себя «Сама себе бровист»
            </h3>
            <p className="text-sm sm:text-base text-[#665040]">
              Главные результаты, которые останутся с вами навсегда уже после первого просмотра уроков
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COURSE_BENEFITS.map((benefit, idx) => (
              <div
                key={benefit.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D8C7B5] shadow-xs flex flex-col justify-between hover:border-[#886C56] transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5] flex items-center justify-center mb-5 text-[#886C56]">
                    {benefit.id === 'confidence' && <ShieldCheck className="w-6 h-6 text-[#2E7D32]" />}
                    {benefit.id === 'helping' && <HeartHandshake className="w-6 h-6 text-[#E07A5F]" />}
                    {benefit.id === 'mixes' && <Sparkles className="w-6 h-6 text-[#886C56]" />}
                  </div>

                  <div className="text-xs font-bold text-[#886C56] uppercase tracking-wider mb-1">
                    Плюс 0{idx + 1}
                  </div>

                  <h4 className="font-editorial text-2xl font-bold text-[#1C1714] mb-3">
                    {benefit.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE1D7]">
                  <span className="text-xs font-semibold text-[#886C56]">
                    Включено в тариф «Я сама»
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
