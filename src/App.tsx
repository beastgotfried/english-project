import { Chapter1 } from './chapters/Chapter1';
import { Chapter2 } from './chapters/Chapter2';
import { Chapter3 } from './chapters/Chapter3';
import { Chapter4 } from './chapters/Chapter4';
import { Chapter5 } from './chapters/Chapter5';
import { Chapter6 } from './chapters/Chapter6';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[var(--color-sand)] text-[var(--color-charcoal)] font-body selection:bg-[var(--color-saffron)] selection:text-white overflow-x-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-marigold)] origin-left z-50 shadow-md"
        style={{ scaleX }}
      />

      {/* Title Page */}
      <header className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply pointer-events-none"
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
          className="relative z-10 max-w-5xl backdrop-blur-sm bg-white/30 p-8 md:p-16 rounded-3xl shadow-2xl border border-white/50"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold font-heading text-[var(--color-indigo)] leading-none mb-8 drop-shadow-lg">
            The Soul of Viksit Bharat
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-3xl md:text-5xl italic font-heading text-[var(--color-saffron)] mb-16 drop-shadow-md"
          >
            Tales of Resilience and Humanity
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center justify-center gap-6 text-[var(--color-indigo)] font-nav tracking-[0.3em] uppercase text-sm md:text-lg font-bold"
          >
            <span className="w-16 h-1 bg-[var(--color-marigold)] rounded-full"></span>
            <span>Virasat bhi, Vikas bhi</span>
            <span className="w-16 h-1 bg-[var(--color-marigold)] rounded-full"></span>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, type: "spring" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[var(--color-saffron)]"
        >
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </header>

      <main>
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Chapter4 />
        <Chapter5 />
        <Chapter6 />
      </main>
    </div>
  );
}
