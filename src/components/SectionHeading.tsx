import { motion } from 'motion/react';

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -50, skewX: -10 }}
      whileInView={{ opacity: 1, x: 0, skewX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
      className="text-5xl md:text-6xl font-bold text-[var(--color-indigo)] mt-32 mb-12 nav-text leading-tight border-b-4 border-[var(--color-divider)] pb-6 inline-block w-full"
    >
      <span className="text-[var(--color-saffron)] mr-4 bg-[var(--color-saffron)]/10 px-4 py-2 rounded-xl">{number}</span> {title}
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
      className="text-3xl md:text-4xl font-bold text-[var(--color-saffron)] mt-20 mb-8 nav-text leading-tight flex items-center gap-4"
    >
      <span className="w-10 h-1.5 bg-[var(--color-saffron)] hidden md:block rounded-full"></span>
      <span><span className="mr-3 opacity-70">{number}</span> {title}</span>
    </motion.h3>
  );
}
