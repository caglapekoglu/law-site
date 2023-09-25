import React from "react";
import Image from "next/image";
import HeaderImage from "../../public/assets/header_image_services.png";
import Layout from "../../layout/Layout";
import styles from "../../styles/ServicesPage.module.css";
import ServiceImage from "../../public/assets/services.png";
import ServiceImage2 from "../../public/assets/services2.png";

const ServicesPages = () => {
  return (
    <Layout>
      <div className={styles.services}>
        <Image
          alt="İğdeci Aytekin"
          className={styles.headerImg}
          src={HeaderImage}
        />
        <article>
          <div className={styles.box}>
            <div></div>
          </div>
          <h1>
            Gayrimenkul Hukuku: Mülkiyetinizi ve Yatırımlarınızı Koruma Rehberi
          </h1>
          <p>
            Gayrimenkul hukuku, mülkiyet hakları, tapu işlemleri, kiracı-hak
            sahibi ilişkileri ve emlak yatırımları gibi konuları kapsayan
            karmaşık bir hukuk dalıdır. Herkesin bir şekilde gayrimenkule sahip
            olduğu veya gayrimenkul işlemleriyle ilgilendiği bir noktada bu
            konular hakkında bilgi sahibi olmak önemlidir. Bu blog yazısında,
            gayrimenkul hukukunun temel kavramlarına ve mülkiyetinizi ve
            yatırımlarınızı nasıl koruyabileceğinize dair bazı önemli ipuçlarına
            odaklanacağız.
          </p>
          <br />
          <p>
            <span className={styles.title}>Tapu ve Mülkiyet Hakları:</span>{" "}
            Gayrimenkul hukukunun temel taşı, tapu ve mülkiyet haklarıdır. Tapu,
            bir taşınmazın yasal sahibini gösteren resmi bir belgedir. Mülkiyet
            hakları, gayrimenkulün sahibine, kullanımına ve tasarrufuna ilişkin
            hakları içerir. Bu haklar, özel mülkiyet hakkı, intifa hakkı, sükna
            hakkı gibi farklı türlerde olabilir.
          </p>
          <p>
            <span className={styles.title}>Emlak İşlemleri:</span> Gayrimenkul
            alım-satım işlemleri, kiralamalar ve ipotek gibi işlemler,
            gayrimenkul hukukunun sıkça karşılaşılan konularıdır. Bu tür
            işlemlerde doğru sözleşmelerin hazırlanması ve yasal gerekliliklere
            uyulması önemlidir. Ayrıca, tapu devir işlemleri ve mülkiyet
            geçişleri de özenle takip edilmelidir.
          </p>
          <Image className={styles.serviceImg} src={ServiceImage} />
          <p>
            <span className={styles.title}>Kiracı-Hak Sahibi İlişkileri:</span>{" "}
            Kiracılar ve ev sahipleri arasındaki ilişkileri düzenleyen hukuki
            düzenlemeler, kiracıların ve ev sahiplerinin haklarını ve
            sorumluluklarını korumayı amaçlar. Kiralama sözleşmelerinin
            dikkatlice hazırlanması ve anlaşmazlıkların çözümüne ilişkin
            prosedürlerin bilinmesi önemlidir.
          </p>
          <p>
            <span className={styles.title}>Vergi ve Emlak Hukuku: </span>{" "}
            Gayrimenkul sahipleri, emlak vergisi gibi vergilendirme konularında
            yasal yükümlülüklere tabidirler. Emlak vergisi hesaplamaları ve
            ödemeleri hakkında bilgi sahibi olmak, mülkiyetinizi korumanıza
            yardımcı olur.
          </p>
          <div className={styles.grid}>
            <Image className={styles.serviceImg} src={ServiceImage2} />
            <p>
              <span className={styles.title}>
                Hukuki Yardım ve Danışmanlık:{" "}
              </span>{" "}
              Gayrimenkul hukuku karmaşık bir alan olduğundan, ihtiyacınıza göre
              bir avukat veya hukuk danışmanı tutmak önemlidir. Profesyonel
              yardım almak, hukuki sorunların önlenmesine veya çözülmesine
              yardımcı olabilir..
            </p>
          </div>
          <p>
            Gayrimenkul hukuku, her gayrimenkul sahibi veya yatırımcısı için
            önemlidir. Mülkiyetinizi ve yatırımlarınızı korumak için temel
            hukuki bilgilere sahip olmak ve gerektiğinde uzman yardım almak,
            olası sorunların önlenmesine ve çözülmesine yardımcı olacaktır.
            Unutmayın, her hukuki durum özeldir, bu nedenle spesifik
            sorunlarınız için bir avukat veya hukuk danışmanına başvurmanız her
            zaman en iyisi olacaktır.
          </p>
        </article>
      </div>
    </Layout>
  );
};

export default ServicesPages;
