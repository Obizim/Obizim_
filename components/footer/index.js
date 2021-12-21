import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-10 py-8 border-t border-header_bg text-gray-500">
      <div className="wrapper px-[15px] mx-auto flex flex-col sm:flex-row justify-between">
        <ul className="space-y-4">
          <li><a
          href="https://docs.google.com/document/d/10a6I0lJOP3cDdR3cy7X9NHNlZdXoE6nOC3xWAGGjds4/edit?usp=sharing"
          target="blank"
          className="inline-block">Resume</a></li>
          <li><Link href="/about">About Me</Link></li>
          <li><a href="https://obizim.hashnode.dev" target="blank">Blog</a></li>
        </ul>
        <p className="self-end"> &copy; Zimuzo Obi {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
