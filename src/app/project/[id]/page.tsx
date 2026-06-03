"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { notFound, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, ExternalLink, CheckSquare, Target, BarChart3,
  CalendarClock, Cpu, Compass, ChevronLeft, ChevronRight, X,
  Calendar, Briefcase, ArrowRight
} from 'lucide-react';
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
  Tooltip as ChartTooltip, CartesianGrid, LineChart, Line, Cell
} from 'recharts';
import { PROJECTS } from '@/data/projects';
import Navbar from '@/components/ui/Navbar';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

// ─── Types ──────────────────────────────────────────────────────────────────
interface PageProps {
  params: Promise<{ id: string }>;
}

// ─── Chart Component ─────────────────────────────────────────────────────────
function ProjectChart({ project }: { project: (typeof PROJECTS)[0] }) {
  if (!project.chartData) return null;

  if (project.category === 'analysis') {
    return (
      <div className="h-64 w-full bg-white dark:bg-zinc-800 p-4 border-4 border-black dark:border-white rounded-xl brutal-shadow-sm">
        <p className="text-xs font-mono font-bold mb-4 text-center text-zinc-500 uppercase tracking-wider">
          📊 Conversion rate vs. baseline (%)
        </p>
        <ResponsiveContainer width="100%" height="80%">
          <LineChart data={project.chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
            <XAxis dataKey="name" stroke="#000000" fontSize={11} fontWeight={600} />
            <YAxis domain={[0, 4]} stroke="#000000" fontSize={11} fontWeight={600} />
            <ChartTooltip contentStyle={{ backgroundColor: '#fff', border: '4px solid #000', borderRadius: '6px', fontWeight: 'bold' }} />
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
      <div className="h-64 w-full bg-white dark:bg-zinc-800 p-4 border-4 border-black dark:border-white rounded-xl brutal-shadow-sm">
        <p className="text-xs font-mono font-bold mb-4 text-center text-zinc-500 uppercase tracking-wider">
          💼 TAM Market segment split (%)
        </p>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={project.chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#000000" fontSize={11} fontWeight={600} />
            <YAxis stroke="#000000" fontSize={11} fontWeight={600} />
            <ChartTooltip contentStyle={{ backgroundColor: '#fff', border: '4px solid #000', borderRadius: '6px' }} />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} stroke="#000000" strokeWidth={2}>
              {project.chartData.map((_, index) => (
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
      <div className="h-64 w-full bg-white dark:bg-zinc-800 p-4 border-4 border-black dark:border-white rounded-xl brutal-shadow-sm">
        <p className="text-xs font-mono font-bold mb-4 text-center text-zinc-500 uppercase tracking-wider">
          ⏱️ Monthly Reporting Hours (lower = better)
        </p>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={project.chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#000000" fontSize={11} fontWeight={600} />
            <YAxis stroke="#000000" fontSize={11} fontWeight={600} />
            <ChartTooltip contentStyle={{ backgroundColor: '#fff', border: '4px solid #000', borderRadius: '6px' }} />
            <Bar dataKey="value" fill="#4D4DFF" stroke="#000000" strokeWidth={3} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return null;
}

// ─── Category Badge Colors ────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  analysis: 'bg-brand-primary text-black',
  strategy: 'bg-brand-secondary text-black',
  development: 'bg-brand-tertiary text-white',
};

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function ProjectDetailPage({ params }: PageProps) {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;

  const project = PROJECTS.find((p) => p.id === id);
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  // Theme state (synced with localStorage like main page)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Gallery lightbox
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [galleryCursorVisible, setGalleryCursorVisible] = useState(false);
  const [galleryDisplayPos, setGalleryDisplayPos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const galleryTargetRef = useRef({ x: 0, y: 0 });
  const galleryPosRef = useRef({ x: 0, y: 0 });
  const galleryRafRef = useRef<number>(0);

  // ── Mount & theme ──
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    window.scrollTo(0, 0);
  }, []);

  const handleToggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  // ── Desktop detection ──
  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // ── Gallery RAF loop (smooth cursor) ──
  useEffect(() => {
    if (!isDesktop) return;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      galleryPosRef.current.x = lerp(galleryPosRef.current.x, galleryTargetRef.current.x, 0.12);
      galleryPosRef.current.y = lerp(galleryPosRef.current.y, galleryTargetRef.current.y, 0.12);
      setGalleryDisplayPos({ x: galleryPosRef.current.x, y: galleryPosRef.current.y });
      galleryRafRef.current = requestAnimationFrame(animate);
    };
    galleryRafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(galleryRafRef.current);
  }, [isDesktop]);

  const handleGalleryMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    galleryTargetRef.current = { x: e.clientX, y: e.clientY };
    setGalleryCursorVisible(true);
  }, [isDesktop]);

  const handleGalleryMouseLeave = useCallback(() => {
    if (!isDesktop) return;
    setGalleryCursorVisible(false);
  }, [isDesktop]);

  // ── Keyboard nav for lightbox ──
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      const total = project.gallery?.length ?? 0;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? (i + 1) % total : null);
      if (e.key === 'ArrowLeft') setLightboxIndex(i => i !== null ? (i - 1 + total) % total : null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, project]);

  // ── Back navigation ──
  const handleBack = () => {
    sessionStorage.setItem('scrollTo', 'projects');
    router.push('/');
  };

  const handleNavigate = (sectionId: string) => {
    sessionStorage.setItem('scrollTo', sectionId);
    router.push('/');
  };

  if (!mounted) return null;
  if (!project) notFound();

  const gallery = project.gallery ?? [];

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-zinc-950 transition-colors duration-300">
      {/* Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onNavigate={handleNavigate}
      />

      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16"
      >
        {/* ── Back Button ─────────────────────────────────── */}
        <div className="mb-10">
          <button
            onClick={handleBack}
            className="group inline-flex items-center gap-3 cursor-pointer"
          >
            <div className="w-12 h-12 border-4 border-black dark:border-white bg-white dark:bg-zinc-800 rounded-xl brutal-shadow-sm flex items-center justify-center rotate-[-2deg] group-hover:rotate-0 group-hover:translate-x-[-2px] transition-all duration-300">
              <ArrowLeft className="w-5 h-5 stroke-[3px] text-black dark:text-white" />
            </div>
            <span className="font-black font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              Back to Projects
            </span>
          </button>
        </div>

        {/* ── Hero Image ──────────────────────────────────── */}
        <div className="relative mb-10 border-4 border-black dark:border-white rounded-2xl overflow-hidden brutal-shadow group">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full max-h-[60vh] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Category Badge overlaid */}
          <div className="absolute top-5 left-5">
            <span className={`inline-block px-4 py-1.5 border-4 border-black rounded-full font-black font-mono text-xs uppercase tracking-wider brutal-shadow-sm ${CATEGORY_COLORS[project.category]}`}>
              {project.category}
            </span>
          </div>
        </div>

        {/* ── Title + Live Link ────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-mono text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-2">{project.tag}</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-sans uppercase tracking-tight text-black dark:text-white leading-none">
              {project.title}
            </h1>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black font-black font-mono text-sm uppercase tracking-wider rounded-xl brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all shrink-0"
            >
              View Project <ExternalLink className="w-4 h-4 stroke-[3px]" />
            </a>
          )}
        </div>

        {/* ── Info Bar: Year · Role · Tech ─────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 border-t-4 border-b-4 border-black dark:border-white py-6">
          {/* Year */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-4 border-black dark:border-white bg-brand-primary rounded-lg flex items-center justify-center brutal-shadow-sm rotate-[-2deg]">
              <Calendar className="w-5 h-5 stroke-[2.5px] text-black" />
            </div>
            <div>
              <p className="text-[10px] font-black font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Year</p>
              <p className="font-black font-mono text-black dark:text-white">{project.year ?? '—'}</p>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-4 border-black dark:border-white bg-brand-secondary rounded-lg flex items-center justify-center brutal-shadow-sm rotate-[2deg]">
              <Briefcase className="w-5 h-5 stroke-[2.5px] text-black" />
            </div>
            <div>
              <p className="text-[10px] font-black font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Role</p>
              <p className="font-black font-mono text-black dark:text-white">{project.role ?? '—'}</p>
            </div>
          </div>

          {/* Tech Stack */}
          {project.techUsed && (
            <div>
              <p className="text-[10px] font-black font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">Tech & Tools</p>
              <div className="flex flex-wrap gap-1.5">
                {project.techUsed.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] font-black font-mono bg-white dark:bg-zinc-800 border-2 border-black dark:border-white text-black dark:text-white rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Main Content Grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* LEFT: Description + Metrics + Chart */}
          <div className="space-y-10">
            {/* About */}
            <div>
              <h2 className="flex items-center gap-2 text-sm font-black font-mono uppercase tracking-widest text-black dark:text-white mb-4 border-l-4 border-brand-primary pl-3">
                <Compass className="w-4 h-4" /> Context & About
              </h2>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                {project.about}
              </p>
            </div>

            {/* KPI Metrics */}
            <div>
              <h2 className="flex items-center gap-2 text-sm font-black font-mono uppercase tracking-widest text-black dark:text-white mb-4 border-l-4 border-brand-secondary pl-3">
                <Target className="w-4 h-4" /> Core Impact Metrics
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => {
                  const cardColors = ['bg-brand-primary', 'bg-brand-secondary', 'bg-brand-tertiary'];
                  const textColors = ['text-black', 'text-black', 'text-white'];
                  return (
                    <div
                      key={idx}
                      className={`${cardColors[idx % 3]} border-4 border-black dark:border-white p-4 rounded-xl brutal-shadow-sm text-center`}
                    >
                      <p className={`text-2xl font-black font-mono leading-none mb-1 ${textColors[idx % 3]}`}>
                        {m.value}
                      </p>
                      <p className={`text-[10px] font-bold leading-tight ${textColors[idx % 3]} opacity-80`}>
                        {m.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chart */}
            {project.chartData && (
              <div>
                <h2 className="flex items-center gap-2 text-sm font-black font-mono uppercase tracking-widest text-black dark:text-white mb-4 border-l-4 border-brand-tertiary pl-3">
                  <BarChart3 className="w-4 h-4" /> Analytics Visualization
                </h2>
                <ProjectChart project={project} />
              </div>
            )}
          </div>

          {/* RIGHT: Deliverables + Methodology + Tech */}
          <div className="space-y-10">
            {/* Deliverables */}
            <div>
              <h2 className="flex items-center gap-2 text-sm font-black font-mono uppercase tracking-widest text-black dark:text-white mb-4 border-l-4 border-green-500 pl-3">
                <CheckSquare className="w-4 h-4" /> Key Deliverables
              </h2>
              <ul className="space-y-3">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-6 h-6 border-2 border-black dark:border-white bg-brand-primary rounded flex-shrink-0 flex items-center justify-center mt-0.5">
                      <CheckSquare className="w-3 h-3 stroke-[3px] text-black" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-zinc-700 dark:text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology */}
            {project.methodology && (
              <div>
                <h2 className="flex items-center gap-2 text-sm font-black font-mono uppercase tracking-widest text-black dark:text-white mb-4 border-l-4 border-cyan-500 pl-3">
                  <CalendarClock className="w-4 h-4" /> Roadmap Methodology
                </h2>
                <div className="space-y-0 border-l-4 border-black dark:border-white pl-5 ml-2">
                  {project.methodology.map((m, idx) => (
                    <div key={idx} className="relative pb-5 last:pb-0">
                      <div className="absolute -left-[29px] top-1.5 w-4 h-4 rounded-full border-4 border-black dark:border-white bg-brand-primary" />
                      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{m}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Badges */}
            {project.techUsed && (
              <div>
                <h2 className="flex items-center gap-2 text-sm font-black font-mono uppercase tracking-widest text-black dark:text-white mb-4 border-l-4 border-purple-500 pl-3">
                  <Cpu className="w-4 h-4" /> Professional Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techUsed.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 text-xs font-black font-mono bg-white dark:bg-zinc-800 border-4 border-black dark:border-white text-black dark:text-white rounded-xl brutal-shadow-sm"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Gallery (Masonry) ────────────────────────────── */}
        {gallery.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-black font-sans uppercase tracking-tight text-black dark:text-white mb-6 border-b-4 border-black dark:border-white pb-4">
              Project Gallery
            </h2>

            {/* Custom cursor overlay (desktop only) */}
            {isDesktop && (
              <div
                className="fixed pointer-events-none z-[9990] flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-xs border-4 border-white dark:border-black"
                style={{
                  width: 80, height: 80,
                  left: galleryDisplayPos.x, top: galleryDisplayPos.y,
                  transform: `translate(-50%, -50%) scale(${galleryCursorVisible ? 1 : 0})`,
                  opacity: galleryCursorVisible ? 1 : 0,
                  transition: 'opacity 0.25s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                View
              </div>
            )}

            <div
              className="columns-1 md:columns-2 lg:columns-3 gap-4"
              onMouseMove={handleGalleryMouseMove}
              onMouseLeave={handleGalleryMouseLeave}
            >
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="break-inside-avoid mb-4 border-4 border-black dark:border-white rounded-xl overflow-hidden brutal-shadow-sm cursor-pointer group"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    loading="lazy"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Lightbox ─────────────────────────────────────── */}
        <AnimatePresence>
          {lightboxIndex !== null && gallery.length > 0 && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[9998] bg-black/95 flex items-center justify-center"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close */}
              <button
                className="absolute top-5 right-5 w-12 h-12 border-4 border-white bg-black text-white rounded-xl flex items-center justify-center brutal-shadow-sm hover:bg-white hover:text-black transition-colors"
                onClick={() => setLightboxIndex(null)}
              >
                <X className="w-5 h-5 stroke-[3px]" />
              </button>

              {/* Counter */}
              <span className="absolute top-7 left-1/2 -translate-x-1/2 text-white/60 font-mono text-sm font-bold">
                {lightboxIndex + 1} / {gallery.length}
              </span>

              {/* Prev */}
              {gallery.length > 1 && (
                <button
                  className="absolute left-4 w-12 h-12 border-4 border-white bg-black text-white rounded-xl flex items-center justify-center brutal-shadow-sm hover:bg-white hover:text-black transition-colors"
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length); }}
                >
                  <ChevronLeft className="w-5 h-5 stroke-[3px]" />
                </button>
              )}

              {/* Image */}
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                src={gallery[lightboxIndex]}
                alt={`Gallery ${lightboxIndex + 1}`}
                className="max-w-[88vw] max-h-[85vh] object-contain rounded-xl border-4 border-white"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Next */}
              {gallery.length > 1 && (
                <button
                  className="absolute right-4 w-12 h-12 border-4 border-white bg-black text-white rounded-xl flex items-center justify-center brutal-shadow-sm hover:bg-white hover:text-black transition-colors"
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % gallery.length); }}
                >
                  <ChevronRight className="w-5 h-5 stroke-[3px]" />
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Next / Prev Project ──────────────────────────── */}
        <div className="border-t-4 border-black dark:border-white pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Prev */}
          <Link
            href={`/project/${prevProject.id}`}
            className="group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-11 h-11 border-4 border-black dark:border-white bg-white dark:bg-zinc-800 rounded-xl brutal-shadow-sm flex items-center justify-center group-hover:bg-brand-primary transition-colors">
              <ArrowLeft className="w-5 h-5 stroke-[3px] text-black dark:text-white group-hover:text-black transition-colors" />
            </div>
            <div>
              <p className="text-[10px] font-black font-mono uppercase tracking-widest text-zinc-400">Previous</p>
              <p className="font-black font-sans text-base text-black dark:text-white group-hover:underline">{prevProject.title}</p>
            </div>
          </Link>

          {/* Next */}
          <Link
            href={`/project/${nextProject.id}`}
            className="group flex items-center gap-3 cursor-pointer text-right sm:flex-row-reverse"
          >
            <div className="w-11 h-11 border-4 border-black dark:border-white bg-white dark:bg-zinc-800 rounded-xl brutal-shadow-sm flex items-center justify-center group-hover:bg-brand-secondary transition-colors">
              <ArrowRight className="w-5 h-5 stroke-[3px] text-black dark:text-white group-hover:text-black transition-colors" />
            </div>
            <div>
              <p className="text-[10px] font-black font-mono uppercase tracking-widest text-zinc-400">Next Project</p>
              <p className="font-black font-sans text-base text-black dark:text-white group-hover:underline">{nextProject.title}</p>
            </div>
          </Link>
        </div>
      </motion.main>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="border-t-4 border-black dark:border-white py-6 px-4 md:px-8 bg-zinc-50 dark:bg-zinc-950 mt-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-xs font-black font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            DESIGN BY: RACHEL GRACEYA
          </p>
          <Link
            href="/"
            className="text-xs font-black font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider hover:text-black dark:hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
