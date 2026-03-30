import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const CHAPTERS = [
  { id: 1, title: "Blueprint" },
  { id: 2, title: "Resilience" },
  { id: 3, title: "Roots" },
  { id: 4, title: "Empowerment" },
  { id: 5, title: "Compassion" },
  { id: 6, title: "Synthesis" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-[var(--bg-color)]/80 backdrop-blur-md shadow-lg border-b border-[var(--border-color)]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
        {/* Left: Logo */}
        <div className="flex-1">
          <NavLink 
            to="/" 
            className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-marigold)] hover:scale-105 transition-all duration-300 inline-block"
          >
            VB
          </NavLink>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex flex-auto justify-center items-center gap-10">
          {CHAPTERS.map((ch) => (
            <NavLink
              key={ch.id}
              to={`/chapter/${ch.id}`}
              className={({ isActive }) => 
                `relative group py-2 font-heading text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                  isActive ? 'text-[var(--color-marigold)]' : 'text-[var(--text-color)]/60 hover:text-[var(--color-marigold)]'
                }`
              }
            >
              {ch.title}
              <motion.span 
                className="absolute bottom-0 left-0 h-[2px] bg-[var(--color-marigold)]" 
                initial={false}
                animate={{ width: location.pathname === `/chapter/${ch.id}` ? '100%' : '0%' }}
                whileHover={{ width: '100%' }}
              />
            </NavLink>
          ))}
        </div>

        {/* Right: Mobile Toggle / Spacing */}
        <div className="flex-1 flex justify-end items-center">
          <button 
            className="lg:hidden text-[var(--text-color)] p-2 hover:bg-[var(--text-color)]/5 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--bg-color)] border-b border-[var(--border-color)] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <NavLink to="/" className="text-xl font-heading text-[var(--color-marigold)]">Home</NavLink>
              {CHAPTERS.map((ch) => (
                <NavLink
                  key={ch.id}
                  to={`/chapter/${ch.id}`}
                  className="flex items-center justify-between group"
                >
                  <span className="nav-text text-lg font-bold uppercase tracking-widest text-[var(--text-color)]/80 group-hover:text-[var(--color-marigold)]">
                    Chapter {ch.id}: {ch.title}
                  </span>
                  <ChevronRight size={20} className="text-[var(--color-marigold)]" />
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
