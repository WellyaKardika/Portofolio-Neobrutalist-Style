"use client";
import React, { useEffect } from 'react';
import { Project } from '@/lib/types';
import { X, CheckSquare, Zap, BarChart3, Target, Cpu, CalendarClock, Compass } from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as ChartTooltip,
  CartesianGrid,
  LineChart,
  Line,
  Cell
} from 'recharts';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  // Render a lovely custom chart depending on the project category
  const renderProjectChart = () => {
    if (!project.chartData) return null;

    if (project.category === 'analysis') {
      return (
        <div className="h-64 w-full bg-white dark:bg-zinc-800 p-4 border-4 border-black dark:border-white rounded-lg brutal-shadow-sm">
          <p className="text-xs font-mono font-bold mb-4 text-center text-zinc-500 uppercase tracking-wider">
            📊 Conversion rate progress vs. pre-optimization baseline (%)
          </p>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={project.chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
              <XAxis dataKey="name" stroke="#000000" fontSize={11} fontWeight={600} />
              <YAxis domain={[0, 4]} stroke="#000000" fontSize={11} fontWeight={600} />
              <ChartTooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '4px solid #000000',
                  borderRadius: '6px',
                  fontFamily: 'sans-serif',
                  fontWeight: 'bold'
                }} 
              />
              <Line type="monotone" dataKey="value" stroke="#4D4DFF" strokeWidth={4} name="Current Rate" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="benchmark" stroke="#FF6B6B" strokeWidth={3} strokeDasharray="4 4" name="Baseline" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    }

    if (project.category === 'strategy') {
      const COLORS = ['#FFD100', '#FF6B6B', '#4D4DFF'];
      return (
        <div className="h-64 w-full bg-white dark:bg-zinc-800 p-4 border-4 border-black dark:border-white rounded-lg brutal-shadow-sm">
          <p className="text-xs font-mono font-bold mb-4 text-center text-zinc-500 uppercase tracking-wider">
            💼 TAM Market potential segment split (%)
          </p>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={project.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#000000" fontSize={11} fontWeight={600} />
              <YAxis stroke="#000000" fontSize={11} fontWeight={600} />
              <ChartTooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '4px solid #000000',
                  borderRadius: '6px'
                }} 
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} stroke="#000000" strokeWidth={2}>
                {project.chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }

    if (project.category === 'development') {
      return (
        <div className="h-64 w-full bg-white dark:bg-zinc-800 p-4 border-4 border-black dark:border-white rounded-lg brutal-shadow-sm">
          <p className="text-xs font-mono font-bold mb-4 text-center text-zinc-500 uppercase tracking-wider">
            ⏱️ Monthly Manual Reporting hours saved (lower is better)
          </p>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={project.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#000000" fontSize={11} fontWeight={600} />
              <YAxis stroke="#000000" fontSize={11} fontWeight={600} />
              <ChartTooltip 
                contentStyle={{ 
                  backgroundColor: '#ffffff', 
                  border: '4px solid #000000',
                  borderRadius: '6px'
                }} 
              />
              <Bar dataKey="value" fill="#4D4DFF" stroke="#000000" strokeWidth={3} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }

    return null;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      id="project-modal-overlay"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'project-modal-overlay') {
          onClose();
        }
      }}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-6 md:p-8 rounded-xl brutal-shadow-lg flex flex-col gap-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        id="project-modal-card"
      >
        {/* Header Options */}
        <div className="flex justify-between items-start gap-4 border-b-4 border-black dark:border-white pb-4">
          <div>
            <div className="inline-block px-3 py-1 mb-2 text-xs font-bold font-mono uppercase bg-brand-primary dark:bg-yellow-400 text-black border-4 border-black rounded-full shadow-sm">
              {project.category}
            </div>
            <h2 id="modal-title" className="text-2xl md:text-3xl font-black font-sans leading-none tracking-tight text-neutral-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-1 text-sm md:text-base">
              {project.tag}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 border-4 border-black dark:border-white bg-[#FF6B6B] text-white hover:bg-brand-secondary dark:hover:bg-red-400 rounded-lg shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
            aria-label="Close modal"
            id="close-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Visuals and Stats */}
          <div className="space-y-6">
            <div className="relative border-4 border-black dark:border-white rounded-lg overflow-hidden bg-brand-primary brutal-shadow-sm group h-48 md:h-60 flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.imageAlt}
                className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-102 transition-transform duration-300"
              />
            </div>

            {/* Performance KPIs */}
            <div>
              <h3 className="text-sm font-black uppercase font-mono tracking-wider text-black dark:text-white mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-brand-primary" /> Core Impact Metrics
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="bg-brand-tertiary/20 dark:bg-zinc-800 border-4 border-black dark:border-white p-3 rounded-lg text-center shadow-sm">
                    <p className="text-lg md:text-xl font-extrabold font-mono text-black dark:text-white leading-none mb-1">
                      {m.value}
                    </p>
                    <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 leading-tight">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Data Visualization */}
            {project.chartData && (
              <div>
                <h3 className="text-sm font-black uppercase font-mono tracking-wider text-black dark:text-white mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-brand-secondary" /> Project Analytics Viz
                </h3>
                {renderProjectChart()}
              </div>
            )}
          </div>

          {/* Right Column: Descriptions & Steps list */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-black uppercase font-mono tracking-wider text-black dark:text-white mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-brand-accent animate-pulse" /> Context & About
              </h3>
              <p className="text-body-md text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                {project.about}
              </p>
            </div>

            {/* Key Deliverables */}
            <div>
              <h3 className="text-sm font-black uppercase font-mono tracking-wider text-black dark:text-white mb-3 flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-green-500" /> Key Deliverables achieved
              </h3>
              <ul className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <CheckSquare className="w-4 h-4 text-black dark:text-white shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology Stages */}
            {project.methodology && (
              <div>
                <h3 className="text-sm font-black uppercase font-mono tracking-wider text-black dark:text-white mb-3 flex items-center gap-2">
                  <CalendarClock className="w-4 h-4 text-cyan-500" /> Roadmap Methodology
                </h3>
                <div className="space-y-2 border-l-2 border-black dark:border-white pl-4 ml-2">
                  {project.methodology.map((m, idx) => (
                    <div key={idx} className="relative py-1">
                      <div className="absolute -left-[23px] top-2.5 w-2 h-2 rounded-full border border-black bg-brand-primary"></div>
                      <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        {m}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Stack used */}
            {project.techUsed && (
              <div>
                <h3 className="text-sm font-black uppercase font-mono tracking-wider text-black dark:text-white mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-500" /> Professional stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techUsed.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 text-xs font-bold font-mono bg-zinc-100 dark:bg-zinc-800 border-4 border-black dark:border-white text-black dark:text-white rounded-lg shadow-sm"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


