import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isDesktop, isMobile, isTablet } from "react-device-detect";

type Props = {
  children: JSX.Element[];
};

const CustomCarousel = ({ children, ...otherProps }: Props) => {
  const responsive = {
    xl: {
      breakpoint: { max: 3000, min: 1280 },
      items: 7,
    },
    lg: {
      breakpoint: { max: 1280, min: 1024 },
      items: 5,
    },
    md: {
      breakpoint: { max: 1024, min: 640 },
      items: 4,
    },
    sm: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel
      className="container mx-auto"
      ssr
      partialVisible={false}
      arrows={isMobile || isTablet ? false : true}
      autoPlay={false}
      infinite={false}
      shouldResetAutoplay={false}
      showDots={false}
      responsive={responsive}
      slidesToSlide={isDesktop ? 2 : 1}
      {...otherProps}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
