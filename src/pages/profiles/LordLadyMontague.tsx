import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Heart, Swords, Scroll, Clock, MapPin, Rose, Zap } from 'lucide-react';

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
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen opacity-70">
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

export default function LordLadyMontague() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Background_Romeo&Juliet.png")' }}>
        <div className="absolute inset-0 bg-stone-950/80"></div>
      </div>
      <FloatingParticles />
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/archive" className="flex items-center gap-3 text-stone-400 hover:text-blue-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_ARCHIVE</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          ID: MONTAGUE_FAMILY_001
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-24 px-6 pb-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* HERO SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Character Image - Left side */}
            <div className="relative">
            <motion.div 
                className="flex items-center justify-center rounded-2xl -mt-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <img 
                  src="/Lord&Lady Montague (R&J).png" 
                  alt="Lord & Lady Montague"
                  className="w-full h-auto object-contain drop-shadow-[0_0_45px_rgba(96,165,250,0.5)] relative z-20"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · Montague Family Heads
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Lord & Lady<br/>Montague
              </h1>
              <p className="font-mono text-lg text-blue-400">
                Heads of the Montague Household
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                The noble leaders of the Montague family, deeply concerned for their son Romeo and caught in the ancient feud that ultimately claims his life.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Status" value="Alive" />
                <StatCard label="House" value="Montague" />
                <StatCard label="Children" value="Romeo" />
                <StatCard label="Era" value="16th Century" />
              </div>
            </div>
          </div>

          {/* BIOGRAPHY SECTION */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-500" />
              Biography
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-stone-300 leading-relaxed">
              <p>
                Lord and Lady Montague are the heads of the Montague family in Shakespeare's "Romeo and Juliet." As wealthy nobles locked in an ancient feud with the Capulets, they are deeply concerned about their son Romeo's melancholic state and his involvement in the family's conflicts.
              </p>
              <p>
                Lord Montague is portrayed as a loving father who worries about Romeo's depression and seeks to understand its cause. He respects Benvolio's attempts to maintain peace and is genuinely concerned for his son's wellbeing.
              </p>
              <p>
                Lady Montague dies of grief upon learning of Romeo's banishment, demonstrating the profound love she has for her son. After the tragic deaths of Romeo and Juliet, the Montagues reconcile with the Capulets, ending the ancient feud through their shared sorrow.
              </p>
            </div>
          </div>

          {/* KEY EVENTS */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Swords className="w-6 h-6 text-blue-500" />
              Key Events
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-blue-400">
                  ACT I
                </div>
                <div className="flex-1 border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Concern for Romeo</h4>
                  <p className="text-sm text-stone-400">Lord Montague expresses concern about Romeo's melancholy and asks Benvolio to learn the cause.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-blue-400">
                  ACT III
                </div>
                <div className="flex-1 border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Romeo's Banishment</h4>
                  <p className="text-sm text-stone-400">Lady Montague dies of grief after learning of Romeo's banishment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-blue-400">
                  ACT V
                </div>
                <div className="flex-1 border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Reconciliation</h4>
                  <p className="text-sm text-stone-400">Lord Montague reconciles with the Capulets and vows to erect a golden statue of Juliet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* QUOTES */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Scroll className="w-6 h-6 text-blue-500" />
              Notable Quotes
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Could we but learn from whence his sorrows grow, we would as willingly give cure as know."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Lord Montague's expression of concern for Romeo, showing his desire to help his son overcome his melancholy.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 1, Scene 1</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Alas, my liege, my wife is dead tonight; grief of my son's exile hath stopped her breath."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Lord Montague's report to the Prince about Lady Montague's death from grief over Romeo's banishment.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 5, Scene 3</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "But I can give thee more; for I will raise her statue in pure gold."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Lord Montague's promise to honor Juliet, demonstrating his reconciliation with the Capulets.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 5, Scene 3</p>
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
                      <p className="font-mono text-xs text-stone-500">Son</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Their son whose tragic death brings an end to the ancient feud.</p>
                </div>
              </Link>
              <Link to="/benvolio" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-blue-400 transition-colors">Benvolio</h3>
                      <p className="font-mono text-xs text-stone-500">Nephew</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Lord Montague's nephew who tries to maintain peace.</p>
                </div>
              </Link>
              <Link to="/lordladycapulet" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-red-400 transition-colors">Lord & Lady Capulet</h3>
                      <p className="font-mono text-xs text-stone-500">Feuding Family</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">The Capulet family leaders with whom they finally reconcile.</p>
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
