import React from "react";
import Image from "next/image";
import { formatDistance } from "date-fns";
import { INews } from "./../models/INews";
import Button from "./Button";
import blurDataURL from "../utils/blurDataURL";
import DefaultImage from "./DefaultImage";

type Props = {
  headingNews: INews;
};

const HeadingNews = ({ headingNews }: Props) => {
  const content = headingNews.content
    ? headingNews.content.split("[")[0]
    : headingNews.description;

  return (
    <section
      className="
      p-4 sm:px-2 md:pb-60 
      bg-white sm:bg-transparent 
      shadow-md sm:shadow-none rounded-xl sm:rounded-none
      border-primary  
      md:relative sm:border-b-4 "
    >
      <DefaultImage
        objectFit="cover"
        style={{ maxHeight: "800px" }}
        className="flex flex-col w-full h-56 md:h-full md:p-4"
        height={500}
        width={500}
        src={headingNews.urlToImage}
        alt={headingNews.title}
      />

      <div
        className="
        bg-white sm:bg-tertiary 
        md:absolute mx-auto inset-x-0 md:px-10 md:py-8 bottom-20 
        md:shadow-md md:w-4/5  mt-6"
      >
        <p className="opacity-50">
          {headingNews.author && headingNews.author + " - "}
          {formatDistance(new Date(headingNews.publishedAt), new Date(), {
            addSuffix: true,
          })}
        </p>
        <h1 className="text-lg md:text-3xl my-2 line-clamp-2 md:line-clamp-none">
          {headingNews.title}
        </h1>
        <p className="hidden sm:block">{content}</p>
        <Button
          className="mt-4 hidden sm:block"
          onClick={() => window.open(headingNews.url)}
        >
          Read More
        </Button>
      </div>
    </section>
  );
};

export default HeadingNews;
