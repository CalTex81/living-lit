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
          className="absolute bg-rose-400 rounded-full shadow-[0_0_10px_rgba(251,113,133,0.8)]"
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

export default function GenghisKhan() {
  const timelineEvents: TimelineEvent[] = [
    { year: "1162 CE", title: "Birth of Temüjin", description: "Born in the Khentii Mountains near the Onon River, descendant of the Mongol leader Kabul Khan." },
    { year: "1206 CE", title: "Universal Ruler", description: "After years of tribal warfare, unified the nomadic tribes of the Mongolian plateau and was proclaimed 'Genghis Khan'." },
    { year: "1209 CE", title: "Invasion of Western Xia", description: "Launched first major campaign outside Mongolia, forcing the Tangut state of Western Xia to submit." },
    { year: "1211 CE", title: "Campaign Against Jin", description: "Invaded the Jin Dynasty of northern China, eventually capturing the capital of Zhongdu (modern-day Beijing)." },
    { year: "1219 CE", title: "Khwarazmian Conquest", description: "Led a massive invasion of the Khwarazmian Empire in Central Asia after his envoys were executed." },
    { year: "1224 CE", title: "Administrative Reforms", description: "Implemented the 'Yassa' code of law and a meritocratic military system that transformed the empire." },
    { year: "1227 CE", title: "Death and Legacy", description: "Died during the final campaign against Western Xia. He left behind the largest contiguous land empire in history." }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-rose-500/30 selection:text-rose-200 relative">
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      {/* GLOBAL HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <div className="flex items-center gap-6">
          <Link to="/archive" className="text-stone-500 hover:text-rose-400 transition-colors flex items-center gap-2">
            ◀ RETURN TO ARCHIVE
          </Link>
          <div className="hidden md:flex items-center gap-3 text-stone-400 border-l border-stone-800 pl-6">
            <Terminal className="w-4 h-4 text-rose-500" />
            <span>AP_WORLD_HIST_DB // v2.05</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2 text-stone-500">
            <Activity className="w-3 h-3" /> SYSTEM ONLINE
          </span>
          <span className="text-rose-500/80">RECORD: GENGHIS_KHAN</span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/85 z-10 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-radial-gradient from-rose-900/20 via-transparent to-transparent z-10"></div>
          <img
            src="/Background_Genghis Khan.png"
            alt="Mongolian Steppe Background"
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square border border-rose-900/30 border-dashed rounded-full opacity-50 animate-[spin_30s_linear_infinite_reverse]"></div>

            <Particles />

            <motion.div 
              className="relative z-20 flex justify-center items-center w-full"
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <img
                src="/Genghis Khan.png"
                alt="Genghis Khan"
                className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(225,29,72,0.5)] relative z-20"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 -right-4 lg:-right-10 glass-panel neon-border px-4 py-3 rounded-lg flex gap-3 items-center whitespace-nowrap"
            >
              <Cpu className="w-5 h-5 text-rose-500" />
              <div>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Temporal Alignment</p>
                <p className="font-mono text-sm text-rose-400 font-bold tracking-wider">1162 CE</p>
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
               <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-widest">
                <Database className="w-3.5 h-3.5" />
                Historical Archive Index
              </div>
              <h1 className="font-sans text-5xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Genghis Khan
              </h1>
              <p className="font-mono text-2xl text-stone-400 uppercase tracking-widest border-l-4 border-rose-500 pl-4 py-1">
                Universal Ruler
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                Founder of the Mongol Empire, which became the largest contiguous empire in history after his death. He revolutionized warfare and trade across Eurasia.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard label="Lifespan" value="1162 – 1227 CE" />
              <StatCard label="Empire" value="Mongol Empire" />
              <StatCard label="Strategy" value="Meritocracy" />
              <StatCard label="Legacy" value="Silk Road Pax" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DETAILED LEDGER */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <div className="glass-panel rounded-xl p-8 space-y-6 relative border-t-2 border-t-rose-600/60 overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Globe className="w-24 h-24" />
          </div>
          <h2 className="font-mono text-xl text-rose-400 drop-shadow-[0_0_8px_rgba(225,29,72,0.5)] flex items-center gap-3">
            <span className="w-2 h-2 bg-rose-500"></span> HISTORICAL_BACKGROUND
          </h2>
          <ul className="space-y-4 text-stone-300 font-sans text-[15px] leading-relaxed list-none">
            <li className="flex items-start gap-3 pl-1">
              <span className="text-rose-400 text-lg leading-6 shrink-0">•</span>
              <span>Unified the warring <strong>nomadic tribes</strong> of the Mongolian plateau through strategic alliances and military brilliance.</span>
            </li>
            <li className="flex items-start gap-3 pl-1">
              <span className="text-rose-400 text-lg leading-6 shrink-0">•</span>
              <span>Implemented a <strong>meritocratic military system</strong>, promoting commanders based on skill and loyalty rather than noble birth.</span>
            </li>
            <li className="flex items-start gap-3 pl-1">
              <span className="text-rose-400 text-lg leading-6 shrink-0">•</span>
              <span>Established the <strong>Yassa code</strong> of laws to maintain order and the 'Yam' international postal system to facilitate communication.</span>
            </li>
            <li className="flex items-start gap-3 pl-1">
              <span className="text-rose-400 text-lg leading-6 shrink-0">•</span>
              <span>Promoted <strong>religious tolerance</strong> and the free exchange of ideas, technologies, and goods along the Silk Road.</span>
            </li>
            <li className="flex items-start gap-3 pl-1">
              <span className="text-rose-400 text-lg leading-6 shrink-0">•</span>
              <span>His conquests paved the way for the <strong>Pax Mongolica</strong>, a period of relative peace and stability across much of Eurasia.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <Timeline events={timelineEvents} title="HISTORICAL_LOG // GENGHIS_KHAN" />
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
