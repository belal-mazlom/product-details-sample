import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import ProductDetails from '@components/product-details';
import Layout from '@components/layout';
import { Product } from '@components/product-details/types';

type IndexProps = {
  data: {
    id: number;
  };
};

export default function Index({ data }: IndexProps) {
  const [product, setProduct] = useState<Product | null>();

  useEffect(() => {
    async function loadProduct(id: number) {
      const response = await fetch(`/api/product/${id}`);
      const data = await response.json();
      console.log('re', data);
      setProduct(data);
    }

    loadProduct(data.id);
  }, []);

  if (!product) {
    return (
      <Layout pageTitle="Koio | Product details">
        <h1>Loading</h1>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={`Koio | Product details | ${product.title}`}>
      <ProductDetails product={product} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { id = 1 } = context.query;
  return { props: { data: { id } } };
};
