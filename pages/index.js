import styled from 'styled-components';

import IntroSection from '../components/IntroSection';
import ImageSection from '../components/ImageSection';
import Footer from '../components/Footer';
import Head from 'next/head';

export default () => (
  <>
    <Head>
      <title>Frontend Mentor | Ping coming soon page</title>
      <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"/>
      
    </Head>
    <main>
      <IntroSection></IntroSection>
      <ImageSection></ImageSection>
      <Footer></Footer>
    </main>
  </>
);



