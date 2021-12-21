import Image from "next/image";
import Card from "../components/card";
import useSWR from "swr";
import Link from "next/link";
import Contact from "../components/contact";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: works } = useSWR("/api/works", fetcher);

  return (
    <div>
      <img
        src="/images/zim.jpg"
        alt="My face"
        className="w-24 h-24 rounded-full my-5 border-2 border-gray-500"
      />
      <section className="space-y-4">
        <h1 className="text-2xl text-gray-500 mt-8">Hey - I'm Zimuzo Obi</h1>
        <p className="text-4xl leading-none w-full max-w-2xl tracking-tighter">
          frontend Developer from Nigeria, creating great & accesible user
          interfaces with sweet experiences.
        </p>
        <p className="text-lg text-gray-500"> I try to write sometimes, so check out <a
            href="https://obizim.hashnode.dev"
            target="blank"
            className="inline-block text-white"
          > my blog </a> or <Link href="/about">
            <a className="inline-block text-white"> know more about me</a>
          </Link>
        </p>
      </section>

      <section className="sm:mt-32 mt-24">
        <div className="relative space-y-6">
          <p className="text-2xl text-gray-500 w-max uppercase">See my works</p>
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

      <Contact />
    </div>
  );
}
