import { useState } from 'react';
import TopBar from './components/TopBar';
import MyPlans from './components/MyPlans';
import PlanView from './components/PlanView';
import { DEFAULT_PLAN } from './data/index.js';
import './styles/global.css';

export default function App() {
  const [page, setPage] = useState('myplans'); // 'myplans' | 'plan'
  const [plan, setPlan] = useState(DEFAULT_PLAN);

  return (
    <div>
      <TopBar />
      {page === 'myplans' && (
        <MyPlans onViewPlan={() => setPage('plan')} />
      )}
      {page === 'plan' && (
        <PlanView
          plan={plan}
          setPlan={setPlan}
          onBack={() => setPage('myplans')}
        />
      )}
    </div>
  );
}
