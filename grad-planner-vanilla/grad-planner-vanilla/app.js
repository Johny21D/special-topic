// ============================================================
// STATE
// ============================================================
let plan = JSON.parse(JSON.stringify(DEFAULT_PLAN)); // deep copy
let activeSemId = 'W27';
let carouselStart = 0;
const CAROUSEL_VISIBLE = 3;

let mainTab = 'General Education';
let subTab = 0;

// search state
let searchQuery = '';
let searchDept = '';
let searchType = '';
let searchCredits = '';
let searchPage = 1;
const PAGE_SIZE = 12;

// ============================================================
// HELPERS
// ============================================================
function getCourse(id) {
  return CATALOG.find(c => c.id === id);
}

function getPlaced() {
  return Object.values(plan).flat();
}

function semCredits(semId) {
  return (plan[semId] || []).reduce((s, id) => s + (getCourse(id)?.credits || 0), 0);
}

function totalPlanned() {
  return getPlaced().reduce((s, id) => s + (getCourse(id)?.credits || 0), 0);
}

// ============================================================
// PAGE NAVIGATION
// ============================================================
function showMyPlans() {
  document.getElementById('myplans-page').classList.remove('hidden');
  document.getElementById('plan-page').classList.add('hidden');
}

function showPlanPage() {
  document.getElementById('myplans-page').classList.add('hidden');
  document.getElementById('plan-page').classList.remove('hidden');
  renderAll();
}

function showRequirementsView() {
  document.getElementById('requirements-view').classList.remove('hidden');
  document.getElementById('search-view').classList.add('hidden');
}

function showSearchView() {
  document.getElementById('requirements-view').classList.add('hidden');
  document.getElementById('search-view').classList.remove('hidden');
  renderSearchView();
}

// ============================================================
// RENDER: LEFT PANEL (MY PLAN)
// ============================================================
function renderCarousel() {
  const track = document.getElementById('carousel-track');
  const visibleSems = SEMESTERS.slice(carouselStart, carouselStart + CAROUSEL_VISIBLE);

  track.innerHTML = visibleSems.map(sem => {
    const courses = plan[sem.id] || [];
    const creds = semCredits(sem.id);
    const isActive = sem.id === activeSemId;
    const lines = courses.slice(0, 5).map(() => `<div class="thumb-line"></div>`).join('');
    return `
      <div class="sem-thumb ${isActive ? 'active' : ''}" data-sem="${sem.id}">
        <div class="thumb-label">${sem.label}</div>
        <div class="thumb-lines">${lines}</div>
        <div class="thumb-credits">Total Credits | ${creds}</div>
      </div>
    `;
  }).join('');

  // bind click events
  track.querySelectorAll('.sem-thumb').forEach(el => {
    el.addEventListener('click', () => {
      activeSemId = el.dataset.sem;
      renderAll();
    });
  });

  // arrow disabled states
  document.getElementById('carousel-prev').disabled = carouselStart === 0;
  document.getElementById('carousel-next').disabled = carouselStart + CAROUSEL_VISIBLE >= SEMESTERS.length;
}

function renderActiveSemester() {
  const sem = SEMESTERS.find(s => s.id === activeSemId);
  document.getElementById('active-sem-title').textContent = sem ? sem.label : '';
}

function renderCourseList() {
  const courses = plan[activeSemId] || [];
  const listEl = document.getElementById('course-list');

  if (courses.length === 0) {
    listEl.innerHTML = `<div class="empty-msg">No courses planned. Add courses from the right panel.</div>`;
    return;
  }

  listEl.innerHTML = courses.map(id => {
    const c = getCourse(id);
    if (!c) return '';
    return `
      <div class="course-row">
        <button class="remove-btn" data-course="${id}" title="Remove course">✕</button>
        <div class="course-info">
          <span class="course-name">${c.name}</span>
          <span class="course-id">${c.id}</span>
        </div>
        <span class="course-credits">${c.credits}</span>
      </div>
    `;
  }).join('');

  // bind remove buttons
  listEl.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      removeCourse(btn.dataset.course, activeSemId);
    });
  });
}

function renderTotals() {
  const total = semCredits(activeSemId);
  const totalEl = document.getElementById('total-credits');
  totalEl.textContent = total;
  totalEl.classList.toggle('overload', total > 18);
}

function renderLeftPanel() {
  renderCarousel();
  renderActiveSemester();
  renderCourseList();
  renderTotals();
}

// ============================================================
// RENDER: RIGHT PANEL (REQUIREMENTS)
// ============================================================
function renderMainTabs() {
  const el = document.getElementById('main-tabs');
  const tabs = Object.keys(REQUIREMENTS);
  el.innerHTML = tabs.map(tab => `
    <button class="main-tab ${tab === mainTab ? 'active' : ''}" data-tab="${tab}">${tab}</button>
  `).join('');

  el.querySelectorAll('.main-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      mainTab = btn.dataset.tab;
      subTab = 0;
      renderRightPanel();
    });
  });
}

