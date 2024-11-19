'use client';

import { useState } from 'react';
import { getAssistantResponse } from '@/actions';

export const Assistant = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const assistantResponse = await getAssistantResponse(question);
    setResponse(assistantResponse);
  };

  return (
    <div className='assistant-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='question'>Pregunta:</label>
        <input
          type='text'
          id='question'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
        <button type='submit'>Preguntar</button>
      </form>
      {response && (
        <div className='response'>
          <h3>Respuesta del Asistente:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};
