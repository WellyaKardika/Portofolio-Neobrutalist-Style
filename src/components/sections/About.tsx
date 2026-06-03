"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { STATS, SKILLS } from '@/data/skills';

import { StatItem, SkillItem } from '@/lib/types';
import { Sparkles, User, GraduationCap, Code, FileSpreadsheet, TrendingUp, Info } from 'lucide-react';

// CountUp Animation Component
function AnimatedStatValue({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const match = value.match(/(\D*)(\d+)(\D*)/);
  const prefix = match ? match[1] : '';
  const numStr = match ? match[2] : value;
  const suffix = match ? match[3] : '';
  const num = parseInt(numStr, 10);
  
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => `${prefix}${Math.round(latest)}${suffix}`);
  
  useEffect(() => {
    if (isInView && !isNaN(num)) {
      animate(count, num, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, num, count]);

  if (isNaN(num)) return <span>{value}</span>;
  
  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function About() {
  const [activeStat, setActiveStat] = useState<StatItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'analysis' | 'development' | 'strategy'>('all');
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterClick = (category: 'all' | 'analysis' | 'development' | 'strategy') => {
    if (activeCategory === category) return;
    setIsFiltering(true);
    setActiveCategory(category);
    setTimeout(() => {
      setIsFiltering(false);
    }, 500);
  };

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory);

  const getCategoryIcon = (cat: 'analysis' | 'development' | 'strategy') => {
    switch(cat) {
      case 'analysis': return <FileSpreadsheet className="w-5 h-5 text-brand-primary shrink-0" />;
      case 'development': return <Code className="w-5 h-5 text-brand-secondary shrink-0" />;
      case 'strategy': return <TrendingUp className="w-5 h-5 text-brand-tertiary shrink-0" />;
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="about" 
      className="py-20 px-4 md:px-8 bg-[#FAF9F6] dark:bg-zinc-950 border-b-4 border-black dark:border-white relative transition-colors duration-200 overflow-hidden"
    >
      {/* Dynamic background items */}
      <div className="absolute inset-0 opacity-5 dark:hidden pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000000 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute inset-0 hidden dark:block opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Bio Card */}
        <div className="bg-white dark:bg-zinc-800 border-4 border-black dark:border-white p-6 md:p-12 rounded-xl brutal-shadow rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
          
          {/* Headline Title */}
          <div className="flex items-center gap-4 mb-8 border-b-4 border-black dark:border-white pb-6">
            <span className="p-3 bg-brand-primary border-4 border-black rounded-lg shadow-sm">
              <User className="w-6 h-6 text-black" />
            </span>
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500">
                Introduction
              </p>
              <h2 className="text-2xl md:text-3.5xl font-black font-sans leading-none text-black dark:text-white uppercase mt-0.5">
                About Me
              </h2>
            </div>
          </div>

          {/* Core Text Bio */}
          <div className="space-y-6 text-base md:text-lg text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
            <p className="border-l-4 border-brand-primary pl-4">
              Hai, I'm <span className="underline decoration-brand-primary decoration-4 underline-offset-4 font-extrabold text-black dark:text-white">Rachel Graceya Emanuella</span>. I am a Business Analyst and Business Development professional with a passion for building highly functional, clean, and impactful web solutions.
            </p>
            <p>
              My approach blends rigorous corporate analytical frameworks with creative engineering problem-solving. I thrive in responsive environments where complex metrics meet elegant interfaces, ensuring that every internal reporting system or consumer portal is highly intuitive.
            </p>
          </div>

          {/* Interactive Stats Grid */}
          <div className="mt-10">
            <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest text-center mb-4 flex items-center justify-center gap-1.5">
              💡 Click a card below to inspect live field data
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveStat(activeStat?.id === item.id ? null : item)}
                  className={`border-4 border-black dark:border-white p-4 text-center rounded-lg shadow-sm transition-all cursor-pointer select-none relative group ${item.colorClass} ${item.hoverColorClass} ${activeStat?.id === item.id ? 'translate-x-[4px] translate-y-[4px] shadow-none scale-102 font-extrabold' : ''}`}
                >
                  <p className="text-3xl md:text-4xl font-black font-mono text-black dark:text-inherit mb-1">
                    <AnimatedStatValue value={item.value} />
                  </p>
                  <p className="text-xs font-bold font-mono uppercase text-black dark:text-inherit">
                    {item.label}
                  </p>
                </button>
              ))}
            </div>

            {/* Micro-Interaction Stat Detail Explainer bubble */}
            <AnimatePresence>
              {activeStat && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-4 border-4 border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white rounded-lg shadow-sm font-bold text-sm text-left flex items-start gap-2.5">
                    <Info className="w-5 h-5 shrink-0 text-brand-tertiary dark:text-yellow-400 mt-0.5" />
                    <div>
                      <p className="font-extrabold uppercase text-xs font-mono tracking-wider mb-1 text-zinc-500 dark:text-zinc-400">
                        Details on {activeStat.label} metric:
                      </p>
                      <p className="font-medium text-black dark:text-zinc-200">
                        {activeStat.detailedText}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Skill Board */}
        <div className="mt-16 bg-white dark:bg-zinc-800 border-4 border-black dark:border-white p-6 md:p-8 rounded-xl brutal-shadow transform rotate-[0.5deg]">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b-4 border-black dark:border-white">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-brand-secondary border-4 border-black rounded-lg shadow-sm">
                <GraduationCap className="w-5 h-5 text-black" />
              </span>
              <h3 className="text-xl md:text-2xl font-black font-sans uppercase text-black dark:text-white leading-none">
                Core Competencies
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'analysis', 'development', 'strategy'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilterClick(cat)}
                  disabled={isFiltering}
                  className={`px-3 py-1.5 text-xs font-bold font-mono border-4 border-black dark:border-white rounded-full shadow-sm uppercase transition-all ${
                    activeCategory === cat
                      ? 'bg-brand-primary text-black dark:text-black hover:shadow-none'
                      : 'hover:bg-brand-primary dark:hover:bg-brand-primary dark:hover:text-black transition-all duration-500 cursor-pointer'
                  } ${isFiltering ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {cat === 'all' ? 'All Skills' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Skill bars list */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <AnimatePresence mode="popLayout">
              {isFiltering ? (
                // Skeletons
                Array.from({ length: Math.min(6, filteredSkills.length || 6) }).map((_, idx) => (
                  <motion.div
                    key={`skeleton-${idx}`}
                    layout
                    className="p-3 border-4 border-black dark:border-white bg-zinc-50 dark:bg-zinc-900 rounded-lg flex flex-col gap-2 animate-pulse"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-zinc-200 dark:bg-zinc-700 rounded" />
                        <div className="w-24 h-4 bg-zinc-200 dark:bg-zinc-700 rounded" />
                      </div>
                      <div className="w-10 h-5 bg-zinc-200 dark:bg-zinc-700 rounded" />
                    </div>
                    <div className="w-full h-4 bg-zinc-200 dark:bg-zinc-700 border-4 border-black/10 dark:border-white/10 rounded-full" />
                  </motion.div>
                ))
              ) : (
                // Actual Skills
                filteredSkills.map((skill, idx) => (
                  <motion.div 
                    key={skill.name} 
                    layout
                    className="p-3 border-4 border-black dark:border-white bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-sm flex flex-col gap-2 relative group hover:scale-[1.01] transition-transform"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(skill.category)}
                        <span className="font-bold text-sm text-black dark:text-white uppercase tracking-tight">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-black bg-brand-secondary dark:bg-zinc-800 text-black dark:text-white px-2 py-0.5 border-4 border-black dark:border-zinc-750 rounded-md">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar with standard neobrutalist stroke */}
                    <div className="w-full h-4 bg-white dark:bg-zinc-800 border-4 border-black dark:border-white rounded-full overflow-hidden relative">
                      <motion.div 
                        className="h-full bg-brand-primary border-r-4 border-black"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}


