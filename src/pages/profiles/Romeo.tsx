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

export default function Romeo() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 relative overflow-hidden">
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/Background_Romeo&Juliet.png")' }}>
        <div className="absolute inset-0 bg-stone-950/80"></div>
      </div>
      <FloatingParticles />
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/story/romeo-and-juliet" className="flex items-center gap-3 text-stone-400 hover:text-blue-400 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN_TO_STORY</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          <span>ID: ROMEO_MONTAGUE_001</span>
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
                  src="/Romeo (R&J).png" 
                  alt="Romeo Montague"
                  className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(96,165,250,0.5)] relative z-20"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · Tragic Hero
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">
                Romeo<br/>Montague
              </h1>
              <p className="font-mono text-lg text-blue-400">
                Son of Lord and Lady Montague
              </p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                A young nobleman of the Montague family whose tragic love for Juliet Capulet becomes the catalyst for reconciliation between their feuding families, ending only in their untimely deaths.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Age" value="16-17" />
                <StatCard label="House" value="Montague" />
                <StatCard label="Status" value="Deceased" />
                <StatCard label="Era" value="16th Century" />
              </div>
            </div>
          </div>

          {/* BIOGRAPHY SECTION */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-500" />
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
              <Swords className="w-6 h-6 text-blue-500" />
              Key Events
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-blue-400">
                  ACT I
                </div>
                <div className="flex-1 border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">The Masked Ball</h4>
                  <p className="text-sm text-stone-400">Romeo attends the Capulet ball, meets Juliet, and they fall in love instantly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-blue-400">
                  ACT II
                </div>
                <div className="flex-1 border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Secret Marriage</h4>
                  <p className="text-sm text-stone-400">Romeo and Juliet marry in secret with Friar Laurence's assistance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-blue-400">
                  ACT III
                </div>
                <div className="flex-1 border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Duel and Banishment</h4>
                  <p className="text-sm text-stone-400">After Mercutio's death, Romeo kills Tybalt and is banished from Verona.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right font-mono text-xs text-blue-400">
                  ACT V
                </div>
                <div className="flex-1 border-l-2 border-blue-500/30 pl-4">
                  <h4 className="font-bold text-white mb-1">Tragic End</h4>
                  <p className="text-sm text-stone-400">Believing Juliet dead, Romeo drinks poison in her tomb.</p>
                </div>
              </div>
            </div>
          </div>

          {/* QUOTES */}
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3">
              <Scroll className="w-6 h-6 text-blue-500" />
              Notable Quotes
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Did my heart love till now? Forswear it, sight! For I ne'er saw true beauty till this night."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Romeo's instant infatuation upon first seeing Juliet at the Capulet ball, declaring all previous loves meaningless.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 1, Scene 5</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "But soft, what light through yonder window breaks? It is the east, and Juliet is the sun."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  The famous balcony scene soliloquy where Romeo compares Juliet's beauty to the rising sun, symbolizing hope and new beginnings.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 2, Scene 2</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "O, she doth teach the torches to burn bright! It seems she hangs upon the cheek of night like a rich jewel in an Ethiope's ear."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Romeo's poetic description of Juliet's beauty, contrasting her radiance against the darkness of the ballroom.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 1, Scene 5</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Thus with a kiss I die."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Romeo's final words as he drinks poison at Juliet's tomb, believing she is dead and choosing to join her in death.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 5, Scene 3</p>
              </div>
              <div className="border-l-4 border-blue-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Then I defy you, stars!"
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  Romeo's rebellion against fate after learning of his banishment, refusing to accept the destiny that separates him from Juliet.
                </p>
                <p className="font-mono text-xs text-blue-400">Act 5, Scene 1</p>
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
              <Link to="/juliet" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-red-400 transition-colors">Juliet</h3>
                      <p className="font-mono text-xs text-stone-500">Love Interest</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Romeo's beloved and wife, whose love drives the story's tragedy.</p>
                </div>
              </Link>
              <Link to="/mercutio" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-blue-400 transition-colors">Mercutio</h3>
                      <p className="font-mono text-xs text-stone-500">Best Friend</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Romeo's witty friend whose death triggers the tragic chain of events.</p>
                </div>
              </Link>
              <Link to="/benvolio" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-blue-400 transition-colors">Benvolio</h3>
                      <p className="font-mono text-xs text-stone-500">Cousin & Peacemaker</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Romeo's cousin who consistently tries to maintain peace.</p>
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
