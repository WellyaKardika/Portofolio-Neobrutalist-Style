"use client";
import React, { useState } from 'react';
import { STATS, SKILLS } from '@/data/skills';

import { StatItem, SkillItem } from '@/lib/types';
import { Sparkles, User, GraduationCap, Code, FileSpreadsheet, TrendingUp, Info } from 'lucide-react';

export default function About() {
  const [activeStat, setActiveStat] = useState<StatItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'analysis' | 'development' | 'strategy'>('all');

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
    <section 
      id="about" 
      className="py-20 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-900 border-b-3 border-black dark:border-white relative transition-colors duration-200"
    >
      {/* Dynamic background items */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000000 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>

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
                    {item.value}
                  </p>
                  <p className="text-xs font-bold font-mono uppercase text-black dark:text-inherit">
                    {item.label}
                  </p>
                </button>
              ))}
            </div>

            {/* Micro-Interaction Stat Detail Explainer bubble */}
            {activeStat && (
              <div className="mt-4 p-4 border-4 border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white rounded-lg shadow-sm font-bold text-sm text-left flex items-start gap-2.5 animate-fadeIn">
                <Info className="w-5 h-5 shrink-0 text-brand-tertiary dark:text-yellow-400 mt-0.5" />
                <div>
                  <p className="font-extrabold uppercase text-xs font-mono tracking-wider mb-1 text-zinc-550 dark:text-zinc-400">
                    Details on {activeStat.label} metric:
                  </p>
                  <p className="font-medium text-black dark:text-zinc-200">
                    {activeStat.detailedText}
                  </p>
                </div>
              </div>
            )}
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
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-bold font-mono border-4 border-black rounded-full shadow-sm uppercase cursor-pointer transition-all ${activeCategory === cat ? 'bg-brand-primary text-black hover:shadow-none' : 'bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800'}`}
                >
                  {cat === 'all' ? 'All Skills' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Skill bars list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {filteredSkills.map((skill, idx) => (
              <div 
                key={idx} 
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
                  <div 
                    className="h-full bg-brand-primary border-r-4 border-black transition-all duration-500 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


