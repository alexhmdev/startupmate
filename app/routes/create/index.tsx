import type { MouseEvent } from 'react';
import { useState } from 'react';
import Wordslistmode from './wordslistmode';
export default function Create() {
  const [tab, setTab] = useState('words');
  const handleTabs = (e: MouseEvent<HTMLButtonElement>) => {
    let tabName = e.currentTarget.value;
    setTab(tabName);
  };
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
