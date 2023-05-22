import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-10 py-8 text-gray-300">
      <div className="px-[15px] border-t border-header_bg pt-8 pb-4 mx-auto flex flex-row justify-between">
        <ul className="space-y-4">
          <li><a
          href="https://docs.google.com/document/d/1xqCc9B-x9uIXOfpNHci8aSyVNYy7N4v2s3nrzKKlUu8/edit?usp=sharing"
          target="blank" aria-label="My resume"
          className="inline-block">Resume</a></li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
        <p className="self-end"> &copy; Zimuzo Obi {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
