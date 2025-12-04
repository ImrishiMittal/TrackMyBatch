import styles from "./Hero.module.css";
function LeftContent(){
    return(
        <section className={styles["hero-text"]}>
        <p className={styles.pill}>For Institutes & Training Programs</p>

        <h1>
          Keep every <span className={styles.highlight}>batch on track</span>{" "}
          with zero chaos.
        </h1>

        <p className={styles.subtitle}>
          TrackMyBatch helps you manage students, sessions, fees, and progress
          from a single clean dashboard. No more messy spreadsheets or WhatsApp
          confusion.
        </p>

        <button className={styles["primary-cta"]}>Book a demo</button>

        <div className={styles["trust-row"]}>
          <span className={styles["trust-badge"]}>No credit card required</span>
          <span className={styles["trust-text"]}>
            Set up in under 5 minutes
          </span>
        </div>
      </section>
    )
}

export default LeftContent