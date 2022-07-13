import React from "react";

type Props = {
  children: JSX.Element | string;
  variant?: string;
  className?: string;
  [x: string]: any;
};

interface Styles {
  outlined: string;
  contained: string;
}

const styles: Styles = {
  outlined: "bg-tertiary border-primary border-2 font-bold py-1.5 px-3",
  contained: "bg-primary text-tertiary py-2 px-6 ",
};

const Button = ({
  children,
  className,
  variant = "contained",
  ...otherProps
}: Props) => {
  return (
    <button
      {...otherProps}
      className={`transition-all hover:shadow-md cursor-pointer ${
        styles[variant as keyof Styles]
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
