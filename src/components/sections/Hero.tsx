"use client";
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Send, CheckCircle2, Award, Briefcase, FileText } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const handleDownloadResume = () => {
    // Elegant toast trigger or simple alert
    alert("Resume download simulation initialized! A high-spec PDF file of Rachel Graceya Emanuella's qualifications is preparing for download in a live production environment.");
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="home" 
      className="relative overflow-hidden border-b-4 border-black dark:border-white bg-white dark:bg-zinc-950 pt-12 pb-20 px-4 md:px-8 lg:pt-12 lg:pb-20 transition-colors duration-200"
    >
      {/* Decorative neobrutalist floating grids/shapes in background */}
      {/* <div className="absolute top-10 right-10 w-28 h-28 bg-brand-secondary border-4 border-black rounded-full shadow-sm z-0 animate-bounce" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/2 right-32 w-12 h-12 bg-brand-tertiary border-4 border-black rounded-full z-0 animate-pulse"></div> */}

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 opacity-5 dark:hidden pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute inset-0 hidden dark:block opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions and copy */}
        <div className="space-y-6 lg:col-span-7 relative z-10 text-left">
          <div className="inline-block px-4 py-2 bg-brand-primary dark:bg-yellow-400 border-4 border-black rounded-full transform -rotate-2 shadow-sm">
            <span className="font-mono text-xs md:text-sm font-black text-black uppercase tracking-wider flex items-center gap-1.5">
              Hello, World! 👋
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black font-sans text-black dark:text-white leading-tight tracking-tight uppercase">
            I'm <br className="hidden md:inline" />Rachel Graceya<br className="hidden md:inline" />
            <span className="bg-brand-secondary dark:bg-zinc-800 text-black dark:text-brand-secondary border-4 border-black dark:border-brand-secondary px-3 py-1 inline-block transform rotate-1 mt-1 rounded-lg">
              Emanuella
            </span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-zinc-800 dark:text-zinc-300 max-w-2xl leading-relaxed">
            A passionate{' '}
            <span className="bg-brand-primary border-2 border-dashed border-black dark:border-white px-1.5 py-0.5 rounded-sm font-bold text-black">
              Business Analyst
            </span>{' '}
            and{' '}
            <span className="bg-brand-tertiary border-2 border-dashed border-black dark:border-white px-1.5 py-0.5 rounded-sm font-bold text-white">
              Business Development
            </span>{' '}
            professional focused on turning complex problems into elegant, fun-damental, and highly performing solutions.
          </p>

          {/* Quick Stats list in the hero */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-zinc-700 dark:text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0" /> Enterprise Requirements Ready
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-zinc-700 dark:text-zinc-300">
              <Award className="w-4 h-4 text-brand-secondary shrink-0" /> Functional React Dev Standard
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-zinc-700 dark:text-zinc-300">
              <Briefcase className="w-4 h-4 text-brand-ter shrink-0" /> Agile Scrum Ready
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 bg-brand-primary dark:bg-yellow-400 text-black border-4 border-black rounded-lg text-lg font-black shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-white dark:bg-zinc-900 text-black dark:text-white border-4 border-black dark:border-white rounded-lg text-lg font-black shadow-md hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Resume <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Portrait with sticker status */}
        <div className="lg:col-span-5 relative w-full max-w-sm mx-auto lg:ml-auto">
          {/* Main Card Frame */}
          <div className="relative bg-brand-primary dark:bg-zinc-800 border-4 border-black dark:border-white p-4.5 rounded-2xl shadow-lg rotate-[3deg] transition-all hover:rotate-0 duration-300 group">
            {/* Real photo from user metadata layout */}
            <div className="relative overflow-hidden border-4 border-black dark:border-white rounded-xl bg-white dark:bg-zinc-900 aspect-square">
              <img 
                src="/image/profile.webp" 
                alt="Rachel Graceya Emanuella" 
                className="w-full h-full object-cover grayscale-25 group-hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Availability Badge */}
            <div className="mt-4 flex justify-between items-center px-1">
              <span className="font-mono text-xs font-black text-black dark:text-white uppercase tracking-wider">
                Status:
              </span>
              <span className="bg-white dark:bg-zinc-950 text-black dark:text-white px-3 py-1 border-4 border-black dark:border-white rounded-full text-xs font-extrabold flex items-center gap-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                AVAILABLE
              </span>
            </div>
          </div>

          {/* Quick Floating Sticker details overlay */}
          <div className="absolute -bottom-6 -left-6 bg-brand-tertiary text-black dark:text-white dark:border-white px-4 py-2 border-4 border-black dark:border-white rounded-lg font-bold text-xs shadow-md rotate-[-6deg] hidden sm:block">
            📍 Based in Indonesia
          </div>
          <div className="absolute -top-6 right-2 bg-brand-secondary text-black dark:text-white p-2.5 border-4 border-black dark:border-white rounded-lg shadow-md rotate-[12deg] hidden sm:flex items-center gap-1">
            <FileText className="w-4 h-4" /> <span>BA Certified</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


