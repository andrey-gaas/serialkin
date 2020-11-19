import Head from 'next/head';
import { serials } from '../../../../data/serials';
import { seasons } from '../../../../data/seasons';
import { series as seriesData } from '../../../../data/series';
import { Layout } from '../../../../components';
import { Season as SeasonView } from '../../../../views';

function Season({ serial: serialProps, season, seria = '1' }) {
  const serial = serials.find(serial => serial.link === serialProps);
  const series = seriesData.filter(seria => seria.serial === serial.title && seria.season === +season);
  const { description, keywords } = seasons
    .filter(item => item.serial === serial.title)
    .find(item => item.season === +season);

  return (
    <>
      <Head>
        <title>{serial.title} {season} сезон смотреть | Serialkin</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Exo+2:400,700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </Head>
      
      <Layout>
        <SeasonView serial={serial} series={series} season={season} seria={seria} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ req, query }) {
  return {
    props: query,
  };
};

export default Season;
