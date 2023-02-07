import type { FC } from 'react';
import { useState } from 'react';
import { Loader } from '~/components/loader';
import ResponseCard from '~/components/ResponseCard';
import useFetchAI from '~/hooks/useFetchAI';
interface WordslistmodeProps {
  sendRequest?: (words: string) => void;
}

const Topicmode: FC<WordslistmodeProps> = () => {
  const { generation, fetchAI, isLoading } = useFetchAI();
  const [topic, setTopic] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    fetchAI &&
      fetchAI(
        'command-xlarge-nightly',
        `Generate startup ideas about ${topic}`
      );
  };

  return (
    <>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-lg">Write your topic</span>
        </label>
        <input
          onChange={handleOnChange}
          placeholder="e.g: Food"
          className="input w-full max-w-3xl "
          name="topic"
          required
        />
      </div>
      <button
        className="btn btn-accent mt-4"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        Generate
      </button>
      {isLoading ? (
        <Loader text="Creating your startup idea..." />
      ) : (
        <>
          {generation && (
            <>
              <h1 className="text-2xl">Your startup idea</h1>
              <ResponseCard cardBody={generation} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Topicmode;
