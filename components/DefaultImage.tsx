import React from "react";
import Image, { StaticImageData } from "next/image";
import blurDataURL from "../utils/blurDataURL";

interface Props {
  src: string;
  alt: string;
  width: number;
  objectFit: "cover" | "contain";
  [x: string]: any;
}

const DefaultImage = ({
  src,
  alt,
  width,
  height,
  objectFit,
  ...otherProps
}: Props) => {
  return (
    <div
      {...otherProps}
      style={{ maxHeight: "800px" }}
      className="flex flex-col w-full h-56 md:h-full md:p-4"
    >
      <Image
        loader={() => src}
        src={src}
        layout="responsive"
        objectFit={objectFit}
        height={height}
        width={width}
        alt={alt}
        placeholder="blur"
        blurDataURL={blurDataURL(width, height)}
        priority
      />
    </div>
  );
};

export default DefaultImage;
