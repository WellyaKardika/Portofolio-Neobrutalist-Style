"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function App() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Mount: read theme + handle scrollTo from sessionStorage (from project detail back button)
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDarkMode(saved === 'dark');
    } else {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    }

    // Restore scroll position if coming back from a project detail page
    const scrollTarget = sessionStorage.getItem('scrollTo');
    if (scrollTarget) {
      sessionStorage.removeItem('scrollTo');
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, []);

  // Sync dark class with isDarkMode state
  useEffect(() => {
    if (!mounted) return;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, mounted]);

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-200 bg-white dark:bg-zinc-950 text-black dark:text-white selection:bg-brand-primary selection:text-black">

      {/* Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onNavigate={handleNavigate}
      />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-950 border-t-4 border-black dark:border-white py-12 px-4 md:px-8 transition-colors duration-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-sans font-black text-xl tracking-tight uppercase text-black dark:text-white">
              RACHEL GRACEYA EMANUELLA
            </h3>
            <p className="text-xs font-bold font-mono text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} Rachel Graceya Emanuella. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 bg-brand-primary dark:bg-zinc-800 border-2 border-black dark:border-white rounded-lg text-black dark:text-white shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2.5 bg-brand-secondary dark:bg-zinc-800 border-2 border-black dark:border-white rounded-lg text-black dark:text-white shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:kardikawellya@gmail.com" className="p-2.5 bg-brand-tertiary dark:bg-zinc-800 border-2 border-black dark:border-white rounded-lg text-black dark:text-white shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3.5 bg-brand-accent dark:bg-zinc-800 text-black dark:text-white border-2 border-black dark:border-white rounded-full shadow-md hover:translate-y-[1.5px] hover:shadow-sm transition-all cursor-pointer z-30 animate-scaleUp"
        >
          <ArrowUp className="w-5 h-5 stroke-[3px]" />
        </button>
      )}
    </div>
  );
}
