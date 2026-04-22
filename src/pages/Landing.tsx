import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { Database, Shield, Zap, Globe, Cpu, ChevronRight, Activity, BookOpen } from 'lucide-react';

const TimeVortex = () => {
  const [particles, setParticles] = useState<{ id: number; r: number; theta: number; speed: number; size: number; opacity: number }[]>([]);
  
  useEffect(() => {
    setParticles(
      Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        r: Math.random() * 400 + 100,
        theta: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
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
            left: '50%',
            top: '50%',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
            opacity: [p.opacity, p.opacity * 0.5, p.opacity],
          }}
          transition={{
            duration: 10 / p.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const HUDCircle = ({ size, duration, reverse = false, dashed = false }: { size: string, duration: number, reverse?: boolean, dashed?: boolean }) => (
  <motion.div
    className={`absolute rounded-full border border-green-500/20 ${dashed ? 'border-dashed' : ''}`}
    style={{ width: size, height: size }}
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
  />
);

export default function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-green-500/30 selection:text-green-200 relative overflow-hidden flex flex-col items-center justify-center">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0 text-white"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.05] z-50"></div>
      
      <TimeVortex />

      {/* CENTRAL HUD UNIT */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-6xl h-[600px]">
        {/* Layered HUD Rings */}
        <HUDCircle size="500px" duration={40} />
        <HUDCircle size="480px" duration={30} reverse dashed />
        <HUDCircle size="300px" duration={20} dashed />
        
        {/* Animated Scanning Line */}
        <motion.div 
          className="absolute w-[600px] h-[1px] bg-gradient-to-r from-transparent via-green-500/40 to-transparent z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* CONTENT CORE - Centered layout */}
        <motion.div 
          className="relative z-20 flex flex-col items-center justify-center w-full px-12 text-center"
          style={{ 
            x: mousePos.x,
            y: mousePos.y
          }}
        >
          {/* TITLE SEQUENCE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="font-sans text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
              Living<br/>
              <span className="text-green-500">Literature</span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Link 
                to="/archive"
                className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 px-8 py-4 rounded-lg font-mono text-sm uppercase tracking-widest hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
              >
                <Database className="w-5 h-5" />
                Explore Archive
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* FOOTER METRICS */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 flex justify-between items-end z-40 pointer-events-none">
        <div className="space-y-4 opacity-40">
           <div className="flex items-center gap-3">
             <Cpu className="w-4 h-4" />
             <div className="h-[2px] w-24 bg-stone-800 relative">
               <motion.div 
                 className="absolute inset-0 bg-green-500/50"
                 animate={{ width: ["10%", "90%", "40%", "70%"] }}
                 transition={{ duration: 4, repeat: Infinity }}
               />
             </div>
           </div>
           <p className="font-mono text-[9px] uppercase tracking-widest text-stone-600">
             Processing_Verona_Archive...
           </p>
        </div>
        
        <div className="flex flex-col items-end gap-3 opacity-40">
          <Globe className="w-6 h-6 text-stone-700 animate-[spin_20s_linear_infinite]" />
          <p className="font-mono text-[9px] uppercase tracking-widest text-stone-600">
            Characters: 7_Active
          </p>
        </div>
      </footer>
    </div>
  );
}
