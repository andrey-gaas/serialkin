import Head from 'next/head';
import { Header, Container, Card } from '../components';

function Home() {
  return (
    <>
      <Head>
        <title>asdasd</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Exo+2:400,700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </Head>
      <Header />

      <Container row={true}>
        <Card
          image="/images/posters/the-boys.jpg"
          title="Пацаны"
          seasons={2}
          year={2018}
          status="Идет"
        />
        <Card
          image="/images/posters/peaky_blinders.jpg"
          title="Острые козырьки"
          seasons={7}
          year={2013}
          status="Идет"
        />
        <Card
          image="/images/posters/vikings.jpg"
          title="Викинги"
          seasons={6}
          year={2013}
          status="Идет"
        />
      </Container>
    </>
  );
}

export default Home;
