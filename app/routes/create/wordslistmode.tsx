import { Form } from '@remix-run/react';
import { Loader } from '~/components/loader';
export default function Wordslistmode() {
  return (
    <Form>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text ">Write your words ideas</span>
        </label>
        <input
          type="text"
          placeholder="e.g: Coffe, internet, games..."
          className="input input-bordered w-full max-w-xs"
          name="words"
        />
      </div>
      <Loader text="loading..." />
    </Form>
  );
}
