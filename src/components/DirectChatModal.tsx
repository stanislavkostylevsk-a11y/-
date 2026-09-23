import { useState } from 'react';
import { X, Instagram, Send, Mail, Sparkles, CheckCheck } from 'lucide-react';
import { AUTHOR_INFO } from '../data/courseData';

interface DirectChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrder: () => void;
}

export default function DirectChatModal({ isOpen, onClose, onOpenOrder }: DirectChatModalProps) {
  const [question, setQuestion] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const quickQuestions = [
    'Подойдет ли курс, если у меня тонкие перещипанные брови?',
    'Сколько нужно денег на материалы для старта?',
    'Как оплатить курс из Казахстана / Беларуси / Европы?',
    'Какой тариф лучше выбрать для новичка?'
  ];

  const handleSend = (textToSend?: string) => {
    const finalMsg = textToSend || question;
    if (!finalMsg.trim()) return;

    setSent(true);
    setTimeout(() => {
      window.open(
        `https://t.me/AmiAmii23?text=${encodeURIComponent(`Здравствуйте, Амалия! Вопрос по курсу «Сама себе бровист»: ${finalMsg}`)}`,
        '_blank'
      );
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#D8C7B5] overflow-hidden my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Instagram Direct Header */}
        <div className="p-4 bg-[#FAF7F2] border-b border-[#EAE1D7] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D8C7B5]">
              <img
                src={AUTHOR_INFO.avatarUrl}
                alt="Амалия"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-[#1C1714]">Амалия</span>
                <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              </div>
              <div className="text-[11px] text-[#886C56]">
                {AUTHOR_INFO.instagram} • В сети
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#EAE1D7] text-[#251D17] flex items-center justify-center transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Conversation Body */}
        <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">
          {/* Welcome speech bubble from Amaliya */}
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-1">
              <img
                src={AUTHOR_INFO.avatarUrl}
                alt="Амалия"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-[#FAF7F2] p-3.5 rounded-2xl rounded-tl-xs border border-[#EAE1D7] text-xs text-[#251D17] leading-relaxed max-w-[85%]">
              Девочки, привет! 👋 Я на связи. Если у вас есть вопрос по форме ваших бровей, тарифам или материалам — напишите мне, я подскажу!
            </div>
          </div>

          {sent ? (
            <div className="p-4 rounded-2xl bg-[#2E7D32]/10 border border-[#2E7D32]/30 text-center space-y-2">
              <CheckCheck className="w-6 h-6 text-[#2E7D32] mx-auto" />
              <div className="text-xs font-bold text-[#2E7D32]">
                Сообщение готово к отправке!
              </div>
              <p className="text-[11px] text-[#554336]">
                Переходим в диалог с Амалией. Если окно не открылось, выберите мессенджер ниже.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-[#886C56] uppercase tracking-wider block">
                  Быстрые частые вопросы:
                </span>
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setQuestion(q);
                      handleSend(q);
                    }}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#EAE1D7] text-xs text-[#42342A] transition-colors leading-snug"
                  >
                    💬 {q}
                  </button>
                ))}
              </div>

              <div>
                <textarea
                  rows={3}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Или напишите свой вопрос сюда..."
                  className="w-full p-3 text-xs rounded-xl bg-[#FAF7F2] border border-[#D8C7B5] focus:outline-hidden focus:border-[#1C1714] text-[#1C1714] resize-none"
                />
              </div>
            </>
          )}

          {/* Social Direct Links */}
          <div className="pt-2 border-t border-[#EAE1D7] space-y-2">
            <div className="text-[11px] text-center text-[#886C56]">
              Открыть прямой диалог в приложении или написать на почту:
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <a
                href={AUTHOR_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-2 rounded-xl bg-white border border-[#D8C7B5] hover:bg-[#FAF7F2] text-xs font-bold text-[#1C1714] flex items-center justify-center gap-1.5 transition-colors"
                title="Telegram @AmiAmii23"
              >
                <Send className="w-4 h-4 text-[#2AABEE]" />
                <span>Telegram</span>
              </a>

              <a
                href={AUTHOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-2 rounded-xl bg-white border border-[#D8C7B5] hover:bg-[#FAF7F2] text-xs font-bold text-[#1C1714] flex items-center justify-center gap-1.5 transition-colors"
                title="Instagram @Amaliya_brows"
              >
                <Instagram className="w-4 h-4 text-[#C13584]" />
                <span>Instagram</span>
              </a>

              <a
                href={`mailto:${AUTHOR_INFO.email}`}
                className="py-2.5 px-2 rounded-xl bg-white border border-[#D8C7B5] hover:bg-[#FAF7F2] text-xs font-bold text-[#1C1714] flex items-center justify-center gap-1.5 transition-colors"
                title={`Email: ${AUTHOR_INFO.email}`}
              >
                <Mail className="w-4 h-4 text-[#E07A5F]" />
                <span>Почта</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
