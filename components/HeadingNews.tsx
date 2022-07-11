import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { INews } from "./../models/INews";
import Button from "./Button";

type Props = {
  headingNews: INews;
};

const HeadingNews = ({ headingNews }: Props) => {
  const content = headingNews.content.split("[")[0];
  return (
    <section className="md:relative border-b-4 border-primary py-10 md:pb-60">
      <div
        style={{ maxHeight: "800px" }}
        className="flex flex-col w-full sm:p-10 p-4"
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
        className="md:absolute bottom-20 md:shadow-md 
        sm:px-10
      bg-tertiary md:w-4/5 mx-auto inset-x-0 px-4 md:px-10 md:py-8"
      >
        <p>
          {headingNews.author && headingNews.author + " - "}
          {format(new Date(headingNews.publishedAt), "MMMM dd ,yyyy")}
        </p>
        <h1 className="text-lg md:text-3xl my-4">{headingNews.title}</h1>
        <p>{content}</p>
        <Button className="mt-4" onClick={() => window.open(headingNews.url)}>
          Read More
        </Button>
      </div>
    </section>
  );
};

export default HeadingNews;
