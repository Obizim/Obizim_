import Image from "next/image";
import Head from "next/head";
import Contact from "../components/contact";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Head>
        <title>Zimuzo Obi - About me</title>
      </Head>

      <div className="fixed top-6 left-2 lg:left-6 z-50">
        <Link href="/"> 
        <a
          className="clear block w-6 text-white"
        >
          <svg viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </a></Link>
      </div>

      <section className="space-y-8 mt-12">
        <p className="text-4xl tracking-tighter w-full max-w-4xl">
          Hey - I'm Zimuzo Obi
        </p>
        <div className="text-gray-500 w-full lg:w-9/12 space-y-4">
          <p>
            I'm a frontend developer, from Nigeria building applications
            focusing on creating great user interfaces and good user experiences
            that are equally accesible. I strongly believe in keeping things
            simple and minimal yet so functional.
          </p>

          <p>
            Tech aside, I love watching movies / tv series or reading books
            (fictions mostly)
          </p>
        </div>
        <a
          href="https://docs.google.com/document/d/10a6I0lJOP3cDdR3cy7X9NHNlZdXoE6nOC3xWAGGjds4/edit?usp=sharing"
          target="blank"
          className="inline-block">
          Check out my Resume
        </a>
      </section>

      <section className="sm:mt-32 mt-24">
        <div className="relative space-y-6">
          <p className="text-2xl text-gray-300 w-max uppercase tracking-widest">
            Skills
          </p>
          <Image
            src="/images/underline.svg"
            width="500px"
            height="40px"
            alt="A text underline svg"
            className="absolute bottom-0 pointer-events-none select-none"
          />
          <p className="sm:w-1/2">
            Over my journey on this path, I have learnt and acquired some
            technical skills to work with.
          </p>
          <div className="mt-10">
            <div className="list-disc list-inside flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-20">
              <ul className="list-disc list-inside space-y-4">
                <li>HTML / CSS (Sass)</li>
                <li>Bootstrap / Tailwind Css</li>
              </ul>
              <ul className="list-disc list-inside space-y-4">
                <li>JavaScript</li>
                <li>React.js / Next.js</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default About;
