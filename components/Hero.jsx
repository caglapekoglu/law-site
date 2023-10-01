import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Bg from "../public/assets/header_image.png";
import Icon1 from "../public/assets/icon1.svg";
import Icon2 from "../public/assets/icon2.svg";
import Icon3 from "../public/assets/icon3.svg";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import useCardHeight from "../hooks/useCardHeight";
const Hero = () => {
  const cardRef = useRef();
  const [h, setH] = useState(0);
  useEffect(() => {
    const cards = document.getElementById("cards");
    cards.style.top = "85%";
    setH(() => {
      return cardRef?.current.clientHeight;
    });
  }, []);
  useEffect(() => {
    function handleResize() {
      if (h != cardRef?.current?.clientHeight|| 0) {
        setH(() => {
          return cardRef?.current?.clientHeight;
        });
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className={styles.container} style={{marginBottom:h}}>
      <Image alt="İğdeci Aytekin" src={Bg}></Image>
      <div ref={cardRef} id="cards" className={styles.cards}>
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
      {/* <div className={styles.content}>
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
        <Link href="/hakkimizda">
          Detaylı Bilgi
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
      </div> */}
    </div>
  );
};

export default Hero;
