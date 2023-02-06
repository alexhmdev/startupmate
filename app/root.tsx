import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './tailwind.css';
import Navbar from './components/Navbar';
import { links as loaderLinks } from './components/loader';
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'StartupMate',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [...loaderLinks(), { rel: 'stylesheet', href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body id="scroll">
        <Navbar />
        <main className="flex justify-center mt-10 mb-10 before:w-[300px] before:h-[300px] before:absolute before:top-32 before:-left-32 md:before:left-32 before:bg-accent/20 before:blur-3xl before:rounded-full">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
