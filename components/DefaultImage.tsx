import React, { useState } from "react";
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
  const [source, setSource] = useState(src);
  return (
    <div {...otherProps} style={{ maxHeight: "800px" }} className={className}>
      <Image
        src={source}
        layout="fill"
        objectFit={objectFit}
        alt={alt}
        onError={() => setSource("/error_image.jpg")}
        placeholder={blurPreload ? "blur" : "empty"}
        blurDataURL={blurDataURL(width, height)}
        priority
      />
    </div>
  );
};

export default DefaultImage;
