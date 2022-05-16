import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-10 py-8 text-gray-300">
      <div className="wrapper px-[15px] border-t border-header_bg pt-8 pb-4 mx-auto flex flex-row justify-between">
        <ul className="space-y-4">
          <li><a
          href="https://docs.google.com/document/d/10a6I0lJOP3cDdR3cy7X9NHNlZdXoE6nOC3xWAGGjds4/edit?usp=sharing"
          target="blank" aria-label="My resume"
          className="inline-block">Resume</a></li>
          <li><Link href="/about">About</Link></li>
          <li><a href="https://obizim.hashnode.dev" aria-label="my blog on hashnode" target="blank">Blog</a></li>
        </ul>
        <p className="self-end"> &copy; Zimuzo Obi {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
