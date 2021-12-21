import Image from "next/image";

const Contact = () => {
  return (
    <div className="sm:mt-32 mt-24 relative space-y-6">
      <p className="text-2xl text-gray-500 w-max uppercase">Get in touch</p>
      <Image
        src="/images/underline.svg"
        width="500px"
        height="40px"
        alt="A text underline svg"
        className="absolute bottom-0 pointer-events-none select-none"
      />
      <p className="sm:w-1/2">Want to connect with me or collaborate on projects together? Reach out
          or connect with me online.
      </p>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-5 sm:space-y-0 py-10">
        <a
          href="mailto:obizimuzo@gmail.com"
          className="text-lg flex items-center space-x-2"
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
