import "tailwindcss/tailwind.css";
import Layouts from "../components/layouts";
import "../styles/globals.css";
import Head from "next/head";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layouts>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Frontend Developer, creating great & accesible user interfaces with
          sweet experiences."
        ></meta>
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zimuzo Obi - frontend Developer" />
        <meta
          property="og:description"
          content="Frontend Developer, creating great & accesible user interfaces with
          sweet experiences."
        />
        <meta
          property="twitter:title"
          content="Zimuzo Obi - frontend developer"
        ></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content=""></meta>
        <meta
          property="twitter:description"
          content="Frontend Developer, creating great & accesible user interfaces with
          sweet experiences."
        ></meta>
        <meta property="twitter:image" content=""></meta>
        <title>Zimuzo Obi - frontend developer</title>
      </Head>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layouts>
  );
}

export default MyApp;
