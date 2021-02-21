import Head from 'next/head';
import { Container, Details, Preview, Title } from '@components/home/styled';

type HomeProps = {

};

export default function Home(props: HomeProps) {
  return (
    <div>
      <Head>
        <title>Product details</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Container>
          <Preview>
            images
          </Preview>
          <Details>
            <Title>CAPRI TRIPLE WHITE</Title>
          </Details>
        </Container>
      </main>
    </div>
  );
}
