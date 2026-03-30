import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ChapterHeader({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="min-h-[70vh] flex flex-col items-center justify-center text-center bg-[var(--color-indigo)] text-[var(--color-sand)] px-6 py-24 w-full relative overflow-hidden my-32 shadow-2xl">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"
      ></motion.div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h4 
          initial={{ scale: 0, opacity: 0, rotate: -10 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.6 }}
          className="nav-text uppercase tracking-[0.4em] text-[var(--color-saffron)] font-bold mb-8 text-sm md:text-xl bg-white/10 inline-block px-6 py-2 rounded-full backdrop-blur-sm"
        >
          Chapter {number}
        </motion.h4>
        <motion.h1 
          initial={{ scale: 1.5, y: -50, opacity: 0, filter: "blur(20px)" }}
          whileInView={{ scale: 1, y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.1 }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-10 leading-tight drop-shadow-2xl"
        >
          {title}
        </motion.h1>
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "circOut" }}
          className="w-48 h-1.5 bg-gradient-to-r from-transparent via-[var(--color-marigold)] to-transparent mx-auto mb-10 origin-center"
        ></motion.div>
        <motion.p 
          initial={{ y: 30, opacity: 0, skewX: 20 }}
          whileInView={{ y: 0, opacity: 1, skewX: 0 }}
          transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
          className="font-heading italic text-4xl md:text-5xl text-[var(--color-sand)]/90"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
