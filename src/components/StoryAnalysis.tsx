import { motion } from 'motion/react';

export function StoryAnalysis({ title, author }: { title: string; author: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className="my-20 border-l-8 border-[var(--color-marigold)] pl-6 md:pl-10 py-8 bg-gradient-to-r from-[var(--color-divider)]/40 to-transparent rounded-r-3xl shadow-lg transform-gpu"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-saffron)] nav-text uppercase tracking-wider flex flex-col md:flex-row md:items-center gap-4">
        <span className="bg-[var(--color-saffron)] text-white px-4 py-1.5 rounded-md text-sm tracking-widest w-max shadow-md">STORY ANALYSIS</span>
        <span className="italic text-[var(--color-indigo)] font-heading capitalize normal-case text-4xl md:text-5xl">{title}</span>
        <span className="text-[var(--color-charcoal)]/60 font-normal normal-case text-xl md:text-2xl md:ml-2">— {author}</span>
      </h3>
    </motion.div>
  );
}
