import { Form } from '@remix-run/react';
import { Loader } from '~/components/loader';

export default function Wordslistmode() {
  return (
    <Form onSubmit={console.log}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text ">Write your words ideas</span>
        </label>
        <textarea
          placeholder="e.g: Coffee, internet, games..."
          className="textarea w-full max-w-xs"
          name="words"
        ></textarea>
      </div>
      <button className="btn btn-accent mt-4">Generate</button>
      {/* <Loader text="loading..." /> */}
    </Form>
  );
}
