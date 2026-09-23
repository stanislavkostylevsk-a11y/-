import { useState } from 'react';
import { X, Check, Copy, ExternalLink, HelpCircle, ShieldCheck, Send, CreditCard, Sparkles, BookOpen } from 'lucide-react';
import { AUTHOR_INFO, TARIFFS } from '../data/courseData';
import { DEFAULT_PRODAMUS_URL } from '../services/prodamus';

interface ProdamusSetupGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProdamusSetupGuideModal({ isOpen, onClose }: ProdamusSetupGuideModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentTariff = TARIFFS[0];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#D8C7B5] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-[#EAE1D7] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1C1714] text-white flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-[#F4A261]" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#886C56]">
                Инструкция по подключению
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#1C1714]">
                Настройка Prodamus + Telegram
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#EAE1D7] text-[#251D17] flex items-center justify-center transition-colors border border-[#D8C7B5] cursor-pointer"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-[#44362D]">
          
          {/* Quick summary banner */}
          <div className="p-4 rounded-2xl bg-[#1C1714] text-white flex items-start gap-3 shadow-sm">
            <Sparkles className="w-5 h-5 text-[#F4A261] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <strong>Связка полностью готова:</strong> При нажатии «Оплатить через Prodamus» ученик автоматически перенаправляется на платёжную страницу с предзаполненным заказом (<strong>{currentTariff.price} ₽</strong>), а после успешной оплаты — прямо в ваш Telegram-канал.
            </div>
          </div>

          {/* 4 Steps Guide */}
          <div className="space-y-4">
            
            {/* Step 1 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D8C7B5] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#886C56]">Шаг 1</span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-[#FAF7F2] rounded text-[#2E7D32]">Личный кабинет Prodamus</span>
              </div>
              <h4 className="font-bold text-base text-[#1C1714]">
                1. Получите адрес вашей платёжной страницы в Prodamus
              </h4>
              <p className="text-xs text-[#665040] leading-relaxed">
                После регистрации в сервисе Prodamus (для самозанятых, ИП или физлиц) вам выдается персональный домен платёжной страницы, например:
              </p>
              
              <div className="flex items-center gap-2 bg-[#FAF7F2] p-2.5 rounded-xl border border-[#EAE1D7] font-mono text-xs text-[#1C1714]">
                <span className="flex-1 truncate">https://amaliya-brows.payform.ru</span>
                <button
                  onClick={() => handleCopy('https://amaliya-brows.payform.ru', 'url')}
                  className="px-2.5 py-1 rounded bg-white hover:bg-[#EAE1D7] text-[11px] font-sans font-semibold text-[#886C56] border border-[#D8C7B5] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedKey === 'url' ? <Check className="w-3.5 h-3.5 text-[#2E7D32]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'url' ? 'Скопировано' : 'Копировать'}</span>
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D8C7B5] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#886C56]">Шаг 2</span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-[#FAF7F2] rounded text-[#0088cc]">Telegram-канал</span>
              </div>
              <h4 className="font-bold text-base text-[#1C1714]">
                2. Настройте перенаправление после оплаты (Success URL)
              </h4>
              <p className="text-xs text-[#665040] leading-relaxed">
                В настройках платёжной формы Prodamus (раздел <em>«Настройки» → «Страница успеха»</em>) или в параметре <code>urlSuccess</code> укажите ссылку на ваш закрытый Telegram-канал (или ссылку на бота выдачи доступа):
              </p>
              
              <div className="flex items-center gap-2 bg-[#FAF7F2] p-2.5 rounded-xl border border-[#EAE1D7] font-mono text-xs text-[#1C1714]">
                <span className="flex-1 truncate">{AUTHOR_INFO.telegramUrl}</span>
                <button
                  onClick={() => handleCopy(AUTHOR_INFO.telegramUrl, 'tg')}
                  className="px-2.5 py-1 rounded bg-white hover:bg-[#EAE1D7] text-[11px] font-sans font-semibold text-[#886C56] border border-[#D8C7B5] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedKey === 'tg' ? <Check className="w-3.5 h-3.5 text-[#2E7D32]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'tg' ? 'Скопировано' : 'Копировать'}</span>
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D8C7B5] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#886C56]">Шаг 3</span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-[#FAF7F2] rounded text-[#886C56]">Автоматизация ботом (опционально)</span>
              </div>
              <h4 className="font-bold text-base text-[#1C1714]">
                3. Автоматический приём в Telegram-канал
              </h4>
              <p className="text-xs text-[#665040] leading-relaxed">
                Чтобы вручную не одобрять заявки каждого ученика, подключите бесплатного бота для закрытых каналов (например, <strong>InviteMember</strong>, <strong>Paywall</strong> или встроенный Telegram-бот Prodamus). 
                Бот мгновенно отправит индивидуальную одноразовую ссылку на вход сразу после подтверждения платежа.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#D8C7B5] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#886C56]">Шаг 4</span>
                <span className="text-xs font-semibold px-2 py-0.5 bg-[#FAF7F2] rounded text-[#E07A5F]">Чек и налоги 54-ФЗ</span>
              </div>
              <h4 className="font-bold text-base text-[#1C1714]">
                4. Фискализация для самозанятых (Мой Налог)
              </h4>
              <p className="text-xs text-[#665040] leading-relaxed">
                Prodamus автоматически формирует электронный онлайн-чек покупателю и сам отправляет данные в приложение «Мой налог» по вашему ИНН (<strong>{AUTHOR_INFO.inn}</strong>). Вам не нужна отдельная онлайн-касса.
              </p>
            </div>

          </div>

          {/* Quick Support note */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#D8C7B5] flex items-center justify-between gap-3">
            <div className="text-xs text-[#554336]">
              Нужна помощь в регистрации или подключении кассы?
            </div>
            <a
              href="https://help.prodamus.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#886C56] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>База знаний Prodamus</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="w-full py-3.5 px-4 rounded-xl bg-[#1C1714] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#322A24] transition-all cursor-pointer text-center"
            >
              Всё понятно, закрыть
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
