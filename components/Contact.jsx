import React from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import ContactImg from "../public/assets/Contact.png";
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box}>
          <div></div>
        </div>
        <h1>Bize Ulaşın</h1>
        <p>
          Size yardımcı olmaktan memnuniyet duyarız! Hukuka dair her
          ihtiyacınızda aşağıdaki iletişim araçları ile bize ulaşabilirsiniz.
        </p>
      </div>
      <div className={styles.contact}>
        <Image alt="İletişim" src={ContactImg}></Image>
        <div>
          <p>
            <ion-icon name="mail-outline"></ion-icon><span>info@igdeciaytekin.com</span>
          </p>
          <p>
            <ion-icon name="call-outline"></ion-icon><span>+90 216 651 4252</span>
          </p>
          <p>
            <ion-icon name="location-outline"></ion-icon>
            <span>
              Yasa Kule Esentepe Mahallesi, <br/> Anadolu Caddesi, <br/>No: 14/7 <br/>
              Kartal/İstanbul
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
