import styles from "./productCard.module.css";

export const ProductCard = ({ img, title, description, price }) => {
  return (
    <div className={styles.main_card}>
      <img src={img} alt="card" className={styles.card_img} />
      <div className={styles.text}>
        <span className={styles.date}>R${price}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
