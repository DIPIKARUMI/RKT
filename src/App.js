import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import Crypto from './pages/Crypto/Crypto';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/coins/:id" element={<Crypto />} />
      </Routes>
    </Router>
  );
};

export default App;
