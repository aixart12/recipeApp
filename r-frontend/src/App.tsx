import React from 'react';
import './App.css';
import Recipelist from './components/Recipelist'
import Mylist from './components/Mylist';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Mylist />}></Route>
      <Route path="/r" element={<Recipelist />}></Route>

    </Routes>
 
    </div>
  );
}

export default App;
