import Footer from "../footer";

const Layouts = ({ children }) => {
  return (
    <div>
      <main className="pt-20 wrapper mx-auto px-[15px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layouts;
