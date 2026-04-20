import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Database, Terminal, ChevronRight, Search, Filter, ChevronDown, BookOpen } from 'lucide-react';

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
  story: string;
};

const records: Record[] = [
  {
    id: "romeo",
    name: "Romeo",
    subtitle: "Son of Lord Montague",
    era: "Montague Family",
    years: "16-17 years",
    region: "Montague",
    flag: "🏠",
    image: "/Romeo.png",
    path: "/romeo",
    accentBg: "bg-green-500/10",
    accentBorder: "hover:border-green-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
    accentText: "group-hover:text-green-400",
    dateAdded: "2025-04-20",
    story: "Romeo & Juliet"
  },
  {
    id: "juliet",
    name: "Juliet",
    subtitle: "Daughter of Lord Capulet",
    era: "Capulet Family",
    years: "13-14 years",
    region: "Capulet",
    flag: "🏠",
    image: "/Juliet.png",
    path: "/juliet",
    accentBg: "bg-emerald-500/10",
    accentBorder: "hover:border-emerald-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    accentText: "group-hover:text-emerald-400",
    dateAdded: "2025-04-20",
    story: "Romeo & Juliet"
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
    dateAdded: "2025-04-20",
    story: "Romeo & Juliet"
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
    dateAdded: "2025-04-20",
    story: "Romeo & Juliet"
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
    dateAdded: "2025-04-20",
    story: "Romeo & Juliet"
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
    dateAdded: "2025-04-20",
    story: "Romeo & Juliet"
  },
  {
    id: "nurse",
    name: "The Nurse",
    subtitle: "Juliet's Attendant",
    era: "Capulet Household",
    years: "Adult",
    region: "Capulet",
    flag: "❤️",
    image: "/TheNurse.png",
    path: "/thenurse",
    accentBg: "bg-green-600/10",
    accentBorder: "hover:border-green-600/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(22,163,74,0.15)]",
    accentText: "group-hover:text-green-500",
    dateAdded: "2025-04-20",
    story: "Romeo & Juliet"
  }
];

// Get unique stories for grouping
const stories = Array.from(new Set(records.map(r => r.story)));

export default function Home() {
  const [expandedStory, setExpandedStory] = useState<string | null>('Romeo & Juliet');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRecords = records.filter(r => {
    const matchesSearch = searchQuery === '' || 
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.era.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.years.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Group filtered records by story
  const groupedByStory: { story: string; items: Record[] }[] = [];
  const seen = new Set<string>();
  for (const r of filteredRecords) {
    if (!seen.has(r.story)) {
      seen.add(r.story);
      groupedByStory.push({
        story: r.story,
        items: filteredRecords.filter(x => x.story === r.story)
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
          <span>LIVING_LIT // v1.0</span>
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
            Literary Archive
          </div>
          <h1 className="font-sans text-4xl md:text-6xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Select Story
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed max-w-xl mx-auto">
            Access character profiles from literary works. Expand a story to view available characters.
          </p>
          
          {/* SEARCH */}
          <div className="flex flex-col items-center gap-4 mx-auto w-full max-w-2xl mt-8">
            <div className="glass-panel flex items-center gap-3 px-4 py-3 rounded-lg border-stone-700/50 w-full">
              <Search className="w-5 h-5 text-stone-500" />
              <input 
                type="text" 
                placeholder="Search by name, era, or role..." 
                className="bg-transparent border-none outline-none text-stone-300 w-full font-mono text-sm placeholder:text-stone-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* GROUPED CHARACTER GRID */}
        <div className="w-full max-w-6xl mx-auto space-y-8">
          <AnimatePresence mode='popLayout'>
            {groupedByStory.map((group) => (
              <motion.div
                key={group.story}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-panel rounded-xl border border-stone-800 overflow-hidden"
              >
                {/* Story Header - Click to expand */}
                <button
                  onClick={() => setExpandedStory(expandedStory === group.story ? null : group.story)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-stone-900/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <BookOpen className="w-5 h-5 text-green-500" />
                    <div className="text-left">
                      <h2 className="font-mono text-lg text-white uppercase tracking-widest">{group.story}</h2>
                      <p className="font-mono text-xs text-stone-500">{group.items.length} CHARACTER{group.items.length !== 1 ? 'S' : ''}</p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-stone-400 transition-transform ${expandedStory === group.story ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Expandable Character Grid */}
                <AnimatePresence>
                  {expandedStory === group.story && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-stone-800"
                    >
                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.items.map((record, index) => (
                          <motion.div 
                            key={record.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <Link to={record.path} className="block group">
                              <div className={`glass-panel overflow-hidden rounded-lg border border-stone-800 ${record.accentBorder} transition-all duration-300 ${record.accentShadow} relative h-72 flex items-end`}>
                                {/* Background image preview */}
                                <div className="absolute inset-0 z-0 pointer-events-none">
                                  <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/10 transition-colors duration-500 z-10"></div>
                                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent z-10"></div>
                                  <div className="absolute inset-0 tech-grid-dots opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                </div>

                                {/* Content */}
                                <div className="relative z-20 p-5 w-full">
                                  <div className="flex items-center justify-between mb-3">
                                    <span className={`font-mono text-xs ${record.accentBg} px-2 py-1 rounded text-stone-300`}>
                                      {record.flag} {record.era}
                                    </span>
                                  </div>
                                  <h3 className={`font-sans text-xl font-bold text-white mb-1 transition-colors ${record.accentText}`}>{record.name}</h3>
                                  <p className="font-mono text-xs text-stone-400 mb-3">{record.subtitle}</p>
                                  
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
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
