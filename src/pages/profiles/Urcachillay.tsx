import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, Cpu, Activity, Mountain } from 'lucide-react';
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
          className="absolute bg-fuchsia-400 rounded-full shadow-[0_0_10px_rgba(232,121,249,0.8)]"
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

export default function Urcachillay() {
  const timelineEvents: TimelineEvent[] = [
    { year: "Pre-Inca Period", title: "Origins in Andean Culture", description: "Urcachillay emerged from ancient Andean traditions, predating the Inca Empire as a deity associated with camelids and herding." },
    { year: "1438-1533 CE", title: "Inca Empire Worship", description: "During the height of the Inca Empire, Urcachillay was widely venerated across the Andes as protector of llamas and alpacas." },
    { year: "Agricultural Calendar", title: "Seasonal Rituals", description: "Priests conducted ceremonies during key agricultural periods to ensure the health and reproduction of herds." },
    { year: "High Altitude Sanctuaries", title: "Mountain Shrines", description: "Sacred sites were established high in the Andes where offerings were made to Urcachillay for herd protection." },
    { year: "Colonial Era", title: "Spanish Conquest Impact", description: "Following the Spanish conquest, open worship was suppressed but continued in secret among indigenous communities." },
    { year: "Modern Era", title: "Cultural Revival", description: "Urcachillay remains an important symbol in Andean culture, representing the enduring connection between people and their herds." }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200 relative">
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      {/* GLOBAL HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <div className="flex items-center gap-6">
          <Link to="/archive" className="text-stone-500 hover:text-fuchsia-400 transition-colors flex items-center gap-2">
            ◀ RETURN TO ARCHIVE
          </Link>
          <div className="hidden md:flex items-center gap-3 text-stone-400 border-l border-stone-800 pl-6">
            <Terminal className="w-4 h-4 text-fuchsia-500" />
            <span>AP_WORLD_HIST_DB // v2.05</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2 text-stone-500">
            <Activity className="w-3 h-3" /> SYSTEM ONLINE
          </span>
          <span className="text-fuchsia-500/80">RECORD: URCACHILLAY</span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/85 z-10 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-radial-gradient from-fuchsia-900/20 via-transparent to-transparent z-10"></div>
          <img
            src="/Background_Urcachillay.png"
            alt="Andean Mountains Background"
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square border border-fuchsia-900/30 border-dashed rounded-full opacity-50 animate-[spin_30s_linear_infinite_reverse]"></div>

            <Particles />

            <motion.div 
              className="relative z-20 flex justify-center items-center w-full"
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <img
                src="/Urcachillay.png"
                alt="Urcachillay"
                className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(217,70,239,0.5)] relative z-20"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 -right-4 lg:-right-10 glass-panel neon-border px-4 py-3 rounded-lg flex gap-3 items-center whitespace-nowrap"
            >
              <Cpu className="w-5 h-5 text-fuchsia-500" />
              <div>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Temporal Alignment</p>
                <p className="font-mono text-sm text-fuchsia-400 font-bold tracking-wider">Pre-Columbian</p>
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
               <div className="inline-flex items-center gap-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-widest">
                <Database className="w-3.5 h-3.5" />
                Historical Archive Index
              </div>
              <h1 className="font-sans text-5xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Urcachillay
              </h1>
              <p className="font-mono text-2xl text-stone-400 uppercase tracking-widest border-l-4 border-fuchsia-500 pl-4 py-1">
                Inca Deity of Herds
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                The Inca deity who watched over llamas, alpacas, and other camelids. Urcachillay ensured the health and reproduction of herds, vital to Andean civilization's survival and prosperity.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard label="Origin" value="Andean Culture" />
              <StatCard label="Empire" value="Inca" />
              <StatCard label="Domain" value="Camelids" />
              <StatCard label="Date Added" value="2025-04-19" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* DETAILED LEDGER */}
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-xl p-8 space-y-6 relative border-t-2 border-t-fuchsia-600/60 overflow-hidden group h-full">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Mountain className="w-24 h-24" />
            </div>
            <h2 className="font-mono text-xl text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.5)] flex items-center gap-3">
              <span className="w-2 h-2 bg-fuchsia-500"></span> HISTORICAL_BACKGROUND
            </h2>
            <ul className="space-y-4 text-stone-300 font-sans text-[15px] leading-relaxed list-none">
              <li className="flex items-start gap-3 pl-1">
                <span className="text-fuchsia-400 text-lg leading-6 shrink-0">•</span>
                <span>Guardian deity of <strong>llamas, alpacas, and other camelids</strong> essential for transportation, wool, and meat in the Andes</span>
              </li>
              <li className="flex items-start gap-3 pl-1">
                <span className="text-fuchsia-400 text-lg leading-6 shrink-0">•</span>
                <span>Responsible for ensuring <strong>herd reproduction and health</strong> through divine protection</span>
              </li>
              <li className="flex items-start gap-3 pl-1">
                <span className="text-fuchsia-400 text-lg leading-6 shrink-0">•</span>
                <span>Worshipped through <strong>rituals and offerings</strong> at high-altitude sanctuaries in the Andean mountains</span>
              </li>
              <li className="flex items-start gap-3 pl-1">
                <span className="text-fuchsia-400 text-lg leading-6 shrink-0">•</span>
                <span>Integral to the <strong>Inca agricultural calendar</strong>, with ceremonies timed to breeding and shearing seasons</span>
              </li>
              <li className="flex items-start gap-3 pl-1">
                <span className="text-fuchsia-400 text-lg leading-6 shrink-0">•</span>
                <span>Symbolizes the <strong>sacred relationship</strong> between Andean peoples and their animals, foundational to their way of life</span>
              </li>
            </ul>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="lg:col-span-7">
          <Timeline events={timelineEvents} title="HISTORICAL_LOG // URCACHILLAY" />
        </div>
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
