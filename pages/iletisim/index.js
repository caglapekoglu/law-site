import React from "react";
import Layout from "../../layout/Layout";
import styles from "../../styles/ContactPage.module.css";
import Link from "next/link";
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
        <article>
          <h2>Bize Ulaşın</h2>
          <p className={styles.paragraph}>
            Size yardımcı olmaktan memnuniyet duyarız ! Hukuka dair her
            ihtiyacınızda aşağıdaki iletişim araçları ile bize ulaşabilirsiniz.
          </p>
          <div className={styles.contactBox}>
            <div className={styles.info}>
              <h3>İletişim Bilgileri</h3>
              <p>
                <ion-icon name="call-sharp"></ion-icon>
                <Link href="tel:+902166514252" target="_blank">
                  +90 216 651 4252
                </Link>
              </p>
              <p>
                <ion-icon name="logo-whatsapp"></ion-icon>
                <Link
                  href="https://api.whatsapp.com/send?phone=+902166514252"
                  target="_blank"
                >
                  +90 216 651 4252
                </Link>
              </p>
              <p>
                <ion-icon name="mail-sharp"></ion-icon>
                <Link href="mailto:info@igdeciaytekin.com" target="_blank">
                  info@igdeciaytekin.com
                </Link>
              </p>
              <p>
                <ion-icon name="location-sharp"></ion-icon>
                Bostancı Mahallesi, <br />
                Emin Ali Paşa Caddesi, <br />
                No :102/8 <br />
                Kadıköy/İstanbul
              </p>
              <div className={styles.ellipses}>
                <div className={styles.ellipse1}></div>
                <div className={styles.ellipse2}></div>
              </div>
            </div>
            <form action="https://formspree.io/f/xzbyjnnk" method="POST">
              <div>
                <label for="">Ad</label>
                <input type="text" id="first_name" name="first_name"  placeholder="Adınız" required/>
              </div>
              <div>
                <label for="">Soyad</label>
                <input type="text" id="last_name" name="last_name" placeholder="Soyadınız" required />
              </div>
              <div>
                <label for="">E-Posta</label>
                <input type="email" name="email" placeholder="E-posta Adresiniz" required/>
              </div>
              <div>
                <label for="">Telefon Numarası</label>
                <input placeholder="+90 012 3456 789" />
              </div>
              <div style={{ gridColumn: " span 2" }} required>
                <label for="">Mesaj</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Mesajınızı buraya yazabilirsiniz"
                />
              </div>
              <div className={styles.kvkk}>
                <input type="checkbox" />
                <Link href="/">KVKK Metnini okudum ve onaylıyorum.</Link>
              </div>
              <div className={styles.button}>
                <button type="submit">Gönder</button>
              </div>
            </form>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default ContactPage;
