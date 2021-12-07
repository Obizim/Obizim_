import Image from "next/image";

const About = () => {
  return (
    <div>
      <section className="space-y-10">
        <p className="text-4xl md:text-6xl xl:text-7xl leading-normal w-full max-w-4xl">
          Hello! I'm Zimuzo Obi.
        </p>
        <p className="text-xl text-gray-500 w-full lg:w-9/12">
          I'm a frontend developer,from Nigeria building applications focusing
          on creating great user interfaces and good user experiences that are
          equally accesible. I strongly believe in keeping things simple and
          minimal yet so functional.
        </p>
        <a
          href="https://docs.google.com/document/d/10a6I0lJOP3cDdR3cy7X9NHNlZdXoE6nOC3xWAGGjds4"
          target="blank"
          className="inline-block text-lg border-b border-header_bg py-2 pr-6"
        >
          Check out my Résumé
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
          <p className="text-lg sm:w-1/2">
            Over my journey on this path, I have learnt and acquired some
            technical skills to work with.
          </p>
          <div className="mt-10 text-lg">
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

      <div className="sm:mt-32 mt-24 relative space-y-6">
        <p className="text-2xl text-gray-300 w-max uppercase tracking-widest">
          Get in touch
        </p>
        <Image
          src="/images/underline.svg"
          width="500px"
          height="40px"
          alt="A text underline svg"
          className="absolute bottom-0 pointer-events-none select-none"
        />
        <p className="text-lg sm:w-1/2">
          Want to connect with me or collaborate on projects together? Reach out 
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
};

export default About;
