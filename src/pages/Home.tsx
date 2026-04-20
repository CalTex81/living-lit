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
    id: "romeo",
    name: "Romeo",
    subtitle: "Son of Lord Montague",
    era: "Montague Family",
    years: "16-17 years",
    region: "Montague",
    flag: "�",
    image: "/Romeo.png",
    path: "/romeo",
    accentBg: "bg-green-500/10",
    accentBorder: "hover:border-green-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
    accentText: "group-hover:text-green-400",
    dateAdded: "2025-04-20"
  },
  {
    id: "juliet",
    name: "Juliet",
    subtitle: "Daughter of Lord Capulet",
    era: "Capulet Family",
    years: "13-14 years",
    region: "Capulet",
    flag: "�",
    image: "/Juliet.png",
    path: "/juliet",
    accentBg: "bg-emerald-500/10",
    accentBorder: "hover:border-emerald-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    accentText: "group-hover:text-emerald-400",
    dateAdded: "2025-04-20"
  },
  {
    id: "friar",
    name: "Friar Laurence",
    subtitle: "Franciscan Friar",
    era: "Religious Advisor",
    years: "Adult",
    region: "Verona",
    flag: "⛪",
    image: "/Friar Laurence.png",
    path: "/friarlaurence",
    accentBg: "bg-teal-500/10",
    accentBorder: "hover:border-teal-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]",
    accentText: "group-hover:text-teal-400",
    dateAdded: "2025-04-20"
  },
  {
    id: "mercutio",
    name: "Mercutio",
    subtitle: "Kinsman to the Prince",
    era: "Neutral",
    years: "Young Adult",
    region: "Verona",
    flag: "⚔️",
    image: "/Mercutio.png",
    path: "/mercutio",
    accentBg: "bg-lime-500/10",
    accentBorder: "hover:border-lime-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(163,230,53,0.15)]",
    accentText: "group-hover:text-lime-400",
    dateAdded: "2025-04-20"
  },
  {
    id: "tybalt",
    name: "Tybalt",
    subtitle: "Cousin to Juliet",
    era: "Capulet Family",
    years: "Young Adult",
    region: "Capulet",
    flag: "🔥",
    image: "/Tybalt.png",
    path: "/tybalt",
    accentBg: "bg-red-500/10",
    accentBorder: "hover:border-red-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
    accentText: "group-hover:text-red-400",
    dateAdded: "2025-04-20"
  },
  {
    id: "benvolio",
    name: "Benvolio",
    subtitle: "Nephew to Lord Montague",
    era: "Montague Family",
    years: "Young Adult",
    region: "Montague",
    flag: "🛡️",
    image: "/Benvolio.png",
    path: "/benvolio",
    accentBg: "bg-cyan-500/10",
    accentBorder: "hover:border-cyan-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    accentText: "group-hover:text-cyan-400",
    dateAdded: "2025-04-20"
  },
  {
    id: "nurse",
    name: "The Nurse",
    subtitle: "Juliet's Attendant",
    era: "Capulet Household",
    years: "Adult",
    region: "Capulet",
    flag: "�",
    image: "/TheNurse.png",
    path: "/thenurse",
    accentBg: "bg-green-600/10",
    accentBorder: "hover:border-green-600/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(22,163,74,0.15)]",
    accentText: "group-hover:text-green-500",
    dateAdded: "2025-04-20"
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
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-green-500/30 selection:text-green-200 relative overflow-hidden flex flex-col">
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/" className="flex items-center gap-3 text-stone-400 hover:text-green-400 transition-colors">
          <Terminal className="w-4 h-4 text-green-500" />
          <span>ROMEO_JULIET_DB // v1.0</span>
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
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            <Database className="w-4 h-4" />
            Verona Archive
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
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
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
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
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
