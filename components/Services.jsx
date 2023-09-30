import React from "react";
import styles from "../styles/Services.module.css";
import { allServices } from "../data/data";
import Image from "next/image";
import Link from "next/link";
const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div></div>
      </div>
      <h1>Hizmetlerimiz</h1>
      <div className={styles.services}>
        {allServices.map((item, index) => (
          <div key={index}>
            <Image
              width={100}
              height={100}
              src={item.image}
              alt={item.title}
            ></Image>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Link href='/hizmetlerimiz'>
          Detaylı Bilgi
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
    </div>
  );
};

export default Services;
