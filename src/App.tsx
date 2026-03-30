import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';

import { Chapter1 } from './chapters/Chapter1';
import { Chapter2 } from './chapters/Chapter2';
import { Chapter3 } from './chapters/Chapter3';
import { Chapter4 } from './chapters/Chapter4';
import { Chapter5 } from './chapters/Chapter5';
import { Chapter6 } from './chapters/Chapter6';
import { ChapterNavigation } from './components/ChapterNavigation';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

function Home() {
  return (
    <PageTransition>
      <header className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden pt-20">
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
          className="relative z-10 max-w-5xl theme-card p-8 md:p-16 rounded-3xl shadow-2xl border transition-colors duration-400"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold font-heading text-[var(--color-indigo)] dark:text-[var(--color-sand)] leading-none mb-8 drop-shadow-lg transition-colors duration-400">
            The Soul of Viksit Bharat
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-3xl md:text-5xl italic font-heading text-[var(--color-saffron)] dark:text-[var(--color-marigold)] mb-16 drop-shadow-md transition-colors duration-400"
          >
            Tales of Resilience and Humanity
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex items-center justify-center gap-6 text-[var(--color-indigo)] dark:text-[var(--color-sand)] font-nav tracking-[0.3em] uppercase text-sm md:text-lg font-bold transition-colors duration-400"
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
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="flex flex-col items-center gap-4">
             <span className="nav-text uppercase text-xs tracking-widest font-bold opacity-50">Select a Chapter Above</span>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </motion.div>
        </motion.div>
      </header>
    </PageTransition>
  );
}

function ChapterWrapper({ num, children }: { num: number, children: React.ReactNode }) {
  return (
    <PageTransition>
      <div className="pt-32">
        {children}
        <ChapterNavigation current={num} />
      </div>
    </PageTransition>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] font-body selection:bg-[var(--color-saffron)] selection:text-white overflow-x-hidden transition-colors duration-400">
      <ScrollToTop />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/chapter/1" element={<ChapterWrapper num={1}><Chapter1 /></ChapterWrapper>} />
          <Route path="/chapter/2" element={<ChapterWrapper num={2}><Chapter2 /></ChapterWrapper>} />
          <Route path="/chapter/3" element={<ChapterWrapper num={3}><Chapter3 /></ChapterWrapper>} />
          <Route path="/chapter/4" element={<ChapterWrapper num={4}><Chapter4 /></ChapterWrapper>} />
          <Route path="/chapter/5" element={<ChapterWrapper num={5}><Chapter5 /></ChapterWrapper>} />
          <Route path="/chapter/6" element={<ChapterWrapper num={6}><Chapter6 /></ChapterWrapper>} />
        </Routes>
      </AnimatePresence>

      <footer className="py-20 text-center border-t border-[var(--border-color)] bg-[var(--bg-color)] transition-colors duration-400">
        <p className="nav-text text-sm tracking-[0.2em] font-bold text-[var(--text-color)]/40 uppercase">
          &copy; 2026 Developed India Mission &bull; Literary Vision 2047
        </p>
      </footer>
    </div>
  );
}
