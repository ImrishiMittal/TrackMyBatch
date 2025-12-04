import styles from "./Hero.module.css";
function RightContent(){
    return(
        <>
        <section
        className={styles["hero-card"]}
        aria-label="preview of dashboard"
      >
        <div className={styles["card-header"]}>
          <span className={styles["card-title"]}>Batch overview</span>
          <span className={styles["card-pill"]}>Live</span>
        </div>

        <div className={styles["stats-grid"]}>
          <div className={styles.stat}>
            <span className={styles["stat-label"]}>Active batches</span>
            <span className={styles["stat-value"]}>12</span>
            <span className={styles["stat-caption"]}>+3 this month</span>
          </div>

          <div className={styles.stat}>
            <span className={styles["stat-label"]}>On-time sessions</span>
            <span className={styles["stat-value"]}>96%</span>
            <span className={styles["stat-caption"]}>Attendance up by 18%</span>
          </div>

          <div className={styles.stat}>
            <span className={styles["stat-label"]}>Fees collected</span>
            <span className={styles["stat-value"]}>₹4.2L</span>
            <span className={styles["stat-caption"]}>This month</span>
          </div>

          <div className={styles.stat}>
            <span className={styles["stat-label"]}>Pending actions</span>
            <span className={styles["stat-value"]}>5</span>
            <span className={styles["stat-caption"]}>Follow-ups required</span>
          </div>
        </div>

        <div className={styles.timeline}>
          <p className={styles["timeline-title"]}>Today's schedule</p>

          <ul>
            <li>
              <span className={styles.dot}></span>
              <span>10:00 AM · MERN Stack – Batch A</span>
              <span className={styles.tag}>Ongoing</span>
            </li>

            <li>
              <span className={styles.dot}></span>
              <span>02:00 PM · Java DSA – Batch C</span>
              <span className={`${styles.tag} ${styles.secondary}`}>
                Upcoming
              </span>
            </li>

            <li>
              <span className={styles.dot}></span>
              <span>05:30 PM · Aptitude – Batch F</span>
              <span className={`${styles.tag} ${styles.secondary}`}>
                Upcoming
              </span>
            </li>
          </ul>
        </div>
      </section>
        </>
    )
}

export default RightContent