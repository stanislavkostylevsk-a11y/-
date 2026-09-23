import React, { useState, useEffect } from "react";
import { 
  Trees, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Send, 
  CreditCard, 
  Zap, 
  Lock, 
  Smartphone, 
  Gift, 
  HeartHandshake, 
  Check, 
  Flame, 
  Star,
  Clock,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  FileText,
  Calendar,
  Layers,
  HeartPulse,
  Droplets,
  MessageCircle,
  Headphones,
  Volume2,
  VolumeX,
  AlertCircle,
  Wind,
  User,
  Award,
  Play,
  Pause,
  RotateCcw,
  CheckSquare,
  Activity,
  Sliders
} from "lucide-react";
import confetti from "canvas-confetti";
import { APP_IMAGES, FALLBACK_IMAGES } from "../assets/images";
import { 
  MINI_AUDIENCE_LIST, 
  MINI_PROGRAM_PHASES, 
  MINI_PACKAGE_ITEMS,
  MINI_REVIEWS_SCREENSHOTS 
} from "../data/miniLandingData";
import { 
  FAQ_DATA, 
  COMPARISON_TABLE_DATA,
  COURSE_MODULES_DETAILED,
  PRICING_PLANS,
  PricingPlan,
  CHAGA_VS_TINDER_DATA,
  HERBAL_CARD_5_DIRECTIONS,
  FIVE_BREWING_LAWS,
  SEVEN_GOLDEN_RULES,
  SYMPTOMS_TEST_DATA,
  TESTIMONIALS_DATA
} from "../data/landingPageData";
import { LegalModal, LegalTabType } from "./LegalModal";
import { LEGAL_REQUISITES } from "../data/legalDocuments";

interface ClientLandingPageProps {
  onSwitchToStudio?: () => void;
}

