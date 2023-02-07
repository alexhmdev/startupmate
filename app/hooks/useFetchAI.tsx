import { useState } from 'react';
const URL_COHERE = 'https://api.cohere.ai/generate';

const useFetchAI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState();
  const [generation, setGeneration] = useState();

  async function fetchAI(
    model: 'command-xlarge-nightly' | 'xlarge' | 'medium',
    prompt: string
  ) {
    setIsLoading(true);
    const body = {
      model,
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

    const response = await fetch(URL_COHERE, {
      method: 'POST',
      headers: {
        'Cohere-Version': '2022-12-06',
        accept: 'application/json',
        authorization: `Bearer ${window.ENV.COHERE_API_KEY}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const AIData = await response.json();
    console.log('AIData', AIData);
    setResponse(AIData);
    setGeneration(AIData.generations[0].text);
    setIsLoading(false);
  }
  return { response, generation, isLoading, fetchAI };
};

export default useFetchAI;
