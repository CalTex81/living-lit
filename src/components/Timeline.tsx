import React from 'react';
import { motion } from 'motion/react';
import { CircleDot } from 'lucide-react';

export type TimelineEvent = {
  year: string;
  title: string;
  description: string;
};

export default function Timeline({ events, title = "VITAL_TIMELINE_LOG" }: { events: TimelineEvent[], title?: string }) {
  return (
    <div className="glass-panel neon-border rounded-xl p-8 font-mono relative">
      <div className="flex items-center gap-3 border-b border-stone-800 pb-6 mb-8">
        <CircleDot className="w-6 h-6 text-cyan-400 animate-pulse" />
        <h2 className="text-xl tracking-widest text-white uppercase">{title}</h2>
      </div>

      <div className="relative border-l border-stone-800 ml-4 space-y-10 pb-4">
        {events.map((event, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="relative pl-8 group"
          >
            {/* Timeline Dot Node */}
            <div className="absolute -left-[5px] top-1.5 w-[10px] h-[10px] rounded-full bg-stone-800 border-2 border-stone-900 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300"></div>

            <div className="flex flex-col gap-1">
              <span className="text-cyan-500/80 font-bold tracking-wider text-sm">{event.year}</span>
              <h3 className="text-stone-200 text-lg uppercase tracking-wide group-hover:text-cyan-300 transition-colors">{event.title}</h3>
              <p className="font-sans text-stone-400 leading-relaxed mt-1">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
