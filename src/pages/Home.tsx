import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Database, Terminal, ChevronRight, Search, Filter, ChevronDown, BookOpen } from 'lucide-react';

type Story = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  era: string;
  years: string;
  region: string;
  path: string;
  backgroundImage: string;
  accentColor: string;
  characterCount: number;
  accentBg: string;
  accentBorder: string;
  accentShadow: string;
  accentText: string;
};

const stories: Story[] = [
  {
    id: "romeo-juliet",
    title: "Romeo and Juliet",
    subtitle: "A Tragedy of Star-Crossed Lovers",
    description: "In the fair city of Verona, two noble families, the Montagues and Capulets, are locked in an ancient feud. Amidst this strife, young Romeo Montague and Juliet Capulet fall instantly in love at a masked ball. Their secret marriage sets in motion a chain of events that will forever change both families.",
    era: "Renaissance Italy",
    years: "1597",
    region: "Verona, Italy",
    path: "/story/romeo-and-juliet",
    backgroundImage: "/Background_Romeo&Juliet.png",
    accentColor: "#ef4444",
    characterCount: 12,
    accentBg: "bg-red-500/10",
    accentBorder: "hover:border-red-500/50",
    accentShadow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
    accentText: "group-hover:text-red-400",
  },
];


export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStories = stories.filter(s => {
    const matchesSearch = searchQuery === '' || 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.era.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

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
            Literary Archive
          </h1>
          <p className="text-stone-400 text-lg leading-relaxed max-w-xl mx-auto">
            Select a story to explore its characters and narratives.
          </p>
          
          {/* SEARCH */}
          <div className="flex flex-col items-center gap-4 mx-auto w-full max-w-2xl mt-8">
            <div className="glass-panel flex items-center gap-3 px-4 py-3 rounded-lg border-stone-700/50 w-full">
              <Search className="w-5 h-5 text-stone-500" />
              <input 
                type="text" 
                placeholder="Search stories by title, era, or region..." 
                className="bg-transparent border-none outline-none text-stone-300 w-full font-mono text-sm placeholder:text-stone-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* STORY GRID */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={story.path} className="block group">
                  <div className={`glass-panel overflow-hidden rounded-lg border border-stone-800 ${story.accentBorder} transition-all duration-300 ${story.accentShadow} relative h-72 flex items-end`}>
                    {/* Background image preview */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ backgroundImage: `url("${story.backgroundImage}")` }}
                      ></div>
                      <div className="absolute inset-0 bg-stone-950/60 group-hover:bg-stone-950/30 transition-colors duration-500 z-10"></div>
                      <div className="absolute inset-0 transition-colors duration-500 z-10 mix-blend-overlay group-hover:opacity-100 opacity-0" style={{ backgroundColor: story.accentColor }}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent z-10"></div>
                      <div className="absolute inset-0 tech-grid-dots opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 p-5 w-full">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`font-mono text-xs ${story.accentBg} px-2 py-1 rounded text-stone-300`}>
                          {story.era}
                        </span>
                        <span className={`font-mono text-xs ${story.accentBg} px-2 py-1 rounded text-stone-300`}>
                          {story.characterCount} Characters
                        </span>
                      </div>
                      <h2 className={`font-sans text-xl font-bold text-white mb-1 transition-colors ${story.accentText}`} style={{ fontFamily: 'var(--font-serif)' }}>
                        {story.title}
                      </h2>
                      <p className="font-mono text-xs text-stone-400 mb-3">{story.subtitle}</p>
                      
                      <div className="flex items-center text-sm font-mono text-stone-500 group-hover:text-stone-200 transition-colors">
                        Explore Story <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
