import styles from './styles.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export function Loader({ text }: { text: string }) {
  return (
    <div className="text-center">
      <div className="loader"></div>
      <p className="text-2xl mt-4">{text}</p>
    </div>
  );
}
