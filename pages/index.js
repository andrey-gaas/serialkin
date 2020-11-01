import Head from 'next/head';
import fetch from 'node-fetch';
import { Header } from '../components';
import { Home as HomeComponent } from '../views';

function Home({ serials }) {
  return (
    <>
      <Head>
        <title>Serialkin | Сериалы онлайн смотреть</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Exo+2:400,700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <HomeComponent serials={serials} />
    </>
  );
}

export default Home;

export const getStaticProps = async ctx => {
  const res = await fetch('http://localhost:3000/api/serials');
  
  return {
    props: {
      serials: await res.json(),
    },
  };
};
