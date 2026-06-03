"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Linkedin, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ isDarkMode, onToggleDarkMode, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll when the full-screen menu drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Monitor scroll height with a highly optimized passive listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', id: 'home', color: 'bg-[#FF90E8]', hoverText: 'hover:text-[#FF90E8]', rotation: 'rotate-[1.5deg]', y: '-translate-y-0.5' },
    { label: 'About', id: 'about', color: 'bg-[#FFC900]', hoverText: 'hover:text-[#FFC900]', rotation: 'rotate-[-2.5deg]', y: 'translate-y-0.5' },
    { label: 'Projects', id: 'projects', color: 'bg-[#38A3A5]', hoverText: 'hover:text-[#38A3A5]', rotation: 'rotate-0', y: 'translate-y-0 text-white' },
    { label: 'Timeline', id: 'timeline', color: 'bg-white dark:bg-zinc-900 dark:text-white', hoverText: 'hover:text-zinc-400 dark:hover:text-zinc-400', rotation: 'rotate-[1.2deg]', y: '-translate-y-1' },
    { label: 'Contact', id: 'contact', color: 'bg-[#FF6B6B]', hoverText: 'hover:text-[#FF6B6B]', rotation: 'rotate-[-1.8deg]', y: 'translate-y-1' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* 
        HEADER CONTAINER 
        Using a fixed header with a layout placeholder to prevent layout shifts 
        when the header shrinks. This prevents the infinite scroll-flicker bug.
      */}
      <div className="h-24 w-full shrink-0 invisible pointer-events-none" aria-hidden="true" />
      
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] w-full flex items-center transition-all duration-300 ease-out backdrop-blur-md ${
          isMenuOpen
            ? 'h-24 bg-transparent border-b-0 shadow-none backdrop-blur-none'
            : isScrolled
              ? 'h-16 bg-white/90 dark:bg-zinc-950/90 border-b-4 border-black dark:border-white shadow-md'
              : 'h-24 bg-white/70 dark:bg-zinc-950/50 border-b-4 border-dashed border-zinc-200 dark:border-zinc-800 shadow-none'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto px-4 md:px-8 flex justify-between items-center">
          
          {/* LOGO */}
          <button 
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 group cursor-pointer hover:scale-105 active:scale-95 transition-transform"
          >
            <div className="w-10 h-10 border-4 border-black flex items-center justify-center rounded-lg bg-[#FFC900] font-black font-mono text-lg rotate-[-3deg] brutal-shadow-sm group-hover:rotate-[3deg] transition-transform">
              RG
            </div>
            <span className={`mx-3 font-black tracking-tighter uppercase text-black dark:text-white transition-all duration-300 ${isScrolled && !isMenuOpen ? 'text-lg' : 'text-xl'}`}>
              Rachel Graceya
            </span>
          </button>
  
          {/* DESKTOP NAV (Grid Overlap Trick for flawless crossfading) */}
          <div className="hidden lg:grid items-center justify-items-end">
            
            {/* STATE 1: UNSCROLLED (Full Menu) */}
            <div 
              className={`col-start-1 row-start-1 flex items-center gap-5 transition-all duration-400 ease-out origin-right ${
                !isScrolled && !isMenuOpen 
                  ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
              }`}
            >
              <nav className="flex items-center gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`px-4 py-2 border-4 border-black dark:border-white rounded-md font-extrabold text-sm text-black transition-transform cursor-pointer brutal-shadow-sm hover:rotate-0 hover:translate-y-0 active:translate-x-1 active:translate-y-1 active:shadow-none ${item.color} ${item.rotation} ${item.y}`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
  
              <button
                onClick={onToggleDarkMode}
                className="w-11 h-11 flex items-center justify-center border-4 border-black dark:border-white bg-[#FF6B6B] text-black rounded-lg rotate-[-3deg] brutal-shadow-sm hover:rotate-0 active:translate-x-1 active:translate-y-1 active:shadow-none transition-transform cursor-pointer"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-300 fill-yellow-300" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* STATE 2: SCROLLED (Compact Menu) or MENU OPEN */}
            <div 
              className={`col-start-1 row-start-1 flex items-center gap-3 transition-all duration-400 ease-out origin-right ${
                isScrolled || isMenuOpen
                  ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
              }`}
            >
              <button
                onClick={onToggleDarkMode}
                className="w-11 h-11 flex items-center justify-center border-4 border-black dark:border-white bg-[#FF6B6B] text-black rounded-xl rotate-[-3deg] brutal-shadow-sm hover:scale-105 active:translate-x-1 active:translate-y-1 active:shadow-none transition-transform cursor-pointer"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-300 fill-yellow-300" /> : <Moon className="w-5 h-5" />}
              </button>
  
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-11 h-11 flex items-center justify-center border-4 border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white rounded-xl rotate-[3deg] brutal-shadow-sm hover:scale-105 active:translate-x-1 active:translate-y-1 active:shadow-none transition-transform cursor-pointer"
              >
                {isMenuOpen ? <X className="w-5 h-5 stroke-[3px]" /> : <Menu className="w-5 h-5 stroke-[3px]" />}
              </button>
            </div>
          </div>
  
          {/* MOBILE/TABLET NAV */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={onToggleDarkMode}
              className="w-10 h-10 flex items-center justify-center border-[3px] border-black dark:border-white bg-[#FF6B6B] text-black rounded-lg rotate-[-3deg] brutal-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-transform cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-yellow-300 fill-yellow-300" /> : <Moon className="w-4 h-4" />}
            </button>
  
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center border-[3px] border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white rounded-lg rotate-[3deg] brutal-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-transform cursor-pointer"
            >
              {isMenuOpen ? <X className="w-4 h-4 stroke-[3px]" /> : <Menu className="w-4 h-4 stroke-[3px]" />}
            </button>
          </div>
        </div>
      </header>
  
      {/* FULLSCREEN MENU DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-[#FAF9F6] dark:bg-zinc-950 flex flex-col pt-24 overflow-y-auto"
          >
            {/* Accent Grid */}
            <div 
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)', backgroundSize: '32px 32px' }}
            />
  
            <div className="max-w-7xl w-full mx-auto px-4 md:px-8 py-8 flex-1 flex flex-col lg:flex-row gap-12 relative z-10">
              
              {/* Menu Links */}
              <div className="flex-1 flex flex-col justify-center gap-6 md:gap-8">
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`group flex items-baseline gap-4 text-left font-black font-sans text-5xl md:text-7xl uppercase text-black dark:text-white tracking-tighter ${item.hoverText} transition-colors w-fit`}
                  >
                    <span className="font-mono text-sm md:text-base text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                      0{index + 1}.
                    </span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-4">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
  
              {/* Divider */}
              <div className="hidden lg:block w-1 bg-black/10 dark:bg-white/10 self-stretch rounded-full" />
  
              {/* Contact Card */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-8 md:p-10 rounded-2xl brutal-shadow transform rotate-[1deg] hover:rotate-0 transition-transform">
                  <span className="inline-block bg-black text-white dark:bg-white dark:text-black font-mono text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                    Start a Project
                  </span>
                  <h3 className="text-4xl md:text-6xl font-black font-sans uppercase leading-none text-black dark:text-white mb-8">
                    Let's Talk!
                  </h3>
                  
                  <a 
                    href="mailto:kardikawellya@gmail.com"
                    className="text-xl md:text-2xl font-black font-mono text-black dark:text-white hover:text-[#FFC900] transition-colors break-all"
                  >
                    Rachel@gmail.com
                  </a>
                  
                  <div className="mt-12 flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white bg-[#38A3A5] text-white rounded-lg brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                      <Linkedin className="w-6 h-6 stroke-[2.5px]" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white bg-[#FF90E8] text-black rounded-lg brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                      <Github className="w-6 h-6 stroke-[2.5px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
