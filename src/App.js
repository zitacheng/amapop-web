
import './App.css';
import Home from './Home.js';
import Password from './Password.js';
import Politic from './Politic.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/password' element={<Password/>}></Route>
      <Route exact path='/politic' element={<Politic/>}></Route>
    </Routes>
  );
}

export default App;
