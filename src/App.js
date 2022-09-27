import './App.css';

import HelloWorld from './pages/HelloWorld';
import { Outlet } from 'react-router-dom';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
       <Outlet /> 
    </div>
  );
}

export default App;
