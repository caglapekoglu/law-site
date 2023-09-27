import React, { useState } from "react";
import styles from "../../styles/TeamPages.module.css";
import Layout from "../../layout/Layout";
import { teams } from "../../data/data";
import Image from "next/image";
import Link from "next/link";

const TeamPages = () => {
  const [hoveredTeam, setHoveredTeam] = useState(null);
  return (
    <Layout>
      <div className={styles.team}>
        <div className={styles.box}>
          <div></div>
        </div>
        <h1>Ekibimiz</h1>
        <p>
          Deneyimli ekibimiz, hukuki ihtiyaçlarınıza profesyonel çözümler sunmak
          için burada. Hukukun her alanında branşlaşma esasına göre uzmanlaşmış
          kadromuz, müvekkillerimize etkili ve güvenilir hukuki rehberlik
          sağlamak için hazır.
        </p>
        <div className={styles.cards}>
          <div className={styles.row}>
            {teams.slice(0, 2).map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredTeam(item)}
                onMouseLeave={() => setHoveredTeam(null)}
                className={styles.item}
              >
                <Image
                  src={hoveredTeam === item ? item.hoveredImage : item.image}
                ></Image>
                <div className={styles.card}>
                  <div className={styles.socialMedia}>
                    <Link href={item.linkedin}>
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </Link>
                    <Link href={item.mail}>
                      <ion-icon name="mail-outline"></ion-icon>
                    </Link>
                  </div>
                  <div>
                    <h1>{item.name}</h1>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.row}>
            {teams.slice(2).map((item, index) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredTeam(item)}
                onMouseLeave={() => setHoveredTeam(null)}
                className={styles.item}
              >
                <Image
                  src={hoveredTeam === item ? item.hoveredImage : item.image}
                ></Image>
                <div className={styles.card}>
                  <div className={styles.socialMedia}>
                    <Link href={item.linkedin}>
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </Link>
                    <Link href={item.mail}>
                      <ion-icon name="mail-outline"></ion-icon>
                    </Link>
                  </div>
                  <div>
                    <h1>{item.name}</h1>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamPages;
