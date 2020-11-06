import Head from 'next/head';
import { withRouter } from 'next/router';
import { serials } from '../../data/serials';
import { Layout } from '../../components';

function Serial({ router }) {
  const serial = serials.find(serial => serial.link === router.query.serial);

  console.log(serial);

  return (
    <>
      <Head>
        <title>{serial.title} | Serialkin</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Exo+2:400,700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </Head>
      <Layout>
        <h1>SERIAL</h1>
      </Layout>
    </>
  );
}

export default withRouter(Serial);
