import styles from "./frog.module.scss";

export default function Frog() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.face}>
          <div className={styles.mouth}></div>
          <div className={styles.details}></div>
        </div>
      </div>
      <div className={styles.shadow}></div>
    </>
  );
}
