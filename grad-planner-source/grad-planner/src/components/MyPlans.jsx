import styles from './MyPlans.module.css';

export default function MyPlans({ onViewPlan }) {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Plans</h1>
        <div className={styles.headerBtns}>
          <button className={styles.outlineBtn}>Compare Plans</button>
          <button className={styles.outlineBtn}>All Plan Histories</button>
        </div>
      </div>

      {/* Declared Plan */}
      <div className={styles.planCard}>
        <div className={styles.planBadge} style={{ background: 'var(--green)' }}>Declared Plan</div>
        <div className={styles.planBody}>
          <div className={styles.planTop}>
            <div className={styles.planLeft}>
              <div className={styles.planTitleRow}>
                <span className={styles.chevron}>∧</span>
                <h2 className={styles.planName}>Plan 1</h2>
              </div>
              <div className={styles.planMeta}>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>DEGREE</span>
                  <span className={styles.metaValue}>Bachelor of Science in Software Engineering - UG25</span>
                  <a href="#" className={styles.metaLink}>Change Major</a>
                </div>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>CERTIFICATE</span>
                  <span className={styles.metaValue}>C165 Software Design Certificate - UG25</span>
                  <a href="#" className={styles.metaLink}>Change Certificate</a>
                </div>
              </div>
            </div>
            <div className={styles.planRight}>
              <span className={styles.statusLabel}>Plan Status : </span>
              <span className={styles.statusIn}>In-Progress</span>
              <button className={styles.dotsBtn}>⋮</button>
            </div>
          </div>
          <div className={styles.planActions}>
            <button className={styles.outlineBtn}>DUPLICATE</button>
            <button className={styles.greenBtn} onClick={onViewPlan}>VIEW PLAN</button>
          </div>
        </div>
      </div>

      {/* Alternate Plan */}
      <div className={styles.planCard}>
        <div className={styles.planBadge} style={{ background: '#555' }}>Alternate Plan</div>
        <div className={styles.planBody}>
          <div className={styles.planTop}>
            <div className={styles.planLeft}>
              <div className={styles.planTitleRow}>
                <span className={styles.chevron}>∨</span>
                <h2 className={styles.planNameAlt}>Plan_9/9/2025 11:27:56 AM_443_UG25</h2>
              </div>
            </div>
            <div className={styles.planRight}>
              <span className={styles.statusLabel}>Plan Status: </span>
              <span className={styles.statusAdvisor}>Advisor Recommendation</span>
              <button className={styles.darkBtn}>View Plan</button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Alternate Plan */}
      <button className={styles.createAlt}>
        + Create Alternate Plan
      </button>
    </div>
  );
}
