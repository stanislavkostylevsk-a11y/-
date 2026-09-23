import { Instagram, Award, Send } from 'lucide-react';
import { AUTHOR_INFO, AUTHOR_PHOTOS } from '../data/courseData';

interface AuthorSectionProps {
  onOpenDirectChat: () => void;
}

export default function AuthorSection({ onOpenDirectChat }: AuthorSectionProps) {
  return (
    <section id="author" className="py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Author Images & Aesthetics */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Portrait Card (IMG_1666.JPG) */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white relative aspect-4/5">
                <img
                  src={AUTHOR_PHOTOS.portrait}
                  onError={(e) => {
                    e.currentTarget.src = AUTHOR_PHOTOS.portraitFallback;
                  }}
                  alt="Амалия — автор курса Сама себе бровист"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <span className="text-xs uppercase tracking-wider text-[#FAF7F2] font-semibold">
                      Автор курса «Сама себе бровист»
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold">
                    Амалия
                  </h3>
                </div>
              </div>

              {/* Secondary Overlapping Card: Amaliya at work in studio (IMG_6974.PNG) */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#1C1714]">
                <div className="aspect-4/3 relative">
                  <img
                    src={AUTHOR_PHOTOS.studioWork}
                    onError={(e) => {
                      e.currentTarget.src = AUTHOR_PHOTOS.studioWorkFallback;
                    }}
                    alt="Амалия за работой в студии"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#F4A261] block">
                      Студийная практика
                    </span>
                    <span className="text-[11px] font-semibold leading-tight block">
                      Работа с клиентом
                    </span>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-[#1C1714] text-white px-4 py-2 rounded-2xl shadow-lg text-xs font-bold flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E07A5F]" />
                <span>6+ лет в бьюти</span>
              </div>

            </div>
          </div>

          {/* Right Column: Story, Philosophy & Credentials */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            <div className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#D8C7B5] text-[#886C56] text-xs font-semibold uppercase tracking-widest mb-3">
              Знакомство с автором
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1714] mb-6 leading-tight">
              «Привет, я Амалия! И я научу вас оформлять брови легко и безопасно»
            </h2>

            {/* Author Quote */}
            <div className="w-full bg-white p-5 sm:p-6 rounded-2xl border-l-4 border-[#886C56] border-[#D8C7B5] mb-6 shadow-xs text-center lg:text-left">
              <p className="font-editorial text-lg sm:text-xl text-[#251D17] italic leading-snug">
                {AUTHOR_INFO.quote}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#554336] leading-relaxed mb-8 max-w-2xl">
              <p>
                За годы работы топ-бровистом я видела сотни девушек, которые боялись сами прикоснуться к пинцету или краске из-за страха сделать криво или перетемнить.
              </p>
              <p>
                Курс <strong>«Сама себе бровист»</strong> создан для того, чтобы убрать этот страх раз и навсегда. На курсе вы получите четкий проверенный алгоритм: как подобрать форму, как провести безопасную коррекцию, как окрасить брови краской или хной, а также готовые миксы и выдержки.
              </p>
            </div>

            {/* Statistics Row */}
            <div className="w-full max-w-xl grid grid-cols-2 gap-3 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-white border border-[#D8C7B5] mb-8">
              <div className="text-center">
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1714]">
                  {AUTHOR_INFO.experienceYears}+ лет
                </div>
                <div className="text-[11px] sm:text-xs text-[#886C56] mt-0.5">Опыта в бьюти</div>
              </div>
              <div className="text-center border-l border-[#EAE1D7]">
                <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1714]">
                  {AUTHOR_INFO.clientsCount}
                </div>
                <div className="text-[11px] sm:text-xs text-[#886C56] mt-0.5">Оформленных бровей</div>
              </div>
            </div>

            {/* Direct Consultation prompt */}
            <div className="w-full max-w-xl p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#C2A992] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1C1714] text-white flex items-center justify-center shrink-0">
                  <Send className="w-4 h-4 text-[#2AABEE]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C1714]">Остались вопросы по курсу?</div>
                  <div className="text-[11px] text-[#665040]">Напишите Амалии лично в Telegram или Instagram</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 w-full sm:w-auto">
                <a
                  href={AUTHOR_INFO.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#1C1714] border border-[#D8C7B5] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-[#2AABEE]" />
                  <span>Telegram</span>
                </a>
                <a
                  href={AUTHOR_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#1C1714] border border-[#D8C7B5] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C13584]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
