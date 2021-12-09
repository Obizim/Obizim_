import Image from "next/image";
import Card from "../components/card";
import useSWR from "swr";
import Link from "next/link";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: works } = useSWR("/api/works", fetcher);

  return (
    <div>
      <section className="space-y-9">
        <h1 className="text-2xl uppercase text-gray-500">
          Hello, I'm Zimuzo Obi
        </h1>
        <p className="text-4xl md:text-6xl xl:text-7xl leading-none w-full max-w-4xl tracking-tighter">
          frontend Developer from Nigeria, creating great & accesible user
          interfaces with sweet experiences.
        </p>
        <Link href="/about">
          <a className="inline-block text-lg border-b border-white py-1 pr-2">Know more about me</a>
        </Link>
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
          my <a
            href="https://docs.google.com/document/d/10a6I0lJOP3cDdR3cy7X9NHNlZdXoE6nOC3xWAGGjds4/edit?usp=sharing"
            target="blank"
            className="border-b border-white -py-2 inline-block cursor-pointer capitalize"
          > Résumé </a> or connect with me online
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

          <div className="flex space-x-6">
            <a
              href="https://twitter.com/Obizim_"
              target="blank"
              className="text-lg flex items-center space-x-2"
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
              className="text-lg flex items-center space-x-2"
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
              className="text-lg flex items-center space-x-2"
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
