import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Client from './Client/Client';

import Bank from './Banks/Bank';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/bank' element={<Bank/>}/>
      <Route path='/client' element={<Client/>}/>
      </Routes>
    </Router>
  );
}


export default App;
