import React from "react";
import styles from "./Products.module.css";
import { Link } from "react-router-dom";

const Product = ({ cardData }) => {
  return (
    <div className={styles.productContainer}>
      {cardData.map((card, index) => (
        <Link to={`/Product/${index}`} key={index} className={styles.productLink}>
          <div className={styles.productCard}>
            <img src={card.imgSrc} alt={card.title} className={styles.productImage} />
            <div className={styles.productCardContent}>
              <h3 className={styles.productTitle}>{card.title}</h3>
              <p className={styles.productDescription}>

              </p>
              <p className={styles.productButton}> Order </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
