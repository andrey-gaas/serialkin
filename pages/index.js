import { useState } from 'react';
import Head from 'next/head';
import { Header, Container, Menu } from '../components';

function Home() {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const switchMenu = () => setOpenMenu(!isOpenMenu);

  return (
    <>
      <Head>
        <title>asdasd</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <link href="https://fonts.googleapis.com/css?family=Exo+2:400,700|Open+Sans:400,700&display=swap" rel="stylesheet" />
      </Head>
      <Header switchMenu={switchMenu} />
      <Container>
        <Menu isOpen={isOpenMenu} switchMenu={switchMenu} />
      </Container>
    </>
  );
}

export default Home;
