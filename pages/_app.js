import '@/styles/globals.css'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pacifico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Great+Vibes" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Brush+Script+MT" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Calligraffiti" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lavanderia" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alex+Brush" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Qwigley" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cursive+Standard" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
