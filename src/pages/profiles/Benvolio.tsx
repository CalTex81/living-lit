import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scroll, Clock, MapPin, Shield } from 'lucide-react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; speed: number; opacity: number }[]>([]);
  
  useEffect(() => {
    setParticles(
      Array.from({ length: 300 }).map((_, i) => ({
        id: i,
        x: Math.random() * 40 + 5, // Concentrated on left side where character is
        y: Math.random() * 50 + 25,
        size: Math.random() * 10 + 6,
        speed: Math.random() * 8 + 4,
        opacity: Math.random() * 0.4 + 0.6
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-green-500 rounded-full blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [p.opacity, p.opacity * 0.3, p.opacity],
          }}
          transition={{
            duration: p.speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Benvolio() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-green-500/30 selection:text-green-200 relative overflow-hidden">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Background_Romeo&Juliet.png")' }}>
        <div className="absolute inset-0 bg-stone-950/80"></div>
      </div>
      <FloatingParticles />
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/archive" className="flex items-center gap-3 text-stone-400 hover:text-green-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_ARCHIVE</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          ID: BENVOLIO_MONTAGUE_001
        </div>
      </header>

      <main className="relative z-10 pt-24 px-6 pb-20 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <motion.div 
                className="aspect-square flex items-center justify-center overflow-hidden rounded-2xl -mt-20"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <p className="font-mono text-xs text-green-500/50 uppercase tracking-widest">
                    Character Portrait
                  </p>
                  <p className="font-mono text-[10px] text-green-500/30 mt-2">
                    Coming Soon
                  </p>
                </div>
              </motion.div>
              <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-4 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                <h3 className="font-mono text-xs text-green-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Scroll className="w-3 h-3" />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-stone-500">Relation</span>
                    <span className="text-stone-300 ml-2">Montague Nephew</span>
                  </div>
                  <div>
                    <span className="text-stone-500">House</span>
                    <span className="text-stone-300 ml-2">Montague</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Shield className="w-4 h-4" />
                The Peacemaker
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Benvolio
              </h1>
              <p className="font-mono text-lg text-green-400">
                Nephew to Lord Montague and Romeo's Cousin
              </p>
              <div className="flex items-center gap-6 text-sm font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Verona, 16th Century</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Montague House</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-500" />
              Biography
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-stone-300 leading-relaxed">
              <p>
                Benvolio Montague is Romeo's cousin and close friend, known for his peacemaking nature and level-headed temperament. His name means "well-wisher" or "benevolent," reflecting his role as the voice of reason and peace throughout the play.
              </p>
              <p>
                Benvolio consistently tries to defuse conflicts and prevent violence. He attempts to stop the opening brawl between the servants, tries to keep Romeo from fighting Tybalt, and urges Mercutio to retire from the heat of the day to avoid confrontation.
              </p>
              <p>
                As a trustworthy witness, Benvolio provides an honest account of events to the Prince. He explains how Tybalt started the fight that led to Mercutio's death, and how Romeo killed Tybalt in self-defense. His testimony helps the Prince understand the truth behind the tragedy.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Scroll className="w-6 h-6 text-green-500" />
              Notable Quotes
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "Part, fools! Put up your swords; you know not what you do."
              </blockquote>
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "I do but keep the peace: put up thy sword, or manage it to part these men with me."
              </blockquote>
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "Be ruled by me, forget to think of her."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
