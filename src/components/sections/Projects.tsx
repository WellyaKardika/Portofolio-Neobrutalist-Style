"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '@/data/projects';
import { ProjectCategory } from '@/lib/types';
import { Layers, ArrowUpRight, LayoutGrid } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterClick = (category: ProjectCategory) => {
    if (selectedCategory === category) return;
    setIsFiltering(true);
    setSelectedCategory(category);
    setTimeout(() => {
      setIsFiltering(false);
    }, 500);
  };

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getCategoryTheme = (category: 'analysis' | 'development' | 'strategy') => {
    switch (category) {
      case 'analysis':   return { bg: 'bg-brand-primary',   hoverBg: 'hover:bg-yellow-400' };
      case 'strategy':   return { bg: 'bg-brand-secondary', hoverBg: 'hover:bg-brand-dark-pink' };
      case 'development':return { bg: 'bg-brand-tertiary',  hoverBg: 'hover:bg-brand-dark-blue' };
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="projects"
      className="py-20 px-4 md:px-8 bg-white dark:bg-zinc-950 border-b-4 border-black dark:border-white transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6 pb-6 border-b-4 border-black dark:border-white">
          <div>
            <div className="flex items-center gap-2 text-zinc-500 mb-2">
              <Layers className="w-5 h-5 text-brand-primary animate-pulse" />
              <span className="font-mono text-xs font-black uppercase tracking-widest">Selected Works</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-sans leading-none text-black dark:text-white uppercase tracking-tight">
              Featured Projects
            </h2>
            <p className="font-medium text-sm md:text-base text-zinc-700 dark:text-zinc-400 mt-2">
              A comprehensive showcase of user analytical audits, operational telemetry dashboards, and market expansion tactics.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 md:gap-3 shrink-0">
            {([
              { key: 'all', label: 'All Projects' },
              { key: 'analysis', label: 'Business Analysis' },
              { key: 'development', label: 'Development' },
              { key: 'strategy', label: 'Strategy' }
            ] as const).map((filter) => (
              <button
                key={filter.key}
                onClick={() => handleFilterClick(filter.key)}
                disabled={isFiltering}
                className={`px-4 py-2 text-xs md:text-sm font-extrabold font-mono border-4 border-black rounded-full shadow-sm uppercase transition-all ${
                  selectedCategory === filter.key
                    ? 'bg-brand-primary text-black dark:border-white hover:shadow-none translate-x-[1px] translate-y-[1px]'
                    : 'bg-white hover:bg-brand-primary dark:bg-zinc-800 dark:border-white dark:text-white dark:hover:text-zinc-800 dark:hover:bg-brand-primary transition-all duration-500 cursor-pointer'
                } ${isFiltering ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        {filteredProjects.length > 3 && (
          <div className={`text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest text-center mb-6 items-center justify-center gap-1.5 animate-pulse ${filteredProjects.length > 6 ? 'flex' : 'flex md:hidden'}`}>
            ↓ Scroll to view more projects ↓
          </div>
        )}

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[1350px] lg:max-h-[950px] overflow-y-auto px-2 pb-4 pt-2 custom-scrollbar">
          <AnimatePresence mode="popLayout">
            {isFiltering ? (
              // Skeletons
              Array.from({ length: Math.min(3, filteredProjects.length || 3) }).map((_, idx) => (
                <motion.div
                  key={`skeleton-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col h-full bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-xl brutal-shadow overflow-hidden animate-pulse"
                >
                  <div className="h-48 border-b-4 border-black dark:border-white bg-zinc-200 dark:bg-zinc-800" />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-700 rounded mb-4" />
                    <div className="h-6 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded mb-4" />
                    <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-700 rounded mb-2" />
                    <div className="h-4 w-5/6 bg-zinc-200 dark:bg-zinc-700 rounded mb-6" />
                    <div className="mt-auto h-12 w-full bg-zinc-200 dark:bg-zinc-700 rounded-lg border-4 border-black/10" />
                  </div>
                </motion.div>
              ))
            ) : (
              // Actual Projects
              filteredProjects.map((project, idx) => {
                const theme = getCategoryTheme(project.category);
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`group flex flex-col h-full bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-xl brutal-shadow overflow-hidden hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 ${
                      idx === 1 ? 'md:translate-y-4' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className="h-48 border-b-4 border-black dark:border-white relative overflow-hidden bg-brand-primary">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover mix-blend-multiply opacity-85 group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 bg-white dark:bg-zinc-950 px-3 py-1.5 border-4 border-black dark:border-white rounded-full text-xs font-black font-mono uppercase text-black dark:text-white shadow-sm">
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow text-left">
                      <span className="text-zinc-500 font-mono text-xs font-bold uppercase tracking-wider mb-2 block">
                        {project.tag}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black font-sans text-black dark:text-white mb-2 leading-none group-hover:text-brand-primary dark:group-hover:text-yellow-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="mt-auto">
                        <Link
                          href={`/project/${project.id}`}
                          className={`w-full py-3 ${theme.bg} ${theme.hoverBg} text-black font-extrabold text-sm border-4 border-black rounded-lg brutal-shadow-sm group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-none transition-all flex justify-center items-center gap-1.5 cursor-pointer`}
                        >
                          Inspect Case Study <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </motion.div>

        {/* View All */}
        {/* <div className="mt-16 text-center">
          <button
            onClick={() => alert("Asep's full interactive repository including 15 archived production files is loading directly into our offline state logs.")}
            className="px-8 py-3.5 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-full font-black text-black dark:text-white hover:bg-brand-primary dark:hover:bg-yellow-400 dark:hover:text-black shadow-md hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer text-sm"
          >
            Access All Case Files <LayoutGrid className="w-4 h-4" />
          </button>
        </div> */}

      </div>
    </motion.section>
  );
}
