import React from 'react'
import styles from "../styles/Detail.module.css";
const Detail = () => {
  return (
    <div className={styles.container}>
        <h1>İstanbul bölgesinde saygın bir hukuk firması olarak,İğdeci Aytekin Hukuk& Danışmanlık Bürosu, adaleti ve müşteri memnuniyetini en üst düzeye çıkarmak için çalışır. Misyonumuz, müvekkillerimize dürüstlük, bilgi ve adanmışlıkla hukuki sorunlarını çözmelerine yardımcı olmaktır.</h1>
        <button>
          Detaylı Bilgi
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
    </div>
  )
}

export default Detail