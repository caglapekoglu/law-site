import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Logo from "../public/assets/logo.svg";
import Search from "../public/assets/search.svg";
import Link from "next/link";
import { menuItems } from "../data/data";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const showMenu = () => {
    setMenuOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className={styles.navbar}>
      <article className={styles.insideContainer}>
        <Link href="/">
          <Image src={Logo} />
        </Link>
        <ul>
          {menuItems.map((item, index) => (
            
              <Link style={{
                    fontWeight:
                      router.pathname === item.path ? "700" : "300",
                  }} href={item.path}>
                
                  {item.txt}

              </Link>
   
          ))}
        </ul>
        <div>
          <Image src={Search} />
          <input type="text" placeholder="Hukuk" />
        </div>
      </article>

      <article className={styles.mobileContainer}>
        <Link href="/">
          <Image src={Logo} />
        </Link>
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
