import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scroll, Clock, MapPin, Heart, Rose, Zap, Shield } from 'lucide-react';

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

export default function Juliet() {
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
          <span>ID: JULIET_CAPULET_001</span>
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
            <div className="relative">
            <motion.div 
                className="aspect-square flex items-center justify-center overflow-hidden rounded-2xl -mt-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <img 
                  src="/Juliet (R&J).png" 
                  alt="Juliet Capulet"
                  className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(248,113,113,0.5)] relative z-20"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · Tragic Heroine
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Juliet<br/>Capulet
              </h1>
              <p className="font-mono text-lg text-red-400">
                Daughter of Lord and Lady Capulet
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                A young noblewoman of the Capulet family whose secret marriage to Romeo Montague defies her family's hatred, leading her to take a potion to feign death in a desperate attempt to escape with her beloved.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Age" value="13-14" />
                <StatCard label="House" value="Capulet" />
                <StatCard label="Status" value="Deceased" />
                <StatCard label="Era" value="16th Century" />
              </div>
            </div>
          </div>

          {/* BIOGRAPHY SECTION */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-500" />
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
              <Scroll className="w-6 h-6 text-red-500" />
              Key Events
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-red-400">
                  ACT I
                </div>
                <div className="flex-1 border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">The Balcony Scene</h4>
                  <p className="text-sm text-stone-400">Juliet professes her love to Romeo from her balcony, defying her family's hatred.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-red-400">
                  ACT II
                </div>
                <div className="flex-1 border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Secret Marriage</h4>
                  <p className="text-sm text-stone-400">Juliet secretly marries Romeo, choosing love over family loyalty.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-red-400">
                  ACT III
                </div>
                <div className="flex-1 border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Refusal of Paris</h4>
                  <p className="text-sm text-stone-400">Juliet defiantly refuses to marry Paris after her secret marriage to Romeo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-red-400">
                  ACT IV
                </div>
                <div className="flex-1 border-l-2 border-red-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">The Potion Plan</h4>
                  <p className="text-sm text-stone-400">Juliet takes Friar Laurence's potion to feign death and escape with Romeo.</p>
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
                  "What's in a name? That which we call a rose by any other name would smell as sweet."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Juliet's famous soliloquy questioning the importance of family names, realizing that Romeo's identity as a Montague doesn't change who he is.
                </p>
                <p className="font-mono text-xs text-red-400">Act 2, Scene 2</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have, for both are infinite."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Juliet's poetic expression of her limitless love for Romeo, comparing it to the endless ocean that grows more abundant the more it gives.
                </p>
                <p className="font-mono text-xs text-red-400">Act 2, Scene 2</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Parting is such sweet sorrow that I shall say goodnight till it be morrow."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Juliet's bittersweet farewell to Romeo after the balcony scene, expressing the pain of separation while anticipating their next meeting.
                </p>
                <p className="font-mono text-xs text-red-400">Act 2, Scene 2</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "O Romeo, Romeo! Wherefore art thou Romeo? Deny thy father and refuse thy name."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  The opening of the balcony scene where Juliet laments that Romeo is a Montague, wishing he could abandon his family name to be with her.
                </p>
                <p className="font-mono text-xs text-red-400">Act 2, Scene 2</p>
              </div>
              <div className="border-l-4 border-red-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "I'll to my wedding-bed; and death, not Romeo, take my maidenhead!"
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Juliet's dramatic declaration that she would rather die than marry Paris, showing her absolute commitment to Romeo despite the consequences.
                </p>
                <p className="font-mono text-xs text-red-400">Act 3, Scene 2</p>
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
              <Link to="/romeo" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-blue-400 transition-colors">Romeo</h3>
                      <p className="font-mono text-xs text-stone-500">Husband</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Juliet's beloved husband, whose love for her defies their families' feud.</p>
                </div>
              </Link>
              <Link to="/thenurse" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-yellow-400 transition-colors">The Nurse</h3>
                      <p className="font-mono text-xs text-stone-500">Confidante</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Juliet's devoted caregiver and messenger for her secret romance.</p>
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
                      <p className="font-mono text-xs text-stone-500">Cousin</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Juliet's hot-headed cousin whose hatred of Montagues leads to tragedy.</p>
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
