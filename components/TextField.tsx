import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

type Props = {
  className?: string;
  placeholder: string;
  value: string;
  search?: boolean;
  muted?: boolean;
  variant?: "muted" | "default" | "searchBar";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [x: string]: any;
};

const styles = {
  muted: "border border-muted rounded-md h-10",
  default: "border-2 border-primary rounded-md h-10",
  searchBar: "border-2 border-primary  rounded-full ",
};

const TextField = ({
  className,
  search,
  variant = "default",
  ...otherProps
}: Props) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`transition-all px-3 py-1 flex justify-between items-center 
       ${styles[variant]}
   ${className}
       ${!focused && search ? "w-28" : "w-full"}
       `}
    >
      <input className="outline-none bg-transparent w-full" {...otherProps} />
      {search && <BiSearch size={23} />}
    </div>
  );
};

export default TextField;
