import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Heart, Swords, Scroll, Clock, MapPin } from 'lucide-react';

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

export default function Romeo() {
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
          ID: ROMEO_MONTAGUE_001
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
            <motion.div 
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="aspect-square flex items-center justify-center overflow-hidden rounded-2xl -mt-20">
                <img 
                  src="/Romeo (R&J).png" 
                  alt="Romeo Montague"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Profile Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-4 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                <h3 className="font-mono text-xs text-green-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Scroll className="w-3 h-3" />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-stone-500">Age</span>
                    <span className="text-stone-300 ml-2">16-17</span>
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
                Tragic Hero
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Romeo<br/>Montague
              </h1>
              <p className="font-mono text-lg text-green-400">
                Son of Lord and Lady Montague
              </p>
              <div className="flex items-center gap-6 text-sm font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Verona, 16th Century</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Montague House</span>
                </div>
              </div>
            </div>
          </div>

          {/* BIOGRAPHY SECTION */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-500" />
              Biography
            </h2>
            <div className="prose prose-invert max-w-none space-y-4 text-stone-300 leading-relaxed">
              <p>
                Romeo Montague is the tragic hero of Shakespeare's "Romeo and Juliet." A young nobleman of the Montague family, he is initially portrayed as melancholic and lovesick over Rosaline, but his life transforms when he meets Juliet Capulet at a masked ball.
              </p>
              <p>
                Despite the bitter feud between their families, Romeo falls deeply in love with Juliet at first sight. With the help of Friar Laurence, they marry in secret, hoping their union might end the ancient grudge between Montagues and Capulets.
              </p>
              <p>
                After being banished from Verona for killing Tybalt in revenge for Mercutio's death, Romeo flees to Mantua. Misinformed of Juliet's death, he returns to Verona and takes his own life beside her in the Capulet tomb, moments before she awakens.
              </p>
            </div>
          </div>

          {/* KEY EVENTS */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Swords className="w-6 h-6 text-green-500" />
              Key Events
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-green-400">
                  ACT I
                </div>
                <div className="flex-1 border-l-2 border-green-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">The Masked Ball</h4>
                  <p className="text-sm text-stone-400">Romeo attends the Capulet ball, meets Juliet, and they fall in love instantly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-green-400">
                  ACT II
                </div>
                <div className="flex-1 border-l-2 border-green-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Secret Marriage</h4>
                  <p className="text-sm text-stone-400">Romeo and Juliet marry in secret with Friar Laurence's assistance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-green-400">
                  ACT III
                </div>
                <div className="flex-1 border-l-2 border-green-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Duel and Banishment</h4>
                  <p className="text-sm text-stone-400">After Mercutio's death, Romeo kills Tybalt and is banished from Verona.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-green-400">
                  ACT V
                </div>
                <div className="flex-1 border-l-2 border-green-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Tragic End</h4>
                  <p className="text-sm text-stone-400">Believing Juliet dead, Romeo drinks poison in her tomb.</p>
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
                "Did my heart love till now? Forswear it, sight! For I ne'er saw true beauty till this night."
              </blockquote>
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "But soft, what light through yonder window breaks? It is the east, and Juliet is the sun."
              </blockquote>
              <blockquote className="border-l-4 border-green-500/50 pl-4 italic text-stone-300">
                "Thus with a kiss I die."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
