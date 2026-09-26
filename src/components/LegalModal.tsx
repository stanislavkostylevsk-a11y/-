import React, { useState, useEffect } from "react";
import { 
  OFFER_CONTRACT_TEXT, 
  REFUND_POLICY_TEXT,
  PRIVACY_POLICY_TEXT, 
  LEGAL_REQUISITES 
} from "../data/legalDocuments";
import { 
  X, 
  FileText, 
  RotateCcw,
  ShieldCheck, 
  Building2, 
  Copy, 
  Check, 
  Printer, 
  AlertCircle,
  HelpCircle,
  Clock,
  FileCheck,
  Ban
} from "lucide-react";

export type LegalTabType = "offer" | "refund" | "privacy" | "requisites";

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTabType;
  onClose: () => void;
  onTabChange?: (tab: LegalTabType) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeTab: initialTab,
  onClose,
  onTabChange
}) => {
  const [currentTab, setCurrentTab] = useState<LegalTabType>(initialTab);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    setCurrentTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectTab = (tab: LegalTabType) => {
    setCurrentTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const getDocText = () => {
    switch (currentTab) {
      case "offer":
        return OFFER_CONTRACT_TEXT;
      case "refund":
        return REFUND_POLICY_TEXT;
      case "privacy":
        return PRIVACY_POLICY_TEXT;
      case "requisites":
        return `Исполнитель: ${LEGAL_REQUISITES.fullName}\nИНН: ${LEGAL_REQUISITES.inn}\nСтатус: ${LEGAL_REQUISITES.status}\nEmail: ${LEGAL_REQUISITES.email}\nTelegram: ${LEGAL_REQUISITES.telegramSupport}`;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-stone-900 border border-stone-800 shadow-2xl overflow-hidden text-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-800 bg-stone-950/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
              {currentTab === "offer" && <FileText className="h-5 w-5" />}
              {currentTab === "refund" && <RotateCcw className="h-5 w-5" />}
              {currentTab === "privacy" && <ShieldCheck className="h-5 w-5" />}
              {currentTab === "requisites" && <Building2 className="h-5 w-5" />}
            </div>
            <div>
              <h2 className="font-['Cinzel'] text-base sm:text-lg font-bold text-stone-100">
                {currentTab === "offer" && "Договор публичной оферты"}
                {currentTab === "refund" && "Порядок и правила возврата денежных средств"}
                {currentTab === "privacy" && "Политика конфиденциальности"}
                {currentTab === "requisites" && "Реквизиты самозанятого"}
              </h2>
              <p className="text-[11px] text-stone-400">
                Самозанятая {LEGAL_REQUISITES.fullName} • ИНН {LEGAL_REQUISITES.inn}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Распечатать документ"
              className="p-2 rounded-xl text-stone-400 hover:text-stone-100 hover:bg-stone-800 border border-transparent hover:border-stone-700 transition-colors hidden sm:flex items-center gap-1.5 text-xs"
            >
              <Printer className="h-4 w-4" />
              <span>Печать</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-100 hover:bg-stone-800 border border-transparent hover:border-stone-700 transition-colors"
              aria-label="Закрыть окно"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-800 bg-stone-950/40 px-5 pt-2 gap-2 overflow-x-auto">
          <button
            onClick={() => handleSelectTab("offer")}
            className={`pb-3 px-3 text-xs font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              currentTab === "offer"
                ? "border-emerald-500 text-emerald-400"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Договор оферты</span>
          </button>

          <button
            onClick={() => handleSelectTab("refund")}
            className={`pb-3 px-3 text-xs font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              currentTab === "refund"
                ? "border-emerald-500 text-emerald-400"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Условия возврата</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-700/60 text-emerald-300 font-mono">
              ст. 782 ГК РФ
            </span>
          </button>

          <button
            onClick={() => handleSelectTab("privacy")}
            className={`pb-3 px-3 text-xs font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              currentTab === "privacy"
                ? "border-emerald-500 text-emerald-400"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Конфиденциальность</span>
          </button>

          <button
            onClick={() => handleSelectTab("requisites")}
            className={`pb-3 px-3 text-xs font-semibold transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
              currentTab === "requisites"
                ? "border-emerald-500 text-emerald-400"
                : "border-transparent text-stone-400 hover:text-stone-200"
            }`}
          >
            <Building2 className="h-3.5 w-3.5" />
            <span>Реквизиты и контакты</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-xs sm:text-sm text-stone-300 leading-relaxed font-sans select-text">
          
          {/* Quick Notice for Refund or Offer Tab */}
          {(currentTab === "offer" || currentTab === "refund") && (
            <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider">
                <FileCheck className="h-4 w-4" />
                <span>Гарантии соблюдения законодательства РФ (ст. 782 ГК РФ, ст. 31, 32 ЗоЗПП)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-stone-200 font-semibold">
                    <Clock className="h-3.5 w-3.5 text-amber-400" />
                    <span>Сроки рассмотрения</span>
                  </div>
                  <p className="text-[11px] text-stone-400">
                    До <strong>10 календарных дней</strong> с момента подачи заявления.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-stone-200 font-semibold">
                    <RotateCcw className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Срок выплат</span>
                  </div>
                  <p className="text-[11px] text-stone-400">
                    Выплата в течение <strong>10 дней</strong> после решения тем же способом.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-stone-200 font-semibold">
                    <Ban className="h-3.5 w-3.5 text-rose-400" />
                    <span>Без скрытых комиссий</span>
                  </div>
                  <p className="text-[11px] text-stone-400">
                    Возврат <strong>БЕЗ удержания комиссий</strong> платежного сервиса или банка.
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentTab === "requisites" ? (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-300 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-200">Официальные регистрационные данные продавца</p>
                  <p className="text-[11px] text-emerald-400/90 mt-0.5">
                    Деятельность осуществляется в строгом соответствии с Федеральным законом РФ № 422-ФЗ. Все расчеты фискализируются в ФНС РФ (сервис «Мой налог»).
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1 relative">
                  <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">
                    ФИО исполнителя (Самозанятый)
                  </span>
                  <p className="font-bold text-stone-100 text-base">{LEGAL_REQUISITES.fullName}</p>
                  <p className="text-xs text-stone-400">{LEGAL_REQUISITES.status}</p>
                  <button
                    onClick={() => copyToClipboard(LEGAL_REQUISITES.fullName, "fio")}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 text-xs"
                    title="Скопировать ФИО"
                  >
                    {copiedField === "fio" ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1 relative">
                  <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">
                    Идентификационный номер налогоплательщика (ИНН)
                  </span>
                  <p className="font-bold text-stone-100 text-base font-mono tracking-wider">{LEGAL_REQUISITES.inn}</p>
                  <p className="text-xs text-stone-400">ФНС России • Проверен и активен</p>
                  <button
                    onClick={() => copyToClipboard(LEGAL_REQUISITES.inn, "inn")}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 text-xs"
                    title="Скопировать ИНН"
                  >
                    {copiedField === "inn" ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1 relative">
                  <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">
                    Email для обращений и возвратов
                  </span>
                  <a 
                    href={`mailto:${LEGAL_REQUISITES.email}`}
                    className="font-bold text-emerald-400 hover:underline text-base block font-mono"
                  >
                    {LEGAL_REQUISITES.email}
                  </a>
                  <p className="text-xs text-stone-400">Официальный прием заявлений и претензий</p>
                  <button
                    onClick={() => copyToClipboard(LEGAL_REQUISITES.email, "email")}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 text-xs"
                    title="Скопировать Email"
                  >
                    {copiedField === "email" ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1 relative">
                  <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">
                    Служба заботы в Telegram
                  </span>
                  <a 
                    href="https://t.me/AmiAmii23"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-emerald-400 hover:underline text-base block font-mono"
                  >
                    {LEGAL_REQUISITES.telegramSupport}
                  </a>
                  <p className="text-xs text-stone-400">Быстрая помощь и оперативная связь</p>
                  <button
                    onClick={() => copyToClipboard(LEGAL_REQUISITES.telegramSupport, "telegram")}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-stone-200 text-xs"
                    title="Скопировать логин Telegram"
                  >
                    {copiedField === "telegram" ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1">
                  <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">
                    Режим налогообложения
                  </span>
                  <p className="font-bold text-stone-200 text-sm">Налог на профессиональный доход (НПД)</p>
                  <p className="text-xs text-stone-400">Без НДС (п. 1 ст. 143 НК РФ)</p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1">
                  <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider">
                    Платежный агрегатор
                  </span>
                  <p className="font-bold text-stone-200 text-sm">Защищенный эквайринг Robokassa</p>
                  <p className="text-xs text-stone-400">Банковские карты МИР, Visa, MasterCard, СБП</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-2 text-xs">
                <p className="font-semibold text-stone-200">Наименование реализуемого цифрового контента:</p>
                <p className="text-stone-300">{LEGAL_REQUISITES.digitalContentName}</p>
                <p className="text-[11px] text-stone-400">
                  Формат поставки: электронный дистанционный доступ к обучающим материалам курса в закрытом Telegram-канале.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-stone-950 p-5 sm:p-7 rounded-2xl border border-stone-800/90 whitespace-pre-line font-mono text-[11px] sm:text-xs text-stone-300 leading-relaxed shadow-inner">
              {getDocText()}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-stone-800 bg-stone-950/90 text-xs">
          <div className="flex items-center gap-2 text-stone-400 text-[11px]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Редакция {new Date().getFullYear()} г. Соответствует ст. 782 ГК РФ и ЗоЗПП</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                copyToClipboard(getDocText(), "fullDoc");
              }}
              className="px-3 py-1.5 rounded-xl border border-stone-700 bg-stone-900 hover:bg-stone-800 text-stone-300 transition-colors flex items-center gap-1.5"
            >
              {copiedField === "fullDoc" ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copiedField === "fullDoc" ? "Скопировано" : "Скопировать текст"}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors"
            >
              Понятно
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
