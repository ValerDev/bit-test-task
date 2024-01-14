import s from './App.module.scss';
import { Dashboard } from './components/Dashboard/Dashboard';
import { UserInformationBar } from './components/UserInformationBar/UserInformationBar';
import { useAppSelector } from './hooks/storeHooks';

function App() {
  const { userInformationBar } = useAppSelector(state => state.usersSlice)
  return (
    <div className={s.app} style={userInformationBar ? {overflow: 'hidden'} : {}}>
      <Dashboard />
      <UserInformationBar />
    </div>
  );
}

export default App;
