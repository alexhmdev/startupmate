import type { ActionArgs } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { MouseEvent, useEffect } from 'react';
import { useState } from 'react';
import useFetchAI from '~/hooks/useFetchAI';
import { AIResponse } from '~/models/AIResponse';
import fetchAI from '~/utils/fetchAI';
import Wordslistmode from './wordslistmode';

// export async function action({ request }: ActionArgs) {
//   let formData = await request.formData();
//   let values = Object.fromEntries(formData);
//   console.log(AIdata);
//   return AIdata;
// }

export default function Create() {
  const [tab, setTab] = useState('words');
  const handleTabs = (e: MouseEvent<HTMLButtonElement>) => {
    let tabName = e.currentTarget.value;
    setTab(tabName);
  };
  // const { generation, response, fetchAI } = useFetchAI();

  // const sendRequest = async (words: string) => {
  //   fetchAI && fetchAI(
  //     `Words: Ducks, Toys, Playable, funny, colorful\nStartup: A startup that makes rubber ducks of different colors, sizes and textures...\n--\nWords: Dog, cat, monkey, Keyboard, watch\nStartup: A veterinary online that recives customer inputs to analize the animal health and let them watch his process in livestream.\n--\nWords: Book, water, Credit card, shoes, car, bed, wall, airplane\nStatup: A library where you can pay with credit card, with drive trhu, and beds to rest, separate by walls and airplanes in the ceiling\n-- \nWord: ${words}\nStartup: `
  //   );
  // }

  // useEffect(() => {
  //   console.log('generationCI', generation);
  // }, [generation]);
  // useEffect(() => {
  //   console.log('responseCI', response);
  // }, [response]);

  return (
    <section className="flex flex-col justify-center gap-y-4">
      <h1 className="text-3xl md:text-5xl leading-tight md:leading-tight text-gradient-theme">
        Start generating your startup
      </h1>
      <h2 className="text-2xl">First choose a mode:</h2>
      <div className="tabs tabs-boxed bg-transparent">
        <button
          className={`tab ${tab === 'words' && 'tab-active'}`}
          value="words"
          type="button"
          onClick={handleTabs}
        >
          Words
        </button>
        <button
          className={`tab ${tab === 'problem' && 'tab-active'}`}
          value="problem"
          type="button"
          onClick={handleTabs}
        >
          Problem
        </button>
        <button
          className={`tab ${tab === 'topic' && 'tab-active'}`}
          value="topic"
          type="button"
          onClick={handleTabs}
        >
          Topic
        </button>
      </div>
      <div className="card  bg-secondary">
        <div className="card-body">
          {tab === 'words' ? <Wordslistmode /> : <h1>Something else</h1>}
        </div>
      </div>
    </section>
  );
}
