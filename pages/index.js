import Head from 'next/head';
import { serials } from '../data/serials';
import { Layout } from '../components';
import { Home as HomeComponent } from '../views';

function Home() {
  return (
    <>
      <Head>
        <title>Serialkin | Сериалы онлайн смотреть</title>
        <meta name="description" content="Serialkin. Лучшие сериалы в высоком качестве!" />
        <meta name="keywords" content="Serialkin, сериалкин, сериалы, сералы смотреть, сериалы онлайн, в высоком качестве, бесплатно, мультфильмы, смотреть" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Exo+2:400,700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <HomeComponent serials={serials} />
      </Layout>
    </>
  );
}

export default Home;