export const ClientLandingPage: React.FC<ClientLandingPageProps> = ({ onSwitchToStudio }) => {
  // Legal modal state
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTabType>("offer");

  const openLegalModal = (tab: LegalTabType) => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#offer" || hash === "#oferta") {
        openLegalModal("offer");
      } else if (hash === "#privacy" || hash === "#policy") {
        openLegalModal("privacy");
      } else if (hash === "#requisites" || hash === "#rekvizity") {
        openLegalModal("requisites");
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // 1. Countdown timer (urgent discount state)
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 18, seconds: 29 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 3, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = () => {
    const h = String(timeLeft.hours).padStart(2, "0");
    const m = String(timeLeft.minutes).padStart(2, "0");
    const s = String(timeLeft.seconds).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // 2. Audio Voice Greeting Player Simulation
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const handlePlayZhdanVoice = () => {
    if (isPlayingAudio) {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingAudio(false);
      return;
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const text =
        "Доброго здравия, друзья. Тайга пустых советов не даёт. Если с утра нет сил, а живот к вечеру надувается — не торопитесь глушить сигнал таблетками. Давайте разжижим желчь, снимем спазм со сфинктера Одди и вернем телу природную легкость за 14 дней.";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ru-RU";
      utterance.rate = 0.92;
      utterance.pitch = 0.85;

      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 8000);
    }
  };

  // 3. Interactive Symptoms Checker
  const [checkedSymptoms, setCheckedSymptoms] = useState<string[]>(["sym-1", "sym-2", "sym-3"]);

  const toggleSymptom = (id: string) => {
    setCheckedSymptoms(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // 4. Curriculum Modules Tab State
  const [activeModuleTab, setActiveModuleTab] = useState<string>("mod-1");
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  // 5. Interactive Habit Tracker Breathing Simulator
  const [isBreathingRunning, setIsBreathingRunning] = useState<boolean>(false);
  const [breathingPhase, setBreathingPhase] = useState<string>("Вдох носом в живот");
  const [breathingSeconds, setBreathingSeconds] = useState<number>(4);
  const [demoCheckedHabits, setDemoCheckedHabits] = useState<string[]>([
    "habit-water-resin",
    "habit-diaphragm"
  ]);

  useEffect(() => {
    let interval: any;
    if (isBreathingRunning) {
      interval = setInterval(() => {
        setBreathingSeconds(prev => {
          if (prev <= 1) {
            setBreathingPhase(curr => {
              if (curr.startsWith("Вдох")) return "Задержка на вдохе";
              if (curr.startsWith("Задержка")) return "Выдох ртом через трубочку";
              if (curr.startsWith("Выдох")) return "Пауза на выдохе";
              return "Вдох носом в живот";
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setBreathingSeconds(4);
      setBreathingPhase("Вдох носом в живот");
    }
    return () => clearInterval(interval);
  }, [isBreathingRunning]);

  const toggleDemoHabit = (habitId: string) => {
    setDemoCheckedHabits(prev =>
      prev.includes(habitId) ? prev.filter(id => id !== habitId) : [...prev, habitId]
    );
  };

  // 6. Selected Tariff Plan State
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan>(PRICING_PLANS[0]);

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    const checkoutEl = document.getElementById("checkout");
    if (checkoutEl) {
      checkoutEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 7. Checkout Form State
  const [payName, setPayName] = useState<string>("");
  const [payPhone, setPayPhone] = useState<string>("");
  const [payEmail, setPayEmail] = useState<string>("");
  const [payMethod, setPayMethod] = useState<string>("sbp");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [paymentSuccess, setPaymentSuccess] = useState<boolean>(false);
  const [orderNumber, setOrderNumber] = useState<string>("");

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      const generatedOrder = "TZ-" + Math.floor(100000 + Math.random() * 900000);
      setOrderNumber(generatedOrder);

      try {
        confetti({
          particleCount: 140,
          spread: 85,
          origin: { y: 0.5 },
          colors: ["#10B981", "#F59E0B", "#F3EBD9"]
        });
      } catch (err) {
        console.error(err);
      }
    }, 900);
  };

  // 8. FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setExpandedFaq(prev => (prev === index ? null : index));
  };

  // 9. Mobile Navigation Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // 10. Herbal Tabs in Field Guide
  const [activeHerbalTab, setActiveHerbalTab] = useState<string>("herb-5");

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-emerald-900 selection:text-emerald-100">
      
      {/* 1. TOP URGENCY NOTICE BAR */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 border-b border-emerald-900/50 py-2 px-4 text-center text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Flame className="h-4 w-4 text-amber-400 shrink-0" />
              <span>Спец-цена со скидкой 60%: от 990 ₽ вместо 2 500 ₽</span>
            </span>
            <span className="hidden sm:inline text-stone-600">•</span>
            <div className="flex items-center gap-1.5 font-mono text-stone-200">
              <Clock className="h-3.5 w-3.5 text-emerald-400" />
              <span>До закрытия набора:</span>
              <span className="bg-stone-950/80 px-2 py-0.5 rounded border border-stone-800 text-emerald-400 font-bold">
                {formatTimer()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#checkout"
              className="text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-2"
            >
              Зафиксировать скидку →
            </a>
            {onSwitchToStudio && (
              <button
                onClick={onSwitchToStudio}
                className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 border border-stone-700/80 text-[11px] transition-colors"
                title="Перейти в рабочую студию контента и аналитики"
              >
                <Sliders className="h-3 w-3 text-emerald-400" />
                <span>Студия</span>
              </button>
            )}
          </div>

        </div>
      </div>

      {/* 2. STICKY CLIENT HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur-lg bg-stone-950/90 border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-2xl overflow-hidden bg-stone-900 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shadow-lg shadow-emerald-950/60 group-hover:border-emerald-400 transition-all p-0.5">
              <img 
                src="/taezhny-logo.svg" 
                alt="Таёжный Перезапуск" 
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div>
              <div className="font-['Cinzel'] font-bold text-base sm:text-lg text-stone-100 tracking-wider">
                ТАЁЖНЫЙ ПЕРЕЗАПУСК
              </div>
              <div className="text-[11px] text-emerald-400 tracking-wide flex items-center gap-1">
                <span>Оздоровительный курс • Горный Алтай</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-stone-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">О методе</a>
            <a href="#author" className="hover:text-emerald-400 transition-colors">Ждан Таёжный</a>
            <a href="#symptoms" className="hover:text-emerald-400 transition-colors">Симптомы</a>
            <a href="#program" className="hover:text-emerald-400 transition-colors">Программа</a>
            <a href="#tracker-demo" className="hover:text-emerald-400 transition-colors">Веб-трекер</a>
            <a href="#reviews" className="hover:text-emerald-400 transition-colors">Отзывы</a>
            <a href="#tariffs" className="hover:text-emerald-400 transition-colors">Тарифы</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">Вопросы</a>
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#checkout"
              className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-all shadow-lg shadow-emerald-950/60 flex items-center gap-2 active:scale-95"
            >
              <span>Записаться за 990 ₽</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl border border-stone-800 text-stone-300 hover:bg-stone-900"
              aria-label="Меню"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-stone-300 rounded"></span>
                <span className="w-full h-0.5 bg-stone-300 rounded"></span>
                <span className="w-full h-0.5 bg-stone-300 rounded"></span>
              </div>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-stone-950 border-b border-stone-800 px-4 py-4 space-y-3 text-sm">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-300 hover:text-emerald-400 font-medium"
            >
              О методе
            </a>
            <a
              href="#author"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-300 hover:text-emerald-400 font-medium"
            >
              Автор курса (Ждан Таёжный)
            </a>
            <a
              href="#symptoms"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-300 hover:text-emerald-400 font-medium"
            >
              Симптомы застоя желчи
            </a>
            <a
              href="#program"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-300 hover:text-emerald-400 font-medium"
            >
              Программа на 14 дней
            </a>
            <a
              href="#tracker-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-300 hover:text-emerald-400 font-medium"
            >
              Интерактивный веб-трекер
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-300 hover:text-emerald-400 font-medium"
            >
              Отзывы и результаты
            </a>
            <a
              href="#tariffs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-300 hover:text-emerald-400 font-medium"
            >
              Тарифы обучения
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-stone-300 hover:text-emerald-400 font-medium"
            >
              Частые вопросы (FAQ)
            </a>
            {onSwitchToStudio && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSwitchToStudio();
                }}
                className="w-full text-left py-2 text-emerald-400 font-bold border-t border-stone-800 pt-3"
              >
                ⚙️ Панель управления и студия
              </button>
            )}
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (ГЛАВНЫЙ ЭКРАН С ФОТО ЖДАНА) */}
      <section id="about" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-emerald-950/20 blur-3xl pointer-events-none rounded-full"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-950/20 blur-3xl pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Core Value & Call to Action */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold text-emerald-300">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>14-дневный авторский протокол «Таёжный Перезапуск»</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-['Cinzel'] text-3xl sm:text-5xl lg:text-5xl font-extrabold text-stone-100 leading-[1.15] tracking-tight">
                Очистите ЖКТ, перезапустите печень и{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                  верните лёгкость в теле
                </span>{" "}
                за 14 дней
              </h1>

              {/* Subheadline */}
              <p className="text-stone-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                Пошаговый физиологический запуск оттока желчи на алтайских дикоросах от потомственного травника Ждана Таёжного. Без голодовок, без аптечной химии и жестких диет.
              </p>

              {/* 4 Outcome Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-950 border border-emerald-500/60 text-emerald-400">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span>Минус 2–4 кг скрытых токсических отеков</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-950 border border-emerald-500/60 text-emerald-400">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span>Чистый розовый язык без налета и горечи</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-950 border border-emerald-500/60 text-emerald-400">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span>Плоский спокойный живот без вечернего вздутия</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-950 border border-emerald-500/60 text-emerald-400">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <span>Бодрость с 6:30 утра без 3-х чашек кофе</span>
                </div>
              </div>

              {/* CTA Button Block */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#checkout"
                  className="inline-flex justify-center items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-base px-8 py-4 shadow-xl shadow-emerald-950/80 transition-all hover:scale-[1.02] active:scale-98 text-center"
                >
                  <span>ПОЛУЧИТЬ ВЕСЬ КОМПЛЕКТ ЗА 990 ₽</span>
                  <ArrowRight className="h-5 w-5" />
                </a>

                <div className="text-left space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-stone-100">990 ₽</span>
                    <span className="text-xs text-stone-500 line-through">2 500 ₽</span>
                    <span className="bg-emerald-950 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-800">
                      -60% Скидка
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400">Травы из аптеки на весь курс: ~650–850 ₽</p>
                </div>
              </div>

              {/* Podcast & Audio note */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-stone-900/90 border border-stone-800 text-stone-300 text-xs">
                  <Headphones className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>В комплекте: <span className="text-emerald-300 font-semibold">подкаст-разбор методики + 14 аудио-уроков</span></span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-900/60 border border-stone-800/80 text-stone-400 text-xs">
                  <Smartphone className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Интерактивный веб-трекер без установки</span>
                </div>
              </div>

            </div>

            {/* Right Column: REAL Zhdan Photo & Voice Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl border border-stone-800 bg-stone-900/90 p-4 sm:p-5 shadow-2xl backdrop-blur-md">
                
                {/* Zhdan Photo */}
                <div className="relative overflow-hidden rounded-2xl border border-stone-800 h-80 sm:h-96 w-full">
                  <img
                    src={APP_IMAGES.zhdan}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMAGES.zhdan;
                    }}
                    alt="Ждан Таёжный на рассвете"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent pointer-events-none"></div>
                  
                  {/* Photo Top Badge */}
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-stone-800 text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Горный Алтай, р. Катунь</span>
                  </div>

                  {/* Audio greeting button overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-stone-950/90 backdrop-blur-md rounded-xl p-3 border border-stone-800">
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-full bg-emerald-950 border border-emerald-500/60 flex items-center justify-center text-emerald-400">
                        {isPlayingAudio ? (
                          <Volume2 className="h-4 w-4 animate-bounce" />
                        ) : (
                          <Play className="h-4 w-4 ml-0.5" />
                        )}
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-stone-100">Голос Ждана Таёжного</p>
                        <p className="text-[10px] text-stone-400">Нажмите, чтобы послушать напутствие</p>
                      </div>
                    </div>

                    <button
                      onClick={handlePlayZhdanVoice}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isPlayingAudio 
                          ? "bg-amber-500 text-stone-950 animate-pulse" 
                          : "bg-emerald-600 hover:bg-emerald-500 text-white"
                      }`}
                    >
                      {isPlayingAudio ? "Пауза" : "Слушать"}
                    </button>
                  </div>
                </div>

                {/* Direct quote / Essence */}
                <div className="mt-4 p-3.5 rounded-xl bg-stone-950 border border-stone-800/80 space-y-1.5">
                  <p className="text-xs text-stone-300 italic leading-relaxed">
                    «Тайга пустых советов не даёт. Здоровье человека начинается не со сложных лекарств, а с чистоты желчных протоков и лада с собственным телом. Разжижите желчь — и организм очистит себя сам.»
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-stone-500 pt-1 border-t border-stone-900">
                    <span className="text-emerald-400 font-medium">Ждан Таёжный (52 года)</span>
                    <span>✓ Потомственный травник</span>
                  </div>
                </div>

                {/* Highlights bar */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-stone-950/60 border border-stone-800/60">
                    <div className="text-sm sm:text-base font-bold text-amber-300 font-['Cinzel']">14 дней</div>
                    <div className="text-[10px] text-stone-400">Длительность</div>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-950/60 border border-stone-800/60">
                    <div className="text-sm sm:text-base font-bold text-emerald-400 font-['Cinzel']">15 мин</div>
                    <div className="text-[10px] text-stone-400">Утренний ритуал</div>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-950/60 border border-stone-800/60">
                    <div className="text-sm sm:text-base font-bold text-stone-200 font-['Cinzel']">0 голода</div>
                    <div className="text-[10px] text-stone-400">Сытное меню</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. AUTHOR DOSSIER & BIOGRAPHY (ОБ АВТОРЕ) */}
      <section id="author" className="py-16 sm:py-20 bg-stone-900/50 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-3xl border border-stone-800 bg-stone-900 p-3 shadow-2xl relative w-full max-w-md">
                <img 
                  src={APP_IMAGES.zhdan}
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_IMAGES.zhdan;
                  }}
                  alt="Ждан Таёжный сбор трав" 
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl border border-stone-800"
                />
                <div className="mt-3.5 text-center space-y-1">
                  <p className="font-['Cinzel'] font-bold text-lg text-stone-100">Ждан Таёжный</p>
                  <p className="text-xs text-stone-400">Сибирский натуропат, потомственный травник в 3-м поколении</p>
                  <div className="flex items-center justify-center gap-2 text-[11px] text-emerald-400 pt-1">
                    <span>Горный Алтай</span>
                    <span>•</span>
                    <span>30+ лет жизни в тайге</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
                <User className="h-3.5 w-3.5" />
                <span>Кто ведет программу</span>
              </div>
              
              <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-stone-100 leading-snug">
                «Я не лечу болезни таблетками — я помогаю телу вспомнить его природную силу»
              </h2>
              
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Мне 52 года. Более 30 лет я живу в согласии с сибирской тайгой, изучаю биохимию алтайских дикоросов и помогаю людям возвращать здоровье без агрессивной химии. Через мои программы прошло более 3 400 человек — от офисных работников Москвы до сибирских охотников.
              </p>
              
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Большинство хронических проблем — утренняя тяжесть в боку, бессонница, тусклая кожа, вздутие живота и токсические отеки — начинаются с одного: <span className="text-emerald-400 font-semibold">застоя густой желчи и спазма сфинктера Одди</span>. Если мягко восстановить физиологию оттока, организм сам очищает кровь и лимфу.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 bg-stone-950/90 rounded-2xl border border-stone-800 text-center">
                  <p className="text-2xl font-extrabold text-emerald-400 font-['Cinzel']">30+</p>
                  <p className="text-[11px] text-stone-400 mt-1">Лет практики травничества</p>
                </div>
                <div className="p-3.5 bg-stone-950/90 rounded-2xl border border-stone-800 text-center">
                  <p className="text-2xl font-extrabold text-emerald-400 font-['Cinzel']">3 400+</p>
                  <p className="text-[11px] text-stone-400 mt-1">Выпускников курса</p>
                </div>
                <div className="p-3.5 bg-stone-950/90 rounded-2xl border border-stone-800 text-center">
                  <p className="text-2xl font-extrabold text-emerald-400 font-['Cinzel']">100%</p>
                  <p className="text-[11px] text-stone-400 mt-1">Доступные дикоросы</p>
                </div>
                <div className="p-3.5 bg-stone-950/90 rounded-2xl border border-stone-800 text-center">
                  <p className="text-2xl font-extrabold text-emerald-400 font-['Cinzel']">0 ₽</p>
                  <p className="text-[11px] text-stone-400 mt-1">Трат на БАДы и химию</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#program"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 underline"
                >
                  <span>Посмотреть пошаговый план курса на 14 дней →</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ИНТЕРАКТИВНАЯ САМОДИАГНОСТИКА: ДЛЯ КОГО ЭТО */}
      <section id="symptoms" className="py-16 border-t border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
              <Activity className="h-3.5 w-3.5" />
              <span>Интерактивная самодиагностика</span>
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-stone-100">
              Знакомы эти сигналы тела?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Печень не болит — в ней нет болевых нервных окончаний. О застое густой желчи и интоксикации организм сообщает косвенно. <span className="text-emerald-400 font-semibold">Отметьте симптомы, которые есть у вас:</span>
            </p>
          </div>

          {/* Grid of Interactive Checklist items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SYMPTOMS_TEST_DATA.map((item) => {
              const isChecked = checkedSymptoms.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleSymptom(item.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer select-none space-y-2.5 ${
                    isChecked
                      ? "border-emerald-500/80 bg-emerald-950/30 shadow-lg shadow-emerald-950/40 scale-[1.01]"
                      : "border-stone-800 bg-stone-900/80 hover:border-stone-700 hover:bg-stone-900"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-800 text-stone-300">
                        {item.category}
                      </span>
                    </div>
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-xs transition-all ${
                        isChecked
                          ? "bg-emerald-600 border-emerald-500 text-white"
                          : "border-stone-700 bg-stone-950 text-transparent"
                      }`}
                    >
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-stone-100 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Diagnostic Result Callout */}
          <div className="p-6 rounded-2xl border border-emerald-500/50 bg-gradient-to-r from-emerald-950/60 via-stone-900 to-stone-950 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-900/80 border border-emerald-500/60 text-emerald-300 font-bold text-xl font-['Cinzel']">
                {checkedSymptoms.length}/{SYMPTOMS_TEST_DATA.length}
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-stone-100">
                  {checkedSymptoms.length === 0 && "Нажмите на симптомы выше для индивидуальной оценки"}
                  {checkedSymptoms.length >= 1 && checkedSymptoms.length <= 2 && "Начальная стадия застоя желчи (устраняется за первые 4–7 дней)"}
                  {checkedSymptoms.length >= 3 && "Выраженная перегрузка печени и кишечника — вам необходим полный 14-дневный протокол"}
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  {checkedSymptoms.length >= 1
                    ? "Уже на 3–4 день протокола уходят утренние отеки век, очищается язык и спадает вечернее вздутие."
                    : "Отметьте карточки выше, чтобы увидеть персональный вердикт."}
                </p>
              </div>
            </div>

            <a
              href="#tariffs"
              className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>Устранить эти симптомы за 990 ₽</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </section>

      {/* 6. ПОЧЕМУ ТРАДИЦИОННЫЕ МЕТОДЫ НЕ РАБОТАЮТ (ТАБЛИЦА) */}
      <section className="py-16 bg-stone-900/50 border-t border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Честное сравнение
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-stone-100">
              Почему таблетки не решают проблему
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Синтетические ферменты и слабительные лишь заглушают сигнал тревоги, делая кишечник «ленивым». Протокол «Таёжный Перезапуск» работает с первопричиной — физиологией оттока желчи:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-stone-900/70 shadow-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-stone-800 bg-stone-950/80 text-stone-300 font-bold">
                  <th className="p-4 sm:p-5">Критерий</th>
                  <th className="p-4 sm:p-5 text-stone-400">Аптечные ферменты и таблетки</th>
                  <th className="p-4 sm:p-5 text-stone-400 hidden md:table-cell">Голодные детоксы на смузи</th>
                  <th className="p-4 sm:p-5 text-emerald-400 bg-emerald-950/40">Протокол «Таёжный Перезапуск»</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                {COMPARISON_TABLE_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-800/30 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-stone-200">{row.criteria}</td>
                    <td className="p-4 sm:p-5 text-stone-400">{row.pharmacy}</td>
                    <td className="p-4 sm:p-5 text-stone-400 hidden md:table-cell">{row.extremeDetox}</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium bg-emerald-950/30">
                      {row.zhdanMethod}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. ПОШАГОВАЯ ПРОГРАММА НА 14 ДНЕЙ (ДЕТАЛЬНАЯ ПО ДНЯМ) */}
      <section id="program" className="py-16 sm:py-20 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Пошаговый маршрут к здоровью
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-stone-100">
              14 дней: Поминутная программа по дням
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Всего 15 минут в день: утренний теплый запуск, правильный сбор в термосе и легкая коррекция меню без отказа от любимой еды.
            </p>
          </div>

          {/* Module Tabs Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {COURSE_MODULES_DETAILED.map((module) => {
              const isActive = activeModuleTab === module.id;
              return (
                <button
                  key={module.id}
                  onClick={() => {
                    setActiveModuleTab(module.id);
                    setExpandedDay(module.days[0].dayNumber);
                  }}
                  className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-950/60 scale-[1.02]"
                      : "bg-stone-900 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-800"
                  }`}
                >
                  <span className="font-mono text-emerald-300">{module.daysRange}:</span>
                  <span>{module.badge}</span>
                </button>
              );
            })}
          </div>

          {/* Active Module Content */}
          {COURSE_MODULES_DETAILED.filter(m => m.id === activeModuleTab).map((module) => (
            <div key={module.id} className="space-y-6">
              
              {/* Module Header Card */}
              <div className="p-6 sm:p-8 rounded-3xl border border-stone-800 bg-stone-900/90 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider">
                    {module.daysRange} • {module.badge}
                  </span>
                  <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-800 px-3 py-1 rounded-full font-bold">
                    {module.days.length} практических уроков
                  </span>
                </div>

                <h3 className="font-['Cinzel'] font-bold text-xl sm:text-2xl text-stone-100">
                  {module.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 italic">
                  {module.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-stone-800">
                  {module.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-by-Day Expandable Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {module.days.map((day) => {
                  const isExpanded = expandedDay === day.dayNumber;
                  return (
                    <div
                      key={day.dayNumber}
                      className="rounded-2xl border border-stone-800 bg-stone-900/80 overflow-hidden hover:border-emerald-500/40 transition-all flex flex-col justify-between"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedDay(isExpanded ? null : day.dayNumber)}
                        className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                              День {day.dayNumber}
                            </span>
                            <span className="text-[11px] text-stone-400 flex items-center gap-1">
                              <Headphones className="h-3 w-3 text-amber-400" />
                              {day.audioDuration}
                            </span>
                          </div>
                          <h4 className="font-bold text-sm text-stone-100 font-['Cinzel'] mt-1">
                            {day.title}
                          </h4>
                        </div>

                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-stone-950 border border-stone-800 text-stone-400 mt-1">
                          {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-4 sm:p-5 border-t border-stone-800/80 bg-stone-950/90 space-y-3 text-xs">
                          <div>
                            <span className="font-bold text-emerald-400 block mb-1">🌅 Утренний ритуал:</span>
                            <p className="text-stone-300 leading-relaxed">{day.morningRitual}</p>
                          </div>
                          <div>
                            <span className="font-bold text-amber-400 block mb-1">🌿 Травяной взвар в термос:</span>
                            <p className="text-stone-300 leading-relaxed">{day.herbalRecipe}</p>
                          </div>
                          <div>
                            <span className="font-bold text-teal-400 block mb-1">🥣 Коррекция питания:</span>
                            <p className="text-stone-300 leading-relaxed">{day.dietTip}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 8. ИНТЕРАКТИВНЫЙ ВЕБ-ТРЕКЕР (ДЕМО С ТАЙМЕРОМ ДЫХАНИЯ) */}
      <section id="tracker-demo" className="py-16 sm:py-20 bg-stone-900/40 border-t border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Цифровое сопровождение
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-stone-100">
              Интерактивный Веб-Трекер Привычек
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Вместе с курсом вы получаете персональное веб-приложение. Работает прямо в браузере любого смартфона без установки. Попробуйте дыхательный тренажер прямо сейчас:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Breathing Exercise Simulator */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border border-emerald-500/50 bg-stone-900/90 shadow-2xl space-y-5 text-center">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-emerald-400 font-mono">
                  Таймер: «Таёжный вдох» (4-2-6-2)
                </span>
                <span className="text-[11px] bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-800">
                  Снятие спазма сфинктера Одди
                </span>
              </div>

              {/* Animated Circle */}
              <div className="py-6 flex flex-col items-center justify-center">
                <div className={`relative flex items-center justify-center rounded-full border-4 transition-all duration-700 ${
                  isBreathingRunning 
                    ? "w-44 h-44 border-emerald-400 bg-emerald-950/40 shadow-xl shadow-emerald-500/20 scale-105" 
                    : "w-40 h-40 border-stone-700 bg-stone-950"
                }`}>
                  <div className="text-center space-y-1">
                    <span className="text-3xl font-extrabold text-stone-100 font-mono">
                      {breathingSeconds}s
                    </span>
                    <p className="text-[11px] font-semibold text-emerald-300 max-w-[120px] mx-auto leading-tight">
                      {breathingPhase}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setIsBreathingRunning(!isBreathingRunning)}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isBreathingRunning
                      ? "bg-rose-600 hover:bg-rose-500 text-white"
                      : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/80"
                  }`}
                >
                  {isBreathingRunning ? (
                    <>
                      <Pause className="h-4 w-4" />
                      <span>Остановить тренировку</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      <span>Начать дыхание «Таёжный вдох» (3 минуты)</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-stone-400">
                  Диафрагма опускается вниз и физически выжимает застойную желчь из печени в кишечник.
                </p>
              </div>
            </div>

            {/* Right: Daily Checklist in App */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border border-stone-800 bg-stone-950 space-y-5">
              <div>
                <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">
                  Ежедневный чек-лист в приложении:
                </span>
                <h4 className="font-['Cinzel'] font-bold text-lg text-stone-100 mt-1">
                  День 1: Запуск клеточного дренажа
                </h4>
              </div>

              <div className="space-y-3 text-xs">
                <div 
                  onClick={() => toggleDemoHabit("habit-water-resin")}
                  className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between cursor-pointer hover:border-emerald-500/50"
                >
                  <div className="flex items-center gap-2.5">
                    <Droplets className="h-4 w-4 text-emerald-400" />
                    <span>400 мл горячей воды (45–50°C) с живицей или соком лимона</span>
                  </div>
                  <div className={`h-5 w-5 rounded border flex items-center justify-center text-xs ${
                    demoCheckedHabits.includes("habit-water-resin")
                      ? "bg-emerald-600 border-emerald-500 text-white"
                      : "border-stone-700 bg-stone-950 text-transparent"
                  }`}>
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                </div>

                <div 
                  onClick={() => toggleDemoHabit("habit-diaphragm")}
                  className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between cursor-pointer hover:border-emerald-500/50"
                >
                  <div className="flex items-center gap-2.5">
                    <Wind className="h-4 w-4 text-teal-400" />
                    <span>3 минуты диафрагмального дыхания до завтрака</span>
                  </div>
                  <div className={`h-5 w-5 rounded border flex items-center justify-center text-xs ${
                    demoCheckedHabits.includes("habit-diaphragm")
                      ? "bg-emerald-600 border-emerald-500 text-white"
                      : "border-stone-700 bg-stone-950 text-transparent"
                  }`}>
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                </div>

                <div 
                  onClick={() => toggleDemoHabit("habit-chaga")}
                  className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between cursor-pointer hover:border-emerald-500/50"
                >
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="h-4 w-4 text-amber-400" />
                    <span>Дневной взвар сибирской чаги из термоса (60°C)</span>
                  </div>
                  <div className={`h-5 w-5 rounded border flex items-center justify-center text-xs ${
                    demoCheckedHabits.includes("habit-chaga")
                      ? "bg-emerald-600 border-emerald-500 text-white"
                      : "border-stone-700 bg-stone-950 text-transparent"
                  }`}>
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/60 border border-stone-800 text-[11px] text-stone-400 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Все отметки сохраняются в памяти телефона без регистрации на сторонних сайтах.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. АТЛАС ДИКОРОСОВ И ЧАГИ (ПАМЯТКА ДЛЯ ГОРОЖАН) */}
      <section id="herbal-atlas" className="py-16 sm:py-20 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Библиотека сибирского травника
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-stone-100">
              Атлас: Настоящая Чага vs Ложные Трутовики
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              80% аптечной чаги собрано с мертвых берез или заменено пустым трутовиком. В методичке курса вы получите атлас для точного выбора целебного гриба:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-stone-800 bg-stone-900/70 shadow-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-stone-800 bg-stone-950 text-stone-400">
                  <th className="py-4 px-4 sm:px-5">Признак</th>
                  <th className="py-4 px-4 sm:px-5 bg-emerald-950/40 text-emerald-300 font-bold">
                    🌿 Настоящая берёзовая чага (Inonotus obliquus)
                  </th>
                  <th className="py-4 px-4 sm:px-5 text-stone-400">
                    ⚠️ Ложный трутовик (Phellinus igniarius)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-300">
                {CHAGA_VS_TINDER_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-800/30 transition-colors">
                    <td className="py-3.5 px-4 sm:px-5 font-bold text-stone-200">{row.criterion}</td>
                    <td className="py-3.5 px-4 sm:px-5 bg-emerald-950/20 text-emerald-200 font-medium">
                      {row.chaga}
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 text-stone-400">
                      {row.tinder}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Strict medical warning */}
          <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex items-start gap-3 text-xs">
            <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-200">
                Предостережение травника Ждана:
              </p>
              <p className="text-amber-300/90 mt-0.5 leading-relaxed">
                Берёзовая чага <span className="font-bold underline">несовместима</span> с одновременным приёмом антибиотиков пенициллинового ряда и внутривенным введением глюкозы. В программе курса подробно расписаны все совместимости.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 10. ОТЗЫВЫ И РЕАЛЬНЫЕ РЕЗУЛЬТАТЫ С ФОТОГРАФИЯМИ */}
      <section id="reviews" className="py-16 sm:py-20 bg-stone-900/50 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Честные результаты
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-stone-100">
              Отзывы участников и отчеты из чата
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Реальные отзывы выпускников курса с фотографиями и подтвержденными результатами:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((review) => (
              <div 
                key={review.id}
                className="p-6 rounded-3xl border border-stone-800 bg-stone-900/90 shadow-xl space-y-4 flex flex-col justify-between hover:border-emerald-500/40 transition-all"
              >
                <div className="space-y-4">
                  {/* Header with real photo */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={review.avatar} 
                        onError={(e) => {
                          const fallback = (FALLBACK_IMAGES as any)[review.id === "rev-1" ? "elena" : review.id === "rev-2" ? "sergey" : review.id === "rev-3" ? "olga" : "doctorValentina"];
                          if (fallback) e.currentTarget.src = fallback;
                        }}
                        alt={review.name} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500/40"
                      />
                      <div>
                        <p className="font-bold text-sm text-stone-100">{review.name}, {review.age} лет</p>
                        <p className="text-xs text-stone-400">{review.city}</p>
                      </div>
                    </div>

                    <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-800 px-3 py-1 rounded-full font-bold">
                      {review.result}
                    </span>
                  </div>

                  {/* Telegram Message Bubble */}
                  <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 text-xs sm:text-sm text-stone-200 leading-relaxed space-y-2">
                    <p className="italic">«{review.text}»</p>
                    <div className="flex items-center justify-between text-[11px] text-stone-500 pt-2 border-t border-stone-900">
                      <span className="text-emerald-400 font-semibold">{review.verificationBadge}</span>
                      <span>✓✓ Проверено</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400">
                    Достигнуто на {review.daysOnCourse} день курса
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. ЧТО ВХОДИТ В КОМПЛЕКТ */}
      <section id="package" className="py-16 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Состав комплекта
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-stone-100">
              Что вы получаете сразу после оплаты
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Никаких ежемесячных списаний или скрытых платежей. Доступ ко всем материалам открывается навсегда:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MINI_PACKAGE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-emerald-500/40 transition-all space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-emerald-400">
                    <div className="p-2 rounded-xl bg-emerald-950 border border-emerald-800/80">
                      {item.badge === "Аудио-подкаст" ? (
                        <Headphones className="h-4 w-4 text-amber-400" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4" />
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-stone-100">{item.title}</h3>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {item.badge && (
                  <div className="pt-2 border-t border-stone-800/60">
                    <span className={`inline-block text-[10px] px-2.5 py-0.5 rounded-full font-bold ${
                      item.badge === "Аудио-подкаст" 
                        ? "bg-amber-950 text-amber-300 border border-amber-800" 
                        : "bg-stone-950 text-stone-400 border border-stone-800"
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Reassurance Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-stone-900 to-amber-950/30 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <Gift className="h-6 w-6 text-amber-400 shrink-0" />
              <div>
                <span className="font-bold text-stone-200 block">
                  Все травы покупаются в аптеке у вашего дома
                </span>
                <span className="text-stone-400">
                  Общая стоимость сырья на весь 14-дневный курс составит всего 650–850 ₽.
                </span>
              </div>
            </div>
            <a
              href="#tariffs"
              className="shrink-0 text-emerald-400 hover:text-emerald-300 font-bold underline text-xs"
            >
              Выбрать тариф обучения →
            </a>
          </div>

        </div>
      </section>

      {/* 12. ТАРИФЫ ОБУЧЕНИЯ (3 ТАРИФА НА ВЫБОР) */}
      <section id="tariffs" className="py-16 sm:py-20 bg-stone-900/40 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Варианты участия
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-stone-100">
              Выберите ваш тариф обучения
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Специальные цены действуют до окончания обратного отсчета:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan) => {
              const isCurrent = selectedPlan.id === plan.id;
              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all relative ${
                    plan.isFeatured
                      ? "border-2 border-emerald-500 bg-gradient-to-b from-emerald-950/80 via-stone-900 to-stone-950 shadow-2xl shadow-emerald-950/60 lg:-translate-y-2"
                      : "border border-stone-800 bg-stone-900/80 hover:border-stone-700"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-emerald-600 text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-lg border border-emerald-400">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-['Cinzel'] font-bold text-xl text-stone-100">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                        {plan.tagline}
                      </p>
                    </div>

                    <div className="pb-4 border-b border-stone-800">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-extrabold text-stone-100 font-['Cinzel']">
                          {plan.discountPrice.toLocaleString("ru-RU")} ₽
                        </span>
                        <span className="text-sm text-stone-500 line-through">
                          {plan.originalPrice.toLocaleString("ru-RU")} ₽
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-bold block mt-1">
                        Разовая оплата • Навсегда
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <span className="text-xs font-bold text-stone-300 block">Что включено:</span>
                      <ul className="space-y-2">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                            <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.bonusIncluded && plan.bonusIncluded.length > 0 && (
                      <div className="pt-3 border-t border-stone-800 space-y-1.5">
                        <span className="text-[11px] font-bold text-amber-400 block">Бонусы тарифа:</span>
                        <ul className="space-y-1">
                          {plan.bonusIncluded.map((bonus, bIdx) => (
                            <li key={bIdx} className="text-[11px] text-stone-400 flex items-center gap-1.5">
                              <Gift className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                              <span>{bonus}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.isFeatured
                        ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-lg shadow-emerald-950/80"
                        : "bg-stone-800 hover:bg-stone-700 text-stone-200"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 13. ФОРМА БЫСТРОЙ И БЕЗОПАСНОЙ ОПЛАТЫ (CHECKOUT) */}
      <section id="checkout" className="py-16 sm:py-20 border-t border-stone-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl border-2 border-emerald-500 bg-gradient-to-b from-emerald-950/90 via-stone-900 to-stone-950 p-6 sm:p-10 shadow-2xl space-y-6">
            
            {/* Header of Payment Card */}
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-stone-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-800">
                  Мгновенный доступ
                </span>
                <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-extrabold text-stone-100 mt-2">
                  Оформление заказа: {selectedPlan.discountPrice.toLocaleString("ru-RU")} ₽
                </h2>
                <p className="text-xs text-stone-300 mt-1">
                  Выбран: <span className="font-bold text-emerald-400">{selectedPlan.name}</span>
                </p>
              </div>

              <div className="text-right">
                <div className="flex items-baseline gap-2 justify-end">
                  <span className="text-4xl sm:text-5xl font-extrabold text-stone-100 font-['Cinzel']">
                    {selectedPlan.discountPrice.toLocaleString("ru-RU")} ₽
                  </span>
                  <span className="text-lg text-stone-500 line-through">
                    {selectedPlan.originalPrice.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
                <span className="text-[11px] text-emerald-400 font-bold block mt-0.5">
                  Разовая оплата • Без подписок
                </span>
              </div>
            </div>

            {/* If Payment Succeeded */}
            {paymentSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-950/90 border border-emerald-500 space-y-5 text-center">
                <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400">
                  <Check className="h-9 w-9 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-stone-100 font-['Cinzel']">
                  Оплата прошла успешно!
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 max-w-md mx-auto leading-relaxed">
                  Номер вашего заказа: <span className="font-mono font-bold text-emerald-300">{orderNumber}</span>. 
                  Все материалы протокола, доступ к веб-трекеру и закрытый чат отправлены на e-mail:{" "}
                  <span className="text-emerald-300 font-bold">{payEmail || "ваш адрес"}</span>.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://t.me/Stas_Kosmos1"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-7 py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Служба заботы в Telegram (@Stas_Kosmos1)</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setPaymentSuccess(false)}
                    className="w-full sm:w-auto bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold px-5 py-3.5 rounded-xl cursor-pointer"
                  >
                    Вернуться к форме
                  </button>
                </div>
              </div>
            ) : (
              /* Order Form */
              <form onSubmit={handlePaymentSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-300 mb-1.5 font-bold">
                      Ваше имя <span className="text-emerald-400">*</span>:
                    </label>
                    <input
                      required
                      type="text"
                      value={payName}
                      onChange={(e) => setPayName(e.target.value)}
                      placeholder="Например, Алексей"
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-300 mb-1.5 font-bold">
                      Телефон или Telegram <span className="text-emerald-400">*</span>:
                    </label>
                    <input
                      required
                      type="tel"
                      value={payPhone}
                      onChange={(e) => setPayPhone(e.target.value)}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 mb-1.5 font-bold">
                    Email (сюда придут материалы и персональный доступ) <span className="text-emerald-400">*</span>:
                  </label>
                  <input
                    required
                    type="email"
                    value={payEmail}
                    onChange={(e) => setPayEmail(e.target.value)}
                    placeholder="alexey@example.com"
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 focus:outline-none focus:border-emerald-500 text-sm"
                  />
                </div>

                {/* Payment Methods */}
                <div className="pt-2">
                  <label className="block text-stone-300 mb-2 font-bold">
                    Выберите способ оплаты:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label
                      onClick={() => setPayMethod("sbp")}
                      className={`flex items-center gap-2.5 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        payMethod === "sbp"
                          ? "border-emerald-500 bg-emerald-950/60 text-stone-100 shadow-md"
                          : "border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={payMethod === "sbp"}
                        onChange={() => setPayMethod("sbp")}
                        className="accent-emerald-500"
                      />
                      <div>
                        <span className="font-bold block text-xs text-stone-100">⚡ СБП</span>
                        <span className="text-[10px] text-emerald-400">Без комиссии (0%)</span>
                      </div>
                    </label>

                    <label
                      onClick={() => setPayMethod("card")}
                      className={`flex items-center gap-2.5 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        payMethod === "card"
                          ? "border-emerald-500 bg-emerald-950/60 text-stone-100 shadow-md"
                          : "border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={payMethod === "card"}
                        onChange={() => setPayMethod("card")}
                        className="accent-emerald-500"
                      />
                      <div>
                        <span className="font-bold block text-xs text-stone-100">💳 Карта</span>
                        <span className="text-[10px] text-stone-400">МИР, Visa, MC</span>
                      </div>
                    </label>

                    <label
                      onClick={() => setPayMethod("sber")}
                      className={`flex items-center gap-2.5 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        payMethod === "sber"
                          ? "border-emerald-500 bg-emerald-950/60 text-stone-100 shadow-md"
                          : "border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={payMethod === "sber"}
                        onChange={() => setPayMethod("sber")}
                        className="accent-emerald-500"
                      />
                      <div>
                        <span className="font-bold block text-xs text-stone-100">📱 SberPay / Т-Банк</span>
                        <span className="text-[10px] text-stone-400">Быстро в 1 клик</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 shadow-2xl shadow-emerald-950/80 hover:scale-[1.01] active:scale-98 disabled:opacity-70 mt-4 cursor-pointer"
                >
                  {isProcessing ? (
                    <span className="animate-pulse">Обработка защищенного платежа...</span>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 text-amber-300" />
                      <span>ОПЛАТИТЬ {selectedPlan.discountPrice.toLocaleString("ru-RU")} ₽ И ПОЛУЧИТЬ ДОСТУП</span>
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>

                {/* Legal Consent Notice */}
                <p className="text-[11px] text-stone-400 text-center leading-relaxed pt-2 px-2">
                  Нажимая кнопку «Оплатить», вы соглашаетесь с условиями{" "}
                  <button
                    type="button"
                    onClick={() => openLegalModal("offer")}
                    className="text-emerald-400 hover:text-emerald-300 underline font-medium cursor-pointer"
                  >
                    Договора публичной оферты
                  </button>{" "}
                  и даете согласие на обработку персональных данных в соответствии с{" "}
                  <button
                    type="button"
                    onClick={() => openLegalModal("privacy")}
                    className="text-emerald-400 hover:text-emerald-300 underline font-medium cursor-pointer"
                  >
                    Политикой конфиденциальности
                  </button>
                  .
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-stone-400 pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    Безопасный 256-bit платеж
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Send className="h-3.5 w-3.5 text-emerald-400" />
                    Моментальная выдача доступа
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <HeartHandshake className="h-3.5 w-3.5 text-emerald-400" />
                    100% честная гарантия 3 дня
                  </span>
                </div>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* 14. ЧАСТЫЕ ВОПРОСЫ (FAQ) */}
      <section id="faq" className="py-16 sm:py-20 bg-stone-900/50 border-t border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Ответы на вопросы
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-stone-100">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Всё, что важно знать перед началом 14-дневного протокола:
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-stone-800 bg-stone-900/80 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-stone-100 hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-stone-950 border border-stone-800 text-stone-400">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs text-stone-300 leading-relaxed border-t border-stone-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 15. КЛИЕНТСКИЙ ФУТЕР С ЮРИДИЧЕСКИМИ ДОКУМЕНТАМИ И РЕКВИЗИТАМИ */}
      <footer className="border-t border-stone-800/80 bg-stone-950 py-12 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Top Brand & Navigation Line */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-stone-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-stone-200">
                <Trees className="h-4 w-4 text-emerald-400" />
                <span className="font-['Cinzel'] font-bold text-stone-100">ТАЁЖНЫЙ ПЕРЕЗАПУСК</span>
                <span>• Оздоровительный онлайн-курс</span>
              </div>
              <p className="text-[11px] text-stone-400">
                Горный Алтай • Натуральные дикоросы и физиологический запуск оттока желчи
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400">
              <a href="#about" className="hover:text-stone-200 transition-colors">О методе</a>
              <a href="#author" className="hover:text-stone-200 transition-colors">Автор</a>
              <a href="#program" className="hover:text-stone-200 transition-colors">Программа</a>
              <a href="#tariffs" className="hover:text-stone-200 transition-colors">Тарифы</a>
              <a href="#faq" className="hover:text-stone-200 transition-colors">FAQ</a>
              <a
                href="https://t.me/Stas_Kosmos1"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-950/70 transition-all"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                <span>Служба заботы в Telegram: @Stas_Kosmos1</span>
              </a>
            </div>
          </div>

          {/* Official Requisites & Legal Navigation Panel */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-5 sm:p-6 rounded-3xl bg-stone-900/60 border border-stone-800/80">
            
            {/* Requisites Block */}
            <div className="md:col-span-6 space-y-2 text-stone-300">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                Официальные реквизиты продавца:
              </span>
              <div className="space-y-1 text-xs text-stone-300">
                <p className="font-bold text-stone-100 flex items-center gap-2">
                  <span>Самозанятый {LEGAL_REQUISITES.fullName}</span>
                  <span className="text-[10px] font-normal px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                    НПД (ФЗ № 422-ФЗ)
                  </span>
                </p>
                <p className="text-stone-400">
                  ИНН: <span className="font-mono text-stone-200 font-semibold">{LEGAL_REQUISITES.inn}</span>
                </p>
                <p className="text-stone-400 flex items-center gap-1.5">
                  <span>Email для обращений:</span>
                  <a 
                    href={`mailto:${LEGAL_REQUISITES.email}`} 
                    className="text-emerald-400 hover:underline font-mono"
                  >
                    {LEGAL_REQUISITES.email}
                  </a>
                </p>
                <p className="text-stone-400 flex items-center gap-1.5">
                  <span>Служба заботы в Telegram:</span>
                  <a 
                    href="https://t.me/Stas_Kosmos1" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline font-mono font-semibold"
                  >
                    {LEGAL_REQUISITES.telegramSupport}
                  </a>
                </p>
                <p className="text-[11px] text-stone-400 pt-1">
                  Предмет реализации: доступ к цифровому контенту (электронный курс и веб-трекер «Таёжный Перезапуск»).
                </p>
              </div>
            </div>

            {/* Active Legal Links with Modal Triggers */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                  Юридические документы и оферта:
                </span>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2.5">
                  <a
                    href="#offer"
                    onClick={(e) => {
                      e.preventDefault();
                      openLegalModal("offer");
                    }}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 hover:border-emerald-500/50 hover:bg-stone-900 text-stone-200 hover:text-emerald-300 transition-colors text-xs font-medium cursor-pointer"
                  >
                    <FileText className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Договор публичной оферты</span>
                  </a>

                  <a
                    href="#privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      openLegalModal("privacy");
                    }}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 hover:border-emerald-500/50 hover:bg-stone-900 text-stone-200 hover:text-emerald-300 transition-colors text-xs font-medium cursor-pointer"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Политика конфиденциальности</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-stone-500">
                <span>Чек формируется в сервисе «Мой налог» и отправляется в электронном виде. Без скрытых подписок.</span>
              </div>
            </div>

          </div>

          {/* Medical Disclaimer & Copyright */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] text-stone-400 leading-relaxed pt-2">
            <div>
              <p className="font-semibold text-stone-300 mb-1">Отказ от медицинской ответственности:</p>
              <p>
                Материалы курса носят исключительно общеоздоровительный и информационно-просветительский характер, основаны на традиционном травничестве и не заменяют консультации лечащего врача. Дикоросы и сборы не являются лекарственными средствами. При наличии желчнокаменной болезни проконсультируйтесь со специалистом.
              </p>
            </div>

            <div className="md:text-right space-y-1 text-stone-400">
              <p>© {new Date().getFullYear()} Курс «Таёжный Перезапуск». Все права защищены.</p>
              <p>Самозанятый {LEGAL_REQUISITES.fullName} • ИНН {LEGAL_REQUISITES.inn}</p>
              <div className="pt-1">
                {onSwitchToStudio && (
                  <button
                    onClick={onSwitchToStudio}
                    className="text-[11px] text-emerald-400/80 hover:text-emerald-300 underline"
                  >
                    Панель управления проектом (Studio)
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* 16. STICKY MOBILE BOTTOM BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 p-3 px-4 flex items-center justify-between gap-3 shadow-2xl">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-stone-100 font-['Cinzel']">
              {selectedPlan.discountPrice.toLocaleString("ru-RU")} ₽
            </span>
            <span className="text-[11px] text-stone-500 line-through">
              {selectedPlan.originalPrice.toLocaleString("ru-RU")} ₽
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 font-semibold block">
            Скидка 60% • {formatTimer()}
          </span>
        </div>

        <a
          href="#checkout"
          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg flex items-center gap-1.5 active:scale-95"
        >
          <span>Записаться</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* 17. LEGAL DOCUMENTS MODAL */}
      <LegalModal
        isOpen={legalModalOpen}
        activeTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
        onTabChange={setLegalModalTab}
      />

    </div>
  );
};
