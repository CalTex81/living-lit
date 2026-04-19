import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, Shield, Cpu, Activity, Server, Target, FileText, Globe } from 'lucide-react';

// Techy particle system for the background/character enhancement
const Particles = () => {
  const [particles, setParticles] = useState<{ id: number, size: number, left: number, top: number, duration: number, delay: number }[]>([]);

  useEffect(() => {
    // Generate particles only on the client to avoid hydration mismatch, though not strictly needed here
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-rose-500 rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)]"
          style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
          animate={{
            y: [0, -150],
            opacity: [0, 1, 0],
            x: Math.sin(p.id) * 40,
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-rose-500/30 selection:text-rose-200 relative">
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>
      
      {/* GLOBAL HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <div className="flex items-center gap-3 text-stone-400">
          <Terminal className="w-4 h-4 text-rose-500" />
          <span>AP_WORLD_HIST_DB // v2.04</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-2 text-stone-500">
            <Activity className="w-3 h-3" /> SYSTEM ONLINE
          </span>
          <span className="text-rose-500/80">RECORD: ZHAO_KUANGYIN</span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Temple Architecture Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-950/85 z-10 backdrop-blur-[2px]"></div>
          {/* Subtle gradient to anchor the character */}
          <div className="absolute inset-0 bg-radial-gradient from-rose-900/20 via-transparent to-transparent z-10"></div>
          <img 
             src="https://images.unsplash.com/photo-1528360354687-839420409a6d?auto=format&fit=crop&w=1920&q=80" 
             alt="Song Dynasty Temple Architecture Background"
             className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Character Container with Techy Accents */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-md lg:w-5/12 relative flex justify-center"
          >
            {/* HUD Rings behind character */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-stone-800 rounded-full opacity-30 animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square border border-rose-900/30 border-dashed rounded-full opacity-50 animate-[spin_30s_linear_infinite_reverse]"></div>
            
            <Particles />
            
            <div className="relative z-20 tech-grid-dots rounded-3xl p-4 flex justify-center items-center">
              {/* IMPORTANT: Pointing to public image URL here. You can upload the PNG as 'emperor.png' and it will load. */}
              <img 
                src="/emperor.png" 
                alt="Emperor Taizu (Please upload your image to the 'public' folder as 'emperor.png')" 
                className="w-full h-auto max-h-[80vh] object-contain drop-shadow-[0_0_35px_rgba(225,29,72,0.6)] relative z-20"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1549611016-3a70d82b5040?auto=format&fit=crop&q=80&w=600&h=800"; // A cooler fallback (robot/samurai statue)
                  e.currentTarget.className = "w-full h-auto max-h-[75vh] object-cover rounded-3xl opacity-50 border border-rose-500/30 mix-blend-luminosity";
                }}
              />
            </div>

            {/* Floating UI element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-10 -right-4 lg:-right-10 glass-panel neon-border px-4 py-3 rounded-lg flex gap-3 items-center whitespace-nowrap"
            >
              <Cpu className="w-5 h-5 text-rose-500" />
              <div>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Temporal Alignment</p>
                <p className="font-mono text-sm text-rose-400 font-bold tracking-wider">960 CE</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Database Profile Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-7/12 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/30 text-rose-400 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-widest">
                <Database className="w-3.5 h-3.5" />
                Historical Archive Index
              </div>
              <h1 className="font-sans text-5xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Emperor Taizu
              </h1>
              <p className="font-mono text-2xl text-stone-400 uppercase tracking-widest border-l-4 border-rose-500 pl-4 py-1">
                Zhao Kuangyin
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                Founder of the Song Dynasty (r. 960–976 CE). Ended decades of fragmentation to reunify much of China, establishing a dynasty celebrated for economic growth while transitioning the empire to a scholar-bureaucrat administration.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard label="Lifespan" value="927 – 976 CE" />
              <StatCard label="Dynasty" value="Song Dynasty" />
              <StatCard label="Predecessor Era" value="Five Dynasties" />
              <StatCard label="Successor" value="Emp. Taizong" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DETAILED LEDGER */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 bg-stone-950/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Background Panel */}
          <div className="glass-panel rounded-xl p-8 space-y-6 relative border-t-2 border-t-rose-600/60 overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe className="w-24 h-24" />
            </div>
            <h2 className="font-mono text-xl neon-text flex items-center gap-3">
              <span className="w-2 h-2 bg-rose-500"></span> HISTORICAL_BACKGROUND
            </h2>
            <div className="prose prose-invert prose-stone text-stone-300 font-sans leading-relaxed">
              <p>
                During the chaotic <strong>Five Dynasties and Ten Kingdoms period</strong>, China was deeply fragmented and ruled by competing military warlords. Zhao Kuangyin rose to prominence as a distinguished military commander in the Later Zhou dynasty.
              </p>
              <p>
                In 960 CE, his troops orchestrated the <strong>Chen Bridge Mutiny</strong>, forcing the yellow robe of imperial authority upon him. His widely supported accession marked his goal to stabilize China, end military coups, and reunify the fragmented realms under the Song Dynasty.
              </p>
            </div>
          </div>

          {/* Leadership Style Panel */}
          <div className="glass-panel rounded-xl p-8 space-y-6 relative border-t-2 border-t-cyan-600/60 overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="w-24 h-24 text-cyan-400" />
            </div>
            <h2 className="font-mono text-xl text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400"></span> LEADERSHIP_STYLE
            </h2>
            <div className="prose prose-invert prose-stone text-stone-300 font-sans leading-relaxed">
              <p>
                Emperor Taizu's leadership was defined by a deliberate preference for <strong>civilian governance over military rule</strong>. Pragmatic by nature, he recognized that preventing military coups was essential for long-term stability.
              </p>
              <p>
                In a famous political maneuver ("Dismissing Military Commanders with a Cup of Wine"), he persuaded his top generals to voluntarily retire. By elevating civilian officials and curbing warlord influence, Taizu reshaped Chinese statecraft for centuries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAJOR ACHIEVEMENTS - Terminal Output Style */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="glass-panel neon-border rounded-xl p-8 font-mono">
          <div className="flex items-center gap-3 border-b border-stone-800 pb-6 mb-6">
            <Server className="w-6 h-6 text-rose-500 animate-pulse" />
            <h2 className="text-xl tracking-widest text-white uppercase">Primary Directives & Achievements</h2>
          </div>
          
          <ul className="space-y-4">
            <AchievementLog 
              index="01" 
              text="Strengthened the civil service examination system, deeply reducing military dominance in government affairs." 
            />
            <AchievementLog 
              index="02" 
              text="Centralized imperial authority and systematically reduced the independent power of regional warlords." 
            />
            <AchievementLog 
              index="03" 
              text="Promoted Confucian scholars to top bureaucratic positions to formalize rational, ethical governance." 
            />
            <AchievementLog 
              index="04" 
              text="Dramatically improved national stability and agricultural recovery after decades of devastating warfare." 
            />
            <AchievementLog 
              index="05" 
              text="Laid the foundational institutions that allowed for the Song Dynasty’s legendary economic and cultural growth." 
            />
          </ul>
        </div>
      </section>

      {/* SIGNIFICANCE FOR AP WORLD */}
      <section className="relative z-10 border-y border-stone-800 bg-stone-900/50 py-20 mt-10">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Target className="w-8 h-8 text-rose-500" />
          </div>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            SIGNIFICANCE // AP WORLD HISTORY
          </h2>
          <div className="prose prose-lg prose-invert text-stone-400 leading-relaxed max-w-none text-left">
            <p>
              Understanding Emperor Taizu is highly critical for AP World History as he architected the governance model of the Song Dynasty (960–1279 CE). His systemic reforms laid the groundwork for a highly sophisticated, merit-based bureaucracy that became a hallmark of Chinese classical administration.
            </p>
            <p className="border-l-2 border-stone-700 pl-6 my-6">
              <em className="text-stone-300">"He represents a watershed historical shift: moving the state definitively away from volatile military rule and toward enduring <strong>scholar-bureaucrat rule</strong>."</em>
            </p>
            <p>
              Because of Taizu's success in pacifying the military, the Song Dynasty experienced a "Golden Age" renowned for immense economic expansion, rapid urbanization, commercialization, and era-defining technological innovations (such as gunpowder, the compass, and movable type).
            </p>
          </div>
        </div>
      </section>

      {/* VOCABULARY DATABANKS */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 space-y-10">
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-stone-500" />
          <h2 className="font-mono text-xl tracking-widest text-stone-300 uppercase">Archive_Glossary</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <VocabTerminal term="Mandate of Heaven" def="The ancient Chinese philosophical concept that a ruler’s right to govern is granted by cosmic or divine forces, and can be lost if the ruler is unjust." />
          <VocabTerminal term="Civil Service Exam" def="A rigorous testing system based on Confucian texts used to select government officials by merit rather than birthright." />
          <VocabTerminal term="Bureaucracy" def="A complex system of governance where most important administrative decisions are made by state officials rather than elected representatives." />
          <VocabTerminal term="Five Dynasties" def="A chaotic period of political upheaval and fragmentation in China (907–960 CE) following the fall of the Tang Dynasty." />
          <VocabTerminal term="Centralization" def="The concentration of administrative power and decision-making authority in a single, central government entity." />
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

// Subcomponents

function StatCard({ label, value }: { label: string, value: string }) {
  return (
    <div className="glass-panel p-4 flex flex-col gap-2 rounded hover:bg-stone-800/80 transition-colors">
      <h3 className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">{label}</h3>
      <p className="font-sans font-bold text-sm md:text-base text-stone-200">{value}</p>
    </div>
  );
}

function AchievementLog({ index, text }: { index: string, text: string }) {
  return (
    <li className="flex items-start gap-4 p-3 hover:bg-white/5 rounded transition-colors group">
      <span className="text-rose-600/60 group-hover:neon-text transition-colors mt-0.5">[{index}]</span>
      <p className="text-stone-300 font-sans">{text}</p>
    </li>
  );
}

function VocabTerminal({ term, def }: { term: string, def: string }) {
  return (
    <div className="glass-panel p-5 border-l-2 border-l-stone-600 hover:border-l-rose-500 transition-colors flex flex-col gap-3 rounded group">
      <h3 className="font-mono text-sm text-stone-200 uppercase tracking-wider group-hover:text-rose-400 transition-colors">&gt; {term}</h3>
      <p className="font-sans text-stone-400 text-sm leading-relaxed">{def}</p>
    </div>
  );
}

