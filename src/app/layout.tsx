import { ReactNode } from "react";
import Head from "next/head";
import "../styles/globals.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title></title>
        <meta name="description"  />
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
      </Head>
      {children}
    </>
  );
};

export default Layout;