import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";
import Link from "next/link";
import { menuItems } from "../data/data";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Image alt="İğdeci Aytekin" src={Logo} />
       <span>
          Your reliable protection in jurisprudence. Our qualification provides
          the opportunity solve the problems of any complexity.
        </span> 
      </div>
      <div>
        <h1>İletişim Bilgileri</h1>
        <p>
          Bostancı Mahallesi, <br/> Emin Ali Paşa Caddesi, <br/> No :102/8<br/> Kadıköy/İstanbul
        </p>
        <p style={{marginTop:'10px'}}>info@igdeciaytekin.com <br />+90 216 651 4252</p>
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
