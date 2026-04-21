import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scroll, Clock, MapPin, FlaskConical } from 'lucide-react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; speed: number; opacity: number }[]>([]);
  
  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 20 + 10,
        opacity: Math.random() * 0.5 + 0.1
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

export default function FriarLaurence() {
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
          ID: FRIAR_LAURENCE_001
        </div>
      </header>

      <main className="relative z-10 pt-24 px-6 pb-20 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <p className="font-mono text-xs text-green-500/50 uppercase tracking-widest">
                    Character Portrait
                  </p>
                  <p className="font-mono text-[10px] text-green-500/30 mt-2">
                    Coming Soon
                  </p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-4 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                <h3 className="font-mono text-xs text-green-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Scroll className="w-3 h-3" />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-stone-500">Role</span>
                    <span className="text-stone-300 ml-2">Advisor</span>
                  </div>
                  <div>
                    <span className="text-stone-500">Status</span>
                    <span className="text-green-400 ml-2">Alive</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <FlaskConical className="w-4 h-4" />
                Confessor & Advisor
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Friar<br/>Laurence
              </h1>
              <p className="font-mono text-lg text-green-400">
                Franciscan Friar of Verona
              </p>
              <div className="flex items-center gap-6 text-sm font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Verona, 16th Century</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Franciscan Friary</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <FlaskConical className="w-6 h-6 text-green-500" />
              Biography
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-stone-300 leading-relaxed">
              <p>
                Friar Laurence is a Franciscan friar and close confessor to both Romeo and Juliet. He is a wise and well-intentioned man who serves as the play's moral compass, often providing guidance to the young lovers. He is also knowledgeable in herbs and potions, which becomes crucial to the plot.
              </p>
              <p>
                The friar agrees to marry Romeo and Juliet in secret, hoping their union might end the ancient feud between the Montagues and Capulets. He devises the plan for Juliet to take a sleeping potion to feign death, intending to reunite the lovers and bring peace to Verona.
              </p>
              <p>
                Despite his good intentions, Friar Laurence's plans go tragically awry. His message to Romeo explaining the scheme never arrives, leading to the lovers' deaths. In the end, he confesses his role to the Prince and the families, helping them understand the tragedy and reconcile.
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
                "These violent delights have violent ends and in their triumph die, like fire and powder, which as they kiss consume."
              </blockquote>
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "Wisely and slow; they stumble that run fast."
              </blockquote>
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "The earth that's nature's mother is her tomb; what is her burying grave that is her womb."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
