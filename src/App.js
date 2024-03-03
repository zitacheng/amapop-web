
import './App.css';

import Home from './Home.js';
import Password from './Password.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/password' element={<Password/>}></Route>
    </Routes>
  );
}

export default App;
