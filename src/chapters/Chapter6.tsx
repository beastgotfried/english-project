import { ChapterHeader } from '../components/ChapterHeader';
import { SectionHeading } from '../components/SectionHeading';
import { Paragraph } from '../components/Paragraph';
import { PullQuote } from '../components/PullQuote';
import { ImageBlock } from '../components/ImageBlock';
import { motion } from 'motion/react';

export function Chapter6() {
  return (
    <section className="pb-24">
      <ChapterHeader number="SIX" title="A Developed Nation with an Ancient Soul" subtitle="Conclusion" />
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ImageBlock src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Journey" caption="Transforming economic ambition into enduring civilizational greatness." />
        
        <SectionHeading number="6.1" title="Synthesizing the Journey" />
        <Paragraph dropcap>
          Resilience provides the engine, cultural roots provide the anchor, local strength decentralizes growth, and compassion acts as the supreme binding agent.
        </Paragraph>
        
        <PullQuote>
          "These four themes are not isolated virtues; they are a deeply interlocked mechanism."
        </PullQuote>
        
        <Paragraph>
          We are no longer merely surviving; we are ascending. The victory of a Viksit Bharat will not be the eradication of our past, but the vindication of it.
        </Paragraph>
        
        <ImageBlock src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Youth" caption="The responsibility of the modern citizen is to actively embody these values." />
        
        <SectionHeading number="6.2" title="Final Reflections" />
        <Paragraph>
          A nation's greatest and most enduring infrastructure is its character. Steel rusts and technologies become obsolete, but the ethical fortitude of a people survives.
        </Paragraph>
        
        <PullQuote>
          "In doing so, we will not merely develop a country; we will elevate humanity."
        </PullQuote>
      </div>
      
      <div className="w-full h-screen relative mt-32 flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506461883276-594a12b11dc3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/90 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="relative z-10 text-[var(--color-sand)] mt-auto pb-32"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading italic text-[var(--color-marigold)] mb-8 drop-shadow-2xl">
            — দেশের মাটি —
          </h2>
          <p className="text-3xl md:text-5xl font-nav tracking-[0.4em] uppercase drop-shadow-lg font-bold">
            The Soil of the Nation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
