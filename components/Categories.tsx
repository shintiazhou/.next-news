import React from "react";
import newsCategories from "./../data/newsCategories";

type Props = {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const Categories = ({ selectedCategory, setSelectedCategory }: Props) => {
  const selecetedStyle =
    "bg-primary text-tertiary rounded-full sm:rounded-none px-4 sm:border-b-4 border-primary sm:bg-transparent sm:text-primary";

  return (
    <div className="my-4 md:container mx-auto overflow-x-scroll sm:overflow-hidden scrollbar-hide flex sm:justify-center gap-8 lg:gap-10 sm:border-b-2 border-primary:opacity-80 px-4">
      {newsCategories.map((category) => (
        <p
          onClick={() => setSelectedCategory(category.toLowerCase())}
          className={`py-2 transition-all cursor-pointer sm:pb-2 ${
            category.toLowerCase() === selectedCategory && selecetedStyle
          }`}
          key={category}
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default Categories;
