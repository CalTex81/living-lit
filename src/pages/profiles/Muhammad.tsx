import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, Cpu, Activity, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Timeline, { TimelineEvent } from '../../components/Timeline';

const Particles = () => {
  const [particles, setParticles] = useState<{ id: number, size: number, left: number, top: number, duration: number, delay: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 45 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 5 + 4,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-70">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-sky-400 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"
          style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
          animate={{
            y: [0, -150],
            opacity: [0, 1, 0],
            x: Math.sin(p.id) * 30,
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
};

export default function Muhammad() {
  const timelineEvents: TimelineEvent[] = [
    { year: "570 CE", title: "Birth in Mecca", description: "Born into the Quraysh tribe's Banu Hashim clan. Orphaned early, he was raised by his grandfather and later his uncle Abu Talib." },
    { year: "595 CE", title: "Marriage to Khadijah", description: "Married the successful merchant Khadijah bint Khuwaylid, who became his strongest supporter and the first convert to Islam." },
    { year: "610 CE", title: "First Revelation", description: "Received the first Quranic revelation in the Cave of Hira on Mount Nur during the month of Ramadan, marking the beginning of his prophethood." },
    { year: "613 CE", title: "Public Preaching Begins", description: "Began openly preaching monotheism in Mecca, attracting followers but also fierce opposition from the Quraysh leadership." },
    { year: "619 CE", title: "Year of Sorrow", description: "Lost both his wife Khadijah and his uncle Abu Talib, his two greatest protectors, leaving him politically vulnerable in Mecca." },
    { year: "622 CE", title: "The Hijra to Medina", description: "Migrated from Mecca to Medina (Yathrib) with his followers. This event marks Year 1 of the Islamic calendar and the founding of the first Muslim community (ummah)." },
    { year: "624 CE", title: "Battle of Badr", description: "Led a small Muslim force to a decisive victory against a much larger Meccan army, establishing Muslim military credibility." },
    { year: "630 CE", title: "Conquest of Mecca", description: "Returned to Mecca with 10,000 followers and took the city with minimal bloodshed, cleansing the Kaaba of idols and establishing it as Islam's holiest site." },
    { year: "632 CE", title: "Farewell Sermon & Passing", description: "Delivered his final sermon at Mount Arafat during his last pilgrimage, emphasizing equality and justice. Died shortly after in Medina." }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-sky-500/30 selection:text-sky-200 relative">
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      {/* GLOBAL HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-stone-500 hover:text-sky-400 transition-colors flex items-center gap-2">
            ◀ RETURN TO ARCHIVE
          </Link>
          <div className="hidden md:flex items-center gap-3 text-stone-400 border-l border-stone-800 pl-6">
            <Terminal className="w-4 h-4 text-sky-500" />
            <span>AP_WORLD_HIST_DB // v2.05</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2 text-stone-500">
            <Activity className="w-3 h-3" /> SYSTEM ONLINE
          </span>
          <span className="text-sky-500/80">RECORD: MUHAMMAD_IBN_ABDULLAH</span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/85 z-10 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-radial-gradient from-sky-900/20 via-transparent to-transparent z-10"></div>
          <img
            src="/Background_Muhammad_Ibn_Abdullah.png"
            alt="Arabian Peninsula Background"
            className="w-full h-full object-cover opacity-60 mix-blend-screen"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-lg lg:w-6/12 relative flex justify-center -ml-4 lg:-ml-12"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-stone-800 rounded-full opacity-30 animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square border border-sky-900/30 border-dashed rounded-full opacity-50 animate-[spin_30s_linear_infinite_reverse]"></div>

            <Particles />

            <motion.div 
              className="relative z-20 flex justify-center items-center w-full"
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <img
                src="/Muhammad Ibn Abdullah.png"
                alt="Muhammad Ibn Abdullah"
                className="w-[120%] md:w-[140%] xl:w-[150%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(56,189,248,0.5)] relative z-20"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 -right-4 lg:-right-10 glass-panel neon-border px-4 py-3 rounded-lg flex gap-3 items-center whitespace-nowrap"
            >
              <Cpu className="w-5 h-5 text-sky-500" />
              <div>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Temporal Alignment</p>
                <p className="font-mono text-sm text-sky-400 font-bold tracking-wider">622 CE</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-6/12 space-y-8 lg:pl-10 xl:pl-16"
          >
            <div className="space-y-4">
               <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-sky-400 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-widest">
                <Database className="w-3.5 h-3.5" />
                Historical Archive Index
              </div>
              <h1 className="font-sans text-5xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Muhammad
              </h1>
              <p className="font-mono text-2xl text-stone-400 uppercase tracking-widest border-l-4 border-sky-500 pl-4 py-1">
                Prophet of Islam
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                Founder of Islam and unifier of the Arabian Peninsula. His religious, political, and social revolution transformed a collection of tribal societies into one of the largest and most influential civilizations in world history.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard label="Lifespan" value="570 – 632 CE" />
              <StatCard label="Region" value="Arabian Peninsula" />
              <StatCard label="Role" value="Prophet & Statesman" />
              <StatCard label="Legacy" value="Islam / Ummah" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DETAILED LEDGER */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="glass-panel rounded-xl p-8 space-y-6 relative border-t-2 border-t-sky-600/60 overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Globe className="w-24 h-24" />
          </div>
          <h2 className="font-mono text-xl text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] flex items-center gap-3">
            <span className="w-2 h-2 bg-sky-500"></span> HISTORICAL_BACKGROUND
          </h2>
          <ul className="space-y-4 text-stone-300 font-sans text-[15px] leading-relaxed list-none">
            <li className="flex items-start gap-3 pl-1">
              <span className="text-sky-400 text-lg leading-6 shrink-0">•</span>
              <span>Born into the <strong>Quraysh tribe</strong> in Mecca, a major trading hub on the Arabian Peninsula</span>
            </li>
            <li className="flex items-start gap-3 pl-1">
              <span className="text-sky-400 text-lg leading-6 shrink-0">•</span>
              <span>Received revelations beginning in <strong>610 CE</strong>, forming the basis of the <strong>Quran</strong></span>
            </li>
            <li className="flex items-start gap-3 pl-1">
              <span className="text-sky-400 text-lg leading-6 shrink-0">•</span>
              <span>The <strong>Hijra (622 CE)</strong> to Medina established the first organized Muslim community and marks the start of the Islamic calendar</span>
            </li>
            <li className="flex items-start gap-3 pl-1">
              <span className="text-sky-400 text-lg leading-6 shrink-0">•</span>
              <span>Unified nearly all of the <strong>Arabian Peninsula</strong> under Islam by the time of his death in 632 CE</span>
            </li>
            <li className="flex items-start gap-3 pl-1">
              <span className="text-sky-400 text-lg leading-6 shrink-0">•</span>
              <span>His successors (the <strong>Rashidun Caliphs</strong>) rapidly expanded the empire from Spain to Central Asia within a century</span>
            </li>
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <Timeline events={timelineEvents} title="HISTORICAL_LOG // MUHAMMAD" />
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-800 bg-stone-950 py-8 text-center mt-12 relative z-10">
        <p className="font-mono text-xs text-stone-600 tracking-[0.2em] uppercase">
          [END OF RECORD] // AP World History Character Library
        </p>
      </footer>
    </div>
  );
}

function StatCard({ label, value }: { label: string, value: string }) {
  return (
    <div className="glass-panel p-4 flex flex-col gap-2 rounded hover:bg-stone-800/80 transition-colors">
      <h3 className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">{label}</h3>
      <p className="font-sans font-bold text-sm md:text-base text-stone-200">{value}</p>
    </div>
  );
}
