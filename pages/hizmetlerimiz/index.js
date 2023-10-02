import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeaderImage from "../../public/assets/header_image_service.jpg";
import Layout from "../../layout/Layout";
import styles from "../../styles/ServicesPage.module.css";
import ServiceCard from "../../components/ServiceCard";
import { ServicePageItems } from "../../data/data";
import Logo from "../../public/assets/blogLogo.png";
import { Helmet } from "react-helmet";

const ServicesPages = () => {
  const [logoSlideIn, setLogoSlideIn] = useState(false);
  useEffect(() => {
    // Sayfa yüklendiğinde logo'yu kaydır
    setTimeout(() => {
      setLogoSlideIn(true);
    }, 300); // Örnek olarak 1000 milisaniye (1 saniye) sonra kaydırma işlemi başlayacak
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Hizmetlerimiz</title>
        <meta name="description" content="Hizmetlerimiz"></meta>
      </Helmet>
      <div className={styles.services}>
        <div
          className={`${styles.logo} ${logoSlideIn ? styles["slide-in"] : ""}`}
        >
          <Image alt="İğdeci Aytekin" src={Logo} />
        </div>
        <Image
          alt="İğdeci Aytekin"
          className={styles.headerImg}
          src={HeaderImage}
        />
        <article style={{ margin: 0 }}>
          <div className={styles.box}>
            <div></div>
          </div>
          <h1>Hizmetlerimiz</h1>
        </article>
        <article className={styles.cards}>
          {ServicePageItems.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              icon={item.icon}
              content={item.content}
            ></ServiceCard>
          ))}
        </article>
      </div>
    </Layout>
  );
};

export default ServicesPages;
