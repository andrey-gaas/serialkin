import Head from 'next/head';
import { Layout } from '../../../components';
import { Serial as SerialView } from '../../../views';
import { apiUrl } from '../../../config';

function Serial({ serial, seasons }) {

  return (
    <>
      <Head>
        <title>{serial.title} | Serialkin</title>
        <meta name="description" content={serial.description} />
        <meta name="keywords" content={serial.ketwords} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Exo+2:400,700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <SerialView serial={serial} seasons={seasons} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ req, query }) {
  const seasonsResult = await fetch(`${apiUrl}/api/seasons/${query.serial}`);
  const seasonsData = await seasonsResult.json();

  const serialResult = await fetch(`${apiUrl}/api/serials/${query.serial}`);
  const serialData = await serialResult.json();

  let seasons = [];
  let serial = {};

  if (seasonsData.success) {
    seasons = seasonsData.data;
  }

  if (serialData.success) {
    serial = serialData.data;
  }

  return {
    props: {
      serial,
      seasons,
    },
  };
};

export default Serial;
