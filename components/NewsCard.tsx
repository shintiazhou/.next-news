import React from "react";
import { INews } from "../models/INews";
import Image from "next/image";
import { formatDistance } from "date-fns";

type Props = {
  newsData: INews;
};

const NewsCard = ({ newsData }: Props) => {
  const author = newsData.author && !newsData.author.includes("http") && (
    <span style={{ maxWidth: "120px" }} className="truncate ... ">
      {newsData.author}
    </span>
  );
  return (
    <article
      onClick={() => window.open(newsData.url)}
      className="bg-white p-2 flex rounded-xl my-4 shadow-md gap-4 overflow-hidden"
    >
      <div className="w-20 h-20 flex flex-col">
        <Image
          src={newsData.urlToImage}
          alt={newsData.title}
          loader={() => newsData.urlToImage}
          layout="fixed"
          objectFit="cover"
          height={80}
          width={80}
        />
      </div>
      <div className="flex flex-col w-3/4 px-1 text-sm gap-2">
        <p className="opacity-50 text-xs flex justify-between">
          {author}
          <span>
            {formatDistance(new Date(newsData.publishedAt), new Date(), {
              addSuffix: true,
            }).replace("about", "")}
          </span>
        </p>
        <strong className="line-clamp-2">{newsData.title}</strong>
      </div>
    </article>
  );
};

export default NewsCard;
