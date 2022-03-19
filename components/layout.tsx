import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

type Props = {
  title: string;
};

export default function Layout({
  children,
  title,
}: React.PropsWithChildren<Props>) {
  return (
    <>
      <Navbar />
      <main>
        <div>
          <h1>{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
