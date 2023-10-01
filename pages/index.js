import styles from "../styles/Home.module.css";
import Blog from "../components/Blog";
import Layout from "../layout/Layout";
import Hero from "../components/Hero";
import Detail from "../components/Detail";
import Services from "../components/Services";
import Team from "../components/Team";
import Contact from "../components/Contact";
import { Helmet } from "react-helmet";
import HeroBottom from "../components/HeroBottom";
export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Helmet>
          <title>Anasayfa</title>
          <meta name="description" content="Anasayfa descriptions"></meta>
        </Helmet>
        <Hero></Hero>
        <HeroBottom></HeroBottom>
        <Detail></Detail>
        <Services></Services>
        <Team></Team>
        <Blog></Blog>
        <Contact></Contact>
      </div>
    </Layout>
  );
}
