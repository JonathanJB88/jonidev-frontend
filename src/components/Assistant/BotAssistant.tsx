'use client';

import { useEffect, useState } from 'react';
import { TbMessageChatbot } from 'react-icons/tb';
import { ChatWindow } from '@/components';
import { bodyFont } from '@/config';
import type { IntroTranslations, Locale } from '@/interfaces';

interface Props {
  opacity: number;
  translations: IntroTranslations;
  locale: Locale;
}

export const BotAssistant = ({ opacity, translations, locale }: Props) => {
  const [showCTA, setShowCTA] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowCTA(true);
    }, 5000);

    const hideTimer = setTimeout(() => {
      if (!isHovered) {
        setShowCTA(false);
      }
    }, 65000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowCTA(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      if (!isHovered) {
        setShowCTA(false);
      }
    }, 300);
  };

  const handleButtonClick = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <div
      className='fixed bottom-4 right-4 md:bottom-2 md:right-16 z-50'
      style={{
        opacity: isChatOpen ? 1 : opacity,
        transition: 'opacity 0.1s ease-in-out',
      }}
    >
      {isChatOpen ? (
        <ChatWindow
          onClose={handleChatClose}
          translations={translations}
          locale={locale}
        />
      ) : (
        <div className='flex flex-col items-end justify-end'>
          {showCTA && (
            <div className={`mb-2 p-2 bg-silver rounded shadow-lg fade-in`}>
              <p
                className={`text-charcoal text-xs md:text-sm ${bodyFont.className}`}
              >
                {translations.bot.cta}
              </p>
            </div>
          )}
          <button
            className='text-silver hover:text-softwhite ml-2'
            aria-label={translations.bot.name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleButtonClick}
          >
            <TbMessageChatbot className='w-8 h-8 md:w-10 md:h-10' />
          </button>
        </div>
      )}
    </div>
  );
};
