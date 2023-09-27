import React from "react";
import Image from "next/image";
import HeaderImage from "../../public/assets/header_image_service.png";
import Layout from "../../layout/Layout";
import styles from "../../styles/ServicesPage.module.css";
import ServiceCard from "../../components/ServiceCard";
import { ServicePageItems } from "../../data/data";
import Logo from "../../public/assets/blogLogo.png";

const ServicesPages = () => {
  return (
    <Layout>
      <div className={styles.services}>
      <div className={styles.logo}>
          <Image alt="İğdeci Aytekin" src={Logo} />
        </div>
        <Image
          alt="İğdeci Aytekin"
          className={styles.headerImg}
          src={HeaderImage}
          width={100}
        />
        <article style={{margin:0}}>
          <div className={styles.box}>
            <div></div>
          </div>
          <h1>
          Hizmetlerimiz
          </h1>
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
