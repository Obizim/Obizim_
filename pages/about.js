import Head from "next/head";
import Contact from "../components/contact";
import Link from "next/link";
import { Underline } from "../components/icons";

const About = () => {
  return (
    <div>
      <Head>
        <title>Zimuzo Obi - About me</title>
      </Head>

      <section className="space-y-8 mt-12 relative">

      <div className="">
        <Link href="/"> 
        <a className="clear block text-gray-500 underline">
          Back to home
        </a></Link>
      </div>
        <div className="w-full lg:w-9/12 space-y-4">
          <p>
          I'm a front-end developer, from Nigeria building applications focusing on creating great user interfaces and good user experiences that are equally accessible. Web animations fascinate me a lot these days too. I go to the awwwards site or Gresnsock's showcase to see what people are building.
          </p>
          <p>My technical skills include Html and CSS, Javascript, react, redux, nextjs, styled-components, tailwindcss, bootstrap and other js libraries</p>
          <p>
            Tech aside, I love watching movies / tv series , reading books
            (fictions mostly).
          </p>
          <p>I'm currently open to freelance or full time positions, my inbox is always open.</p>
        </div>
        <a href="https://docs.google.com/document/d/10a6I0lJOP3cDdR3cy7X9NHNlZdXoE6nOC3xWAGGjds4/edit?usp=sharing"
          target="blank"
          className="inline-block border-b">
          You can check out my resume here ➡
        </a>
      </section>
      <Contact />
    </div>
  );
};

export default About;
