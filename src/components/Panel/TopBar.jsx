import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <p className={styles.caption}>Område</p>
      <div className={styles.evacuateInfo}>
        <p className={styles.notEvacuated}>Ikke evakuert</p>
        <p className={styles.evacuated}>Evakuert</p>
      </div>
    </div>
  );
}
