import { useState } from 'react';
import { SEMESTERS, CATALOG } from '../data/index.js';
import styles from './MyPlanPanel.module.css';

function getCourse(id) {
  return CATALOG.find(c => c.id === id);
}

function semCredits(courses) {
  return courses.reduce((s, id) => s + (getCourse(id)?.credits || 0), 0);
}

export default function MyPlanPanel({ plan, activeSemId, setActiveSemId, onRemoveCourse, onValidate, onReset }) {
  const [carouselStart, setCarouselStart] = useState(0);
  const visible = 3;
  const semList = SEMESTERS;

  const activeSem = semList.find(s => s.id === activeSemId) || semList[0];
  const activeCourses = plan[activeSemId] || [];
  const totalCredits = semCredits(activeCourses);
  const overload = totalCredits > 18;

  const canPrev = carouselStart > 0;
  const canNext = carouselStart + visible < semList.length;

  const visibleSems = semList.slice(carouselStart, carouselStart + visible);

  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <span className={styles.panelTitle}>My Plan</span>
        <div className={styles.headerRight}>
          <div className={styles.creditsInfo}>
            <span className={styles.creditsLabel}>CREDITS PER SEMESTER</span>
            <span className={styles.creditsRange}>12 – 16 credit(s) <a href="#">Edit</a></span>
            <a href="#" className={styles.copyLink}>Copy Planning</a>
          </div>
          <button className={styles.downloadBtn}>⬇ Download PDF</button>
        </div>
      </div>

      {/* Semester Carousel */}
      <div className={styles.carouselWrap}>
        <a href="#" className={styles.viewAll}>View All Semesters</a>
        <div className={styles.carousel}>
          <button
            className={styles.carouselArrow}
            onClick={() => setCarouselStart(s => Math.max(0, s - 1))}
            disabled={!canPrev}
          >‹</button>
          {visibleSems.map(sem => {
            const courses = plan[sem.id] || [];
            const creds = semCredits(courses);
            const isActive = sem.id === activeSemId;
            return (
              <div
                key={sem.id}
                className={`${styles.semThumb} ${isActive ? styles.semActive : ''}`}
                onClick={() => setActiveSemId(sem.id)}
              >
                <div className={styles.thumbLabel}>{sem.label}</div>
                <div className={styles.thumbLines}>
                  {courses.slice(0, 5).map(id => (
                    <div key={id} className={styles.thumbLine} />
                  ))}
                </div>
                <div className={styles.thumbCredits}>Total Credits <span>| {creds}</span></div>
              </div>
            );
          })}
          <button
            className={styles.carouselArrow}
            onClick={() => setCarouselStart(s => Math.min(semList.length - visible, s + 1))}
            disabled={!canNext}
          >›</button>
        </div>
      </div>

      {/* Active Semester */}
      <div className={styles.activeSem}>
        <h2 className={styles.semTitle}>{activeSem.label}</h2>
        <span className={styles.onTrack}>ON TRACK</span>
      </div>

      {/* Course List */}
      <div className={styles.courseList}>
        {activeCourses.map(id => {
          const c = getCourse(id);
          if (!c) return null;
          return (
            <div key={id} className={styles.courseRow}>
              <button
                className={styles.removeBtn}
                onClick={() => onRemoveCourse(id, activeSemId)}
                title="Remove course"
              >✕</button>
              <div className={styles.courseInfo}>
                <span className={styles.courseName}>{c.name}</span>
                <span className={styles.courseId}>{c.id}</span>
              </div>
              <span className={styles.courseCredits}>{c.credits}</span>
            </div>
          );
        })}

        {activeCourses.length === 0 && (
          <div className={styles.emptyMsg}>No courses planned. Add courses from the right panel.</div>
        )}
      </div>

      <div className={styles.totalRow}>
        Total Credits: <strong className={`${styles.totalNum} ${overload ? styles.overload : ''}`}>{totalCredits}</strong>
      </div>

      <div className={styles.panelFooter}>
        <a href="#" className={styles.footerLink}>All Classes Planned?</a>
        <button className={styles.validateBtn} onClick={onValidate}>VALIDATE</button>
        <div className={styles.footerLinks2}>
          <a href="#" className={styles.footerLink2}>⟳ View Plan History</a>
          <a href="#" className={styles.footerLink2} onClick={e => { e.preventDefault(); onReset(); }}>⟳ Reset My Plan</a>
        </div>
      </div>
    </div>
  );
}
