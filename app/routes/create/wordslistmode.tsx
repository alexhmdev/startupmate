import { useState, FC, useEffect } from 'react';
import { Loader } from '~/components/loader';
import useFetchAI from '~/hooks/useFetchAI';
interface WordslistmodeProps {
  sendRequest?: (words: string) => void;
}

const Wordslistmode: FC<WordslistmodeProps> = () => {
  const { generation, fetchAI, isLoding } = useFetchAI();
  const [words, setWords] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWords(e.target.value);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    fetchAI && fetchAI(
      `Generate a startup giving a list of words.\n-- \nWords: Ducks, Toys, Playable, funny, colorful\nStartup: A startup that makes rubber ducks of different colors, sizes and textures...\n--\nWords: Dog, cat, monkey, Keyboard, watch\nStartup: A veterinary online that recives customer inputs to analize the animal health and let them watch his process in livestream.\n--\nWords: Book, water, Credit card, shoes, car, bed, wall, airplane\nStatup: A library where you can pay with credit card, with drive trhu, and beds to rest, separate by walls and airplanes in the ceiling\n-- \nWord:${words}\nStartup: `
    );
  }

  return (
    <>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text ">Write your words ideas</span>
        </label>
        <textarea
          onChange={handleOnChange}
          placeholder="e.g: Coffee, internet, games..."
          className="textarea w-full max-w-xs "
          name="words"
          required
        ></textarea>
        {''}
      </div>
      <button className="btn btn-accent mt-4" onClick={handleSubmit}>Generate</button>
      {
        isLoding ?
          <Loader text="Creating your startup idea..." /> :
          <>
            {
              generation &&
              <>
                <h1 className='text-2xl'>Your startup idea</h1>
                <p className='text-justify'>{generation}</p>
              </>
            }
          </>
      }
    </>
  );
}

export default Wordslistmode;
