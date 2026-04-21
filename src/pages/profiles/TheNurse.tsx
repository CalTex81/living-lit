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
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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

export default function TheNurse() {
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
        <div className="flex items-center gap-4 text-stone-500">ID: NURSE_001</div>
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
                  src="/The Nurse (R&J).png" 
                  alt="The Nurse"
                  className="w-[110%] sm:w-[125%] md:w-[135%] lg:w-[145%] xl:w-[160%] 2xl:w-[180%] max-w-none h-auto max-h-[95vh] object-contain drop-shadow-[0_0_45px_rgba(250,204,21,0.5)] relative z-20"
                />
              </motion.div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest">
                <Rose className="w-4 h-4" />
                Romeo & Juliet · Loyal Confidante
              </div>
              <h1 className="font-sans text-6xl md:text-7xl font-black text-white uppercase tracking-tight">The Nurse</h1>
              <p className="font-mono text-lg text-yellow-400">Juliet's Personal Attendant</p>
              <p className="text-lg text-stone-300 leading-relaxed max-w-2xl font-serif italic border-b border-stone-800 pb-6">
                Juliet's devoted caregiver and confidante who raised her from infancy, serving as messenger for her secret romance with Romeo while providing earthy wisdom and comic relief throughout the tragic tale.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <StatCard label="Role" value="Attendant" />
                <StatCard label="Employer" value="Capulet" />
                <StatCard label="Status" value="Alive" />
                <StatCard label="Era" value="16th Century" />
              </div>
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3"><Heart className="w-6 h-6 text-yellow-500" />Biography</h2>
            <div className="prose prose-invert max-w-none space-y-4 text-stone-300 leading-relaxed">
              <p>The Nurse is Juliet's devoted caregiver and confidante, having raised Juliet from infancy. She is a lower-class character who speaks in earthy, colloquial language, providing comic relief while also being deeply caring.</p>
              <p>She facilitates Romeo and Juliet's secret romance by serving as their messenger. However, after Tybalt's death and Romeo's banishment, she advises Juliet to marry Paris, causing Juliet to lose trust in her.</p>
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-8 border border-stone-800">
            <h2 className="font-mono text-2xl text-white uppercase tracking-widest mb-6 flex items-center gap-3"><Scroll className="w-6 h-6 text-yellow-500" />Notable Quotes</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "An I might live to see thee married once, I have my wish."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  The Nurse's heartfelt wish to see Juliet married, showing her genuine love and care for her charge despite her often bawdy humor.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 1, Scene 3</p>
              </div>
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Romeo is a dishclout to him."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  The Nurse's earthy comparison of Romeo to Paris, using humble domestic imagery to express her pragmatic view of the marriage match.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 3, Scene 5</p>
              </div>
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "I'll lay fourteen of my teeth, and yet, to my teen be it spoken, I have but four."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  The Nurse's characteristic bawdy humor, making a crude joke about her age while revealing her long life and experiences.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 1, Scene 3</p>
              </div>
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "Then hie you hence to Friar Laurence' cell; there stays a husband to make you a wife."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  The Nurse's enthusiastic encouragement of Juliet's secret marriage to Romeo, showing her willingness to help the young lovers despite the risks.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 2, Scene 5</p>
              </div>
              <div className="border-l-4 border-yellow-500/50 pl-4">
                <blockquote className="italic text-stone-300 text-lg mb-2">
                  "I think the best match married is the match that's least talked of."
                </blockquote>
                <p className="text-sm text-stone-400 mb-1">
                  The Nurse's practical wisdom about marriage, suggesting that the best unions are those that don't attract gossip and scandal.
                </p>
                <p className="font-mono text-xs text-yellow-400">Act 2, Scene 4</p>
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
              <Link to="/juliet" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(248,113,113,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-red-400 transition-colors">Juliet</h3>
                      <p className="font-mono text-xs text-stone-500">Caregiver To</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">The Nurse has raised Juliet since infancy and serves as her confidante.</p>
                </div>
              </Link>
              <Link to="/romeo" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-blue-400 transition-colors">Romeo</h3>
                      <p className="font-mono text-xs text-stone-500">Helped With Marriage</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">The Nurse serves as messenger for Romeo and Juliet's secret romance.</p>
                </div>
              </Link>
              <Link to="/friarlawrence" className="group">
                <div className="glass-panel p-4 rounded-lg border border-stone-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-white group-hover:text-yellow-400 transition-colors">Friar Lawrence</h3>
                      <p className="font-mono text-xs text-stone-500">Fellow Advisor</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-400">Both the Nurse and Friar Lawrence help Juliet navigate her difficult choices.</p>
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
