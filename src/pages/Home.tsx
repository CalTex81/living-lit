import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Database, Terminal, ChevronRight, Search, Shield, Filter } from 'lucide-react';

type Record = {
  id: string;
  name: string;
  subtitle: string;
  era: string;
  years: string;
  region: string;
  flag: string;
  image: string;
  path: string;
  accentBg: string;
  accentBorder: string;
  accentShadow: string;
  accentText: string;
  dateAdded: string;
};

const records: Record[] = [
  {
    id: "taizu",
    name: "Emperor Taizu",
    subtitle: "Zhao Kuangyin",
    era: "Song Dynasty",
    years: "960-976",
    region: "Asia",
    flag: "🌏",
    image: "/Emperor Taizu.png",
    path: "/taizu",
    accentBg: "bg-rose-500/10",
    accentBorder: "hover:border-rose-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(225,29,72,0.15)]",
    accentText: "group-hover:text-rose-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "zhuxi",
    name: "Zhu Xi",
    subtitle: "The Great Synthesizer",
    era: "Song Dynasty",
    years: "1130-1200",
    region: "Asia",
    flag: "🌏",
    image: "/Zhu Xi.png",
    path: "/zhuxi",
    accentBg: "bg-emerald-500/10",
    accentBorder: "hover:border-emerald-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    accentText: "group-hover:text-emerald-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "wuzetian",
    name: "Wu Zetian",
    subtitle: "Empress Regnant of China",
    era: "Tang / Zhou Dynasty",
    years: "690-705",
    region: "Asia",
    flag: "🌏",
    image: "/Empress Wu Zetian.png",
    path: "/wuzetian",
    accentBg: "bg-amber-500/10",
    accentBorder: "hover:border-amber-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    accentText: "group-hover:text-amber-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "suryavarman",
    name: "Suryavarman II",
    subtitle: "Architect of Angkor Wat",
    era: "Angkorian Period",
    years: "1113-1150",
    region: "Asia",
    flag: "🇰🇭",
    image: "/Suryavarman II.png",
    path: "/suryavarman",
    accentBg: "bg-lime-500/10",
    accentBorder: "hover:border-lime-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]",
    accentText: "group-hover:text-lime-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "muhammad",
    name: "Muhammad",
    subtitle: "Prophet of Islam",
    era: "Early Islamic Period",
    years: "570-632",
    region: "Middle East",
    flag: "🕌",
    image: "/Muhammad Ibn Abdullah.png",
    path: "/muhammad",
    accentBg: "bg-sky-500/10",
    accentBorder: "hover:border-sky-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
    accentText: "group-hover:text-sky-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "al-tusi",
    name: "Nasir al-Din al-Tusi",
    subtitle: "The Polymath of Maragheh",
    era: "Mongol Ilkhanate",
    years: "1201-1274",
    region: "Middle East",
    flag: "🕌",
    image: "/Nasir al-Din al-Tusi.png",
    path: "/al-tusi",
    accentBg: "bg-violet-500/10",
    accentBorder: "hover:border-violet-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]",
    accentText: "group-hover:text-violet-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "bauniyyah",
    name: "Aishah al-Ba'uniyyah",
    subtitle: "Sufi Master & Poet",
    era: "Mamluk Sultanate",
    years: "1460-1517",
    region: "Middle East",
    flag: "🕌",
    image: "/Aishah al-Ba'uniyyah.png",
    path: "/bauniyyah",
    accentBg: "bg-teal-500/10",
    accentBorder: "hover:border-teal-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]",
    accentText: "group-hover:text-teal-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "mamluks",
    name: "Mamluk Sultans",
    subtitle: "Defenders of the Levant",
    era: "Mamluk Sultanate",
    years: "1250-1517",
    region: "Middle East",
    flag: "🕌",
    image: "/Mamluk Sultans.png",
    path: "/mamluks",
    accentBg: "bg-orange-500/10",
    accentBorder: "hover:border-orange-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]",
    accentText: "group-hover:text-orange-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "yoritomo",
    name: "Minamoto Yoritomo",
    subtitle: "The First Shogun",
    era: "Kamakura Japan",
    years: "1147-1199",
    region: "Asia",
    flag: "🇯🇵",
    image: "/Miramoto Yoritomo.png",
    path: "/yoritomo",
    accentBg: "bg-indigo-500/10",
    accentBorder: "hover:border-indigo-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(129,140,248,0.15)]",
    accentText: "group-hover:text-indigo-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "genghis",
    name: "Genghis Khan",
    subtitle: "Universal Ruler",
    era: "Mongol Empire",
    years: "1162-1227",
    region: "Asia",
    flag: "🌏",
    image: "/Genghis Khan.png",
    path: "/genghiskhan",
    accentBg: "bg-rose-600/10",
    accentBorder: "hover:border-rose-600/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(225,29,72,0.15)]",
    accentText: "group-hover:text-rose-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "kublaikhan",
    name: "Kublai Khan",
    subtitle: "Founder of Yuan Dynasty",
    era: "Yuan Dynasty",
    years: "1215-1294",
    region: "Asia",
    flag: "🌏",
    image: "/Kublai Khan.png",
    path: "/kublaikhan",
    accentBg: "bg-amber-600/10",
    accentBorder: "hover:border-amber-600/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(217,119,6,0.15)]",
    accentText: "group-hover:text-amber-500",
    dateAdded: "2025-04-19"
  },
  {
    id: "polo",
    name: "Marco Polo",
    subtitle: "The Silk Road Envoy",
    era: "Medieval Europe / Yuan China",
    years: "1254-1324",
    region: "Europe",
    flag: "🇮🇹",
    image: "/Marco Polo.png",
    path: "/marcopolo",
    accentBg: "bg-amber-500/10",
    accentBorder: "hover:border-amber-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    accentText: "group-hover:text-amber-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "washington",
    name: "George Washington",
    subtitle: "Father of His Country",
    era: "Revolutionary Era",
    years: "1732-1799",
    region: "North America",
    flag: "🇺🇸",
    image: "/George Washington.png",
    path: "/washington",
    accentBg: "bg-blue-600/10",
    accentBorder: "hover:border-blue-600/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]",
    accentText: "group-hover:text-blue-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "ibnbattuta",
    name: "Ibn Battuta",
    subtitle: "The Greatest Traveler",
    era: "Islamic World",
    years: "1304-1369",
    region: "Africa",
    flag: "🌍",
    image: "/Ibn Battuta.png",
    path: "/ibnbattuta",
    accentBg: "bg-cyan-500/10",
    accentBorder: "hover:border-cyan-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    accentText: "group-hover:text-cyan-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "zhenghe",
    name: "Zheng He",
    subtitle: "The Star Fleet Commander",
    era: "Ming Dynasty",
    years: "1371-1433",
    region: "Asia",
    flag: "🌏",
    image: "/Zhenge.png",
    path: "/zhenghe",
    accentBg: "bg-sky-500/10",
    accentBorder: "hover:border-sky-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
    accentText: "group-hover:text-sky-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "gandhi",
    name: "Mahatma Gandhi",
    subtitle: "Apostle of Non-Violence",
    era: "Modern India",
    years: "1869-1948",
    region: "Asia",
    flag: "🇮🇳",
    image: "/Mahatma Ghandi.png",
    path: "/gandhi",
    accentBg: "bg-orange-500/10",
    accentBorder: "hover:border-orange-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]",
    accentText: "group-hover:text-orange-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "urcachillay",
    name: "Urcachillay",
    subtitle: "Inca Deity of Herds",
    era: "Inca Empire",
    years: "Pre-Columbian",
    region: "South America",
    flag: "🇵🇪",
    image: "/Urcachillay.png",
    path: "/urcachillay",
    accentBg: "bg-fuchsia-500/10",
    accentBorder: "hover:border-fuchsia-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]",
    accentText: "group-hover:text-fuchsia-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "alrazi",
    name: "Al-Razi",
    subtitle: "The Great Physician",
    era: "Islamic Golden Age",
    years: "854-925",
    region: "Middle East",
    flag: "🕌",
    image: "/Al Razi.png",
    path: "/alrazi",
    accentBg: "bg-purple-500/10",
    accentBorder: "hover:border-purple-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    accentText: "group-hover:text-purple-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "mansamusa",
    name: "Mansa Musa",
    subtitle: "The Wealthiest Man in History",
    era: "Mali Empire",
    years: "1280-1337",
    region: "Africa",
    flag: "🌍",
    image: "/Mansa Musa.png",
    path: "/mansamusa",
    accentBg: "bg-yellow-500/10",
    accentBorder: "hover:border-yellow-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    accentText: "group-hover:text-yellow-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "sundiata",
    name: "Sundiata Keita",
    subtitle: "The Lion King",
    era: "Mali Empire",
    years: "1217-1255",
    region: "Africa",
    flag: "🌍",
    image: "/Sundiata Keita.png",
    path: "/sundiata",
    accentBg: "bg-green-500/10",
    accentBorder: "hover:border-green-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
    accentText: "group-hover:text-green-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "ibnkhaldun",
    name: "Ibn Khaldun",
    subtitle: "Father of Sociology",
    era: "Islamic Golden Age",
    years: "1332-1406",
    region: "Middle East",
    flag: "🕌",
    image: "/Ibn Khaldun.png",
    path: "/ibnkhaldun",
    accentBg: "bg-stone-500/10",
    accentBorder: "hover:border-stone-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(120,113,108,0.15)]",
    accentText: "group-hover:text-stone-400",
    dateAdded: "2025-04-19"
  },
  {
    id: "princehenry",
    name: "Prince Henry",
    subtitle: "The Navigator",
    era: "Age of Discovery",
    years: "1394-1460",
    region: "Europe",
    flag: "🇵🇹",
    image: "/Prince Henry.png",
    path: "/princehenry",
    accentBg: "bg-red-600/10",
    accentBorder: "hover:border-red-600/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]",
    accentText: "group-hover:text-red-500",
    dateAdded: "2025-04-19"
  },
  {
    id: "tamerlane",
    name: "Tamerlane",
    subtitle: "Timur the Lame",
    era: "Timurid Empire",
    years: "1336-1405",
    region: "Central Asia",
    flag: "🐎",
    image: "/Tamerlane.png",
    path: "/tamerlane",
    accentBg: "bg-amber-700/10",
    accentBorder: "hover:border-amber-700/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(180,83,9,0.15)]",
    accentText: "group-hover:text-amber-600",
    dateAdded: "2025-04-19"
  }
];

