import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import useSWR from "swr";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: works, error } = useSWR("/api/works", fetcher);

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="frontend Developer, creating great & accesible user interfaces with
          sweet experiences."
        ></meta>
        {/* <meta property="og:url" content="https://ahrefs.com/blog/open-graph-meta-tags/" /> */}
        {/* <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2020/01/fb-open-graph-1.jpg" /> */}
        {/* <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" /> */}
        {/* <meta property="og:type" content="website" /> */}
        {/* <meta property="og:description" content="Learn about 13 features that set Ahrefs apart from the competition." /> */}
        <title>Zimuzo Obi - frontend developer</title>
      </Head>

      <section className="space-y-3">
        <h1 className="text-2xl uppercase text-gray-500">
          Hello, I'm Zimuzo Obi
        </h1>
        <p className="text-4xl md:text-6xl xl:text-7xl leading-none w-full max-w-4xl tracking-tighter">
          frontend Developer from Nigeria, creating great & accesible user
          interfaces with sweet experiences.
        </p>
      </section>

      <section className="sm:mt-32 mt-24">
        <div className="relative space-y-6">
          <p className="text-2xl text-gray-300 w-max uppercase">See my works</p>
          <Image
            src="/images/underline.svg"
            width="500px"
            height="40px"
            alt="A text underline svg"
            className="absolute bottom-0 pointer-events-none select-none"
          />
          <p className="text-lg sm:w-1/2">
            I work on projects to practice stuffs I learn and here are some of
            the featured projects
          </p>
        </div>

        <div className="my-10">
          {works &&
            works.data.map((work) => <Card key={work.id} data={work} />)}
        </div>
      </section>

      <div className="sm:mt-32 mt-24 relative space-y-6">
        <p className="text-2xl text-gray-300 w-max uppercase">Get in touch</p>
        <Image
          src="/images/underline.svg"
          width="500px"
          height="40px"
          alt="A text underline svg"
          className="absolute bottom-0 pointer-events-none select-none"
        />
        <p className="text-lg sm:w-1/2">
          Want to connect with me or collaborate on projects together? Checkout
          my{" "}
          <a
            href="https://docs.google.com/document/d/10a6I0lJOP3cDdR3cy7X9NHNlZdXoE6nOC3xWAGGjds4"
            target="blank"
            className="bg-white text-black py-1 px-2 inline-block cursor-pointer capitalize"
          >
            {" "}
            Résumé
          </a>{" "}
          or connect with me online
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-5 sm:space-y-0 py-10">
          <a
            href="mailto:obizimuzo@gmail.com"
            className="text-2xl flex items-center space-x-2"
          >
            <Image
              src="/images/paper-plane.svg"
              alt="Paper Plane icon"
              width="20px"
              height="20px"
            />
            <p>obizimuzo@gmail.com</p>
          </a>

          <div className="flex space-x-4">
            <a
              href="https://twitter.com/Obizim_"
              target="blank"
              className="text-xl flex items-center space-x-2"
            >
              <Image
                src="/images/twitter.svg"
                alt="twitter icon"
                width="20px"
                height="20px"
              />
              <p>Twitter</p>
            </a>
            <a
              href="https://github.com/Obizim"
              target="blank"
              className="text-xl flex items-center space-x-2"
            >
              <Image
                src="/images/github.svg"
                alt="github icon"
                width="20px"
                height="20px"
              />
              <p>Github</p>
            </a>
            <a
              href="https://www.linkedin.com/in/obizim/"
              target="blank"
              className="text-xl flex items-center space-x-2"
            >
              <Image
                src="/images/linkedin.svg"
                alt="linkedin icon"
                width="20px"
                height="20px"
              />
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
