import Menu from "./Menu";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <span className="p-1"/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
