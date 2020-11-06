import Head from 'next/head';
import { serials } from '../../data/serials';
import { Layout } from '../../components';
import { Serial as SerialView } from '../../views';

function Serial({ serial: serialProps }) {
  const serial = serials.find(serial => serial.link === serialProps);

  return (
    <>
      <Head>
        <title>{serial.title} | Serialkin</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Exo+2:400,700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <SerialView serial={serial} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ req, query }) {
  return {
    props: query,
  };
};

export default Serial;
