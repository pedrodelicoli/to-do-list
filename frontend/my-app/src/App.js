import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Provider from './Context/Provider';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
