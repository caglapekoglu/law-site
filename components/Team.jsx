import React, { useState } from "react";
import styles from "../styles/Team.module.css";
import { teams } from "../data/data";
import Image from "next/image";
import Link from "next/link";
const Team = () => {
  const [hoveredTeam, setHoveredTeam] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div></div>
      </div>
      <h1>Ekibimiz</h1>
      <p>
        Deneyimli ekibimiz, hukuki ihtiyaçlarınıza profesyonel çözümler sunmak
        için burada. Hukukun her alanında branşlaşma esasına göre uzmanlaşmış
        kadromuz, müvekkillerimize etkili ve güvenilir hukuki rehberlik sağlamak
        için hazır.
      </p>
      <div className={styles.cards}>
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
              <Link href={item.linkedin}>
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
              <Link href={item.mail}>
                <ion-icon name="mail-outline"></ion-icon>
              </Link>
            </div>
            <h1>{item.name}</h1>
            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
