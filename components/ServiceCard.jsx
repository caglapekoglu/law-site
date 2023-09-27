// pages/Card.js

import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/ServiceCard.module.css";

const ServiceCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${styles.card} ${isHovered ? styles.hovered : ""}`} // styles objesini kullanarak sınıfları belirtin
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <div className={`${styles.content} ${styles["content-hovered"]}`}>
          <p>{props.content}</p>
        </div>
      ) : (
        <div className={styles.content}>
          <Image src={props.icon}></Image>
          <h1>{props.title}</h1>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
