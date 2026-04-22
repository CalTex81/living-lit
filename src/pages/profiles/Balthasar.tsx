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

export default function Balthasar() {
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
        <Link to="/story/romeo-and-juliet" className="flex items-center gap-3 text-stone-400 hover:text-blue-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_STORY</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          <span>ID: BALTHASAR_001</span>
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
                className="aspect-square flex items-center justify-center overflow-hidden rounded-2xl -mt-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <img 
                  src="/Balthasar (R&J).png" 
                  alt="Balthasar"
                  className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(96,165,250,0.5)] relative z-20"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · Loyal Servant
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Balthasar
              </h1>
              <p className="font-mono text-lg text-blue-400">
                Servant to Romeo Montague
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                Romeo's devoted servant who delivers the tragic news of Juliet's death, unknowingly setting in motion the final act of the tragedy.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Age" value="Adult" />
                <StatCard label="House" value="Montague" />
                <StatCard label="Status" value="Survivor" />
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
                Balthasar is Romeo's loyal servant in Shakespeare's "Romeo and Juliet." As a member of the Montague household, he serves Romeo faithfully throughout the play, though his most significant moment comes near the tragic end.
              </p>
              <p>
                After Romeo flees to Mantua following his banishment, Balthasar brings him news from Verona. However, due to the failed plan involving Friar Laurence's message, Balthasar delivers the devastating news that Juliet has died and been laid to rest in the Capulet tomb.
              </p>
              <p>
                This false information drives Romeo to despair and leads him to return to Verona to take his own life beside Juliet. Balthasar's unwitting role in delivering this tragic news makes him a key figure in the play's final, heart-wrenching moments.
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
                  ACT V
                </div>
                <div className="flex-1 border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">News from Verona</h4>
                  <p className="text-sm text-stone-400">Balthasar travels to Mantua to inform Romeo of Juliet's death.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-blue-400">
                  ACT V
                </div>
                <div className="flex-1 border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">The Tragic Mistake</h4>
                  <p className="text-sm text-stone-400">Balthasar tells Romeo that Juliet has been buried, unaware that she is only in a death-like sleep.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-blue-400">
                  ACT V
                </div>
                <div className="flex-1 border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Witness to Tragedy</h4>
                  <p className="text-sm text-stone-400">Balthasar witnesses Romeo's death and reports it to the Prince.</p>
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
                  "She is in heaven where I shall never see her."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Balthasar's report to Romeo about Juliet's death, unknowingly confirming the false information that leads to tragedy.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 5, Scene 1</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Romeo, my lord, my master, is dead."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Balthasar's anguished report to the Prince after discovering Romeo's body in the tomb.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 5, Scene 3</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Her body sleeps in Capel's monument."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Balthasar's confirmation of Juliet's burial location, which drives Romeo to the tomb.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 5, Scene 1</p>
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
                      <p className="font-mono text-xs text-stone-500">Master</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Balthasar serves Romeo faithfully and delivers the news that leads to tragedy.</p>
                </div>
              </Link>
              <Link to="/juliet" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-red-400 transition-colors">Juliet</h3>
                      <p className="font-mono text-xs text-stone-500">Subject of News</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Balthasar reports Juliet's death to Romeo, unaware she is only sleeping.</p>
                </div>
              </Link>
              <Link to="/friarlawrence" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-yellow-400 transition-colors">Friar Lawrence</h3>
                      <p className="font-mono text-xs text-stone-500">Failed Messenger</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">The friar's message to Romeo never reaches him, leading to Balthasar's tragic report.</p>
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
