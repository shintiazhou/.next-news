import Image from "next/image";
import React from "react";
import { IProductDetail } from "./../models/IProduct";
import StarSvg from "../public/star.svg";

type Props = {
  item: IProductDetail;
};

const Card = ({ item }: Props) => {
  return (
    <div className="w-full h-full rounded-xl bg-white p-4 text-primary shadow-md flex flex-col justify-between">
      <div>
        <Image
          src={item.image250}
          alt={item.displayName}
          layout="responsive"
          width={350}
          height={350}
          objectFit="contain"
        />
        <small className="block mt-4 opacity-70 truncate ...">
          {" "}
          {item.brandName}
        </small>
        <strong className="line-clamp-2 text-sm">{item.displayName}</strong>
      </div>
      <p className=" fill-yellow-400 flex gap-2 mt-2">
        <StarSvg />
        <span className="block mt-1">
          {parseFloat(item.rating).toFixed(2)} ({item.reviews} review)
        </span>
      </p>
    </div>
  );
};

export default Card;
