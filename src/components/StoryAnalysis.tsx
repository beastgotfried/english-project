import React from 'react';
import { motion } from 'motion/react';

export function StoryAnalysis({ title, author }: { title: string; author: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="my-20 border-l-8 border-[var(--color-marigold)] pl-6 md:pl-10 py-8 theme-card rounded-r-3xl shadow-lg transform-gpu transition-colors duration-400"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-saffron)] dark:text-[var(--color-marigold)] nav-text uppercase tracking-wider flex flex-col md:flex-row md:items-center gap-4 transition-colors duration-400">
        <span className="bg-[var(--color-saffron)] dark:bg-[var(--color-marigold)] text-white dark:text-[#0F172A] px-4 py-1.5 rounded-md text-sm tracking-widest w-max shadow-md transition-colors duration-400">STORY ANALYSIS</span>
        <span className="italic text-[var(--color-indigo)] dark:text-[var(--color-sand)] font-heading capitalize normal-case text-4xl md:text-5xl transition-colors duration-400">{title}</span>
        <span className="text-[var(--text-color)]/60 font-normal normal-case text-xl md:text-2xl md:ml-2 transition-colors duration-400">— {author}</span>
      </h3>
    </motion.div>
  );
}
