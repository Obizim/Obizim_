import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Head>
        <title>Zimuzo Obi - About me</title>
      </Head>

      <section className="space-y-8 relative">

      <div>
        <Link href="/"><a className="block text-gray-300 underline text-lg">Back to home</a></Link>
      </div>
        <div className="space-y-4 text-lg">
          <p>
          I'm a front-end developer, based in the UK building applications focusing on creating great user interfaces and good user experiences that are equally accessible. As a developer focused on achieving goals, I bring a dedicated approach to collaboration and resolving problems with a solutions-oriented mindset. I utilize a range of web design technologies to create tailored, customer-centric websites and designs.</p>
          <p>Some of the technologies and tools I have worked with include HTML and CSS, Node/Expressjs Javascript, Typescript, React, Nextjs, Styled-components, TailwindCSS</p>
          <p>
            Tech aside, I love watching movies/shows
          </p>
        <a href="https://docs.google.com/document/d/1xqCc9B-x9uIXOfpNHci8aSyVNYy7N4v2s3nrzKKlUu8/edit?usp=sharing"
          target="blank" aria-label="My resume"
          className="inline-block border-b">
          Check out my resume here ➡</a>
          <p>You can often find me actively engaging on <a href="https://twitter.com/zimway_" target="blank" aria-label="twitter"
          className="inline-block border-b">Twitter</a> and occasionally on <a href="https://www.linkedin.com/in/obizim/" target="blank" aria-label="linkedin"
          className="inline-block border-b">LinkedIn</a>, so feel free to connect with me on those platforms. I'm always open to meeting new people and expanding my network.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
