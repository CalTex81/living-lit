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

export default function LordLadyCapulet() {
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
          <span>ID: CAPULET_FAMILY_001</span>
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
                  src="/Lord&Lady Capulet (R&J).png" 
                  alt="Lord & Lady Capulet"
                  className="w-[95%] sm:w-[100%] md:w-[105%] lg:w-[110%] xl:w-[115%] 2xl:w-[120%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(248,113,113,0.5)] relative z-20"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · Capulet Family Heads
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Lord & Lady<br/>Capulet
              </h1>
              <p className="font-mono text-lg text-red-400">
                Heads of the Capulet Household
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                The noble leaders of the Capulet family, whose decisions about Juliet's marriage and the feud with the Montagues shape the tragic course of events.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Status" value="Alive" />
                <StatCard label="House" value="Capulet" />
                <StatCard label="Children" value="Juliet" />
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
                Lord and Lady Capulet are the heads of the Capulet family in Shakespeare's "Romeo and Juliet." As wealthy nobles of Verona, they are deeply invested in maintaining their family's honor and social standing.
              </p>
              <p>
                Lord Capulet initially seems patient about Juliet's marriage, even encouraging Paris to wait. However, after Tybalt's death, he becomes determined to hasten the marriage, believing it will help Juliet overcome her grief.
              </p>
              <p>
                Lady Capulet is more ambitious, pushing for the match with Paris from the beginning. When Juliet refuses to marry Paris, both parents react with anger and threaten to disown her, demonstrating the rigid expectations placed on noble daughters of the era.
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
                  <h4 className="font-bold text-white mb-1">Paris Proposal</h4>
                  <p className="text-sm text-stone-400">Lord Capulet agrees to consider Paris's marriage proposal for Juliet.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-red-400">
                  ACT III
                </div>
                <div className="flex-1 border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Hastened Marriage</h4>
                  <p className="text-sm text-stone-400">After Tybalt's death, Lord Capulet decides Juliet must marry Paris immediately.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-red-400">
                  ACT III
                </div>
                <div className="flex-1 border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Threat to Disown</h4>
                  <p className="text-sm text-stone-400">Both parents threaten to disown Juliet when she refuses to marry Paris.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-red-400">
                  ACT V
                </div>
                <div className="flex-1 border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Reconciliation</h4>
                  <p className="text-sm text-stone-400">The Capulets reconcile with the Montagues after learning the truth about Romeo and Juliet.</p>
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
                  "But saying o'er what I have said before: My child is yet a stranger in the world, she hath not seen the change of fourteen years."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Lord Capulet's initial reluctance to marry Juliet too young, showing some paternal concern.
                </p>
                <p className="font-mono text-xs text-red-400">Act 1, Scene 2</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "I tell thee what: get thee to church o' Thursday, or never after look me in the face."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Lord Capulet's ultimatum to Juliet, demonstrating his authoritarian response to her refusal.
                </p>
                <p className="font-mono text-xs text-red-400">Act 3, Scene 5</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "I would the fool were married to her grave."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Lady Capulet's harsh response when Juliet refuses to marry Paris, showing her lack of empathy.
                </p>
                <p className="font-mono text-xs text-red-400">Act 3, Scene 5</p>
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
                      <p className="font-mono text-xs text-stone-500">Daughter</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Their daughter whose refusal to marry Paris leads to tragedy.</p>
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
                      <p className="font-mono text-xs text-stone-500">Nephew</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Lady Capulet's nephew whose death accelerates the marriage plans.</p>
                </div>
              </Link>
              <Link to="/paris" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-red-400 transition-colors">Paris</h3>
                      <p className="font-mono text-xs text-stone-500">Suitor</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">The noble suitor chosen by the Capulets for Juliet's marriage.</p>
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
