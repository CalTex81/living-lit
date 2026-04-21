import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scroll, Clock, MapPin, Flame } from 'lucide-react';

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

export default function Tybalt() {
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
          ID: TYBALT_CAPULET_001
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
                <img 
                  src="/Tybalt (R&J).png" 
                  alt="Tybalt Capulet"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-4 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                <h3 className="font-mono text-xs text-green-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Scroll className="w-3 h-3" />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-stone-500">Relation</span>
                    <span className="text-stone-300 ml-2">Juliet's Cousin</span>
                  </div>
                  <div>
                    <span className="text-stone-500">House</span>
                    <span className="text-stone-300 ml-2">Capulet</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Flame className="w-4 h-4" />
                The Hot-Headed
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Tybalt
              </h1>
              <p className="font-mono text-lg text-green-400">
                Cousin to Juliet Capulet
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

          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Flame className="w-6 h-6 text-green-500" />
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
              <Scroll className="w-6 h-6 text-green-500" />
              Notable Quotes
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "What, drawn, and talk of peace? I hate the word as I hate hell, all Montagues, and thee."
              </blockquote>
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "Boy, this shall not excuse the injuries that thou hast done me; therefore turn and draw."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
