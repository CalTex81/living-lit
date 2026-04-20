import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Romeo from './pages/profiles/Romeo';
import Juliet from './pages/profiles/Juliet';
import FriarLaurence from './pages/profiles/FriarLaurence';
import Mercutio from './pages/profiles/Mercutio';
import Tybalt from './pages/profiles/Tybalt';
import Benvolio from './pages/profiles/Benvolio';
import TheNurse from './pages/profiles/TheNurse';
import Landing from './pages/Landing';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/archive" element={<Home />} />
        <Route path="/romeo" element={<Romeo />} />
        <Route path="/juliet" element={<Juliet />} />
        <Route path="/friarlaurence" element={<FriarLaurence />} />
        <Route path="/mercutio" element={<Mercutio />} />
        <Route path="/tybalt" element={<Tybalt />} />
        <Route path="/benvolio" element={<Benvolio />} />
        <Route path="/thenurse" element={<TheNurse />} />
      </Routes>
    </BrowserRouter>
  );
}
