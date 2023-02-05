import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './styles/app.css';
import { Navbar } from './components/Navbar';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'StartupMate',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <main className="flex justify-center h-[calc(100vh-4rem)] before:w-[300px] before:h-[300px] before:absolute before:top-32 before:-left-32 md:before:left-32 before:bg-accent before:blur-3xl before:opacity-40">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
