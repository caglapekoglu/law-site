import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";
import Search from "../public/assets/search.svg";
import Link from "next/link";
import { menuItems } from "../data/data";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen((prev) => {
      return !prev;
    });
  };
  return (
    <div className={styles.navbar}>
      <article className={styles.insideContainer}>
        <Link href="/"><Image src={Logo}></Image></Link>
        <ul>
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path}>
              {item.txt}
            </Link>
          ))}
        </ul>
        <div>
          <Image src={Search}></Image>
          <input type="text" placeholder="Hukuk" />
        </div>
      </article>

      <article className={styles.mobileContainer}>
        <Image src={Logo}></Image>
        <button onClick={() => showMenu()}>
          <ion-icon color={"white"} name="menu-outline"></ion-icon>
        </button>
      </article>
      {isMenuOpen ? (
        <article className={styles.menuFrame}>
          {menuItems.map((item, index) => (
            <Link key={index} href={item.path}>
              {item.txt}
            </Link>
          ))}
        </article>
      ) : null}
    </div>
  );
};

export default Navbar;
