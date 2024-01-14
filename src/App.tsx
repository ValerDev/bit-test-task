import s from './App.module.scss';
import { Dashboard } from './components/Dashboard/Dashboard';
import { UserInformationBar } from './components/UserInformationBar/UserInformationBar';

function App() {

  return (
    <div className={s.app}>
     <Dashboard/>
     <UserInformationBar/>
    </div>
  );
}

export default App;
