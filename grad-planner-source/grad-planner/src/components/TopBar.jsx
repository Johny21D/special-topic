import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <span className={styles.byu}>BYU</span>
          <span className={styles.idaho}>IDAHO</span>
        </div>
        <span className={styles.appName}>I-Plan</span>
      </div>
      <div className={styles.right}>
        <button className={styles.menuBtn}>⊞ Menu ▾</button>
        <button className={styles.helpBtn}>?</button>
        <div className={styles.userPill}>
          <div className={styles.avatar}>JS</div>
          <div className={styles.userText}>
            <span className={styles.hello}>Hello,</span>
            <span className={styles.name}>D Johny Suy</span>
          </div>
        </div>
      </div>
    </header>
  );
}
