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
      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        this is a link to google
      </a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea non unde repellat repudiandae. Itaque, quod! Mollitia placeat
        perspiciatis non eos, totam deserunt quia, aspernatur explicabo qui delectus praesentium numquam aliquid ducimus ex eveniet unde similique
        quas dolorum suscipit fugiat molestiae aliquam culpa. Expedita necessitatibus molestias earum repellat neque labore?
      </p>
    </>
  );
}
