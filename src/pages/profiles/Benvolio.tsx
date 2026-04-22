import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scroll, Clock, MapPin, Shield, Rose, Heart, Zap } from 'lucide-react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState<{ id: number, size: number, left: number, top: number, duration: number, delay: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 100 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 60,
        top: Math.random() * 80 + 10,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 4,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"
          style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
          animate={{
            y: [0, -400],
            opacity: [0, 1, 1, 1, 0],
            x: Math.sin(p.id) * 40,
          }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
};

export default function Benvolio() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Background_Romeo&Juliet.png")' }}>
        <div className="absolute inset-0 bg-stone-950/80"></div>
      </div>
      <FloatingParticles />
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/story/romeo-and-juliet" className="flex items-center gap-3 text-stone-400 hover:text-blue-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_STORY</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          <span>ID: BENVOLIO_MONTAGUE_001</span>
        </div>
      </header>

      <main className="relative z-10 pt-24 px-6 pb-20 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
            <motion.div 
                className="aspect-square flex items-center justify-center overflow-hidden rounded-2xl -mt-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <img 
                  src="/Benvolio (R&J).png" 
                  alt="Benvolio"
                  className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(96,165,250,0.5)] relative z-20"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · The Peacemaker
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Benvolio
              </h1>
              <p className="font-mono text-lg text-blue-400">
                Nephew to Lord Montague and Romeo's Cousin
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                A level-headed and peace-loving Montague who consistently tries to prevent violence between the feuding families, serving as a voice of reason in the chaos that ultimately consumes Verona.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Relation" value="Montague Nephew" />
                <StatCard label="House" value="Montague" />
                <StatCard label="Status" value="Alive" />
                <StatCard label="Era" value="16th Century" />
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-500" />
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
              <Scroll className="w-6 h-6 text-blue-500" />
              Notable Quotes
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Part, fools! Put up your swords; you know not what you do."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Benvolio's attempt to stop the opening brawl between the servants, demonstrating his role as a peacemaker and voice of reason.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 1, Scene 1</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "I do but keep the peace: put up thy sword, or manage it to part these men with me."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Benvolio's response to Tybalt's aggression, explaining his peaceful intentions and offering to help resolve the conflict without violence.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 1, Scene 1</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Be ruled by me, forget to think of her."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Benvolio's advice to Romeo after Rosaline rejects him, encouraging his cousin to move on and stop dwelling on unrequited love.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 1, Scene 1</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Here were the servants of your adversary and yours close fighting ere I did approach."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Benvolio's honest account to Lord Montague about how the brawl started, showing his integrity as a witness who speaks truthfully.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 1, Scene 1</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Madam, an hour before the worshipped sun peer'd forth the golden window of the east, a troubled mind drave me to walk abroad."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Benvolio's explanation to Lady Montague about why he was up early, revealing his concern for Romeo's melancholy state.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 1, Scene 1</p>
              </div>
            </div>
          </div>

          {/* RECOMMENDED CHARACTERS */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-blue-500" />
              Recommended Characters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/romeo" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-blue-400 transition-colors">Romeo</h3>
                      <p className="font-mono text-xs text-stone-500">Cousin</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Benvolio's cousin whom he tries to guide away from trouble.</p>
                </div>
              </Link>
              <Link to="/mercutio" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-blue-400 transition-colors">Mercutio</h3>
                      <p className="font-mono text-xs text-stone-500">Friend</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Benvolio's fellow Montague who often opposes his peacekeeping efforts.</p>
                </div>
              </Link>
              <Link to="/tybalt" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-red-400 transition-colors">Tybalt</h3>
                      <p className="font-mono text-xs text-stone-500">Opponent</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">The hot-headed Capulet whom Benvolio tries to reason with.</p>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
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
