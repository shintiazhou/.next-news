import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { INews } from "./../models/INews";

type Props = {
  headingNews: INews;
};

const HeadingNews = ({ headingNews }: Props) => {
  return (
    <section className="md:relative border-b-4 border-primary py-10 md:pb-60">
      <div style={{ maxHeight: "800px" }} className="flex flex-col w-full p-4 ">
        <Image
          src={headingNews.image}
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
      bg-tertiary md:w-4/5 mx-auto inset-x-0 px-4 md:px-10 md:py-8"
      >
        <p>
          {headingNews.author && headingNews.author + " - "}
          {format(new Date(headingNews.published_at), "MMMM dd ,yyyy")}
        </p>
        <h1 className="text-lg md:text-3xl my-4">{headingNews.title}</h1>
        <p>{headingNews.description}</p>
        <button className="mt-4" onClick={() => window.open(headingNews.url)}>
          Read More
        </button>
      </div>
    </section>
  );
};

export default HeadingNews;
