import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Clock, MapPin, Users } from 'lucide-react';

interface StoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  era: string;
  years: string;
  region: string;
  characters: Array<{
    name: string;
    role: string;
    family: string;
    description: string;
    image: string;
    path: string;
    accentColor: string;
  }>;
  backgroundImage: string;
  accentColor: string;
}

export default function StoryPage({
  title,
  subtitle,
  description,
  era,
  years,
  region,
  characters,
  backgroundImage,
  accentColor,
}: StoryPageProps) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-red-500/30 selection:text-red-200 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${backgroundImage}")` }}>
        <div className="absolute inset-0 bg-stone-950/85"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: accentColor,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -100, -200],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Tech Grid */}
      <div className="fixed inset-0 tech-grid pointer-events-none opacity-20 z-0"></div>
      <div className="fixed inset-0 scanlines pointer-events-none opacity-[0.03] z-50"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-stone-950/80 backdrop-blur-md border-b border-stone-800 z-40 flex items-center px-6 justify-between text-xs font-mono">
        <Link to="/archive" className="flex items-center gap-3 text-stone-400 hover:text-blue-400 transition-colors">
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span>RETURN_TO_ARCHIVE</span>
        </Link>
        <div className="flex items-center gap-4 text-stone-500">
          <span>STORY_MODE_ACTIVE</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-24 px-6 pb-20 max-w-7xl mx-auto">
        {/* Story Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: accentColor }}></div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl md:text-3xl text-stone-400 mb-8 font-light"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg text-stone-400 leading-relaxed mb-12"
          >
            {description}
          </motion.div>

          {/* Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-sm font-mono"
          >
            <div className="flex items-center gap-2 text-stone-500">
              <Clock className="w-4 h-4" />
              <span>{era} ({years})</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500">
              <MapPin className="w-4 h-4" />
              <span>{region}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500">
              <Users className="w-4 h-4" />
              <span>{characters.length} Characters</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Characters Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Link
                to={character.path}
                className="block h-full"
              >
                <div 
                  className="glass-panel overflow-hidden rounded-lg border border-stone-800 hover:border-stone-700 transition-all duration-300 relative h-72"
                  style={{ 
                    boxShadow: '0 0 0 transparent',
                  } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px ${character.accentColor}4d`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 transparent';
                  }}
                >
                  {/* Character Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent z-10"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-20 p-5 h-full flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs bg-stone-800/80 px-2 py-1 rounded text-stone-300 border border-stone-700">
                        {character.family}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-white" style={{ fontFamily: 'var(--font-serif)' }}>
                      {character.name}
                    </h3>
                    <p className="text-sm text-stone-400 mb-2 font-mono">{character.role}</p>
                    <p className="text-xs text-stone-500 line-clamp-2">{character.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
