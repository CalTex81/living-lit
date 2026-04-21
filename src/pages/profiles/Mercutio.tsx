import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scroll, Clock, MapPin, Sword, Rose, Heart, Zap, Shield } from 'lucide-react';

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

export default function Mercutio() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Background_Romeo&Juliet.png")' }}>
        <div className="absolute inset-0 bg-stone-950/80"></div>
      </div>
      <FloatingParticles />
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/archive" className="flex items-center gap-3 text-stone-400 hover:text-blue-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_ARCHIVE</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          ID: MERCUTIO_001
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
                  src="/Mercution (R&J).png" 
                  alt="Mercutio"
                  className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(96,165,250,0.5)] relative z-20"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · The Wit & Warrior
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Mercutio
              </h1>
              <p className="font-mono text-lg text-blue-400">
                Kinsman to the Prince and Romeo's Close Friend
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                A witty and hot-tempered kinsman to the Prince whose loyalty to Romeo leads him into a fatal duel with Tybalt, his death becoming the turning point that seals the tragic fate of the star-crossed lovers.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Role" value="Kinsman" />
                <StatCard label="Allegiance" value="Prince" />
                <StatCard label="Status" value="Deceased" />
                <StatCard label="Era" value="16th Century" />
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Sword className="w-6 h-6 text-blue-500" />
              Biography
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-stone-300 leading-relaxed">
              <p>
                Mercutio is one of Shakespeare's most memorable characters - a brilliant wit, a skilled swordsman, and Romeo's best friend. As a kinsman to Prince Escalus, he stands outside the Montague-Capulet feud but is aligned with the Montagues through his friendship with Romeo.
              </p>
              <p>
                Known for his sharp tongue and imaginative wordplay, Mercutio is a skeptic when it comes to love. He delivers the famous "Queen Mab" speech, mocking Romeo's romantic ideals. His humor and cynicism provide a stark contrast to Romeo's passionate idealism.
              </p>
              <p>
                Mercutio's death is a pivotal moment in the play. After Tybalt insults Romeo, Mercutio draws his sword to defend his friend's honor. When Romeo tries to intervene, Tybalt stabs Mercutio under Romeo's arm. Dying, Mercutio curses both families: "A plague o' both your houses!" His death triggers the chain of events that leads to the tragedy.
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
                  "A plague o' both your houses! They have made worms' meat of me."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Mercutio's dying curse against both the Montague and Capulet families, blaming their feud for his death and foreshadowing the tragedy to come.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 3, Scene 1</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "True, I talk of dreams, which are the children of an idle brain, begot of nothing but vain fantasy."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Part of the famous Queen Mab speech, where Mercutio dismisses dreams as meaningless fantasies, contrasting with Romeo's romantic idealism.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 1, Scene 4</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Nay, gentle Romeo, we must have you dance."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Mercutio's attempt to cheer up Romeo and get him to participate in the Capulet ball, showing his playful and spirited nature.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 1, Scene 4</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "O, then I see Queen Mab hath been with you. She is the fairies' midwife, and she comes in shape no bigger than an agate-stone."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  The beginning of Mercutio's imaginative Queen Mab speech, using fantastical imagery to mock Romeo's romantic dreams and beliefs about love.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 1, Scene 4</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "A gentleman, nurse, that loves to hear himself talk, and will speak more in a minute than he will stand to in a month."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Mercutio's self-aware and witty description of himself to the Nurse, acknowledging his love of wordplay and quick wit.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 2, Scene 4</p>
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
                      <p className="font-mono text-xs text-stone-500">Best Friend</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Mercutio's close friend whose death he avenges against Tybalt.</p>
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
                      <p className="font-mono text-xs text-stone-500">Killed By</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Tybalt kills Mercutio in a duel, triggering Romeo's revenge.</p>
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
                      <p className="font-mono text-xs text-stone-500">Friend</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Benvolio is Mercutio's fellow Montague and peacemaker.</p>
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
