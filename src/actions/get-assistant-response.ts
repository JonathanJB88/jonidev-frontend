'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.openAiApiKey,
});

export const getAssistantResponse = async (
  question: string
): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: "You are an assistant for Jonathan Bracho's portfolio.",
        },
        {
          role: 'user',
          content: question,
        },
      ],
    });

    console.log(
      '🚀 ~ completion.choices[0].message:',
      completion.choices[0].message.content
    );
    return completion.choices[0].message.content as string;
  } catch (error) {
    console.error('Error fetching response from OpenAI:', error);
    return 'Lo siento, no puedo responder a esa pregunta en este momento.';
  }
};
