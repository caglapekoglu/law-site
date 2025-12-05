import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Logo from "../public/assets/logo.png";
import Link from "next/link";
import { menuItems } from "../data/data";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Image alt="İğdeci Aytekin" src={Logo} />
       <span>
       Bu sitede yer alan içerikler yalnızca bilgilendirme amaçlıdır. Avukatık Kanunu ve Türkiye Barolar Birliği’nin ilgili düzenlemelerine uygun olarak hiçbir şekilde reklam, teklif, hukuki görüş amacı gütmez.
        </span> 
      </div>
      <div>
        <h1>İletişim Bilgileri</h1>
        <p style={{fontSize: '16px', fontWeight: 'normal'}}>
          Yasa Kule Esentepe Mahallesi, <br/> Anadolu Caddesi, <br/>No: 14/7 <br/>
              Kartal/İstanbul
        </p>
       <p style={{marginTop: '10px'}}>
        <a href="mailto:info@igdeciaytekin.com">info@igdeciaytekin.com</a><br />
        <a href="tel:+902166514252">+90 216 651 4252</a>
        </p>

      </div>
      <div>
        <h1>Linkler</h1>
        {menuItems.map((item, index) => (
            <Link key={index} href={item.path}>
              {item.txt}
            </Link>
          ))}
      </div>
    </footer>
  );
};

export default Footer;
