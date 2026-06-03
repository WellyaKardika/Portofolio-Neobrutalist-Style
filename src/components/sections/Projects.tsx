"use client";
import React, { useState } from 'react';
import { PROJECTS } from '@/data/projects';

import { Project, ProjectCategory } from '@/lib/types';
import { Layers, ArrowUpRight, BarChart2, Briefcase, ChevronRight, LayoutGrid } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getCategoryTheme = (category: 'analysis' | 'development' | 'strategy') => {
    switch (category) {
      case 'analysis':
        return {
          bg: 'bg-brand-primary',
          hoverBg: 'hover:bg-brand-accent'
        };
      case 'strategy':
        return {
          bg: 'bg-brand-secondary',
          hoverBg: 'hover:bg-brand-dark-pink'
        };
      case 'development':
        return {
          bg: 'bg-brand-tertiary',
          hoverBg: 'hover:bg-brand-dark-blue'
        };
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-4 md:px-8 bg-white dark:bg-zinc-950 border-b-4 border-black dark:border-white transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Gallery Title Context header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6 pb-6 border-b-4 border-black dark:border-white">
          <div>
            <div className="flex items-center gap-2 text-zinc-500 mb-2">
              <Layers className="w-5 h-5 text-brand-primary animate-pulse" />
              <span className="font-mono text-xs font-black uppercase tracking-widest">Selected Works</span>
            </div>
            <h2 className="text-3xl md:text-4.5xl font-black font-sans leading-none text-black dark:text-white uppercase tracking-tight">
              Featured Projects
            </h2>
            <p className="font-medium text-sm md:text-base text-zinc-700 dark:text-zinc-400 mt-2">
              A comprehensive showcase of user analytical audits, operational telemetry dashboards, and market expansion tactics.
            </p>
          </div>

          {/* Neobrutalist filter pills */}
          <div className="flex flex-wrap gap-2 md:gap-3 shrink-0">
            {([
              { key: 'all', label: 'All Projects' },
              { key: 'analysis', label: 'Business Analysis' },
              { key: 'development', label: 'Development' },
              { key: 'strategy', label: 'Strategy' }
            ] as const).map((filter) => (
              <button
                key={filter.key}
                onClick={() => setSelectedCategory(filter.key)}
                className={`px-4 py-2 text-xs md:text-sm font-extrabold font-mono border-4 border-black rounded-full shadow-sm uppercase cursor-pointer transition-all ${selectedCategory === filter.key ? 'bg-brand-primary text-black hover:shadow-none translate-x-[1px] translate-y-[1px]' : 'bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const theme = getCategoryTheme(project.category);
            return (
              <div 
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group flex flex-col h-full bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-xl brutal-shadow overflow-hidden hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 cursor-pointer ${
                  idx === 1 ? 'md:translate-y-4' : ''
                }`}
              >
                {/* Embedded dynamic illustration container with heavy brutal outline */}
                <div className="h-48 border-b-4 border-black dark:border-white relative overflow-hidden bg-brand-primary flex items-center justify-center">
                  <img 
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover mix-blend-multiply opacity-85 group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-zinc-950 px-3 py-1.5 border-4 border-black dark:border-white rounded-full text-xs font-black font-mono uppercase text-black dark:text-white shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <span className="text-zinc-500 font-mono text-xs font-bold uppercase tracking-wider mb-2 block">
                    {project.tag}
                  </span>
                  
                  <h3 className="text-xl md:text-2xl font-black font-sans text-black dark:text-white mb-2 leading-none group-hover:text-brand-primary dark:group-hover:text-yellow-400">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <button 
                      className={`w-full py-3 ${theme.bg} ${theme.hoverBg} text-black font-extrabold text-sm border-4 border-black rounded-lg shadow-sm group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-none transition-all flex justify-center items-center gap-1.5 cursor-pointer`}
                    >
                      Inspect Case Studies <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Work button trigger */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => alert("Rachel's full interactive repository including 15 archived production files is loading directly into our offline state logs.")}
            className="px-8 py-3.5 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-full font-black text-black dark:text-white hover:bg-brand-primary dark:hover:bg-yellow-400 dark:hover:text-black shadow-md hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer text-sm"
          >
            Access All Case Files <LayoutGrid className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}


