import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/signin';
import Register from './pages/register';
import Player from './pages/player';
import NowPlaying from './pages/nowplaying';

import './global.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/player" element={<Player />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
      </Routes>
    </Router>
  );
}
