"use client";

import styles from "./page.module.scss";
import Frog from "./components/Frog/Frog";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import { useEffect, useState } from "react";

export default function Home() {
  const [load, setLoad] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoad(false);
      }, 2000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.fadingContainer}>
        {load && (
          <div className={fadeOut ? styles.fadeOut : ""}>
            <LoadingPage />
          </div>
        )}
      </div>

      <div className={styles.container}>
        <h2 className={styles.subtitle}>Oh boy...</h2>
        <h1 className={styles.title}>
          I <span className={styles.b}>frog</span>ot to pet my{" "}
          <span className={styles.b}>frog</span>!
        </h1>
        <h2 className={styles.subtitle}>
          Can <span className={styles.b}>you</span> do it for me?
        </h2>
        <Frog />
      </div>
    </main>
  );
}
