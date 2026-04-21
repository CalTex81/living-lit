import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Romeo from './pages/profiles/Romeo';
import Juliet from './pages/profiles/Juliet';
import FriarLawrence from './pages/profiles/FriarLawrence';
import Mercutio from './pages/profiles/Mercutio';
import Tybalt from './pages/profiles/Tybalt';
import Benvolio from './pages/profiles/Benvolio';
import TheNurse from './pages/profiles/TheNurse';
import Balthasar from './pages/profiles/Balthasar';
import Paris from './pages/profiles/Paris';
import PrinceEscalus from './pages/profiles/PrinceEscalus';
import LordLadyCapulet from './pages/profiles/LordLadyCapulet';
import LordLadyMontague from './pages/profiles/LordLadyMontague';
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
        <Route path="/friarlawrence" element={<FriarLawrence />} />
        <Route path="/mercutio" element={<Mercutio />} />
        <Route path="/tybalt" element={<Tybalt />} />
        <Route path="/benvolio" element={<Benvolio />} />
        <Route path="/thenurse" element={<TheNurse />} />
        <Route path="/balthasar" element={<Balthasar />} />
        <Route path="/paris" element={<Paris />} />
        <Route path="/princeescalus" element={<PrinceEscalus />} />
        <Route path="/lordladycapulet" element={<LordLadyCapulet />} />
        <Route path="/lordladymontague" element={<LordLadyMontague />} />
      </Routes>
    </BrowserRouter>
  );
}
