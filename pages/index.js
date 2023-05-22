import Card from "../components/card";
import useSWR from "swr";
import Link from "next/link";
import Contact from "../components/contact";
import { Underline } from "../components/icons";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: works } = useSWR("/api/works", fetcher);

  return (
    <div>
      <section className="space-y-4">
        <p className="text-4xl leading-tight w-full">
          Software frontend developer based in UK, creating great & accesible user
          interfaces.
        </p>
        <p className="text-lg text-gray-300 w-full max-w-2xl"> I'm Zimuzo Obi, a goal-oriented developer, bringing strong dedication to collaboration and a solutions-oriented approach to problem-solving. <Link href="/about">
            <a className="inline-block text-white border-b">more about me.</a>
          </Link>
        </p>
      </section>

      <section className="sm:mt-32 mt-24">
        <div className="relative space-y-6">
          <p className="text-2xl text-gray-300 w-max capitalize">Featured Projects</p>
          <Underline styleClass="pointer-events-none select-none"/>
          <p className="text-lg">Here are a few examples of intriguing projects I have created:</p>
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
