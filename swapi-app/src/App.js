import React from 'react';
import Characters from './components/Characters';
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h1 className={'header1'}>Welcome to SWAPI App</h1>
        <Routes>
          <Route exact path="/" element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
