import Head from "next/head";
import Footer from "../components/Footer";
import FooterBottom from "../components/FooterBottom";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;700&family=Sora:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <script
            type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          ></script>
        </Head>
      <Navbar />
      {children}
      <Footer/>
      <FooterBottom/>
    </div>
  );
};

export default Layout;
