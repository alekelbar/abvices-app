import styles from "./loading.module.css";

export const Loading = () => {
  return (
    <div className={styles["loading-container"]}>
      <div className={styles.loading}></div>
    </div>
  );
};
