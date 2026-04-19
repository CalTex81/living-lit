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
import GenghisKhan from './pages/profiles/GenghisKhan';
import MarcoPolo from './pages/profiles/MarcoPolo';
import GeorgeWashington from './pages/profiles/GeorgeWashington';
import MinamotoYoritomo from './pages/profiles/MinamotoYoritomo';
import KublaiKhan from './pages/profiles/KublaiKhan';
import IbnBattuta from './pages/profiles/IbnBattuta';
import ZhengHe from './pages/profiles/ZhengHe';
import MahatmaGandhi from './pages/profiles/MahatmaGandhi';
import Landing from './pages/Landing';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/archive" element={<Home />} />
        <Route path="/taizu" element={<EmperorTaizu />} />
        <Route path="/zhuxi" element={<ZhuXi />} />
        <Route path="/wuzetian" element={<WuZetian />} />
        <Route path="/muhammad" element={<Muhammad />} />
        <Route path="/al-tusi" element={<NasirAlDinAlTusi />} />
        <Route path="/bauniyyah" element={<AishahAlBauniyyah />} />
        <Route path="/mamluks" element={<MamlukSultans />} />
        <Route path="/suryavarman" element={<SuryavarmanII />} />
        <Route path="/genghiskhan" element={<GenghisKhan />} />
        <Route path="/marcopolo" element={<MarcoPolo />} />
        <Route path="/washington" element={<GeorgeWashington />} />
        <Route path="/yoritomo" element={<MinamotoYoritomo />} />
        <Route path="/kublaikhan" element={<KublaiKhan />} />
        <Route path="/ibnbattuta" element={<IbnBattuta />} />
        <Route path="/zhenghe" element={<ZhengHe />} />
        <Route path="/gandhi" element={<MahatmaGandhi />} />
      </Routes>
    </BrowserRouter>
  );
}
