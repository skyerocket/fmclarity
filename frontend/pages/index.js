// pages/client-side.js

import styles from "../styles/Home.module.css";
import ClientOnly from "../components/ClientOnly";
import Contractors from "../components/Contractors";
import AddContractor from '../components/AddContractor';

export default function ClientSide() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://fmclarity.com">FMClarity!</a>
        </h1>
        <ClientOnly>
          <AddContractor />
          <Contractors />
        </ClientOnly>
      </main>
    </div>
  );
}