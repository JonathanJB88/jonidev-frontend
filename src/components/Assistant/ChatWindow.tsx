import { subtitleFont } from '@/config';
import { ChatContent } from '@/components';

import type { IntroTranslations, Locale } from '@/interfaces';

interface Props {
  onClose: () => void;
  translations: IntroTranslations;
  locale: Locale;
}

export const ChatWindow = ({ onClose, translations, locale }: Props) => {
  return (
    <div className='fixed inset-0 w-[100dvw] h-[100dvh] md:inset-auto md:bottom-5 md:right-16 md:w-96 md:h-auto z-50 bg-charcoal shadow-xl flex flex-col overflow-hidden chat-window'>
      <button
        onClick={onClose}
        aria-label={translations.bot.closeAriaLabel}
        className={`flex justify-between items-center bg-crimson text-softwhite px-2 md:px-3 py-1 md:py-2 ${subtitleFont.className}`}
      >
        <h3 className='text-h4-xs'>{translations.bot.title}</h3>
        <p className='text-softwhite hover:text-silver focus:outline-none'>✕</p>
      </button>

      <ChatContent translations={translations} locale={locale} />
    </div>
  );
};
