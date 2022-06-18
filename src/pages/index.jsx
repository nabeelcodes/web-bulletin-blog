import Head from 'next/head';
<<<<<<< HEAD
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
=======
import { Container } from '../styles/utilities';
>>>>>>> 16e2a728ef190ce72f26b15673255b7c8f8c6812

  return (
    <>
      <Head>
        <title>Web Bulletin</title>
        <meta property="og:title" content="Web Bulletin"></meta>
      </Head>

<<<<<<< HEAD
      <h1>Web Bulletin Blog Using Next and Strapi</h1>

      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        this is a link to google
      </a>

      <TestComponent />
=======
      <Container width="70%">
        <h1>Web Bulletin Blog Using Next and Strapi</h1>

        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          this is a link to google
        </a>
      </Container>
>>>>>>> 16e2a728ef190ce72f26b15673255b7c8f8c6812
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
