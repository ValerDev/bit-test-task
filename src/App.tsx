import React from 'react';
import s from './App.module.scss';
import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className={s.app}>
     <Dashboard/>
    </div>
  );
}

export default App;
