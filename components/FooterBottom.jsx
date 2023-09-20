import React from 'react'
import Linkedin from '../public/assets/linkedin.svg'
import X from '../public/assets/twitter.svg'
import Facebook from '../public/assets/facebook.svg'
import Instagram from '../public/assets/instagram.svg'
import Image from 'next/image'
import styles from "../styles/FooterBottom.module.css";

const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
       <article>
       <span>İğdeci Aytekin Hukuk & Danışmanlık Bürosu © 2023 </span>
        <div>
           <Image src={Linkedin}/>
           <Image src={X}/>
           <Image src={Facebook}/>
           <Image src={Instagram}/>
        </div>
       </article>
    </div>
  )
}

export default FooterBottom