import { X, ShieldCheck, FileText } from 'lucide-react';
import { AUTHOR_INFO } from '../data/courseData';
import Logo from './Logo';

interface LegalModalProps {
  isOpen: boolean;
  type: 'offer' | 'privacy' | null;
  onClose: () => void;
}

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  if (!isOpen || !type) return null;

  const isOffer = type === 'offer';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#D8C7B5] overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#FAF7F2] border-b border-[#EAE1D7] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <Logo variant="light" size="sm" showSubtitle={false} showText={false} />
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#886C56]">
                Юридическая информация • Amalia Brows
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#1C1714]">
                {isOffer ? 'Публичная оферта' : 'Политика конфиденциальности'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EAE1D7] text-[#665040] hover:text-[#1C1714] transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#42342A] leading-relaxed">
          {isOffer ? (
            <>
              <div>
                <p className="text-xs text-[#886C56] mb-4">
                  Редакция от {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })} г.
                </p>
                <p className="font-medium">
                  Настоящий документ является публичной офертой (предложением) физического лица, применяющего специальный налоговый режим «Налог на профессиональный доход» (самозанятая), <strong>{AUTHOR_INFO.fullName}</strong> (ИНН {AUTHOR_INFO.inn}), именуемой в дальнейшем «Исполнитель», адресованной любому дееспособному физическому лицу (далее — «Заказчик»), заключить договор на оказание платных информационно-консультационных онлайн-услуг на нижеследующих условиях:
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1C1714] text-sm sm:text-base">1. Предмет договора</h4>
                <p>
                  1.1. Исполнитель обязуется предоставить Заказчику доступ к материалам авторского обучающего онлайн мини-курса <strong>«Сама себе бровист»</strong> (включающего 2 практических видеоурока, теоретические модули, гайды по колористике, подбору формы и список проверенных материалов), а Заказчик обязуется оплатить эти услуги в полном объеме.
                </p>
                <p>
                  1.2. Доступ к обучающим материалам предоставляется дистанционно посредством закрытого канала / чата в мессенджере Telegram или на обучающей платформе.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1C1714] text-sm sm:text-base">2. Акцепт оферты и заключение договора</h4>
                <p>
                  2.1. Полным и безоговорочным акцептом (принятием) условий настоящей Публичной оферты является совершение Заказчиком одного из следующих действий:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Заполнение формы заявки на сайте и нажатие кнопки «Оплатить», «Купить курс» или «Занять место»;</li>
                  <li>Оплата стоимости курса (в том числе частичная или по спеццене со скидкой);</li>
                  <li>Переход по ссылке оплаты, направленной Исполнителем в личные сообщения Instagram Direct или Telegram.</li>
                </ul>
                <p>
                  2.2. С момента совершения акцепта договор между Заказчиком и Исполнителем считается заключенным.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1C1714] text-sm sm:text-base">3. Стоимость услуг и порядок расчетов</h4>
                <p>
                  3.1. Стоимость участия в курсе указана на сайте и составляет 1 490 рублей РФ (в период действия специального предложения).
                </p>
                <p>
                  3.2. Оплата производится в рублях РФ в безналичном порядке через платежные сервисы (банковская карта, Система быстрых платежей / СБП) или по реквизитам Исполнителя.
                </p>
                <p>
                  3.3. Услуга считается оказанной в полном объеме с момента предоставления Заказчику ссылки-доступа к закрытым материалам курса.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1C1714] text-sm sm:text-base">4. Права и обязанности сторон</h4>
                <p>
                  4.1. Исполнитель обязуется предоставить Заказчику качественные материалы курса в заявленный срок.
                </p>
                <p>
                  4.2. Заказчик обязуется использовать предоставленные материалы исключительно в личных некоммерческих целях. Запрещается копирование, распространение, передача третьим лицам или перепродажа видеоуроков и чек-листов курса.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1C1714] text-sm sm:text-base">5. Реквизиты и контакты Исполнителя</h4>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE1D7] text-xs space-y-1">
                  <div><strong>Исполнитель:</strong> {AUTHOR_INFO.fullName} (Самозанятая)</div>
                  <div><strong>ИНН:</strong> {AUTHOR_INFO.inn}</div>
                  <div><strong>Email:</strong> {AUTHOR_INFO.email}</div>
                  <div><strong>Telegram:</strong> {AUTHOR_INFO.telegram} ({AUTHOR_INFO.telegramUrl})</div>
                  <div><strong>Instagram:</strong> @{AUTHOR_INFO.instagram} ({AUTHOR_INFO.instagramUrl})</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <p className="text-xs text-[#886C56] mb-4">
                  Редакция от {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })} г.
                </p>
                <p className="font-medium">
                  Настоящая Политика конфиденциальности персональных данных (далее — «Политика») действует в отношении всей информации, которую самозанятая <strong>{AUTHOR_INFO.fullName}</strong> (ИНН {AUTHOR_INFO.inn}) может получить о пользователе во время использования сайта курса «Сама себе бровист».
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1C1714] text-sm sm:text-base">1. Состав собираемых персональных данных</h4>
                <p>
                  1.1. При заполнении форм на Сайте или оформлении заказа Пользователь предоставляет следующие данные:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Имя Пользователя;</li>
                  <li>Номер контактного телефона (для связи через Telegram/SMS);</li>
                  <li>Никнейм в Instagram или Telegram;</li>
                  <li>Адрес электронной почты (при отправке запроса или чека).</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1C1714] text-sm sm:text-base">2. Цели обработки персональных данных</h4>
                <p>
                  2.1. Персональные данные Пользователя обрабатываются исключительно в целях:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Идентификации стороны в рамках соглашений и договоров с Исполнителем;</li>
                  <li>Отправки ссылки для доступа к закрытым материалам курса;</li>
                  <li>Осуществления обратной связи, консультаций и клиентской поддержки;</li>
                  <li>Направления подтверждений об оплате и фискальных чеков.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1C1714] text-sm sm:text-base">3. Защита и конфиденциальность</h4>
                <p>
                  3.1. Исполнитель обязуется не передавать персональные данные третьим лицам, за исключением случаев, предусмотренных действующим законодательством РФ, а также за исключением сервисов эквайринга и отправки сообщений, необходимых для исполнения договора.
                </p>
                <p>
                  3.2. Обработка персональных данных осуществляется в соответствии с Федеральным законом РФ № 152-ФЗ «О персональных данных».
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1C1714] text-sm sm:text-base">4. Изменение и отзыв согласия</h4>
                <p>
                  4.1. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив письменное уведомление на адрес электронной почты Исполнителя: <strong>{AUTHOR_INFO.email}</strong> с темой «Отзыв согласия на обработку персональных данных».
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1C1714] text-sm sm:text-base">5. Контакты оператора персональных данных</h4>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE1D7] text-xs space-y-1">
                  <div><strong>Оператор:</strong> {AUTHOR_INFO.fullName} (Самозанятая)</div>
                  <div><strong>ИНН:</strong> {AUTHOR_INFO.inn}</div>
                  <div><strong>Email:</strong> {AUTHOR_INFO.email}</div>
                  <div><strong>Telegram:</strong> {AUTHOR_INFO.telegram}</div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#FAF7F2] border-t border-[#EAE1D7] flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#1C1714] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#322A24] transition-colors"
          >
            Понятно, закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
