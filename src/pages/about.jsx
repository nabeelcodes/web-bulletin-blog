import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Web Bulletin</title>
        <meta name="description" content="A simple and fast web blog built with NextJS and Strapi CMS. " />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta property="og:image" content="https://i.imgur.com/Jtl3tJG.png" /> */}
        <meta property="og:title" content="About - Web Bulletin"></meta>
      </Head>

      <h1>About Page</h1>
    </>
  );
}
