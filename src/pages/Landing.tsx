import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { Database, Shield, Zap, Globe, Cpu, ChevronRight, Activity } from 'lucide-react';

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

        {/* CONTENT CORE - Split layout */}
        <motion.div 
          className="relative z-20 flex items-center justify-between w-full px-12"
          style={{ 
            x: mousePos.x,
            y: mousePos.y
          }}
        >
          {/* LEFT SIDE - Text Content */}
          <div className="flex flex-col items-start text-left space-y-8 max-w-lg">
            {/* LOGO AREA */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col items-start gap-4"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-green-500/20 blur-xl rounded-full animate-pulse"></div>
                <Database className="w-16 h-16 text-green-500 relative z-10 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
              </div>
              <div className="flex items-center gap-3 px-3 py-1 bg-stone-900/50 border border-stone-800 rounded text-[10px] font-mono tracking-widest text-stone-500">
                 <Activity className="w-3 h-3 text-green-500 animate-pulse" />
                 NEURAL_LINK_ESTABLISHED
              </div>
            </motion.div>

            {/* TITLE SEQUENCE */}
            <div className="space-y-2">
              <motion.h1 
                initial={{ letterSpacing: "0.5em", opacity: 0 }}
                animate={{ letterSpacing: "0.2em", opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="text-6xl md:text-7xl font-black text-white uppercase tracking-[0.2em] relative"
              >
                Romeo<br/>& Juliet
                <span className="absolute -inset-1 bg-green-500/10 blur-2xl -z-10"></span>
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="font-mono text-xs md:text-sm text-stone-400 uppercase tracking-[0.4em]"
              >
                Verona Character Archive // v1.0
              </motion.p>
            </div>

            {/* ACTION BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <Link to="/archive" className="group relative px-10 py-4 block">
                <div className="absolute inset-0 bg-green-500/50 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative px-8 py-3 bg-stone-950 border border-green-500/50 flex items-center gap-4 text-green-400 font-mono tracking-widest text-sm uppercase group-hover:bg-green-600 transition-all group-hover:text-white group-hover:border-green-300 overflow-hidden">
                  <span className="relative z-10">Explore Database</span>
                  <ChevronRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform relative z-10" />
                  
                  {/* Button sliding effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-1000"></div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT SIDE - Space for character images/backgrounds */}
          <div className="flex-1 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="relative w-96 h-96"
            >
              {/* Placeholder for character images - will be added later */}
              <div className="absolute inset-0 bg-green-500/5 rounded-full border-2 border-green-500/20 backdrop-blur-sm flex items-center justify-center">
                <p className="font-mono text-xs text-green-500/50 uppercase tracking-widest text-center">
                  Character<br/>Images<br/>Coming Soon
                </p>
              </div>
            </motion.div>
          </div>
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
