import Header from "./Header";
import Footer from "./Footer";

import Head from "next/head";

const Layout = ({ children, title, description, ogImage, url }) => {
  // website Url
  const pageUrl = "initiative.stiim.co.kr";
  // when you share this page on facebook you'll see this image
  const ogImg = "/STI_symbol180.png";
  // google site vertification
  const GOOGLE_SITE_VERTIFICATION = process.env.GOOGLE_SITE_VERTIFICATION;
  return (
    <>
      <Head>
        <title>{title ? title : "ST.initiative"}</title>
        <meta
          name="description"
          key="description"
          content={
            description
              ? description
              : ""
          }
        />
        <meta
          property="og:title"
          content={title ? title : "ST.initiative"}
          key="og:title"
        />
        <meta property="og:url" content={url ? url : pageUrl} key="og:url" />
        <meta
          property="og:image"
          content={ogImage ? ogImage : ogImg}
          key="og:image"
        />
        <meta
          property="og:description"
          content={
            description
              ? description
              : ""
          }
          key="og:description"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Header />
      <main style={{ backgroundColor: "#f9f9f9" }}>{children}</main>
      <Footer />
      <style jsx global>
        {`
          html,
          body {
            background: #f9f9f9;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 150vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Layout;