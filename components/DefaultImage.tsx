import React from "react";
import Image from "next/image";
import blurDataURL from "../utils/blurDataURL";
interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurPreload: boolean;
  className?: string;
  objectFit: "cover" | "contain";
  layout?: "responsive" | "fill";
  [x: string]: any;
}

const DefaultImage = ({
  src,
  alt,
  width,
  height,
  objectFit,
  blurPreload,
  className,
  ...otherProps
}: Props) => {
  return (
    <div {...otherProps} style={{ maxHeight: "800px" }} className={className}>
      <Image
        src={src}
        layout="fill"
        objectFit={objectFit}
        alt={alt}
        placeholder={blurPreload ? "blur" : "empty"}
        blurDataURL={blurDataURL(width, height)}
        priority
      />
    </div>
  );
};

export default DefaultImage;
