import Clipboard from './Clipboard';

export default function ResponseCard({ cardBody }: { cardBody: string }) {
  return (
    <div className="card bg-neutral">
      <Clipboard content={cardBody} className="absolute top-1 right-1" />
      <div className="card-body ">
        <textarea
          className="min-h-[150px] max-h[400px] flex-grow resize-none  w-full rounded-md border border-gray-90 bg-transparent py-3 px-4   read-only:border-none read-only:bg-primary-light disabled:border-gray-90 disabled:bg-gray-95 outline-primary-neutral focus-visible:outline focus-visible:outline-1 focus-visible:outline-none"
          readOnly
          spellCheck="false"
          value={cardBody}
        ></textarea>
      </div>
    </div>
  );
}
