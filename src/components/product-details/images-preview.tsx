import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ImagesPreviewType } from './types';
import { Preview, Slide, Title } from './styled';

const ImagesPreview = (props: ImagesPreviewType) => {
  return (
    <Preview aria-label="Product images preview">
      <Title aria-label="Product title">{props.title}</Title>
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        showArrows={true}
        interval={5000}
        autoPlay={false}
        showThumbs={true}
        swipeable={true}
      >
        {props.images.map(image => (
          <Slide key={image.url}>
            <img src={image.url} alt={image.alt} aria-label={image.alt}/>
          </Slide>
        ))}
      </Carousel>
    </Preview>
  );
};

export default ImagesPreview;
