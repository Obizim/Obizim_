const Footer = () => {
  return (
    <footer className="mt-10 py-8 border-t border-header_bg text-right text-gray-500 text-lg">
      <p className="wrapper px-[15px] mx-auto">
        Copyright &copy; Zimuzo Obi {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
