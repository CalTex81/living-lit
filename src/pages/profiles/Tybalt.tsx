import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scroll, Clock, MapPin, Flame, Rose, Heart, Zap, Shield } from 'lucide-react';

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
          className="absolute bg-red-400 rounded-full shadow-[0_0_10px_rgba(248,113,113,0.8)]"
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

export default function Tybalt() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-red-500/30 selection:text-red-200 relative overflow-hidden">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Background_Romeo&Juliet.png")' }}>
        <div className="absolute inset-0 bg-stone-950/80"></div>
      </div>
      <FloatingParticles />
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/archive" className="flex items-center gap-3 text-stone-400 hover:text-red-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_ARCHIVE</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          ID: TYBALT_CAPULET_001
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
                  src="/Tybalt (R&J).png" 
                  alt="Tybalt Capulet"
                  className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(248,113,113,0.5)] relative z-20"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · The Hot-Headed
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Tybalt
              </h1>
              <p className="font-mono text-lg text-red-400">
                Cousin to Juliet Capulet
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                Juliet's hot-tempered cousin whose hatred of Montagues leads him to kill Mercutio in a duel, provoking Romeo to slay him in revenge and setting in motion the tragic chain of events that destroys both families.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Relation" value="Juliet's Cousin" />
                <StatCard label="House" value="Capulet" />
                <StatCard label="Status" value="Deceased" />
                <StatCard label="Era" value="16th Century" />
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Flame className="w-6 h-6 text-red-500" />
              Biography
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-stone-300 leading-relaxed">
              <p>
                Tybalt Capulet is Juliet's cousin and a passionate defender of family honor. Known as the "Prince of Cats," he is a skilled swordsman with a fiery temper and an intense hatred for the Montague family. His character embodies the destructive nature of the ancient feud.
              </p>
              <p>
                At the Capulet ball, Tybalt recognizes Romeo and is furious that a Montague has dared to attend. He wants to fight immediately, but Lord Capulet restrains him, leading to Tybalt's vow of revenge against Romeo for the perceived insult.
              </p>
              <p>
                Tybalt's confrontation with Romeo and Mercutio leads to tragedy. When Romeo refuses to fight him, Tybalt attacks Mercutio instead, killing him. Enraged by his friend's death, Romeo kills Tybalt in a duel. This act results in Romeo's banishment and sets in motion the final tragic events of the play.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Scroll className="w-6 h-6 text-red-500" />
              Notable Quotes
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "What, drawn, and talk of peace? I hate the word as I hate hell, all Montagues, and thee."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Tybalt's explosive response to Benvolio's attempt to stop the opening brawl, revealing his intense hatred of Montagues and his refusal to accept peace.
                </p>
                <p className="font-mono text-xs text-red-400">Act 1, Scene 1</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Boy, this shall not excuse the injuries that thou hast done me; therefore turn and draw."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Tybalt's challenge to Romeo, refusing to accept any apology or explanation and demanding satisfaction through violence.
                </p>
                <p className="font-mono text-xs text-red-400">Act 3, Scene 1</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "This, by his voice, should be a Montague. Fetch me my rapier, boy."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Tybalt's immediate reaction upon recognizing Romeo's voice at the Capulet ball, showing his readiness to fight despite being at a peaceful celebration.
                </p>
                <p className="font-mono text-xs text-red-400">Act 1, Scene 5</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "To strike him dead I hold it not a sin."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Tybalt's chilling declaration to Lord Capulet that killing Romeo would not be sinful, demonstrating how deeply his hatred runs.
                </p>
                <p className="font-mono text-xs text-red-400">Act 1, Scene 5</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Patience perforce with wilful choler meeting makes my flesh tremble in their different greeting."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Tybalt's struggle to control his rage when forced to tolerate Romeo's presence at the ball, showing the internal conflict between family duty and personal hatred.
                </p>
                <p className="font-mono text-xs text-red-400">Act 1, Scene 5</p>
              </div>
            </div>
          </div>

          {/* RECOMMENDED CHARACTERS */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-500" />
              Recommended Characters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/juliet" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-red-400 transition-colors">Juliet</h3>
                      <p className="font-mono text-xs text-stone-500">Cousin</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Tybalt's cousin whom he fiercely protects from Montagues.</p>
                </div>
              </Link>
              <Link to="/romeo" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-blue-400 transition-colors">Romeo</h3>
                      <p className="font-mono text-xs text-stone-500">Killed By</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Romeo kills Tybalt to avenge Mercutio's death.</p>
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
                      <p className="font-mono text-xs text-stone-500">Killed</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Tybalt kills Mercutio in a duel, leading to his own death.</p>
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
