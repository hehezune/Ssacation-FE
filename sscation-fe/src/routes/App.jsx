import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className="board">
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default App;