function renderSubTabs() {
  const el = document.getElementById('sub-tabs');
  const tabs = REQUIREMENTS[mainTab].tabs;

  if (tabs.length <= 1) {
    el.innerHTML = '';
    return;
  }

  el.innerHTML = tabs.map((t, i) => `
    <button class="sub-tab ${i === subTab ? 'active' : ''}" data-idx="${i}">${t.label}</button>
  `).join('');

  el.querySelectorAll('.sub-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      subTab = parseInt(btn.dataset.idx);
      renderRightPanel();
    });
  });
}

function getCourseStatus(courseId) {
  let foundSem = null;
  for (const [sem, ids] of Object.entries(plan)) {
    if (ids.includes(courseId)) { foundSem = sem; break; }
  }
  if (!foundSem) return null;

  if (PAST_SEMESTERS.includes(foundSem)) {
    return { label: 'Transferred', color: '#1565C0' };
  }
  if (foundSem === activeSemId) {
    return { label: `Enrolled ${foundSem}`, color: '#1565C0' };
  }
  return { label: `Planned ${foundSem}`, color: '#388E3C' };
}

function renderRequirementsContent() {
  const tabData = REQUIREMENTS[mainTab].tabs[subTab];
  document.getElementById('section-title').textContent = tabData.label;

  const allPlaced = getPlaced();
  const completedIds = allPlaced.filter(id => {
    return Object.entries(plan).some(([sem, ids]) => PAST_SEMESTERS.includes(sem) && ids.includes(id));
  });
  const plannedIds = allPlaced.filter(id => !completedIds.includes(id));

  const tabCompleted = tabData.courses.filter(id => completedIds.includes(id))
    .reduce((s, id) => s + (getCourse(id)?.credits || 0), 0);
  const tabPlanned = tabData.courses.filter(id => plannedIds.includes(id))
    .reduce((s, id) => s + (getCourse(id)?.credits || 0), 0);

  // progress bar
  const total = tabData.total;
  const compPct = Math.min(100, Math.round((tabCompleted / total) * 100));
  const planPct = Math.min(100 - compPct, Math.round((tabPlanned / total) * 100));

  document.getElementById('bar-completed').style.width = compPct + '%';
  document.getElementById('bar-planned').style.width = planPct + '%';
  document.getElementById('progress-total').innerHTML = `${total}<span class="total-label">Total</span>`;

  // course rows
  const rowsEl = document.getElementById('course-rows');
  rowsEl.innerHTML = tabData.courses.map(id => {
    const c = getCourse(id);
    if (!c) return '';
    const status = getCourseStatus(id);
    const inPlan = allPlaced.includes(id);
    return `
      <div class="course-row-item">
        <div class="row-left">
          <button class="add-toggle-btn ${inPlan ? 'is-added' : ''}" data-course="${id}" title="${inPlan ? 'Already planned' : 'Add to current semester'}">
            ${inPlan ? '−' : '+'}
          </button>
          <div class="row-info">
            <span class="row-name">${c.name}</span>
            <span class="row-id">${c.id}</span>
          </div>
        </div>
        <div class="row-right">
          <a href="#" class="view-details">View Details</a>
          <span class="row-credits">${c.credits}</span>
          ${status ? `<span class="status-badge" style="color:${status.color}">${status.label}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');

  // bind add buttons
  rowsEl.querySelectorAll('.add-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseId = btn.dataset.course;
      if (!btn.classList.contains('is-added')) {
        addCourse(courseId, activeSemId);
      }
    });
  });
}

function renderRightPanel() {
  renderMainTabs();
  renderSubTabs();
  renderRequirementsContent();
}

// ============================================================
// SEARCH VIEW
// ============================================================
function populateSearchFilters() {
  const deptSel = document.getElementById('filter-dept');
  const typeSel = document.getElementById('filter-type');
  const credSel = document.getElementById('filter-credits');

  // only populate once
  if (deptSel.options.length <= 1) {
    Object.entries(DEPARTMENTS).forEach(([k, v]) => {
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = v;
      deptSel.appendChild(opt);
    });
  }

  if (typeSel.options.length <= 1) {
    ['Major', 'General Education', 'Religion', 'Elective', 'Core'].forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      typeSel.appendChild(opt);
    });
  }

  if (credSel.options.length <= 1) {
    [1, 2, 3, 4, 5].forEach(n => {
      const opt = document.createElement('option');
      opt.value = n;
      opt.textContent = n;
      credSel.appendChild(opt);
    });
  }
}

function getFilteredCourses() {
  const q = searchQuery.toLowerCase();
  return CATALOG.filter(c => {
    const matchQ = !q || c.id.toLowerCase().includes(q) || c.name.toLowerCase().includes(q);
    const matchDept = !searchDept || c.dept === searchDept;
    const matchType = !searchType || c.type === searchType;
    const matchCredits = !searchCredits || c.credits === parseInt(searchCredits);
    return matchQ && matchDept && matchType && matchCredits;
  });
}

