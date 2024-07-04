import styles from "./page.module.scss";
import Frog from "./components/Frog/Frog";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>I <span className={styles.b}>frog</span>ot to pet my frog...</h1>
        <h2 className={styles.subtitle}>Can you do it for me?</h2>
        <Frog />
      </div>
    </main>
  );
}
