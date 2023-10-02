import React, { useState, useRef } from "react";
import styles from "../styles/Team.module.css";
import { teams } from "../data/data";
import Image from "next/image";
import Link from "next/link";

const Team = () => {
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const cardsRef = useRef(null);

  const duration = 200; 

  const scrollCardsRight = () => {
    const start = cardsRef.current.scrollLeft;
    const end = start + 750;
    const startTime = performance.now();

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      cardsRef.current.scrollLeft = start + progress * (end - start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  };

  const scrollCardsLeft = () => {
    const start = cardsRef.current.scrollLeft;
    const end = start - 350; // Kaydırma miktarını ayarlayabilirsiniz
    const startTime = performance.now();

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      cardsRef.current.scrollLeft = start + progress * (end - start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  };

  return (
    <div className={styles.container}>
      {/* ... Diğer içerikler ... */}

      <div className={styles.arrows}>
        <button onClick={scrollCardsLeft}>
          <ion-icon size="large" name="arrow-back-outline"></ion-icon>
        </button>
        <button onClick={scrollCardsRight}>
          <ion-icon size="large" name="arrow-forward-outline"></ion-icon>
        </button>
      </div>

      <div className={styles.cards} ref={cardsRef}>
        {teams.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setHoveredTeam(item)}
            onMouseLeave={() => setHoveredTeam(null)}
          >
            <Image
              src={hoveredTeam === item ? item.hoveredImage : item.image}
            ></Image>
            <h1>{item.name}</h1>
            <span>{item.role}</span>
          </div>
        ))}
      </div>

      {/* ... Diğer içerikler ... */}
    </div>
  );
};

export default Team;
