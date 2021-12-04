import Nav  from "../nav";

const Layouts = ({ children }) => {
  return (
    <div>
      <Nav />   
      <main className="pt-48 wrapper mx-auto px-[15px]">{children}</main>
    </div>
  );
};

export default Layouts;
