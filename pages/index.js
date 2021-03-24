import Head from 'next/head';
import { Layout } from '../components';
import { Home as HomeComponent } from '../views';
import { apiUrl } from '../config';

function Home(props) {
  const { serials } = props;

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

export async function getServerSideProps() {
  const res = await fetch(`${apiUrl}/api/serials`);
  const data = await res.json();
  
  if (data.success) {
    return {
      props: { serials: data.data },
    };
  }

  return { props: { serials: [] } };

};

export default Home;
