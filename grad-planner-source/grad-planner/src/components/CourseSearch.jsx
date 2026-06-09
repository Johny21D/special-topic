import { useState, useMemo } from 'react';
import { CATALOG, DEPARTMENTS } from '../data/index.js';
import styles from './CourseSearch.module.css';

const PAGE_SIZE = 12;

export default function CourseSearch({ plan, activeSemId, onAddCourse, onClose }) {
  const [query, setQuery] = useState('');
  const [dept, setDept] = useState('');
  const [courseType, setCourseType] = useState('');
  const [credits, setCredits] = useState('');
  const [page, setPage] = useState(1);

  const allPlaced = Object.values(plan).flat();

  const filtered = useMemo(() => {
    return CATALOG.filter(c => {
      const q = query.toLowerCase();
      const matchQ = !query || c.id.toLowerCase().includes(q) || c.name.toLowerCase().includes(q);
      const matchDept = !dept || c.dept === dept;
      const matchType = !courseType || c.type === courseType;
      const matchCredits = !credits || c.credits === parseInt(credits);
      return matchQ && matchDept && matchType && matchCredits;
    });
  }, [query, dept, courseType, credits]);

  const shown = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = shown.length < filtered.length;

  function handleSearch(e) {
    e.preventDefault();
    setPage(1);
  }

  function clearAll() {
    setDept('');
    setCourseType('');
    setCredits('');
    setQuery('');
    setPage(1);
  }

  return (
    <div className={styles.wrap}>
      <button className={styles.backBtn} onClick={onClose}>← Back to Requirements</button>

      <form onSubmit={handleSearch} className={styles.searchBar}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          className={styles.searchInput}
          value={query}
          onChange={e => { setQuery(e.target.value); setPage(1); }}
          placeholder="Search courses..."
          autoFocus
        />
        <button type="submit" className={styles.searchBtn}>Search</button>
      </form>

      <div className={styles.filterRow}>
        <span className={styles.filterLabel}>or Search by Category</span>
        <select className={styles.select} value={dept} onChange={e => { setDept(e.target.value); setPage(1); }}>
          <option value="">Department</option>
          {Object.entries(DEPARTMENTS).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
        <select className={styles.select} value={courseType} onChange={e => { setCourseType(e.target.value); setPage(1); }}>
          <option value="">Course Type</option>
          {['Major','General Education','Religion','Elective','Core'].map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <select className={styles.select} value={credits} onChange={e => { setCredits(e.target.value); setPage(1); }}>
          <option value="">Credits</option>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <button className={styles.applyBtn} onClick={() => setPage(1)}>Apply</button>
        <button className={styles.clearBtn} onClick={clearAll}>Clear All</button>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Course</th>
              <th>Credits</th>
              <th>Title</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shown.map(c => {
              const inPlan = allPlaced.includes(c.id);
              return (
                <tr key={c.id}>
                  <td><a href="#" className={styles.courseLink}>{c.id}</a></td>
                  <td className={styles.center}>{c.credits}</td>
                  <td>{c.name}</td>
                  <td>{DEPARTMENTS[c.dept] || c.dept}</td>
                  <td>
                    {inPlan ? (
                      <span className={styles.addedBadge}>✓ Added</span>
                    ) : (
                      <button
                        className={styles.addBtn}
                        onClick={() => { onAddCourse(c.id, activeSemId); }}
                      >
                        + Add to {activeSemId}
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
            {shown.length === 0 && (
              <tr>
                <td colSpan={5} className={styles.noResults}>No courses found. Try a different search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <div className={styles.loadMore}>
          <button className={styles.loadMoreBtn} onClick={() => setPage(p => p + 1)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
