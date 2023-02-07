import type { FC } from 'react';
import { useState } from 'react';
import { Loader } from '~/components/loader';
import ResponseCard from '~/components/ResponseCard';
import useFetchAI from '~/hooks/useFetchAI';
interface ProblemmodeProps {
  sendRequest?: (topic: string) => void;
}

const Problemmode: FC<ProblemmodeProps> = () => {
  const { generation, fetchAI, isLoading } = useFetchAI();
  const [problem, setProblem] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProblem(e.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    fetchAI &&
      fetchAI(
        'command-xlarge-nightly',
        `Problem to solve: Too much time spent making slide decks.
Startup Idea: A platform that generates slide deck contents automatically based on a given outline.
Startup Name: Deckerize

--
Problem to solve: Not eveyone has the design skills and aesthetic taste in indoor landscaping.
Startup Idea: An app that calculates the best position of your indoor plants for your apartment.
Startup Name: Planteasy

--
Problem to solve: Hearing aid battery lasts too short.
Startup Idea: A hearing aid for the elderly that automatically adjusts its levels and with a battery lasting a whole week.
Startup Name: Hearspan

--
Problem to solve: Students are bored and not engaged with the traditional school system.
Startup Idea: An online school that lets students mix and match their own curriculum based on their interests and goals.
Startup Name: Prime Age

--
Problem to solve: ${problem}
Startup Idea:`
      );
  };

  return (
    <>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text text-lg">
            Describe the problem to solve
          </span>
        </label>
        <textarea
          onChange={handleOnChange}
          placeholder="e.g: Too much time is wasted to doing things not related to work."
          className="textarea w-full max-w-3xl "
          name="problem"
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

export default Problemmode;
