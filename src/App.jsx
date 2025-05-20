import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import MainPage from './pages/MainPage';
import GamesPage from './pages/GamesPage';
import RequestsPage from './pages/RequestsPage';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename='/g3/PolancoDiegoA00399926'>
      <CssBaseline />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/requests" element={<RequestsPage />} />
      </Routes>
    </Router>
  )
}

export default App