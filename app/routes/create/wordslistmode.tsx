import type { FC } from 'react';
import { useState } from 'react';
import { Loader } from '~/components/loader';
import ResponseCard from '~/components/ResponseCard';
import useFetchAI from '~/hooks/useFetchAI';
interface WordslistmodeProps {
  sendRequest?: (topic: string) => void;
}

const Wordslistmode: FC<WordslistmodeProps> = () => {
  const { generation, fetchAI, isLoading } = useFetchAI();
  const [words, setWords] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWords(e.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    fetchAI &&
      fetchAI(
        'command-xlarge-nightly',
        `Generate a startup giving a list of words.\n-- \nWords: Ducks, Toys, Playable, funny, colorful\nStartup: A big store that sell rubber ducks of many different vibrant colors, inspiring and funny duck facts\n--\nWords: Dog, cat, monkey, Keyboard, watch\nStartup: A veterinary online that recives customer inputs to analize the animal health and let them watch his process in livestream.\n--\nWords: Book, water, Credit card, shoes, car, bed, wall, airplane\nStatup: A library where you can pay with credit card, with drive trhu, and beds to rest, separate by walls and airplanes in the ceiling\n-- \nWords:${words}\nStartup: `
      );
  };

  return (
    <>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-lg">Write a list of words</span>
        </label>
        <textarea
          onChange={handleOnChange}
          placeholder="e.g: Coffee, internet, games..."
          className="textarea w-full max-w-3xl "
          name="words"
          required
        ></textarea>
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

export default Wordslistmode;
