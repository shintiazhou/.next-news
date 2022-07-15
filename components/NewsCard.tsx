import React from "react";
import { INews } from "../models/INews";
import Image from "next/image";
import { formatDistance } from "date-fns";
import DefaultImage from "./DefaultImage";

type Props = {
  newsData: INews;
};

const NewsCard = ({ newsData }: Props) => {
  const author =
    newsData.author && !newsData.author.includes("http")
      ? newsData.author
      : newsData.source.name;

  const content = newsData.content
    ? newsData.content.split("[")[0]
    : newsData.description;

  return (
    <article
      onClick={() => window.open(newsData.url)}
      className="
      bg-white sm:bg-transparent shadow-md sm:shadow-none sm:mb-4 p-2 
      flex sm:flex-col
       rounded-xl  gap-4 overflow-hidden 
       cursor-pointer
       "
    >
      <DefaultImage
        blurPreload={false}
        src={newsData.urlToImage}
        alt={newsData.title}
        objectFit="cover"
        layout="fill"
        className="relative w-20 sm:w-full 
      h-20 sm:h-40 md:h-52
      flex flex-col"
      />
      <div className="flex flex-col w-3/4 sm:w-full px-1 text-sm gap-2">
        <p className="opacity-50 text-xs sm:text-sm flex justify-between">
          <span style={{ width: "60%" }} className="truncate ... ">
            {author}
          </span>

          <span>
            {formatDistance(new Date(newsData.publishedAt), new Date(), {
              addSuffix: true,
            }).replace("about", "")}
          </span>
        </p>
        <strong className="line-clamp-2 sm:text-lg sm:font-extrabold">
          {newsData.title}
        </strong>

        <p className="hidden sm:block">{content}</p>
      </div>
    </article>
  );
};

export default NewsCard;
