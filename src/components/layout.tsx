import React from 'react';
import Head from 'next/head';
import { Header, Logo } from './styled';

type LayoutProps = {
  pageTitle: string;
  children: any;
};

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header>
        <Logo>Koio</Logo>
      </Header>
      <main>
        {props.children}
      </main>
    </div>
  );
}
