"use client";
import React, { useState } from 'react';
import { TESTIMONIALS } from '@/data/testimonials';

import { MessageSquare, Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section 
      className="py-20 px-4 md:px-8 bg-white dark:bg-zinc-950 border-b-4 border-black dark:border-white relative overflow-hidden transition-colors duration-200"
    >
      {/* Dynamic background shapes */}
      <div className="absolute top-1/2 -right-16 w-32 h-32 bg-brand-secondary border-4 border-black rounded-xl rotate-45 -z-10 opacity-30"></div>
      <div className="absolute -bottom-10 left-10 w-40 h-40 bg-brand-primary border-4 border-black rounded-full -z-10 opacity-30"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Title Block Context Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1.5 bg-brand-secondary border-4 border-black rounded-full shadow-sm mb-3">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-black">Kind Expressions</span>
          </div>
          <h2 className="text-3xl md:text-4.5xl font-black font-sans uppercase text-black dark:text-white leading-tight">
            Client Testimonials
          </h2>
          <p className="text-sm md:text-base font-medium text-zinc-650 dark:text-zinc-400 mt-2">
            Read comments from tech executives and project managers describing Rachel's precision.
          </p>
        </div>

        {/* Testimonial Active Display Card */}
        <div className="bg-zinc-50 dark:bg-zinc-900 border-4 border-black dark:border-white p-6 md:p-10 rounded-xl brutal-shadow relative text-left select-none md:flex md:items-center md:gap-10">
          
          {/* Quote Accent Graphic Overlay */}
          <div className="absolute -top-5 -left-5 bg-brand-tertiary border-4 border-black p-3.5 rounded-xl shadow-md rotate-[-12deg]">
            <Quote className="w-6 h-6 text-black" />
          </div>

          {/* Testimonial Client Face profile */}
          <div className="flex md:flex-col items-center gap-4 shrink-0 mb-6 md:mb-0">
            <div className="relative border-4 border-black dark:border-white rounded-full p-1 bg-white dark:bg-zinc-900 shadow-sm w-20 h-20 md:w-28 md:h-28 overflow-hidden">
              <img 
                src={current.avatarUrl} 
                alt={`${current.name} Face profile`}
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
          </div>

          {/* Comment Narrative details */}
          <div className="flex-grow space-y-4">
            {/* Star Icons */}
            <div className="flex gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-primary text-black" />
              ))}
            </div>

            <p className="text-base md:text-lg font-bold text-zinc-800 dark:text-zinc-200 leading-relaxed italic">
              "{current.quote}"
            </p>

            <div>
              <p className="text-base font-black text-black dark:text-white">
                {current.name}
              </p>
              <p className="text-xs font-extrabold font-mono text-zinc-500 uppercase">
                {current.role} &middot; <span className="text-brand-primary dark:text-yellow-400">{current.company}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Carousel Click Controllers */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 border-4 border-black dark:border-white bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-black dark:text-white rounded-lg shadow-sm hover:translate-x-[-1px] hover:translate-y-[1px] cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          {/* Dot Tracker indicators */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3.5 h-3.5 border-2 border-black rounded-full transition-all ${currentIndex === idx ? 'bg-black dark:bg-white scale-120' : 'bg-zinc-300 dark:bg-zinc-700'}`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 border-4 border-black dark:border-white bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-black dark:text-white rounded-lg shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}


