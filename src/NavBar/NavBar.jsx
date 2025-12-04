import styles from "./NavBar.module.css"

function NavBar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>TrackMyBatch</div>

      <nav className={styles["nav-links"]}>
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className={styles["nav-cta"]}>Get Started</button>
    </header>
  );
}

export default NavBar;
