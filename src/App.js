import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  
  

  return (
    <div className="App">
      <Navigation/>
      <Header text={"Days on a Project Counter"} />
      <Outlet />
      <footer>Copyright© 2023</footer>
    </div>
  );
}

export default App;
