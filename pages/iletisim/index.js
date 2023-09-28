import React, { useState } from "react";
import Layout from "../../layout/Layout";
import styles from "../../styles/ContactPage.module.css";
import Link from "next/link";
const ContactPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <Layout>
      <div className={styles.contact}>
        <div className={styles.box}>
          <div></div>
        </div>
        <h1>İletişim</h1>
        <iframe
          width={"100%"}
          height="540"
          src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Bostanc%C4%B1%20Mahallesi%2CEmin%20Ali%20Pa%C5%9Fa%20Caddesi%2C%20No%20%3A102%2F8%20%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <article>
          {isPopupOpen && (
            <div className={styles.popup}>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h2 style={{ textAlign: "center" }}>KVKK Aydınlatma Metni</h2>
                  <button
                    style={{
                      color: "#650340",
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "20px",
                    }}
                    onClick={togglePopup}
                  >
                    x
                  </button>
                </div>
                <h3>1. Aydınlatma Metni Hakkında </h3>
                <p>
                  Bu aydınlatma metni, İğdeci Aytekin Hukuk ve Danışmanlık
                  Bürosu (İğdeci Aytekin) tarafından, kişisel verilerin
                  işlenmesi ile ilgili Kişisel Verilerin Korunması Kanunu (KVKK)
                  kapsamında sizlere sunulan bilgileri içermektedir. Bu metin,
                  kişisel verilerinizi nasıl işlediğimizi, bu verileri hangi
                  amaçlarla topladığımızı ve verilerinizi nasıl koruduğumuzu
                  açıklamaktadır.
                </p>
                <h3>2. Veri Sorumlusu</h3>
                <p>
                  Veri sorumlusu olarak, İğdeci Aytekin, Türkiye`de faaliyet
                  göstermektedir ve kişisel verilerin işlenmesi süreçlerinin
                  sorumlusudur. İletişim bilgilerimiz aşağıdaki gibidir: Adres:
                  Bostancı Mahallesi, Emin Ali Paşa Caddesi, No:102 İç Kapı No:8
                  Kadıköy/İSTANBUL Telefon: 02126514252 E Posta:
                  info@igdeciaytekin.com
                </p>
                <h3>3. İşlenen Kişisel Verileriniz</h3>
                <p>
                  İğdeci Aytekin tarafından ziyaretçilerin kendilerince sağlanan
                  aşağıda sayılan kişisel veriler işlenebilecektir: Kimlik
                  Verisi Ad, soyadı. İletişim Verisi: E-posta adresi, telefon
                  no. Müşteri İşlem Verisi: Talep bilgisi.
                </p>
                <h3>4. Kişisel Verilerin İşlenme Amaçları</h3>
                <p>
                  Kişisel verileriniz, aşağıdaki amaçlarla işlenebilir: Hukuki
                  danışmanlık hizmetlerinin sunulması İletişim kurulması Hukuki
                  işlemlerin yürütülmesi KVKK ve diğer ilgili yasal
                  düzenlemelere uyumun sağlanması Yukarıda sayılan amaçlar
                  doğrultusunda İğdeci Aytekin tarafından kişisel verileriniz
                  KVKK’ye uygun olarak işlenmektedir.
                </p>
                <h3>5. Kişisel Verilerin İşlenme Hukuki Sebepleri </h3>
                <p>
                  Kişisel verileriniz, KVKK`nin 5. ve 6. maddelerine uygun
                  olarak işlenmektedir. Bu hukuki sebepler arasında rızanız,
                  sözleşme yürütme, yasal yükümlülüklerin yerine getirilmesi,
                  hukuki menfaatin korunması gibi sebepler yer almaktadır.
                </p>
                <h3>6. Kişisel Verilerin Saklama Süresi </h3>
                <p>
                  Kişisel verileriniz, ilgili hukuki düzenlemelere ve
                  gereksinimlere uygun olarak saklanacaktır. Veriler, işlenme
                  amaçlarına göre belirlenen süre boyunca muhafaza edilecektir.
                </p>
                <h3> 7. Kişisel Verilere Erişim ve Diğer Haklar</h3>
                <p>
                  Kişisel verilerinizin sahibi olarak haklarınıza ilişkin
                  taleplerinizi İğdeci Aytekin’e iletmeniz halinde İğdeci
                  Aytekin talebin niteliğine göre bunları en kısa sürede ve en
                  geç otuz (30) gün içinde ücretsiz olarak işleme alacaktır.
                  Ancak işlemin ilave bir maliyet gerektirmesi halinde İğdeci
                  Aytekin, Kişisel Verileri Koruma Kurumu tarafından belirlenen
                  tarifeye göre ücretlendirme yapar. Bu kapsamda: • Kişisel
                  verileri işlenmişse buna ilişkin bilgi talep etme, • Kişisel
                  verilerin işlenme amacını ve bunların amacına uygun kullanılıp
                  kullanılmadığını öğrenme, • Yurt içinde veya yurt dışında
                  kişisel verilerin aktarıldığı üçüncü kişileri bilme, • Kişisel
                  verilerin eksik veya yanlış işlenmiş olması hâlinde bunların
                  düzeltilmesini isteme, • KVKK’de öngörülen şartlar
                  çerçevesinde kişisel verilerin silinmesini veya yok edilmesini
                  isteme, • Yapılan işlemlerin, kişisel verilerin aktarıldığı
                  üçüncü kişilere bildirilmesini isteme, • İşlenen verilerin
                  münhasıran otomatik sistemler vasıtasıyla analiz edilmesi
                  suretiyle kişinin kendisi aleyhine bir sonucun ortaya
                  çıkmasına itiraz etme, • Kişisel verilerin kanuna aykırı
                  olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın
                  giderilmesini talep etme gibi haklara sahipsiniz. Bu hakları
                  kullanmak için bize başvurabilirsiniz. İlgili iletişim
                  bilgileri yukarıda verilmiştir. 
                  </p>
                  <h3>8. Kişisel Verilerin Korunması</h3>
                  <p>
                  Kişisel verilerinizin güvenliği bizim için önemlidir.
                  Verilerinizi yetkisiz erişimlere, kaybolmaya, değiştirilmeye
                  veya ifşaya karşı korumak için gerekli teknik ve
                  organizasyonel önlemleri almaktayız. </p>
                  <h3>9. İletişim</h3>
                  <p> KVKK ile
                  ilgili herhangi bir sorunuz veya endişeniz varsa, lütfen
                  İğdeci Aytekin ile iletişime geçmekten çekinmeyin. Size
                  yardımcı olmaktan mutluluk duyarız. Bu aydınlatma metni,
                  KVKK`ye uygun olarak düzenlenmiş olup gerektiğinde
                  güncellenebilir. Güncellemeler hakkında sizi
                  bilgilendireceğiz. Açık Rıza ve Onay Metni 6698 sayılı Kişisel
                  Verilerin Korunması Kanunu çerçevesinde kişisel/özel nitelikli
                  kişisel verilerimin; fiziksel olarak ofis adresinde veya web
                  sitesi (www.igdeciaytekin.com) üzerinden tamamen veya kısmen
                  elde edilmesi, kaydedilmesi, depolanması, değiştirilmesi,
                  güncellenmesi, sınıflandırılması, işlendikleri amaç için
                  gerekli olan ya da ilgili kanunda öngörülen süre kadar
                  muhafaza edilmesi, kanuni nedenlerle veya yapılan işin
                  niteliği gereği üçüncü kişiler ile paylaşılması, yurtdışına
                  aktarılması da dahil olmak üzere yukarıda açıklandığı üzere
                  işlenmesine, konu hakkında tereddüde yer vermeyecek şekilde
                  bilgi sahibi ve aydınlatılmış olarak açık rızam ile onay
                  veriyorum. <br/><br/>Son güncelleme tarihi: 27.09.2023 İğdeci Aytekin
                  Hukuk ve Danışmanlık Bürosu
                </p>
              </div>
            </div>
          )}
          <h2>Bize Ulaşın</h2>
          <p className={styles.paragraph}>
            Size yardımcı olmaktan memnuniyet duyarız ! Hukuka dair her
            ihtiyacınızda aşağıdaki iletişim araçları ile bize ulaşabilirsiniz.
          </p>
          <div className={styles.contactBox}>
            <div className={styles.info}>
              <h3>İletişim Bilgileri</h3>
              <p>
                <ion-icon name="call-sharp"></ion-icon>
                <Link href="tel:+902166514252" target="_blank">
                  +90 216 651 4252
                </Link>
              </p>
              <p>
                <ion-icon name="logo-whatsapp"></ion-icon>
                <Link
                  href="https://api.whatsapp.com/send?phone=+902166514252"
                  target="_blank"
                >
                  +90 216 651 4252
                </Link>
              </p>
              <p>
                <ion-icon name="mail-sharp"></ion-icon>
                <Link href="mailto:info@igdeciaytekin.com" target="_blank">
                  info@igdeciaytekin.com
                </Link>
              </p>
              <p>
                <ion-icon name="location-sharp"></ion-icon>
                Bostancı Mahallesi, <br />
                Emin Ali Paşa Caddesi, <br />
                No :102/8 <br />
                Kadıköy/İstanbul
              </p>
              <div className={styles.ellipses}>
                <div className={styles.ellipse1}></div>
                <div className={styles.ellipse2}></div>
              </div>
            </div>
            <form action="https://formspree.io/f/xzbyjnnk" method="POST">
              <div>
                <label for="">Ad</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Adınız"
                  required
                />
              </div>
              <div>
                <label for="">Soyad</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Soyadınız"
                  required
                />
              </div>
              <div>
                <label for="">E-Posta</label>
                <input
                  type="email"
                  name="email"
                  placeholder="E-posta Adresiniz"
                  required
                />
              </div>
              <div>
                <label for="">Telefon Numarası</label>
                <input placeholder="+90 012 3456 789" />
              </div>
              <div style={{ gridColumn: " span 2" }} required>
                <label for="">Mesaj</label>
                <textarea
                 required
                  name="message"
                  rows="4"
                  placeholder="Mesajınızı buraya yazabilirsiniz"
                />
              </div>
              <div className={styles.kvkk}>
                <input required type="checkbox" />
                <button className={styles.kvkkButton} onClick={() => togglePopup()}>
                  KVKK Metnini okudum ve onaylıyorum.
                </button>
              </div>
              <div className={styles.button}>
                <button type="submit">Gönder</button>
              </div>
            </form>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default ContactPage;
