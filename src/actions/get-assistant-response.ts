'use server';

import OpenAI from 'openai';
import { systemPrompt } from '@/config';
import type { Locale } from '@/interfaces';

const openai = new OpenAI({
  apiKey: process.env.openAiApiKey,
});

export const getAssistantResponse = async (
  question: string,
  locale: Locale
): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: question,
        },
      ],
    });

    return completion.choices[0].message.content as string;
  } catch (error) {
    console.error('Error fetching response from OpenAI:', error);
    return locale === 'en'
      ? 'I am sorry, I am not available to answer at the moment.'
      : 'Lo siento, no estoy disponible para responder en este momento.';
  }
};
