import { bodyFont } from '@/config';
import { AssistantResponse } from '@/components';
import type { IntroTranslations, BotMessage } from '@/interfaces';

interface Props {
  translations: IntroTranslations;
  messages: BotMessage[];
}

export const ChatMessages = ({ translations, messages }: Props) => {
  return (
    <>
      <div className='mb-2 md:mb-4'>
        <p
          className={`text-silver mb-1 text-xs md:text-sm ${bodyFont.className}`}
        >
          {translations.bot.name}:
        </p>
        <p
          className={`bg-silver bg-opacity-20 text-softwhite py-1 px-2 text-sm md:text-base ${bodyFont.className}`}
        >
          {translations.bot.firstMessage}
        </p>
      </div>

      {messages.map((message, index) => (
        <div
          key={`${message.text}-${index}`}
          className={`${message.type === 'assistant' ? 'mb-2 md:mb-4' : 'mb-2 flex justify-end'}`}
        >
          {message.type === 'assistant' ? (
            <>
              <p
                className={`text-silver mb-1 text-xs md:text-sm ${bodyFont.className}`}
              >
                {translations.bot.name}:
              </p>
              <div
                className={`bg-silver bg-opacity-20 text-softwhite py-1 px-2 text-xs md:text-base ${bodyFont.className}`}
              >
                <AssistantResponse response={message.text} />
              </div>
            </>
          ) : (
            <p
              className={`bg-crimson text-softwhite py-1 px-2 text-xs md:text-base text-right ${bodyFont.className}`}
            >
              {message.text}
            </p>
          )}
        </div>
      ))}
    </>
  );
};
