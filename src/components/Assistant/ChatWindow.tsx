import { bodyFont, subtitleFont } from '@/config';
import { ChatContent } from '@/components';

import { IntroTranslations } from '@/interfaces';

interface Props {
  onClose: () => void;
  translations: IntroTranslations;
}

export const ChatWindow = ({ onClose, translations }: Props) => {
  return (
    <div className='fixed bottom-4 right-4 md:bottom-5 md:right-16 z-50 w-72 md:w-96 bg-charcoal shadow-xl flex flex-col overflow-hidden chat-window'>
      <button
        onClick={onClose}
        aria-label={translations.bot.closeAriaLabel}
        className={`flex justify-between items-center bg-crimson text-softwhite px-2 md:px-3 py-1 md:py-2 ${subtitleFont.className}`}
      >
        <h3 className='text-h4-xs'>{translations.bot.title}</h3>
        <p className='text-softwhite hover:text-silver focus:outline-none'>✕</p>
      </button>

      <ChatContent translations={translations} />
    </div>
  );
};
