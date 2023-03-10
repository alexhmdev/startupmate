import { json } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import styles from './tailwind.css';
import Navbar from './components/Navbar';
import { links as loaderLinks } from './components/loader';
import { Toaster } from 'react-hot-toast';
export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'StartupMate',
  viewport: 'width=device-width,initial-scale=1',
});

export function links() {
  return [...loaderLinks(), { rel: 'stylesheet', href: styles }];
}

export async function loader() {
  return json({
    ENV: {
      COHERE_API_KEY: process.env.COHERE_API_KEY,
    },
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <main className="flex justify-center mt-10 mb-10 before:w-[300px] before:h-[300px] before:absolute before:top-32 before:-left-32 md:before:left-32 before:bg-accent/20 before:blur-3xl before:rounded-full">
          <Outlet />
        </main>
        <Toaster />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
