import React, { useState } from "react";
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
  const [focused, setFocused] = useState(false);
  return (
    <div
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{ maxWidth: "340px" }}
      className={`transition-all px-3 py-1 flex justify-between items-center
       rounded-full border-2 border-primary gap-2 ${className}
       ${focused ? "w-full " : "w-28 "}
       `}
    >
      <input className="outline-none bg-transparent w-full" {...otherProps} />
      {search && <BiSearch size={23} />}
    </div>
  );
};

export default TextField;
