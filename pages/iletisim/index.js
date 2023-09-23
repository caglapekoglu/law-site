import React from "react";
import Layout from "../../layout/Layout";
import styles from "../../styles/ContactPage.module.css";
const ContactPage = () => {
  return (
    <Layout>
      <div className={styles.contact}>
        <div className={styles.box}>
          <div></div>
        </div>
        <h1>İletişim</h1>
        <iframe
          width={"100%"}
          height="540"
          src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Bostanc%C4%B1%20Mahallesi%2CEmin%20Ali%20Pa%C5%9Fa%20Caddesi%2C%20No%20%3A102%2F8%20%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </Layout>
  );
};

export default ContactPage;
