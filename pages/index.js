import styles from "../styles/Home.module.css";
import Blog from "../components/Blog";
import Head from "next/head";
import Layout from "../layout/Layout";
import Hero from "../components/Hero";
import Detail from "../components/Detail";
import Services from "../components/Services";
import Team from "../components/Team";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <Layout className={styles.container}>
      <Helmet>
        <title>Anasayfa</title>
        <meta name="description" content="Anasayfa descriptions"></meta>
      </Helmet>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
      <Hero></Hero>
      <Detail></Detail>
      <Services></Services>
      <Team></Team>
      <Blog></Blog>
      <Contact></Contact>
    </Layout>
  );
}
