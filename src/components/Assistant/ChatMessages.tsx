import { bodyFont } from '@/config';
import { IntroTranslations, BotMessage } from '@/interfaces';

interface Props {
  translations: IntroTranslations;
  messages: BotMessage[];
}

export const ChatMessages = ({ translations, messages }: Props) => {
  return (
    <>
      <div className='mb-2 md:mb-4'>
        <p className='text-silver mb-1 text-body-xs md:text-body-md'>
          {translations.bot.name}:
        </p>
        <p className='bg-silver bg-opacity-20 text-softwhite py-1 px-2 text-body-xs md:text-body-md'>
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
              <p className='text-silver mb-1 text-body-xs md:text-body-md'>
                {translations.bot.name}:
              </p>
              <p className='bg-silver bg-opacity-20 text-softwhite py-1 px-2 text-body-xs md:text-body-md'>
                {message.text}
              </p>
            </>
          ) : (
            <p className='bg-crimson text-softwhite py-1 px-2 text-body-xs md:text-body-md text-right'>
              {message.text}
            </p>
          )}
        </div>
      ))}
    </>
  );
};
