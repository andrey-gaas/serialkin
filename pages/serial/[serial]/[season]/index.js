import Head from 'next/head';
import { serials } from '../../../../data/serials';
import { seasons } from '../../../../data/seasons';
import { series as seriesData } from '../../../../data/series';
import { Layout } from '../../../../components';
import { Season as SeasonView } from '../../../../views';
import { apiUrl } from '../../../../config';

function Season({ serial, season, series, seria = '1', seeAlso}) {
  return (
    <>
      <Head>
        <title>{serial.title} {season.season} сезон смотреть | Serialkin</title>
        <meta name="description" content={season.description} />
        <meta name="keywords" content={season.keywords} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Exo+2:400,700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </Head>
      
      <Layout>
        <SeasonView serial={serial} series={series} season={season} seria={seria} seeAlso={seeAlso} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ req, query }) {
  const seasonResult = await fetch(`${apiUrl}/api/seasons/${query.serial}/${query.season}`);
  const seasonData = await seasonResult.json();

  const serialResult = await fetch(`${apiUrl}/api/serials/${query.serial}`);
  const serialData = await serialResult.json();

  const seriesResult = await fetch(`${apiUrl}/api/series/${query.serial}/${query.season}`);
  const seriesData = await seriesResult.json();

  const seeAlsoResult = await fetch(`${apiUrl}/api/see-also/${serialData.data.link}`);
  const seeAlsoData = await seeAlsoResult.json();

  let season = {};
  let serial = {};
  let series = [];
  let seeAlso = [];

  if (seasonData.success) {
    season = seasonData.data;
  }

  if (serialData.success) {
    serial = serialData.data;
  }

  if (seriesData.success) {
    series = seriesData.data;
  }

  if (seeAlsoData.success) {
    seeAlso = seeAlsoData.data;
  }

  return {
    props: {
      serial,
      season,
      series,
      seria: query.seria,
      seeAlso,
    },
  };
};

export default Season;
