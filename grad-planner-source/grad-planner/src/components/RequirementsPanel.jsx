import { useState } from 'react';
import { REQUIREMENTS, CATALOG } from '../data/index.js';
import CourseSearch from './CourseSearch';
import styles from './RequirementsPanel.module.css';

function getCourse(id) {
  return CATALOG.find(c => c.id === id);
}

function getStatus(courseId, plan, activeSemId) {
  const allPlaced = Object.entries(plan).flatMap(([sem, ids]) => ids.map(id => ({ id, sem })));
  const entry = allPlaced.find(e => e.id === courseId);
  if (!entry) return null;
  const pastSems = ['F24', 'W25', 'S25', 'F25', 'W26'];
  if (pastSems.includes(entry.sem)) return { label: 'Transferred', color: '#1565C0' };
  if (entry.sem === activeSemId) return { label: `Enrolled ${entry.sem}`, color: '#1565C0' };
  return { label: `Planned ${entry.sem}`, color: '#388E3C' };
}

function ProgressBar({ completed, planned, total }) {
  const compPct = Math.min(100, Math.round((completed / total) * 100));
  const planPct = Math.min(100 - compPct, Math.round((planned / total) * 100));
  return (
    <div className={styles.progressWrap}>
      <div className={styles.progressBar}>
        <div className={styles.barCompleted} style={{ width: compPct + '%' }} />
        <div className={styles.barPlanned} style={{ width: planPct + '%' }} />
      </div>
      <span className={styles.progressTotal}>{total}<br /><span className={styles.totalLabel}>Total</span></span>
    </div>
  );
}

export default function RequirementsPanel({ plan, activeSemId, onAddCourse }) {
  const [mainTab, setMainTab] = useState('General Education');
  const [subTab, setSubTab] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  const mainTabs = Object.keys(REQUIREMENTS);
  const reqData = REQUIREMENTS[mainTab];
  const subTabs = reqData.tabs;
  const activeSubTab = subTabs[subTab] || subTabs[0];

  const allPlaced = Object.values(plan).flat();

  const completedIds = allPlaced.filter(id => {
    const pastSems = ['F24', 'W25', 'S25', 'F25', 'W26'];
    return Object.entries(plan).some(([sem, ids]) => pastSems.includes(sem) && ids.includes(id));
  });

  const plannedIds = allPlaced.filter(id => !completedIds.includes(id));

  const tabCompleted = activeSubTab.courses.filter(id => completedIds.includes(id))
    .reduce((s, id) => s + (getCourse(id)?.credits || 0), 0);
  const tabPlanned = activeSubTab.courses.filter(id => plannedIds.includes(id))
    .reduce((s, id) => s + (getCourse(id)?.credits || 0), 0);

  function handleSubTab(idx) {
    setSubTab(idx);
  }

  if (showSearch) {
    return (
      <CourseSearch
        plan={plan}
        activeSemId={activeSemId}
        onAddCourse={onAddCourse}
        onClose={() => setShowSearch(false)}
      />
    );
  }

  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2 className={styles.panelTitle}>Requirements &amp; Courses</h2>
        <div className={styles.headerRight}>
          <button className={styles.searchBtn} onClick={() => setShowSearch(true)}>
            Search Courses 🔍
          </button>
          <a href="#" className={styles.availLink}>View Course Availability</a>
        </div>
      </div>

      {/* Main Tabs */}
      <div className={styles.mainTabs}>
        {mainTabs.map(tab => (
          <button
            key={tab}
            className={`${styles.mainTab} ${mainTab === tab ? styles.mainTabActive : ''}`}
            onClick={() => { setMainTab(tab); setSubTab(0); }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sub Tabs */}
      {subTabs.length > 1 && (
        <div className={styles.subTabs}>
          {subTabs.map((t, i) => (
            <button
              key={t.label}
              className={`${styles.subTab} ${subTab === i ? styles.subTabActive : ''}`}
              onClick={() => handleSubTab(i)}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      <div className={styles.content}>
        <h3 className={styles.sectionTitle}>{activeSubTab.label}</h3>

        <ProgressBar
          completed={tabCompleted}
          planned={tabPlanned}
          total={activeSubTab.total}
        />

        <div className={styles.legend}>
          <span className={styles.legendItem}><span className={styles.dot} style={{ background: '#1565C0' }} /> Completed</span>
          <span className={styles.legendItem}><span className={styles.dot} style={{ background: '#4CAF50' }} /> Planned/Enrolled</span>
          <span className={styles.legendItem}><span className={styles.dotOutline} /> Unplanned</span>
        </div>

        {/* Add Course Button */}
        <div className={styles.addWrap}>
          <button className={styles.addCourseBtn} onClick={() => setShowSearch(true)}>
            🔍 Search Courses
          </button>
        </div>

        {/* Planned / Completed / Excess tabs */}
        <div className={styles.statusTabs}>
          <span className={styles.statusTab} style={{ borderBottom: '2px solid var(--green)', color: 'var(--green-dark)' }}>Planned</span>
          <span className={styles.statusTab}>Completed</span>
          <span className={styles.statusTab}>Excess</span>
        </div>

        {/* Course Rows */}
        <div className={styles.courseRows}>
          {activeSubTab.courses.map(id => {
            const c = getCourse(id);
            if (!c) return null;
            const status = getStatus(id, plan, activeSemId);
            const inPlan = allPlaced.includes(id);
            return (
              <div key={id} className={styles.courseRow}>
                <div className={styles.rowLeft}>
                  <button
                    className={`${styles.addBtn} ${inPlan ? styles.addBtnMinus : ''}`}
                    onClick={() => !inPlan && onAddCourse(id, activeSemId)}
                    title={inPlan ? 'Already planned' : 'Add to current semester'}
                  >
                    {inPlan ? '−' : '+'}
                  </button>
                  <div className={styles.rowInfo}>
                    <span className={styles.rowName}>{c.name}</span>
                    <span className={styles.rowId}>{c.id}</span>
                  </div>
                </div>
                <div className={styles.rowRight}>
                  <a href="#" className={styles.viewDetails}>View Details</a>
                  <span className={styles.rowCredits}>{c.credits}</span>
                  {status && (
                    <span className={styles.statusBadge} style={{ color: status.color }}>{status.label}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
