import Head from 'next/head';
import { useContext, useEffect } from 'react';
import TestComponent from '../components/TestComponent';
import { BlogContext } from '../context/BlogContext';

export default function Home({ dataFromApi, notFound }) {
  const { updateBlogList } = useContext(BlogContext);

  useEffect(() => {
    if (!notFound) {
      updateBlogList(dataFromApi);
    }
  }, [dataFromApi, updateBlogList, notFound]);

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

      <TestComponent />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const BASE_URL = `https://jsonplaceholder.typicode.com`;
  const responseFromApi = await fetch(`${BASE_URL}/posts?_limit=5`);
  const data = await responseFromApi.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      dataFromApi: data,
      notFound: false
    }
  };
};
