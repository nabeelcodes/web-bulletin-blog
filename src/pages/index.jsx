import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Bulletin</title>
        <meta property="og:title" content="Web Bulletin"></meta>
      </Head>

      <h1>Web Bulletin Blog Using Next and Strapi</h1>
      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        this is a link to google
      </a>
    </>
  );
}
