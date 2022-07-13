import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { INews } from "./../models/INews";
import Button from "./Button";

type Props = {
  headingNews: INews;
};

const HeadingNews = ({ headingNews }: Props) => {
  const content = headingNews.content
    ? headingNews.content.split("[")[0]
    : headingNews.description;
  console.log;

  return (
    <section
      className="
      m-4 p-4  md:pb-60 
      bg-white sm:bg-transparent 
      shadow-lg sm:shadow-none rounded-xl 
      border-primary  
      md:relative md:border-b-4 "
    >
      <div
        style={{ maxHeight: "800px" }}
        className="flex flex-col w-full h-56 md:h-full md:p-4"
      >
        <Image
          loader={() => headingNews.urlToImage}
          src={headingNews.urlToImage}
          layout="responsive"
          objectFit="cover"
          height={500}
          width={500}
          alt="hero"
          priority
        />
      </div>
      <div
        className="
        bg-white sm:bg-tertiary 
        md:absolute mx-auto inset-x-0 md:px-10 md:py-8 bottom-20 
        md:shadow-md md:w-4/5  mt-6"
      >
        <p>
          {headingNews.author && headingNews.author + " - "}
          {format(new Date(headingNews.publishedAt), "MMMM dd ,yyyy")}
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
