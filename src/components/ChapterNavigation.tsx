import React from 'react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CHAPTER_TITLES = [
  "", // 0 index
  "Blueprint",
  "Resilience",
  "Roots",
  "Empowerment",
  "Compassion",
  "Synthesis"
];

export function ChapterNavigation({ current }: { current: number }) {
  const prev = current > 1 ? current - 1 : null;
  const next = current < 6 ? current + 1 : null;

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row justify-between gap-12 border-t border-[var(--border-color)]">
      {prev ? (
        <NavLink 
          to={`/chapter/${prev}`} 
          className="group flex-1 p-8 rounded-3xl theme-card border border-[var(--border-color)] hover:border-[var(--color-marigold)] transition-all duration-500"
        >
          <div className="flex items-center gap-4 text-[var(--color-marigold)] mb-4">
            <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            <span className="nav-text uppercase text-sm tracking-[0.3em] font-bold">Previous Chapter</span>
          </div>
          <h4 className="font-heading text-3xl md:text-4xl text-[var(--text-color)] group-hover:text-[var(--color-marigold)] transition-colors">
            {prev}. {CHAPTER_TITLES[prev]}
          </h4>
        </NavLink>
      ) : (
        <NavLink 
          to="/" 
          className="group flex-1 p-8 rounded-3xl theme-card border border-[var(--border-color)] hover:border-[var(--color-marigold)] transition-all duration-500"
        >
          <div className="flex items-center gap-4 text-[var(--color-marigold)] mb-4">
            <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            <span className="nav-text uppercase text-sm tracking-[0.3em] font-bold">Home</span>
          </div>
          <h4 className="font-heading text-3xl md:text-4xl text-[var(--text-color)] group-hover:text-[var(--color-marigold)] transition-colors">
            Title Page
          </h4>
        </NavLink>
      )}

      {next ? (
        <NavLink 
          to={`/chapter/${next}`} 
          className="group flex-1 p-8 rounded-3xl theme-card border border-[var(--border-color)] text-right hover:border-[var(--color-marigold)] transition-all duration-500"
        >
          <div className="flex items-center justify-end gap-4 text-[var(--color-marigold)] mb-4">
            <span className="nav-text uppercase text-sm tracking-[0.3em] font-bold">Next Chapter</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </div>
          <h4 className="font-heading text-3xl md:text-4xl text-[var(--text-color)] group-hover:text-[var(--color-marigold)] transition-colors">
            {next}. {CHAPTER_TITLES[next]}
          </h4>
        </NavLink>
      ) : (
        <NavLink 
          to="/" 
          className="group flex-1 p-8 rounded-3xl theme-card border border-[var(--border-color)] text-right hover:border-[var(--color-marigold)] transition-all duration-500"
        >
          <div className="flex items-center justify-end gap-4 text-[var(--color-marigold)] mb-4">
            <span className="nav-text uppercase text-sm tracking-[0.3em] font-bold">Home</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </div>
          <h4 className="font-heading text-3xl md:text-4xl text-[var(--text-color)] group-hover:text-[var(--color-marigold)] transition-colors">
            Finish Reading
          </h4>
        </NavLink>
      )}
    </div>
  );
}
