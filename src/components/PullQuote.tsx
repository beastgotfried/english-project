import { motion } from 'motion/react';

export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: 45, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
      className="my-20 pl-8 md:pl-12 border-l-8 border-[var(--color-saffron)] py-8 max-w-4xl mx-auto bg-gradient-to-r from-[var(--color-divider)]/30 to-transparent rounded-r-3xl shadow-sm"
    >
      <p className="text-4xl md:text-5xl italic text-[var(--color-indigo)] font-heading leading-tight drop-shadow-sm">
        {children}
      </p>
    </motion.div>
  );
}
