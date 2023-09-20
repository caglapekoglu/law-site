import React from "react";
import styles from "../styles/Team.module.css";
import { teams } from "../data/data";
import Image from "next/image";
const Team = () => {
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
      {teams.map((item, index) => (
        <div key={index}>
          <Image src={item.image}></Image>
          <h1>{item.name}</h1>
          <span>{item.role}</span>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Team;
