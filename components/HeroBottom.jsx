import React from 'react'
import styles from '../styles/Hero.module.css'
import Link from 'next/link'
const HeroBottom = () => {
  return (
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
        <Link href="/hakkimizda">
          Detaylı Bilgi
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
      </div>
  )
}

export default HeroBottom