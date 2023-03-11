import "@/styles/globals.css";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>D-LHS || Logistics and Haulage</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
