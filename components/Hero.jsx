import React from "react";
import Image from "next/image";
import Bg from "../public/assets/header_image.png";
import Icon1 from "../public/assets/icon1.svg";
import Icon2 from "../public/assets/icon2.svg";
import Icon3 from "../public/assets/icon3.svg";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image alt="İğdeci Aytekin" src={Bg}></Image>
      <div className={styles.cards}>
        <div>
          <Image src={Icon1}></Image>
          <h1>Sürekli Danışmanlık Hizmetleri</h1>
          <p>
            Sunduğumuz danışmanlık hizmetiyle şirketinizin uyuşmazlık öncesi
            bütün hukuki süreçlerinde yanınızdayız.
          </p>
        </div>
        <div>
          <Image src={Icon2}></Image>
          <h1>Dava ve Uyuşmazlık Çözümü</h1>
          <p>
            Dava ve diğer uyuşmazlıklarınızda etkin temsil ve hukuki
            yeterlilikle en doğru çözümü müvekkillerimize sunuyoruz.
          </p>
        </div>
        <div>
          <Image src={Icon3}></Image>
          <h1>Temsil Hizmetleri</h1>
          <p>
            Müvekkillerimizi bütün yargı organları, kurum ve kuruluşlarda her
            alanda etkili bir şekilde temsil ediyoruz.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.box}>
          <div></div>
        </div>
        <h1>
          Hukuki Sorunlarınıza <span>Profesyonel Çözümler</span>
        </h1>
        <p>
          İğdeci Aytekin Hukuk & Danışmanlık Bürosu, hukukun geniş yelpazesinde
          profesyonel çözümler sunma amacıyla kuruldu. Müvekkillerimizin hukuki
          ihtiyaçlarını derinlemesine anlamak, bu ihtiyaçlara etkili ve
          güvenilir çözümler sunmak bizim misyonumuzu oluşturuyor. Uzman avukat
          ve danışman kadromuz, İğdeci Aytekin’i güçlü kılan unsurlardan
          biridir. Müvekkillerimizin karşılaştığı zorlukları anlayarak, hukuki
          meselelerin her birinin benzersiz gereksinimlerine odaklanıyor ve
          müvekkil odaklı yaklaşımımızı her zaman önceliğimiz olarak koruyoruz.
        </p>
        <button>
          Detaylı Bilgi
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Hero;
