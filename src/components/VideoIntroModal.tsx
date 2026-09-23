import { X, Play, Sparkles, CheckCircle2, Instagram } from 'lucide-react';
import { AUTHOR_INFO } from '../data/courseData';

interface VideoIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrder: () => void;
}

export default function VideoIntroModal({ isOpen, onClose, onOpenOrder }: VideoIntroModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#1C1714] text-white rounded-3xl shadow-2xl border border-white/20 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E07A5F]" />
            <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#FAF7F2]">
              Видео-обращение Амалии
            </h4>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Area */}
        <div className="relative aspect-video bg-[#251D17] flex items-center justify-center overflow-hidden">
          <img
            src={AUTHOR_INFO.studioPhotoUrl}
            alt="Амалия о курсе Сама себе бровист"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Interactive Play Button Preview */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAF7F2] text-[#1C1714] flex items-center justify-center shadow-2xl mb-4 hover:scale-105 transition-transform cursor-pointer">
              <Play className="w-7 h-7 fill-[#1C1714] ml-1 text-[#1C1714]" />
            </div>
            <div className="text-sm sm:text-base font-bold text-white max-w-md font-editorial">
              «Почему салонные брови больше не должны стоить дорого: как делать идеальную форму себе дома»
            </div>
            <span className="text-xs text-[#D8C7B5] mt-1">
              Длительность: 2 мин 15 сек • HD качество
            </span>
          </div>
        </div>

        {/* Bottom takeaway & CTA */}
        <div className="p-5 sm:p-6 bg-[#251D17] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#D8C7B5] space-y-1 text-center sm:text-left">
            <div className="text-white font-semibold flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
              <span>Главная мысль видео:</span>
            </div>
            <p>У вас уйдет всего 15 минут в день, чтобы навсегда закрыть вопрос с бровями.</p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenOrder();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FAF7F2] hover:bg-white text-[#1C1714] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shrink-0 shadow-md"
          >
            <span>Записаться со скидкой 40%</span>
          </button>
        </div>

      </div>
    </div>
  );
}
