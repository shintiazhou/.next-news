import React from "react";
import newsCategories from "./../data/newsCategories";
import { useRouter } from "next/router";
import Link from "next/link";

const Categories = () => {
  const router = useRouter();
  const queryParam = router.query.category;
  const selecetedStyle =
    "bg-primary text-tertiary rounded-full sm:rounded-none px-4 sm:border-b-4 border-primary sm:bg-transparent sm:text-primary";

  return (
    <div className="md:container mx-auto overflow-x-scroll sm:overflow-hidden scrollbar-hide flex sm:justify-center gap-8 lg:gap-10 sm:border-b-2 border-primary:opacity-80 px-4 pt-24 ">
      {newsCategories.map((category) => (
        <Link key={category} href={`/${category}`}>
          <p
            className={`py-2 md:text-lg transition-all cursor-pointer sm:pb-2 capitalize ${
              category.toLowerCase() === queryParam && selecetedStyle
            }`}
          >
            {category}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
