import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={+true} />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;&display=swap" rel="stylesheet" />
          <meta name="description" content="A simple and fast web blog built with NextJS and Strapi CMS. " />
          {/* <meta property="og:image" content="https://i.imgur.com/Jtl3tJG.png" /> */}
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
