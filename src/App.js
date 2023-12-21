import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
  
  

  return (
    <div className="App">
      <Navigation/>
      <Header text={"Days on a Project Counter"} />
      <Outlet />
      <Footer text='Copyright© 2023' />
    </div>
  );
}

export default App;
