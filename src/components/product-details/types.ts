export type Image = {
  url: string;
  alt: string;
};

export type ImagesPreviewType = {
  images: Image[];
  title: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  images: Image[];
  size: number[];
  desc: string;
};

export type SizeProps = {
  sizes: number[];
  onChange: (val: number) => void;
  value: number;
};

export type ProductDetailsProps = {
  product: Product;
};
