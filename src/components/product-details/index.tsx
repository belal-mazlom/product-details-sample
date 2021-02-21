import React, { useState } from 'react';
import {
  Container,
  Description,
  Details,
  Label,
  Price,
  Title,
  AddCartBtn
} from '@components/product-details/styled';
import ImagesPreview from './images-preview';
import { ProductDetailsProps } from './types';
import Size from './size';

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState(0);

  return (
    <Container>
      <ImagesPreview title={product.title} images={product.images} aria-label="Product images" />
      <Details>
        <Title aria-label="Product title">{product.title}</Title>
        <Price aria-label="Product price">${product.price}</Price>
        <Size
          sizes={product.size}
          value={selectedSize}
          onChange={(val: number) => setSelectedSize(val)}
          aria-label="Product sizes"
        />
        <AddCartBtn aria-label="Add to cart button">add to cart</AddCartBtn>
        <Label aria-label="Product details">Product Description</Label>
        <Description aria-labelledby="Product details">{product.desc}</Description>
      </Details>
    </Container>
  );
};

export default ProductDetails;
