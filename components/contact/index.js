import { Github, Linkedin, Mail, Twitter, Underline } from "../icons";

const Contact = () => {
  return (
    <div className="sm:mt-32 mt-24 relative space-y-6">
      <p className="text-2xl text-gray-300 w-max capitalize">Get in touch</p>
      <Underline styleClass="pointer-events-none select-none"/>
      <p className="leading-relaxed">I am currently available for new opportunities and open to connecting or collaborating on projects. Please feel free to reach out to me.</p>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-5 sm:space-y-0 py-10">
        <a href="mailto:obizimuzo@gmail.com"
          className="text-lg flex items-center space-x-2" aria-label="Send a mail">
          <Mail/>
          <p>obizimuzo@gmail.com</p>
        </a>

        <div className="flex space-x-6">
          <a href="https://twitter.com/zimway_"
            target="blank" aria-label="Twitter"
            className="text-lg flex items-center space-x-2">
            <Twitter />
          </a>
          <a href="https://github.com/Obizim"
            target="blank" aria-label="Github"
            className="text-lg flex items-center space-x-2">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/obizim/"
            target="blank" aria-label="Linkedin"
            className="text-lg flex items-center space-x-2">
           <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
