import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scroll, Clock, MapPin, FlaskConical, Rose, Heart, Zap, Shield } from 'lucide-react';

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

export default function FriarLaurence() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-yellow-500/30 selection:text-yellow-200 relative overflow-hidden">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Background_Romeo&Juliet.png")' }}>
        <div className="absolute inset-0 bg-stone-950/80"></div>
      </div>
      <FloatingParticles />
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/archive" className="flex items-center gap-3 text-stone-400 hover:text-yellow-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_ARCHIVE</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          ID: FRIAR_LAWRENCE_001
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
                  src="/Friar Lawrence.png" 
                  alt="Friar Laurence"
                  className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(250,204,21,0.5)] relative z-20"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · Confessor & Advisor
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Friar<br/>Lawrence
              </h1>
              <p className="font-mono text-lg text-yellow-400">
                Franciscan Friar of Verona
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                A wise Franciscan friar who secretly marries Romeo and Juliet, hoping their union will end the ancient feud between their families, but ultimately becomes an unwitting instrument of their tragic fate.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Role" value="Friar" />
                <StatCard label="Order" value="Franciscan" />
                <StatCard label="Status" value="Alive" />
                <StatCard label="Era" value="16th Century" />
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <FlaskConical className="w-6 h-6 text-yellow-500" />
              Biography
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-stone-300 leading-relaxed">
              <p>
                Friar Lawrence is a Franciscan friar and close confessor to both Romeo and Juliet. He is a wise and well-intentioned man who serves as the play's moral compass, often providing guidance to the young lovers. He is also knowledgeable in herbs and potions, which becomes crucial to the plot.
              </p>
              <p>
                The friar agrees to marry Romeo and Juliet in secret, hoping their union might end the ancient feud between the Montagues and Capulets. He devises the plan for Juliet to take a sleeping potion to feign death, intending to reunite the lovers and bring peace to Verona.
              </p>
              <p>
                Despite his good intentions, Friar Lawrence's plans go tragically awry. His message to Romeo explaining the scheme never arrives, leading to the lovers' deaths. In the end, he confesses his role to the Prince and the families, helping them understand the tragedy and reconcile.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Scroll className="w-6 h-6 text-yellow-500" />
              Notable Quotes
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "These violent delights have violent ends and in their triumph die, like fire and powder, which as they kiss consume."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  A foreshadowing warning to Romeo about the dangers of rushing into marriage, predicting the tragic consequences of their passionate but hasty love.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 2, Scene 6</p>
              </div>
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Wisely and slow; they stumble that run fast."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  The friar's counsel to Romeo, urging caution and patience in matters of love, a theme that echoes throughout the play as a counterpoint to the lovers' haste.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 2, Scene 3</p>
              </div>
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "The earth that's nature's mother is her tomb; what is her burying grave that is her womb."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  A philosophical reflection on the cycle of life and death, demonstrating the friar's wisdom and his understanding of nature's dualities.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 2, Scene 3</p>
              </div>
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "For you and I are past our dancing days."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  The friar's humble acknowledgment of his age to Romeo, showing his self-awareness and the generational gap between himself and the young lovers.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 2, Scene 3</p>
              </div>
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "A greater power than we can contradict hath thwarted our intents."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  The friar's attempt to comfort Romeo after his banishment, suggesting that fate has intervened and they must accept what cannot be changed.
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
                      <p className="font-mono text-xs text-stone-500">Confessed to Friar</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">The friar marries Romeo to Juliet in secret, hoping to end the feud.</p>
                </div>
              </Link>
              <Link to="/juliet" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-red-400 transition-colors">Juliet</h3>
                      <p className="font-mono text-xs text-stone-500">Confessed to Friar</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">The friar provides Juliet with the sleeping potion scheme.</p>
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
                      <p className="font-mono text-xs text-stone-500">Fellow Advisor</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">The Nurse serves as Juliet's caregiver and messenger for the secret romance.</p>
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
