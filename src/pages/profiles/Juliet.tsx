import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Scroll, Clock, MapPin, Crown } from 'lucide-react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; speed: number; opacity: number }[]>([]);
  
  useEffect(() => {
    setParticles(
      Array.from({ length: 200 }).map((_, i) => ({
        id: i,
        x: Math.random() * 60 + 20, // Concentrated in center-left area
        y: Math.random() * 60 + 20,
        size: Math.random() * 8 + 4,
        speed: Math.random() * 10 + 5,
        opacity: Math.random() * 0.3 + 0.7
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

export default function Juliet() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-green-500/30 selection:text-green-200 relative overflow-hidden">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Background_Romeo&Juliet.png")' }}>
        <div className="absolute inset-0 bg-stone-950/80"></div>
      </div>
      <FloatingParticles />
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/archive" className="flex items-center gap-3 text-stone-400 hover:text-green-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_ARCHIVE</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          ID: JULIET_CAPULET_001
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
            <motion.div 
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="aspect-square flex items-center justify-center overflow-hidden rounded-2xl -mt-20">
                <img 
                  src="/Juliet (R&J).png" 
                  alt="Juliet Capulet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-4 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                <h3 className="font-mono text-xs text-green-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Scroll className="w-3 h-3" />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-stone-500">Age</span>
                    <span className="text-stone-300 ml-2">13-14</span>
                  </div>
                  <div>
                    <span className="text-stone-500">Status</span>
                    <span className="text-green-400 ml-2">Deceased</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Heart className="w-4 h-4" />
                Tragic Heroine
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Juliet<br/>Capulet
              </h1>
              <p className="font-mono text-lg text-green-400">
                Daughter of Lord and Lady Capulet
              </p>
              <div className="flex items-center gap-6 text-sm font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Verona, 16th Century</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Capulet House</span>
                </div>
              </div>
            </div>
          </div>

          {/* BIOGRAPHY SECTION */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Crown className="w-6 h-6 text-green-500" />
              Biography
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-stone-300 leading-relaxed">
              <p>
                Juliet Capulet is the tragic heroine of Shakespeare's "Romeo and Juliet." Though only thirteen years old, she displays remarkable maturity, passion, and determination throughout the play. As the daughter of Lord and Lady Capulet, she is expected to marry Paris, a noble kinsman of the Prince.
              </p>
              <p>
                At the Capulet masked ball, Juliet meets Romeo Montague and falls instantly in love, despite their families' bitter feud. She proves herself to be a decisive and courageous character, secretly marrying Romeo the very next day with Friar Laurence's help.
              </p>
              <p>
                When Romeo is banished for killing Tybalt, Juliet refuses to marry Paris and seeks Friar Laurence's help. She takes a potion to feign death, planning to awaken and escape with Romeo. However, misfortune leads to Romeo finding her seemingly dead body and taking his own life. Juliet awakens to find Romeo dead and takes her own life with his dagger.
              </p>
            </div>
          </div>

          {/* KEY EVENTS */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Scroll className="w-6 h-6 text-green-500" />
              Key Events
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-green-400">
                  ACT I
                </div>
                <div className="flex-1 border-l-2 border-green-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">The Balcony Scene</h4>
                  <p className="text-sm text-stone-400">Juliet professes her love to Romeo from her balcony, defying her family's hatred.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-green-400">
                  ACT II
                </div>
                <div className="flex-1 border-l-2 border-green-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Secret Marriage</h4>
                  <p className="text-sm text-stone-400">Juliet secretly marries Romeo, choosing love over family loyalty.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-green-400">
                  ACT III
                </div>
                <div className="flex-1 border-l-2 border-green-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Refusal of Paris</h4>
                  <p className="text-sm text-stone-400">Juliet defiantly refuses to marry Paris after her secret marriage to Romeo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-green-400">
                  ACT IV
                </div>
                <div className="flex-1 border-l-2 border-green-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">The Potion Plan</h4>
                  <p className="text-sm text-stone-400">Juliet takes Friar Laurence's potion to feign death and escape with Romeo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* QUOTES */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Scroll className="w-6 h-6 text-green-500" />
              Notable Quotes
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "What's in a name? That which we call a rose by any other name would smell as sweet."
              </blockquote>
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have, for both are infinite."
              </blockquote>
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "Parting is such sweet sorrow that I shall say goodnight till it be morrow."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
