import styles from "./Hero.module.css";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function Hero() {
  return (
    <main className={styles.hero}>
        <LeftContent/>
        <RightContent/>
    </main>
  );
}

export default Hero;
