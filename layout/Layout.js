import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
      <FooterBottom/>
    </div>
  );
};

export default Layout;
