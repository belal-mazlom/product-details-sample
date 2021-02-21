import Head from 'next/head';
import { Title } from '@components/styled';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>
      </main>
    </div>
  );
}
