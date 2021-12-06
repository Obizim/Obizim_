import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Developer - Obi Zimuzo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="space-y-3">
        <p className="text-2xl uppercase text-gray-500">
          Hello, I'm Zimuzo Obi
        </p>
        <p className="text-4xl md:text-6xl xl:text-7xl leading-none w-full max-w-4xl tracking-tighter">
          frontend Developer, creating great & accesible user interfaces with
          sweet experiences.
        </p>
      </section>

      <section className="mt-32">
        <div className="relative space-y-6">
          <p className="text-2xl text-gray-300 w-max uppercase">See my works</p>
          <Image src="/images/underline.svg" width="500px" height="40px" alt="A text underline svg" className="absolute bottom-0 pointer-events-none select-none" />
          <p className="text-lg">I work on projects to practice stuffs I learn and here are some of the featured projects</p>
        </div>

        <div className="my-10">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}