function renderSearchView() {
  populateSearchFilters();

  const filtered = getFilteredCourses();
  const shown = filtered.slice(0, searchPage * PAGE_SIZE);
  const hasMore = shown.length < filtered.length;

  const allPlaced = getPlaced();
  const tbody = document.getElementById('search-results');

  if (shown.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="no-results">No courses found. Try a different search.</td></tr>`;
  } else {
    tbody.innerHTML = shown.map(c => {
      const inPlan = allPlaced.includes(c.id);
      return `
        <tr>
          <td><a href="#" class="course-link">${c.id}</a></td>
          <td class="center">${c.credits}</td>
          <td>${c.name}</td>
          <td>${DEPARTMENTS[c.dept] || c.dept}</td>
          <td>
            ${inPlan
              ? `<span class="added-badge">✓ Added</span>`
              : `<button class="row-add-btn" data-course="${c.id}">+ Add to ${activeSemId}</button>`
            }
          </td>
        </tr>
      `;
    }).join('');

    tbody.querySelectorAll('.row-add-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        addCourse(btn.dataset.course, activeSemId);
        renderSearchView();
      });
    });
  }

  document.getElementById('load-more-wrap').classList.toggle('hidden', !hasMore);
}

// ============================================================
// ACTIONS
// ============================================================
function addCourse(courseId, semId) {
  // remove from any other semester first
  Object.keys(plan).forEach(s => {
    plan[s] = (plan[s] || []).filter(id => id !== courseId);
  });
  if (!plan[semId]) plan[semId] = [];
  if (!plan[semId].includes(courseId)) {
    plan[semId].push(courseId);
  }
  renderAll();
}

function removeCourse(courseId, semId) {
  plan[semId] = (plan[semId] || []).filter(id => id !== courseId);
  renderAll();
}

function resetPlan() {
  if (confirm('Reset entire plan? This cannot be undone.')) {
    plan = {};
    renderAll();
  }
}

function validatePlan() {
  const courses = plan[activeSemId] || [];
  if (courses.length === 0) {
    alert('No courses planned for this semester!');
  } else {
    alert(`✓ Plan validated!\n${courses.length} courses, semester looks good.`);
  }
}

// ============================================================
// RENDER ALL
// ============================================================
function renderAll() {
  renderLeftPanel();
  renderRightPanel();
  // re-render search view if currently visible
  if (!document.getElementById('search-view').classList.contains('hidden')) {
    renderSearchView();
  }
}

// ============================================================
// EVENT BINDINGS (run once on load)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // page navigation
  document.getElementById('view-plan-btn').addEventListener('click', showPlanPage);
  document.getElementById('back-to-myplans').addEventListener('click', showMyPlans);

  // requirements <-> search
  document.getElementById('open-search-btn').addEventListener('click', showSearchView);
  document.getElementById('add-course-btn').addEventListener('click', showSearchView);
  document.getElementById('back-to-reqs').addEventListener('click', showRequirementsView);

  // carousel arrows
  document.getElementById('carousel-prev').addEventListener('click', () => {
    if (carouselStart > 0) {
      carouselStart--;
      renderCarousel();
    }
  });
  document.getElementById('carousel-next').addEventListener('click', () => {
    if (carouselStart + CAROUSEL_VISIBLE < SEMESTERS.length) {
      carouselStart++;
      renderCarousel();
    }
  });

  // validate / reset
  document.getElementById('validate-btn').addEventListener('click', validatePlan);
  document.getElementById('reset-btn').addEventListener('click', (e) => {
    e.preventDefault();
    resetPlan();
  });

  // search form
  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = document.getElementById('search-input').value;
    searchPage = 1;
    renderSearchView();
  });

  document.getElementById('search-input').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    searchPage = 1;
    renderSearchView();
  });

  // filters
  document.getElementById('apply-filters').addEventListener('click', () => {
    searchDept = document.getElementById('filter-dept').value;
    searchType = document.getElementById('filter-type').value;
    searchCredits = document.getElementById('filter-credits').value;
    searchPage = 1;
    renderSearchView();
  });

  document.getElementById('clear-filters').addEventListener('click', () => {
    searchQuery = '';
    searchDept = '';
    searchType = '';
    searchCredits = '';
    searchPage = 1;
    document.getElementById('search-input').value = '';
    document.getElementById('filter-dept').value = '';
    document.getElementById('filter-type').value = '';
    document.getElementById('filter-credits').value = '';
    renderSearchView();
  });

  // change handlers for filters (auto apply)
  ['filter-dept', 'filter-type', 'filter-credits'].forEach(id => {
    document.getElementById(id).addEventListener('change', () => {
      searchDept = document.getElementById('filter-dept').value;
      searchType = document.getElementById('filter-type').value;
      searchCredits = document.getElementById('filter-credits').value;
      searchPage = 1;
      renderSearchView();
    });
  });

  // load more
  document.getElementById('load-more-btn').addEventListener('click', () => {
    searchPage++;
    renderSearchView();
  });

  // initial render
  showMyPlans();
});
