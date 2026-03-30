import React from 'react';
import { motion } from 'motion/react';

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -50, skewX: -10 }}
      whileInView={{ opacity: 1, x: 0, skewX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
      className="text-5xl md:text-6xl font-bold text-[var(--color-indigo)] dark:text-[var(--color-sand)] mt-32 mb-12 nav-text leading-tight border-b-4 border-[var(--color-divider)] dark:border-[var(--color-divider)]/20 pb-6 inline-block w-full transition-colors duration-400"
    >
      <span className="text-[var(--color-saffron)] dark:text-[var(--color-marigold)] mr-4 bg-[var(--color-saffron)]/10 dark:bg-[var(--color-marigold)]/10 px-4 py-2 rounded-xl transition-colors duration-400">{number}</span> {title}
    </motion.h2>
  );
}

export function SubSectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <motion.h3
      initial={{ opacity: 0, x: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      className="text-3xl md:text-4xl font-bold text-[var(--color-saffron)] dark:text-[var(--color-marigold)] mt-20 mb-8 nav-text leading-tight flex items-center gap-4 transition-colors duration-400"
    >
      <span className="w-10 h-1.5 bg-[var(--color-saffron)] dark:bg-[var(--color-marigold)] hidden md:block rounded-full transition-colors duration-400"></span>
      <span><span className="mr-3 text-[var(--text-color)]/60 transition-colors duration-400">{number}</span> {title}</span>
    </motion.h3>
  );
}
