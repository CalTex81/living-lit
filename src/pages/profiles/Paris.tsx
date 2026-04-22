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

export default function Paris() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-red-500/30 selection:text-red-200 relative overflow-hidden">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Background_Romeo&Juliet.png")' }}>
        <div className="absolute inset-0 bg-stone-950/80"></div>
      </div>
      <FloatingParticles />
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/story/romeo-and-juliet" className="flex items-center gap-3 text-stone-400 hover:text-red-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_STORY</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          <span>ID: PARIS_001</span>
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
                  src="/Paris (R&J).png" 
                  alt="Paris"
                  className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(248,113,113,0.5)] relative z-20"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · Noble Suitor
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Count Paris
              </h1>
              <p className="font-mono text-lg text-red-400">
                Kinsman to Prince Escalus
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                A noble kinsman of Prince Escalus who seeks Juliet's hand in marriage, his arranged match becoming another obstacle in the path of true love.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Age" value="Adult" />
                <StatCard label="House" value="Capulet" />
                <StatCard label="Status" value="Deceased" />
                <StatCard label="Era" value="16th Century" />
              </div>
            </div>
          </div>

          {/* BIOGRAPHY SECTION */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-red-500" />
              Biography
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-stone-300 leading-relaxed">
              <p>
                Count Paris is a noble kinsman of Prince Escalus in Shakespeare's "Romeo and Juliet." As a wealthy and well-connected suitor, he is chosen by Lord Capulet as the husband for his daughter Juliet, representing the arranged marriage typical of the era.
              </p>
              <p>
                Paris is portrayed as a respectful and honorable suitor who genuinely desires Juliet's hand. He gains the approval of both Lord and Lady Capulet, who see him as a suitable match that would bring prestige and security to their family.
              </p>
              <p>
                However, Juliet's secret marriage to Romeo makes Paris an obstacle to her happiness. When Paris goes to Juliet's tomb to mourn, he encounters Romeo, and in the ensuing confrontation, Romeo kills him. Paris's death is yet another tragedy in the chain of events that leads to the play's devastating conclusion.
              </p>
            </div>
          </div>

          {/* KEY EVENTS */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Swords className="w-6 h-6 text-red-500" />
              Key Events
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-red-400">
                  ACT I
                </div>
                <div className="flex-1 border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Marriage Proposal</h4>
                  <p className="text-sm text-stone-400">Paris asks Lord Capulet for Juliet's hand in marriage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-red-400">
                  ACT III
                </div>
                <div className="flex-1 border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Hastened Wedding</h4>
                  <p className="text-sm text-stone-400">After Tybalt's death, Lord Capulet decides to hasten the marriage to cheer Juliet.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-red-400">
                  ACT IV
                </div>
                <div className="flex-1 border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Wedding Arrangements</h4>
                  <p className="text-sm text-stone-400">Paris visits Juliet and they discuss their upcoming marriage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-red-400">
                  ACT V
                </div>
                <div className="flex-1 border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Death at the Tomb</h4>
                  <p className="text-sm text-stone-400">Paris encounters Romeo at Juliet's tomb and is killed in the confrontation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* QUOTES */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Scroll className="w-6 h-6 text-red-500" />
              Notable Quotes
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Younger than she are happy mothers made."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Paris's argument to Lord Capulet that Juliet is not too young to marry, citing that many younger women are already mothers.
                </p>
                <p className="font-mono text-xs text-red-400">Act 1, Scene 2</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "These times of woe afford no time to woo."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Paris's acknowledgment that the current troubles prevent proper courtship, justifying a hasty marriage.
                </p>
                <p className="font-mono text-xs text-red-400">Act 3, Scene 4</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "This do I beg of thee, gentle Capulet, let him be put to death."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Paris's request to the Prince for Romeo's punishment after Tybalt's death, showing his alignment with the Capulets.
                </p>
                <p className="font-mono text-xs text-red-400">Act 3, Scene 1</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "I love thee, Juliet, and I'll call thee mine."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Paris's affectionate words to Juliet, unaware that she has already secretly married Romeo.
                </p>
                <p className="font-mono text-xs text-red-400">Act 4, Scene 1</p>
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
                      <p className="font-mono text-xs text-stone-500">Intended Bride</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Paris seeks to marry Juliet, unaware she has secretly wed Romeo.</p>
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
                      <p className="font-mono text-xs text-stone-500">Kinsman</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Both are Capulet kinsmen who align against the Montagues.</p>
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
                  <p className="text-sm text-stone-400">Romeo kills Paris in a confrontation at Juliet's tomb.</p>
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
