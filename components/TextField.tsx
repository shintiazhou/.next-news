import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {
  className?: string;
  placeholder: string;
  value: string;
  search?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
};

const TextField = ({ className, search, ...otherProps }: Props) => {
  return (
    <div
      style={{ maxWidth: "340px" }}
      className={`px-3 py-1 flex justify-between items-center rounded-lg border-2 border-primary gap-2 w-full ${className}`}
    >
      <input className="outline-none  bg-transparent w-full" {...otherProps} />
      {search && <BiSearch size={20} />}
    </div>
  );
};

export default TextField;
