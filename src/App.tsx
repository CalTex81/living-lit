import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmperorTaizu from './pages/profiles/EmperorTaizu';
import ZhuXi from './pages/profiles/ZhuXi';
import WuZetian from './pages/profiles/WuZetian';
import Muhammad from './pages/profiles/Muhammad';
import NasirAlDinAlTusi from './pages/profiles/NasirAlDinAlTusi';
import AishahAlBauniyyah from './pages/profiles/AishahAlBauniyyah';
import MamlukSultans from './pages/profiles/MamlukSultans';
import SuryavarmanII from './pages/profiles/SuryavarmanII';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/taizu" element={<EmperorTaizu />} />
        <Route path="/zhuxi" element={<ZhuXi />} />
        <Route path="/wuzetian" element={<WuZetian />} />
        <Route path="/muhammad" element={<Muhammad />} />
        <Route path="/al-tusi" element={<NasirAlDinAlTusi />} />
        <Route path="/bauniyyah" element={<AishahAlBauniyyah />} />
        <Route path="/mamluks" element={<MamlukSultans />} />
        <Route path="/suryavarman" element={<SuryavarmanII />} />
      </Routes>
    </BrowserRouter>
  );
}
