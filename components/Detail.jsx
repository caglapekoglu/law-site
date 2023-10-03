import React from 'react'
import styles from "../styles/Detail.module.css";
import Link from 'next/link';
const Detail = () => {
  return (
    <div className={styles.container}>
        <h1>Uzman avukat ve danışman kadromuz, İğdeci Aytekin'i güçlü kılan unsurlardan biridir. Müvekkillerimizin karşılaştığı zorlukları anlayarak, hukuki meselelerin her birinin benzersiz gereksinimlerine odaklanıyor ve müvekkil odaklı yaklaşımımızı her zaman önceliğimiz olarak koruyoruz.</h1>

        <Link href="/hakkimizda">
          Detaylı Bilgi
          <ion-icon name="arrow-forward-outline"></ion-icon>
          </Link>
    </div>
  )
}

export default Detail