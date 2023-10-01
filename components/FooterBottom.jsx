import React from 'react'
import Linkedin from '../public/assets/linkedin.svg'
import X from '../public/assets/twitter.svg'
import Facebook from '../public/assets/facebook.svg'
import Instagram from '../public/assets/instagram.svg'
import Image from 'next/image'
import styles from "../styles/FooterBottom.module.css";
import Link from 'next/link'
const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
       <article>
       <span>İğdeci Aytekin Hukuk & Danışmanlık Bürosu © 2023 </span>
        <div>
           <Link target='_blank' href="https://www.linkedin.com/company/i%CC%87gdeciaytekin/about/"><Image src={Linkedin}/></Link>
           <Link target='_blank' href="https://www.linkedin.com/company/i%CC%87gdeciaytekin/about/"><Image src={X}/></Link>
           <Link target='_blank' href="https://www.linkedin.com/company/i%CC%87gdeciaytekin/about/"><Image src={Facebook}/></Link>
           <Link target='_blank' href="https://www.linkedin.com/company/i%CC%87gdeciaytekin/about/"><Image src={Instagram}/></Link>
        </div>
       </article>
    </div>
  )
}

export default FooterBottom