import styles from "./loadingpage.module.scss";

export default function LoadingPage() {
  return (
      <div className={styles.loaderContainer}>
        <div className={styles.bouncingDots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          </div>
          <div className={styles.titleContainer}>
              <h1 className={styles.title} >Loading...</h1>
          </div>
      </div>
  );
}
