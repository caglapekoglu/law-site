import React from "react";
import Image from "next/image";
import HeaderImage from "../../public/assets/header_image.png";
import AboutUsImg from "../../public/assets/aboutus.png";
import styles from "../../styles/AboutUs.module.css";
import Layout from "../../layout/Layout";
const AboutUs = () => {
  return (
    <Layout>
      <div className={styles.aboutUs}>
      <Image alt="İğdeci Aytekin" className={styles.headerImg} src={HeaderImage} />
      <article>
        <div className={styles.box}>
          <div></div>
        </div>
        <h1>Hakkımızda</h1>
        <p>
          İğdeci Aytekin Hukuk & Danışmanlık Bürosu, hukukun geniş yelpazesinde
          profesyonel çözümler sunma amacıyla kuruldu. Kuruluş amacımız,
          müvekkillerimizin hukuki ihtiyaçlarını anlamak ve bu ihtiyaçlara
          kapsamlı ve etkili çözümler sunmaktır. <br /> <br /> Misyonumuz, her
          müvekkilimize özgü bir yaklaşım benimseyerek hukuki gereksinimlerini
          derinlemesine anlamak ve bu gereksinimlere uygun bir strateji
          geliştirmektir. Bu stratejiler, müvekkillerimizin hukuki süreçlerde en
          iyi sonuçları elde etmelerini sağlamak amacıyla titizlikle uygulanır.
        </p>
      </article>
      <Image className={styles.aboutUsImg} src={AboutUsImg}></Image>
      <article className={styles.paragraph}>
        <p>
          Büromuzdaki uzman avukat ve danışman kadromuz, İğdeci Aytekin Hukuk &
          Danışmanlık Bürosu'nun temel gücünü oluşturur. Hukukun farklı
          alanlarında branşlaşma esasına göre uzmanlaşmış olan ekibimiz,
          karmaşık hukuki meseleleri ele alırken her zaman güncel yasal
          düzenlemelere hakimdir. Müvekkillerimizin karşılaştığı zorlukları
          anlamak ve hukuki çözümleri kişiselleştirerek tatbik etmek temel
          prensibimizdir.
        </p>
      </article>
      <article >
        <p>
          Bizim için müvekkil odaklılık her şeyin önündedir. Her bir
          müvekkilimizin dava veya danışmanlık hizmetleri alırken güvende ve
          bilgilendirilmiş hissetmesini sağlamak için çaba gösteririz. Ayrıca,
          dürüstlük ve şeffaflık ilkelerine sıkı sıkıya bağlıyız. <br /> <br />  İğdeci Aytekin
          Hukuk & Danışmanlık Bürosu olarak, hukukun karmaşıklığına karşı
          mücadele ederken müvekkillerimize en iyi hukuki destek hizmetini
          sunmaktan gurur duyuyoruz. Sizlerin yanında olmak ve hukuki
          ihtiyaçlarınızı karşılamak için buradayız.
        </p>
      </article>
      </div>
    </Layout>
  );
};

export default AboutUs;
