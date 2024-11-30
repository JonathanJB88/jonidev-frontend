'use client';

import { useState, useRef, useEffect } from 'react';
import { getAssistantResponse } from '@/actions';
import { bodyFont } from '@/config';
import { ChatMessages } from '@/components';

import type { IntroTranslations, BotMessage, Locale } from '@/interfaces';

interface Props {
  translations: IntroTranslations;
  locale: Locale;
}

export const ChatContent = ({ translations, locale }: Props) => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<BotMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage: BotMessage = { type: 'user', text: question };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setQuestion('');

    const assistantResponse = await getAssistantResponse(question, locale);
    const assistantMessage: BotMessage = {
      type: 'assistant',
      text: assistantResponse,
    };
    setMessages((prevMessages) => [...prevMessages, assistantMessage]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div
        className={`flex-1 p-2 overflow-y-auto bg-charcoal text-body-xs md:text-body-md ${bodyFont.className}`}
      >
        <ChatMessages translations={translations} messages={messages} />
        <div ref={messagesEndRef} />
      </div>

      <div className={`bg-charcoal ${bodyFont.className}`}>
        <form className='flex' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder={translations.bot.inputPlaceholder}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className={`flex-1 p-2 text-xs md:text-body-xs bg-charcoal
               text-softwhite placeholder-silver border-t border-b border-l
                border-silver focus:outline-none
                ${bodyFont.className}`}
          />
          <button
            type='submit'
            className={`bg-crimson text-softwhite 
              text-body-xs md:text-body-md p-2 border-t 
              border-b border-r border-silver 
              hover:bg-dark-crimson focus:outline-none
              ${bodyFont.className}`}
          >
            {translations.bot.sendButton}
          </button>
        </form>
      </div>
    </>
  );
};
