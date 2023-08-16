import React from "react";
import { Slip } from "../../interfaces/slip_interface";
import styles from "./Card.module.css";
import divider from "./../../assets/pattern-divider-mobile.svg";
import random_button from "./../../assets/icon-dice.svg";

interface CardProps {
  data: Slip;
  loadAbvice: () => Promise<void>;
}

export const Card: React.FC<CardProps> = ({ data, loadAbvice }) => {
  return (
    <div className={styles["card-container"]}>
      <h2 className={styles.card__title}>Advice #{data.id}</h2>
      <p className={styles.card__content}>
        <span className={styles["quote-icon"]}>
          <i className="fas fa-quote-left"></i>
        </span>
        {data.advice}
        <span className={styles["quote-icon"]}>
          <i className="fas fa-quote-right"></i>
        </span>
      </p>
      <figure className={styles["card__divider-container"]}>
        <img
          className={styles.card_divider}
          src={divider}
          alt="divider image"
        />
      </figure>
      {/* floating random button */}
      <figure
        onClick={loadAbvice}
        className={styles["card__random-button-container"]}
      >
        <img className="card__random-button" src={random_button} alt="dice" />
      </figure>
    </div>
  );
};
