import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {
  children: JSX.Element[];
};

const CustomCarousel = ({ children, ...otherProps }: Props) => {
  const responsive = {
    tablet: {
      breakpoint: { max: 100000, min: 600 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel
      ssr
      partialVisible={false}
      arrows={false}
      autoPlay={false}
      infinite={false}
      shouldResetAutoplay={false}
      showDots={false}
      responsive={responsive}
      {...otherProps}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
