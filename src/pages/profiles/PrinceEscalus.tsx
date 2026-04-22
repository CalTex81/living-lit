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
          className="absolute bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]"
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

export default function PrinceEscalus() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-yellow-500/30 selection:text-yellow-200 relative overflow-hidden">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Background_Romeo&Juliet.png")' }}>
        <div className="absolute inset-0 bg-stone-950/80"></div>
      </div>
      <FloatingParticles />
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/story/romeo-and-juliet" className="flex items-center gap-3 text-stone-400 hover:text-yellow-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_STORY</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          <span>ID: PRINCE_ESCALUS_001</span>
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
                  src="/Prince Escalus (R&J).png" 
                  alt="Prince Escalus"
                  className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(250,204,21,0.5)] relative z-20"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · Ruler of Verona
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Prince<br/>Escalus
              </h1>
              <p className="font-mono text-lg text-yellow-400">
                Ruler of Verona
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                The sovereign authority of Verona who strives to maintain peace between the feuding Montague and Capulet families, his laws ultimately bringing tragic justice.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Age" value="Adult" />
                <StatCard label="House" value="Neutral" />
                <StatCard label="Status" value="Alive" />
                <StatCard label="Era" value="16th Century" />
              </div>
            </div>
          </div>

          {/* BIOGRAPHY SECTION */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-yellow-500" />
              Biography
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-stone-300 leading-relaxed">
              <p>
                Prince Escalus is the ruler of Verona in Shakespeare's "Romeo and Juliet." As the highest authority in the city, he bears the responsibility of maintaining order and peace among its citizens.
              </p>
              <p>
                The ancient feud between the Montagues and Capulets has long plagued Verona with violence and bloodshed. Escalus repeatedly warns both families that further brawls will be punished by death, demonstrating his commitment to justice and order.
              </p>
              <p>
                Despite his efforts, the tragedy unfolds with multiple deaths on both sides. In the end, Escalus delivers the final judgment and reveals the full story of Romeo and Juliet's tragic love, using their sacrifice to finally reconcile the feuding families.
              </p>
            </div>
          </div>

          {/* KEY EVENTS */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Swords className="w-6 h-6 text-yellow-500" />
              Key Events
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-yellow-400">
                  ACT I
                </div>
                <div className="flex-1 border-l-2 border-yellow-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">First Warning</h4>
                  <p className="text-sm text-stone-400">Escalus breaks up the opening brawl and threatens death to anyone who fights again.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-yellow-400">
                  ACT III
                </div>
                <div className="flex-1 border-l-2 border-yellow-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Banishment of Romeo</h4>
                  <p className="text-sm text-stone-400">After Tybalt's death, Escalus banishes Romeo instead of executing him.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-yellow-400">
                  ACT V
                </div>
                <div className="flex-1 border-l-2 border-yellow-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Final Judgment</h4>
                  <p className="text-sm text-stone-400">Escalus reveals the truth and brings the families together in reconciliation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* QUOTES */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Scroll className="w-6 h-6 text-yellow-500" />
              Notable Quotes
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "If ever you disturb our streets again, your lives shall pay the forfeit of the peace."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Escalus's stern warning to both families after the opening brawl, threatening death for further violence.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 1, Scene 1</p>
              </div>
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "And for that offence immediately we do exile him hence."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Escalus's judgment on Romeo, showing mercy through banishment instead of execution.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 3, Scene 1</p>
              </div>
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "All are punished."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Escalus's final words, acknowledging that everyone has suffered in this tragedy.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 5, Scene 3</p>
              </div>
            </div>
          </div>

          {/* RECOMMENDED CHARACTERS */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-yellow-500" />
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
                      <p className="font-mono text-xs text-stone-500">Banished by Prince</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Escalus banishes Romeo after Tybalt's death.</p>
                </div>
              </Link>
              <Link to="/tybalt" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-red-400 transition-colors">Tybalt</h3>
                      <p className="font-mono text-xs text-stone-500">Subject of Justice</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Escalus's justice is invoked after Tybalt kills Mercutio.</p>
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
                      <p className="font-mono text-xs text-stone-500">Capulet Heads</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">The Capulet family leaders who answer to Escalus's authority.</p>
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
