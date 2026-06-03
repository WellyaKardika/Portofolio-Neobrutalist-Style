"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TIMELINE_ITEMS } from '@/data/experience';

import { TimelineItem } from '@/lib/types';
import { Calendar, Briefcase, CheckCircle, ChevronDown, Award } from 'lucide-react';

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState<string | null>('role1');

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="timeline" 
      className="py-20 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-900 border-b-4 border-black dark:border-white transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Title Block header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block px-4 py-1.5 bg-brand-tertiary border-4 border-black rounded-full shadow-sm mb-3">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-black">Professional Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-4.5xl font-black font-sans uppercase text-black dark:text-white leading-tight">
            Career Timeline
          </h2>
          <p className="text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mt-2">
            The trajectory of marrying complex systems analysis with reliable client applications.
          </p>
        </div>

        {/* Timeline Vector Structure */}
        <div className="relative border-l-4 border-black dark:border-white pl-6 md:pl-10 ml-2 md:ml-6 space-y-12">
          {TIMELINE_ITEMS.map((item, idx) => {
            const isExpanded = expandedItem === item.id;
            return (
              <div key={item.id} className="relative">
                
                {/* Visual Connector Dot */}
                <div className="absolute -left-[34px] md:-left-[53px] w-6 h-6 rounded-full border-4 border-black bg-brand-primary dark:bg-yellow-400 flex items-center justify-center shadow-sm">
                  <Briefcase className="w-3.5 h-3.5 text-black" />
                </div>

                {/* Main Experience container box */}
                <div 
                  className={`bg-white dark:bg-zinc-800 border-4 border-black dark:border-white rounded-xl p-5 md:p-6 brutal-shadow transition-all ${isExpanded ? 'ring-2 ring-brand-primary border-solid' : 'hover:scale-[1.01]'}`}
                >
                  
                  {/* Summary/Toggle Header and Roles */}
                  <div 
                    onClick={() => toggleExpand(item.id)}
                    className="flex justify-between items-start gap-4 cursor-pointer select-none"
                  >
                    <div>
                      {/* Year Indicator Label */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white border-4 border-black text-xs font-bold font-mono rounded-md shadow-sm mb-3">
                        <Calendar className="w-3 h-3 text-brand-primary" /> {item.year}
                      </span>
                      
                      <h3 className="text-xl md:text-2xl font-black font-sans leading-none text-black dark:text-white mt-1">
                        {item.role}
                      </h3>
                      
                      <p className="text-sm md:text-base font-extrabold text-brand-primary dark:text-yellow-400 font-mono mt-1">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 text-xs font-bold font-mono rounded-md border-4 border-black hidden sm:inline-block ${item.tagColorClass}`}>
                        {item.tag}
                      </span>
                      <button 
                        className={`p-1.5 border-4 border-black dark:border-white bg-[#FF6B6B] rounded-md text-black shadow-sm transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      >
                        <ChevronDown className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Collapsible expanded achievements */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t-2 border-black dark:border-white border-dashed space-y-4 animate-slideDown">
                      <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                        {item.description}
                      </p>

                      <div>
                        <p className="text-xs font-black uppercase font-mono tracking-wider text-black dark:text-white mb-3 flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-green-500" /> Notable Contributions:
                        </p>
                        <ul className="space-y-3">
                          {item.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex gap-2 items-start text-sm font-medium text-zinc-600 dark:text-zinc-300">
                              <span className="w-2 h-2 rounded-full bg-brand-primary dark:bg-yellow-400 mt-1.5 border border-black shrink-0"></span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
