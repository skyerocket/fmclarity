// pages/client-side.js

import styles from "../styles/Home.module.css";
import ClientOnly from "../components/ClientOnly";
import Contractors from "../components/Contractors";

export default function ClientSide() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ClientOnly>
          <Contractors />
        </ClientOnly>
      </main>
    </div>
  );
}