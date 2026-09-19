import { useState } from 'react';
import { 
  Sparkles, 
  Eye, 
  Palette, 
  CheckCircle2, 
  Flame, 
  AlertTriangle, 
  Wrench, 
  Clock, 
  Droplet, 
  Info,
  ChevronDown,
  ChevronUp,
  Brush,
  Scissors
} from 'lucide-react';
import { 
  BRONSUN_PALETTE, 
  BRONSUN_RECIPES, 
  HENNA_SHADES, 
  HENNA_MIXES, 
  COURSE_MATERIALS, 
  SAFETY_RULES 
} from '../data/courseManualData';

interface CourseCurriculumSectionProps {
  onOpenOrder: () => void;
}

export default function CourseCurriculumSection({ onOpenOrder }: CourseCurriculumSectionProps) {
  const [activeTab, setActiveTab] = useState<'form' | 'bronsun' | 'henna' | 'wax' | 'materials'>('form');
  const [activeRecipeCategory, setActiveRecipeCategory] = useState<string>('Шатен');
  const [expandedMixes, setExpandedMixes] = useState(true);

  return (
    <section id="course-program" className="py-16 md:py-24 bg-[#F5EFE6]/60 border-y border-[#D8C7B5]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#D8C7B5] text-[#886C56] text-xs font-semibold uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>Учебный план курса</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1714] mb-4 leading-tight">
            Программа курса «Сама себе бровист»
          </h2>

          <p className="text-sm sm:text-base text-[#554336] leading-relaxed">
            Полный методический план авторского курса Амалии: от построения идеальной формы по трём точкам до профессиональной колористики Bronsun, хны Brow Henna и чистой коррекции воском.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setActiveTab('form')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'form'
                ? 'bg-[#1C1714] text-[#FAF7F2] shadow-sm'
                : 'bg-white text-[#554336] border border-[#D8C7B5] hover:bg-[#FAF7F2]'
            }`}
          >
            <Eye className="w-4 h-4 text-[#E07A5F]" />
            <span>Блок 1. Форма бровей</span>
          </button>

          <button
            onClick={() => setActiveTab('bronsun')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'bronsun'
                ? 'bg-[#1C1714] text-[#FAF7F2] shadow-sm'
                : 'bg-white text-[#554336] border border-[#D8C7B5] hover:bg-[#FAF7F2]'
            }`}
          >
            <Palette className="w-4 h-4 text-[#886C56]" />
            <span>Блок 2. Краска Bronsun</span>
          </button>

          <button
            onClick={() => setActiveTab('henna')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'henna'
                ? 'bg-[#1C1714] text-[#FAF7F2] shadow-sm'
                : 'bg-white text-[#554336] border border-[#D8C7B5] hover:bg-[#FAF7F2]'
            }`}
          >
            <Droplet className="w-4 h-4 text-[#2E7D32]" />
            <span>Хна Brow Henna</span>
          </button>

          <button
            onClick={() => setActiveTab('wax')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'wax'
                ? 'bg-[#1C1714] text-[#FAF7F2] shadow-sm'
                : 'bg-white text-[#554336] border border-[#D8C7B5] hover:bg-[#FAF7F2]'
            }`}
          >
            <Flame className="w-4 h-4 text-[#E07A5F]" />
            <span>Коррекция бровей (воск + пинцет)</span>
          </button>

          <button
            onClick={() => setActiveTab('materials')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
              activeTab === 'materials'
                ? 'bg-[#1C1714] text-[#FAF7F2] shadow-sm'
                : 'bg-white text-[#554336] border border-[#D8C7B5] hover:bg-[#FAF7F2]'
            }`}
          >
            <Wrench className="w-4 h-4 text-[#886C56]" />
            <span>Материалы и безопасность</span>
          </button>
        </div>

        {/* TAB 1: ФОРМА БРОВЕЙ */}
        {activeTab === 'form' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8C7B5] shadow-xs animate-fadeIn">
            <div className="max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 pb-6 border-b border-[#EAE1D7] text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5] flex items-center justify-center shrink-0 text-[#886C56]">
                  <Eye className="w-7 h-7 text-[#886C56]" />
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#886C56]/15 text-[#886C56] text-[11px] font-bold uppercase tracking-wider mb-1">
                    Первый блок программы
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1714]">
                    Форма бровей: построение без трафаретов и ошибок
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665040] mt-1">
                    Главное правило топ-мастера: подчеркнуть естественную анатомию лица вместо шаблонных линий.
                  </p>
                </div>
              </div>

              {/* 3 Key Points Visual Guide */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D8C7B5] flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-[#1C1714] text-[#FAF7F2] text-xs font-bold flex items-center justify-center mb-3">
                      01
                    </div>
                    <h4 className="font-bold text-base text-[#1C1714] mb-2">
                      Три ключевые точки
                    </h4>
                    <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                      Не спешите выщипывать! Возьмите карандаш и отметьте три опорные точки: <strong>начало брови</strong>, <strong>высшую точку изгиба (апекс)</strong> и <strong>хвостик/кончик</strong>. Соедините точки — так вы увидите потенциальную форму.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#EAE1D7] text-[11px] font-semibold text-[#886C56]">
                    Ориентир природной архитектуры
                  </div>
                </div>

                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D8C7B5] flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-[#1C1714] text-[#FAF7F2] text-xs font-bold flex items-center justify-center mb-3">
                      02
                    </div>
                    <h4 className="font-bold text-base text-[#1C1714] mb-2">
                      Не ломайте природу
                    </h4>
                    <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                      Не пытайтесь кардинально изменить то, что дано от природы. Если брови прямые, не стоит делать их сильно изогнутыми — это верный риск выщипать много лишних волос. Лучше подчеркнуть естественный контур.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#EAE1D7] text-[11px] font-semibold text-[#886C56]">
                    Защита от перещипывания
                  </div>
                </div>

                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D8C7B5] flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-full bg-[#1C1714] text-[#FAF7F2] text-xs font-bold flex items-center justify-center mb-3">
                      03
                    </div>
                    <h4 className="font-bold text-base text-[#1C1714] mb-2">
                      Баланс толщины и асимметрии
                    </h4>
                    <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                      Форма помогает деликатно скорректировать небольшую асимметрию лица. Слишком тонкие брови могут выглядеть неестественно на фоне черт лица, а чересчур широкие — утяжелять верхнюю треть.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#EAE1D7] text-[11px] font-semibold text-[#886C56]">
                    Гармония с овалом лица
                  </div>
                </div>
              </div>

              {/* Practical takeaway quote box */}
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#886C56] border-[#D8C7B5] flex items-start gap-4">
                <Info className="w-5 h-5 text-[#886C56] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#382C23] leading-relaxed">
                  <strong>Секрет от Амалии:</strong> В видео-материале курса наглядно показано, как прикладывать разметочный карандаш к крылу носа и зрачку, чтобы безошибочно находить апекс и не потерять гармонию лица.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: КРАСКА BRONSUN */}
        {activeTab === 'bronsun' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8C7B5] shadow-xs animate-fadeIn">
            <div className="max-w-5xl mx-auto">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 pb-6 border-b border-[#EAE1D7] text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5] flex items-center justify-center shrink-0 text-[#886C56]">
                  <Palette className="w-7 h-7 text-[#886C56]" />
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#886C56]/15 text-[#886C56] text-[11px] font-bold uppercase tracking-wider mb-1">
                    Второй блок программы • Краска Bronsun
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1714]">
                    Колористика, стойкий отпечаток на коже и авторские миксы
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665040] mt-1">
                    Ключевая фишка: Bronsun не только прокрашивает волоски, но и даёт выразительный отпечаток на коже (эффект хны). Стойкость: до 7 дней на коже и до 7 недель на волосках!
                  </p>
                </div>
              </div>

              {/* Rule of application & mixing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5]">
                  <h4 className="font-bold text-sm sm:text-base text-[#1C1714] mb-2 flex items-center gap-2">
                    <Brush className="w-4 h-4 text-[#886C56]" />
                    <span>Как правильно работать с краской</span>
                  </h4>
                  <ul className="text-xs sm:text-sm text-[#554336] space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span><strong>Пропорция 1:1:</strong> смешивайте краску с оксидантом Bronsun в неметаллической ёмкости.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span><strong>Нанесение кистью:</strong> движения быстрые, слой тонкий и без пробелов строго по форме.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span><strong>Слегка приподнимайте волоски:</strong> важно тщательно прокрасить кожу и следить за чёткостью линий.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5]">
                  <h4 className="font-bold text-sm sm:text-base text-[#1C1714] mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#E07A5F]" />
                    <span>Выдержка и смывание</span>
                  </h4>
                  <ul className="text-xs sm:text-sm text-[#554336] space-y-2 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F] shrink-0 mt-1.5" />
                      <span><strong>На бровях:</strong> 10–20 минут (степень окрашивания кожи напрямую зависит от времени).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F] shrink-0 mt-1.5" />
                      <span><strong>На ресницах:</strong> 10–15 минут. При смывании не открывать глаза, пока краска не смыта.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F] shrink-0 mt-1.5" />
                      <span><strong>Снятие:</strong> влажным ватным диском с водой, остатки тщательно смыть.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Full Palette breakdown */}
              <div className="mb-10">
                <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#1C1714] mb-4">
                  Линейка оттенков Bronsun
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {BRONSUN_PALETTE.map((shade) => (
                    <div key={shade.code} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5] hover:border-[#886C56] transition-all">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-bold text-base text-[#1C1714]">{shade.code} {shade.name}</span>
                        <div 
                          className="w-4 h-4 rounded-full border border-black/20 shrink-0" 
                          style={{ backgroundColor: shade.colorHex }}
                          title={shade.name}
                        />
                      </div>
                      <div className="text-[11px] font-semibold text-[#886C56] mb-1.5">{shade.tone}</div>
                      <p className="text-xs text-[#554336] leading-relaxed mb-2">
                        {shade.description}
                      </p>
                      <div className="text-[10px] text-[#A88B72] font-medium pt-1.5 border-t border-[#EAE1D7]">
                        {shade.targetAudience}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Mixes Table */}
              <div className="bg-[#FAF7F2] rounded-2xl p-5 sm:p-7 border border-[#C2A992]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <div>
                    <h4 className="font-editorial text-2xl font-bold text-[#1C1714]">
                      Популярные оттенки и миксы Bronsun
                    </h4>
                    <p className="text-xs text-[#665040]">
                      Готовые формулы смешивания под разные типажи внешности
                    </p>
                  </div>

                  {/* Category switcher */}
                  <div className="flex flex-wrap gap-1.5">
                    {BRONSUN_RECIPES.map((cat) => (
                      <button
                        key={cat.category}
                        onClick={() => setActiveRecipeCategory(cat.category)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          activeRecipeCategory === cat.category
                            ? 'bg-[#1C1714] text-white shadow-xs'
                            : 'bg-white text-[#554336] border border-[#D8C7B5] hover:bg-[#FAF7F2]'
                        }`}
                      >
                        {cat.category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recipes for active category */}
                <div className="space-y-3">
                  {BRONSUN_RECIPES.find(c => c.category === activeRecipeCategory)?.recipes.map((rec, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-[#D8C7B5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="font-bold text-sm text-[#1C1714]">{rec.name}</div>
                        <div className="text-xs text-[#665040] leading-relaxed">{rec.description}</div>
                      </div>
                      <div className="shrink-0 bg-[#FAF7F2] px-3.5 py-1.5 rounded-lg border border-[#D8C7B5] font-mono font-bold text-xs sm:text-sm text-[#1C1714]">
                        {rec.formula}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Critical Nuances */}
              <div className="mt-8 p-5 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5] text-xs text-[#554336] space-y-2">
                <div className="font-bold text-sm text-[#1C1714] flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-[#D05A3F]" />
                  <span>Важные нюансы перед окрашиванием краской:</span>
                </div>
                <p>• <strong>Подготовка кожи:</strong> критически важна для равномерного результата. Очистить и обезжирить мицеллярной водой, солевым раствором или праймером-обезжиривателем.</p>
                <p>• <strong>Тест на аллергию:</strong> в составе есть фенилендиамины и резорцин. Обязательно протестируйте на сгибе локтя за 24–48 часов.</p>
                <p>• <strong>Запрещено:</strong> наносить краску на повреждённую кожу, царапины или воспаления.</p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: ХНА BROW HENNA */}
        {activeTab === 'henna' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8C7B5] shadow-xs animate-fadeIn">
            <div className="max-w-5xl mx-auto">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 pb-6 border-b border-[#EAE1D7] text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5] flex items-center justify-center shrink-0 text-[#2E7D32]">
                  <Droplet className="w-7 h-7 text-[#2E7D32]" />
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#2E7D32]/15 text-[#2E7D32] text-[11px] font-bold uppercase tracking-wider mb-1">
                    Профессиональная хна Brow Henna
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1714]">
                    Эффект «нарисованной брови» без татуажа
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665040] mt-1">
                    Стойкость: 7–14 дней на коже, 3–6 недель на волосках. Безаммиачная, щадящая формула.
                  </p>
                </div>
              </div>

              {/* Henna features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5]">
                  <div className="font-bold text-sm text-[#1C1714] mb-1">Работает на волоске и коже</div>
                  <p className="text-xs text-[#665040] leading-relaxed">
                    Пигмент фиксируется на роговом слое кожи дольше большинства красок.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5]">
                  <div className="font-bold text-sm text-[#1C1714] mb-1">Безаммиачный состав</div>
                  <p className="text-xs text-[#665040] leading-relaxed">
                    Натуральные порошки без аммиака. Щадящее воздействие на волосок.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5]">
                  <div className="font-bold text-sm text-[#1C1714] mb-1">Тёплая база подтона</div>
                  <p className="text-xs text-[#665040] leading-relaxed">
                    Даже в «нейтральных» тонах есть тёплая основа. Важно учитывать при подборе.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5]">
                  <div className="font-bold text-sm text-[#1C1714] mb-1">Можно наслаивать</div>
                  <p className="text-xs text-[#665040] leading-relaxed">
                    Чем больше слоёв (3–4 слоя), тем ярче и плотнее окрашивание.
                  </p>
                </div>
              </div>

              {/* Step-by-Step Procedure */}
              <div className="mb-10 p-6 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5]">
                <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#1C1714] mb-4 text-center sm:text-left">
                  Пошаговый алгоритм нанесения хны Brow Henna
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                  <div className="bg-white p-4 rounded-xl border border-[#EAE1D7]">
                    <div className="font-bold text-xs text-[#886C56] mb-1">Шаг 1. Очистка и обезжиривание</div>
                    <p className="text-[#554336]">Мицеллярная вода или солевой раствор + обезжириватель. Кожа должна быть сухой и чистой.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#EAE1D7]">
                    <div className="font-bold text-xs text-[#886C56] mb-1">Шаг 2. Разведение водой</div>
                    <p className="text-[#554336]">Разводить водой (не из-под крана!). Консистенция как жидкая сметана — не течёт и не трескается.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#EAE1D7]">
                    <div className="font-bold text-xs text-[#886C56] mb-1">Шаг 3. Плотное нанесение</div>
                    <p className="text-[#554336]">Кистью сначала прокрасить кожу под волосками, затем аккуратно покрыть сами волоски.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#EAE1D7]">
                    <div className="font-bold text-xs text-[#886C56] mb-1">Шаг 4. Выдержка (10–20 мин)</div>
                    <p className="text-[#554336]">Дождаться полного высыхания материала на бровях (обычно 10–20 минут).</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#EAE1D7]">
                    <div className="font-bold text-xs text-[#886C56] mb-1">Шаг 5. Снятие водой</div>
                    <p className="text-[#554336]">Снимать хну аккуратно мокрым ватным диском без трения.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#EAE1D7]">
                    <div className="font-bold text-xs text-[#886C56] mb-1">Шаг 6. Постуход 24 часа</div>
                    <p className="text-[#554336]">Без воды, скрабов, пилингов и масел. Не распаривать брови в сауне, бане или горячем душе.</p>
                  </div>
                </div>
              </div>

              {/* Henna Shades and Mixes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Shades */}
                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D8C7B5]">
                  <h4 className="font-bold text-base text-[#1C1714] mb-3">
                    Базовые оттенки хны:
                  </h4>
                  <div className="space-y-2.5">
                    {HENNA_SHADES.map(s => (
                      <div key={s.code} className="bg-white p-3 rounded-xl border border-[#EAE1D7]">
                        <span className="font-bold text-sm text-[#1C1714] mr-2">• {s.code}</span>
                        <span className="text-xs text-[#554336]">{s.characteristic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ready Mixes */}
                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D8C7B5]">
                  <h4 className="font-bold text-base text-[#1C1714] mb-3">
                    Готовые миксы хны:
                  </h4>
                  <div className="space-y-2.5 text-xs">
                    {HENNA_MIXES.map((mix, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-[#EAE1D7]">
                        <div className="flex items-center justify-between font-bold text-[#1C1714] mb-0.5">
                          <span>{mix.title}</span>
                          <span className="font-mono text-[11px] text-[#886C56]">{mix.formula}</span>
                        </div>
                        <div className="text-[11px] text-[#A88B72]">{mix.hairTypes}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Urzol Safety & Mistakes warning */}
              <div className="mt-8 p-5 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#D05A3F] border-[#D8C7B5] text-xs text-[#554336] space-y-2">
                <div className="font-bold text-sm text-[#1C1714] flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#D05A3F]" />
                  <span>Правило безопасности с хной:</span>
                </div>
                <p>
                  <strong>В составе хны есть урзол</strong> — химический компонент, отвечающий за стойкость отпечатка. 
                  Поэтому окрашивание хной рекомендуется делать <strong>не чаще 1 раза в месяц</strong>, чтобы цвет успел полностью вымыться из волоса и не провоцировал накопительную аллергию.
                </p>
                <p>
                  <strong>Частые ошибки:</strong> Нанесение на шелушащуюся кожу (хна ляжет пятнами); нанесение масел или кремов перед процедурой (резко снижают стойкость); слишком толстый слой (трескается при высыхании).
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: КОРРЕКЦИЯ ВОСКОМ И ПИНЦЕТОМ */}
        {activeTab === 'wax' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8C7B5] shadow-xs animate-fadeIn">
            <div className="max-w-4xl mx-auto">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 pb-6 border-b border-[#EAE1D7] text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5] flex items-center justify-center shrink-0 text-[#E07A5F]">
                  <Flame className="w-7 h-7 text-[#E07A5F]" />
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#E07A5F]/15 text-[#E07A5F] text-[11px] font-bold uppercase tracking-wider mb-1">
                    Практика коррекции
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1714]">
                    Коррекция воском: техника без боли и обломанных волосков
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665040] mt-1">
                    Профессиональный алгоритм депиляции пушковых волосков воском и точечной доработки пинцетом.
                  </p>
                </div>
              </div>

              {/* Step-by-step Waxing Process */}
              <div className="space-y-4 mb-8">
                
                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D8C7B5] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1C1714] text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#1C1714] mb-1">Подготовка кожи и тальк</h4>
                    <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                      Очистить кожу от макияжа, пота и кожного сала. Обезжирить <strong>без спиртосодержащих средств</strong> (они вызывают сухость и ожоги). Убедиться, что кожа абсолютно сухая. Припудрить зону тальком — он создаёт защитный барьер и улучшает захват волосков.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D8C7B5] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1C1714] text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#1C1714] mb-1">Проверка температуры</h4>
                    <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                      Обязательно капните немного воска на запястье. Воск должен быть тёплым и комфортным, но не обжигающим! Если он слишком жидкий и стекает — дайте ему остыть.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D8C7B5] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1C1714] text-white text-xs font-bold flex items-center justify-center shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#1C1714] mb-1">Нанесение тонким слоем</h4>
                    <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                      Распределите воск тонким равномерным слоем. С синтетическими (полимерными) восками можно работать в любом направлении.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D8C7B5] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1C1714] text-white text-xs font-bold flex items-center justify-center shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#1C1714] mb-1">Срыв строго параллельно коже!</h4>
                    <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                      Резким, но уверенным движением сорвите воск против направления роста волос. <strong>Важнейший момент:</strong> движение должно быть строго параллельно коже, а не вверх! Если дёргать вверх, волос обломится, усилится боль и появится риск вросших волос. Второй рукой слегка натяните кожу рядом.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D8C7B5] flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1C1714] text-white text-xs font-bold flex items-center justify-center shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-[#1C1714] mb-1">Завершение и доработка пинцетом</h4>
                    <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                      Уберите остатки воска специальным маслом или салфеткой (не соскабливайте ногтями!). Не наносите воск на одно место более 3 раз — оставшиеся единичные волоски точечно удалите пинцетом.
                    </p>
                  </div>
                </div>

              </div>

              {/* When to refrain */}
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#D05A3F] border-[#D8C7B5]">
                <div className="font-bold text-sm text-[#1C1714] mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#D05A3F]" />
                  <span>Когда стоит воздержаться от воска?</span>
                </div>
                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                  Не делайте коррекцию воском при <strong>приеме системных ретиноидов</strong>, активных воспалениях, раздражениях, свежих повреждениях кожи, родинках или папилломах в зоне обработки.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: МАТЕРИАЛЫ И БЕЗОПАСНОСТЬ */}
        {activeTab === 'materials' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D8C7B5] shadow-xs animate-fadeIn">
            <div className="max-w-5xl mx-auto">
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8 pb-6 border-b border-[#EAE1D7] text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5] flex items-center justify-center shrink-0 text-[#886C56]">
                  <Wrench className="w-7 h-7 text-[#886C56]" />
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded bg-[#886C56]/15 text-[#886C56] text-[11px] font-bold uppercase tracking-wider mb-1">
                    Стартовый набор и меры предосторожности
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#1C1714]">
                    Материалы для оформления бровей дома
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665040] mt-1">
                    Вам не нужны дорогие профессиональные наборы за десятки тысяч рублей. Все необходимое можно собрать на маркетплейсах.
                  </p>
                </div>
              </div>

              {/* Materials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {COURSE_MATERIALS.map((mat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#D8C7B5] flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-white border border-[#D8C7B5] flex items-center justify-center mb-3 text-[#886C56]">
                        {idx === 0 && <Scissors className="w-4 h-4" />}
                        {idx === 1 && <Eye className="w-4 h-4" />}
                        {idx === 2 && <Flame className="w-4 h-4 text-[#E07A5F]" />}
                        {idx === 3 && <Brush className="w-4 h-4" />}
                        {idx === 4 && <Droplet className="w-4 h-4" />}
                        {idx === 5 && <Sparkles className="w-4 h-4 text-[#2E7D32]" />}
                        {idx === 6 && <CheckCircle2 className="w-4 h-4" />}
                        {idx === 7 && <Palette className="w-4 h-4" />}
                      </div>
                      <div className="font-bold text-sm text-[#1C1714] mb-0.5">{mat.name}</div>
                      <div className="text-[11px] text-[#886C56] font-semibold mb-2">{mat.role}</div>
                      <p className="text-xs text-[#554336] leading-relaxed">{mat.advice}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Safety Rules Accordion/Box */}
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#C2A992]">
                <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#1C1714] mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[#E07A5F]" />
                  <span>Меры безопасности и противопоказания</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {SAFETY_RULES.map((rule, idx) => (
                    <div key={idx} className="bg-white p-3.5 rounded-xl border border-[#D8C7B5] flex items-start gap-2.5 text-xs text-[#382C23] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* CTA banner under curriculum */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 sm:p-6 rounded-2xl bg-[#1C1714] text-[#FAF7F2] shadow-md max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <div className="text-xs text-[#A88B72] font-semibold uppercase tracking-wider">Все уроки, миксы и видео-материалы:</div>
              <div className="font-editorial text-xl sm:text-2xl font-bold text-white">Доступ в закрытом Telegram-канале</div>
            </div>
            <button
              onClick={onOpenOrder}
              className="px-6 py-3 rounded-xl bg-[#FAF7F2] hover:bg-white text-[#1C1714] font-bold text-xs uppercase tracking-wider transition-all shadow-sm shrink-0 cursor-pointer"
            >
              Купить курс за 1 490 ₽
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
