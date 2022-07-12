import React from "react";
import Navbar from "./Navbar";

type Props = {
  children?: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="bg-tertiary">{children}</main>
    </>
  );
};

export default Layout;
