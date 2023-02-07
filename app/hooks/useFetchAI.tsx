import { useState } from 'react';
import getEnv from '~/get-env';
// import type { AIResponse } from '~/models/AIResponse';
const URL_COHERE = 'https://api.cohere.ai/generate';

const useFetchAI = () => {
    // const env = getEnv();
    const [isLoding, setIsLoading] = useState(false);
    const [response, setResponse] = useState();
    const [generation, setGeneration] = useState();

    async function fetchAI(prompt: string) {
        setIsLoading(true);
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

        const response = await fetch(URL_COHERE, {
            method: 'POST',
            headers: {
                'Cohere-Version': '2022-12-06',
                'accept': 'application/json',
                'authorization': `Bearer ${window.ENV.COHERE_API_KEY}`,
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
    return { response, generation, isLoding, fetchAI };
}

export default useFetchAI;