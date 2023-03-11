import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content="https://d-lhs.com/summary.png" />
        <meta
          name="og:image:alt"
          content="Wants to deliver package and needs a logistics and haulage services?"
        />
        <meta property="og:site_name" content="D-LHS" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://d-lhs.com/" />
        <meta
          property="og:title"
          content="Wants to deliver package and needs a logistics and haulage services?"
        />
        <meta
          property="og:description"
          content="Grow your business,  we will take care of your Logistics and Haulage"
        />
        <meta
          name="title"
          content="Wants to deliver package and needs a logistics and haulage services?"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
