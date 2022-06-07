import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Bulletin</title>
        <meta name="description" content="A simple and fast web blog built with NextJS and Strapi CMS. " />
        {/* <meta property="og:image" content="https://i.imgur.com/Jtl3tJG.png" /> */}
        <meta property="og:title" content="Web Bulletin"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Web Bulletin Blog Using Next and Strapi</h1>
    </>
  );
}
