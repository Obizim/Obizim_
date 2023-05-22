import Footer from "../footer";

const Layouts = ({ children }) => {
  return (
    <div className="pt-20 max-w-screen-md mx-auto px-5">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layouts;
