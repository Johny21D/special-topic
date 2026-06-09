import { useState } from 'react';
import { SEMESTERS } from '../data/index.js';
import MyPlanPanel from './MyPlanPanel';
import RequirementsPanel from './RequirementsPanel';
import styles from './PlanView.module.css';

export default function PlanView({ plan, setPlan, onBack }) {
  const [activeSemId, setActiveSemId] = useState('W27');

  function removeCourse(courseId, semId) {
    setPlan(prev => ({
      ...prev,
      [semId]: (prev[semId] || []).filter(id => id !== courseId),
    }));
  }

  function addCourse(courseId, semId) {
    setPlan(prev => {
      // Remove from any other semester first
      const newPlan = {};
      Object.keys(prev).forEach(s => {
        newPlan[s] = (prev[s] || []).filter(id => id !== courseId);
      });
      if (!newPlan[semId]) newPlan[semId] = [];
      if (!newPlan[semId].includes(courseId)) {
        newPlan[semId] = [...newPlan[semId], courseId];
      }
      return newPlan;
    });
  }

  function handleValidate() {
    const courses = plan[activeSemId] || [];
    if (courses.length === 0) {
      alert('No courses planned for this semester!');
    } else {
      alert(`✓ Plan validated!\n${courses.length} courses, semester looks good.`);
    }
  }

  function handleReset() {
    if (confirm('Reset entire plan? This cannot be undone.')) {
      setPlan({});
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumb}>
        <span className={styles.breadcrumbLink} onClick={onBack}>My Plans</span>
        <span className={styles.breadcrumbSep}>›</span>
        <span>Plan 1</span>
      </div>

      <div className={styles.planHeader}>
        <div>
          <span className={styles.planNameLabel}>Plan Name</span>
          <div className={styles.planNameRow}>
            <h1 className={styles.planName}>Plan 1</h1>
            <span className={styles.declaredBadge}>Declared Plan</span>
          </div>
        </div>
      </div>

      <div className={styles.layout}>
        <div className={styles.leftCol}>
          <MyPlanPanel
            plan={plan}
            activeSemId={activeSemId}
            setActiveSemId={setActiveSemId}
            onRemoveCourse={removeCourse}
            onValidate={handleValidate}
            onReset={handleReset}
          />
        </div>
        <div className={styles.rightCol}>
          <RequirementsPanel
            plan={plan}
            activeSemId={activeSemId}
            onAddCourse={addCourse}
          />
        </div>
      </div>
    </div>
  );
}
