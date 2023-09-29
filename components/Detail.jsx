import React from 'react'
import styles from "../styles/Detail.module.css";
import Link from 'next/link';
const Detail = () => {
  return (
    <div className={styles.container}>
        <h1>İstanbul bölgesinde saygın bir hukuk firması olarak,İğdeci Aytekin Hukuk& Danışmanlık Bürosu, adaleti ve müşteri memnuniyetini en üst düzeye çıkarmak için çalışır. Misyonumuz, müvekkillerimize dürüstlük, bilgi ve adanmışlıkla hukuki sorunlarını çözmelerine yardımcı olmaktır.</h1>

        <Link href="/hakkimizda">
          Detaylı Bilgi
          <ion-icon name="arrow-forward-outline"></ion-icon>
          </Link>
    </div>
  )
}

export default Detail