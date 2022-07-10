import React from "react";

type Props = {
  children?: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default Layout;
