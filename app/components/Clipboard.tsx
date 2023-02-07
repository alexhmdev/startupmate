import { useState } from 'react';
import toast from 'react-hot-toast';
export default function Clipboard({
  content,
  className,
}: {
  content: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const handleCopyContent = async () => {
    if (!copied)
      try {
        await navigator.clipboard.writeText(content);
        console.log('Texto copiado al portapapeles');
      } catch (err) {
        console.error('Error al copiar al portapapeles:', err);
      }
    toast('Copied to clipboard!', {
      icon: '✅',
      style: { background: '#363636', color: '#fbfbfb' },
      duration: 3000,
    });
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <>
      <button
        className={` p-2 ${className} active:scale-90 duration-300 hover:opacity-75 `}
        onClick={handleCopyContent}
      >
        {copied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px] h-[20px] text-success"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] h-[20px]"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <rect x="8" y="8" width="12" height="12" rx="2" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"
            />
          </svg>
        )}
      </button>
    </>
  );
}
