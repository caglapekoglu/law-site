import React, { useState, useRef } from "react";
import styles from "../styles/Team.module.css";
import { teams } from "../data/data";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const cardsRef = useRef(null);

  const scrollCardsRight = () => {
    cardsRef.current.scrollLeft += 100; // Kaydırma miktarını ayarlayabilirsiniz
  };

  const scrollCardsLeft = () => {
    cardsRef.current.scrollLeft -= 100; // Kaydırma miktarını ayarlayabilirsiniz
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div></div>
      </div>
      <h1>Ekibimiz</h1>
      <p>
        Deneyimli ekibimiz, hukuki ihtiyaçlarınıza profesyonel çözümler sunmak için burada. Hukukun her alanında branşlaşma esasına göre uzmanlaşmış kadromuz, müvekkillerimize etkili ve güvenilir hukuki rehberlik sağlamak için hazır.
      </p>
        <div className={styles.arrows}>
     <button onClick={scrollCardsLeft}><ion-icon size="large" name="arrow-back-outline"></ion-icon></button>
      <button onClick={scrollCardsRight}><ion-icon size="large" name="arrow-forward-outline"></ion-icon></button>
     </div>
      <div className={styles.cards} ref={cardsRef}>
        {teams.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredTeam(item)}
            onMouseLeave={() => setHoveredTeam(null)}
          >
            <Image
              src={hoveredTeam === item ? item.hoveredImage : item.image}
            ></Image>
            <div className={styles.socialMedia}>
              <Link target="_blank" href={item.linkedin}>
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
              <Link target="_blank" href={item.mail}>
                <ion-icon name="mail-outline"></ion-icon>
              </Link>
            </div>
            <h1>{item.name}</h1>
            <span>{item.role}</span>
          </div>
        ))}
      </div>
   
      <Link className={styles.button} href="/ekibimiz">
        Detaylı Bilgi
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </Link>
    </div>
  );
};

export default Team;