// Get unique regions for the filter bar
const regions = Array.from(new Set(records.map(r => r.region)));

export default function Home() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecords = records.filter(r => {
    const matchesFilter = filter === 'All' || r.region === filter;
    const matchesSearch = searchQuery === '' || 
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.era.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.years.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Group filtered records by region
  const groupedByRegion: { region: string; flag: string; items: Record[] }[] = [];
  const seen = new Set<string>();
  for (const r of filteredRecords) {
    if (!seen.has(r.region)) {
      seen.add(r.region);
      groupedByRegion.push({
        region: r.region,
        flag: r.flag,
        items: filteredRecords.filter(x => x.region === r.region)
      });
    }
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-rose-500/30 selection:text-rose-200 relative overflow-hidden flex flex-col">
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/" className="flex items-center gap-3 text-stone-400 hover:text-rose-400 transition-colors">
          <Terminal className="w-4 h-4 text-rose-500" />
          <span>AP_WORLD_HIST_DB // v2.05</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          SYSTEM_READY
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex-1 flex flex-col items-center pt-32 px-6 pb-20 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6 max-w-2xl mb-12 w-full"
        >
          <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(225,29,72,0.2)]">
            <Database className="w-4 h-4" />
            Central Archive
          </div>
          <h1 className="font-sans text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Select Record
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed max-w-xl mx-auto">
            Access compiled historical profiles. Use the interface below to initialize a simulated interaction or retrieve databanks.
          </p>
          
          {/* SEARCH & FILTERS */}
          <div className="flex flex-col items-center gap-4 mx-auto w-full max-w-2xl mt-8">
            <div className="glass-panel flex items-center gap-3 px-4 py-3 rounded-lg border-stone-700/50 w-full">
              <Search className="w-5 h-5 text-stone-500" />
              <input 
                type="text" 
                placeholder="Search by name, era, or civilization..." 
                className="bg-transparent border-none outline-none text-stone-300 w-full font-mono text-sm placeholder:text-stone-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-stone-900/50 p-1.5 rounded-lg border border-stone-800">
              <Filter className="w-4 h-4 text-stone-500 ml-2" />
              <button
                onClick={() => setFilter('All')}
                className={`px-4 py-1.5 rounded text-sm font-mono transition-colors ${
                  filter === 'All' 
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                    : 'text-stone-400 hover:text-stone-200 hover:bg-white/5 border border-transparent'
                }`}
              >
                All
              </button>
              {regions.map(r => {
                const flag = records.find(record => record.region === r)?.flag || '';
                return (
                  <button
                    key={r}
                    onClick={() => setFilter(r)}
                    className={`px-4 py-1.5 rounded text-sm font-mono transition-colors ${
                      filter === r 
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                        : 'text-stone-400 hover:text-stone-200 hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {flag} {r}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* GROUPED CHARACTER GRID */}
        <div className="w-full max-w-6xl mx-auto space-y-12">
          <AnimatePresence mode='popLayout'>
            {groupedByRegion.map((group) => (
              <motion.div
                key={group.region}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Region Group Label */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl">{group.flag}</span>
                  <div>
                    <h2 className="font-mono text-lg text-white uppercase tracking-widest">{group.region}</h2>
                    <p className="font-mono text-xs text-stone-500">{group.items.length} RECORD{group.items.length !== 1 ? 'S' : ''} FOUND</p>
                  </div>
                  <div className="flex-1 h-px bg-stone-800 ml-4"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((record, index) => (
                    <motion.div 
                      key={record.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link to={record.path} className="block group">
                        <div className={`glass-panel overflow-hidden rounded-xl border border-stone-800 ${record.accentBorder} transition-all duration-300 ${record.accentShadow} relative h-80 flex items-end`}>
                          {/* Background image preview */}
                          <div className="absolute inset-0 z-0 pointer-events-none">
                            <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/10 transition-colors duration-500 z-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent z-10"></div>
                            <img 
                              src={record.image} 
                              alt="" 
                              className="absolute -right-10 top-6 w-64 h-auto opacity-60 group-hover:opacity-90 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-500"
                            />
                            <div className="absolute inset-0 tech-grid-dots opacity-20 group-hover:opacity-40 transition-opacity"></div>
                          </div>

                          {/* Content */}
                          <div className="relative z-20 p-6 w-full">
                            <div className="flex items-center justify-between mb-4">
                              <span className={`font-mono text-xs ${record.accentBg} px-2 py-1 rounded text-stone-300`}>
                                {record.flag} {record.era}
                              </span>
                              <span className="font-mono text-[10px] text-stone-500">ID: {record.years}</span>
                            </div>
                            <h3 className={`font-sans text-2xl font-bold text-white mb-1 transition-colors ${record.accentText}`}>{record.name}</h3>
                            <p className="font-mono text-xs text-stone-400 mb-4">{record.subtitle}</p>
                            
                            <div className="flex items-center text-sm font-mono text-stone-500 group-hover:text-stone-200 transition-colors">
                              Access Profile <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
