import React from 'react';
import { motion } from 'motion/react';

export function Paragraph({ children, dropcap = false }: { children: React.ReactNode; dropcap?: boolean }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`text-2xl md:text-3xl leading-relaxed mb-10 text-[var(--text-color)]/90 text-justify transition-colors duration-400 ${dropcap ? 'first-letter:text-8xl first-letter:font-bold first-letter:text-[var(--color-saffron)] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8] first-letter:font-heading' : ''}`}
    >
      {children}
    </motion.p>
  );
}
