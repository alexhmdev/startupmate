import { useEffect, useState } from 'react';
import type { AIResponse } from '~/models/AIResponse';

const URL_COHERE = 'https://api.cohere.ai/generate';

export default function useFetchAI(prompt: string): AIResponse | null {
  const [data, setData] = useState(null);
  const body = {
    model: 'xlarge',
    max_tokens: 300,
    temperature: 0.9,
    prompt,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE',
  };
  useEffect(() => {
    (async function () {
      const response = await fetch(URL_COHERE, {
        method: 'POST',
        headers: {
          'Cohere-Version': '2022-12-06',
          accept: 'application/json',
          authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          'content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const AIData = await response.json();
      console.log(AIData);
      setData(AIData);
    })();
  }, []);
  return data;
}