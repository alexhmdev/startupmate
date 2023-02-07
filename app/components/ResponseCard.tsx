import Clipboard from './Clipboard';

export default function ResponseCard({ cardBody }: { cardBody: string }) {
  return (
    <div className="card bg-neutral">
      <Clipboard content={cardBody} className="absolute top-1 right-1" />
      <div className="card-body text-justify">{cardBody}</div>
    </div>
  );
}
