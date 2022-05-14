import "tailwindcss/tailwind.css";
import Layouts from "../components/layouts";
import "../styles/globals.css";
import Head from "next/head";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layouts>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="Zimuzo Obi"></meta>
        <meta name="description" content="Frontend Developer."></meta>
        <meta property="og:url" content="https://catcave.vercel.app/" />
        <meta property="og:image" content="https://catcave.vercel.app/images/opengraph.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zimuzo Obi - Developer" />
        <meta name="twitter:site" content="@zimway_"></meta>
        <meta property="og:description" content="Front-end Developer."/>
        <meta property="twitter:title" content="Zimuzo Obi - Developer"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://catcave.vercel.app/"></meta>
        <meta property="twitter:description" content="Front-end Developer."></meta>
        <meta property="twitter:image" content="https://catcave.vercel.app/images/opengraph.png"></meta>
        <title>Zimuzo Obi - Developer</title>
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
