import { motion } from 'motion/react';

export function ImageBlock({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.8, rotateZ: -2, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, rotateZ: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, type: "spring", bounce: 0.4 }}
      className="my-20 w-full max-w-5xl mx-auto group"
    >
      <div className="overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/50 relative">
        <motion.img 
          whileHover={{ scale: 1.05, rotateZ: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={src} 
          alt={alt} 
          className="w-full h-auto object-cover max-h-[60vh]" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
      {caption && (
        <motion.figcaption 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-center text-sm md:text-lg italic text-[var(--color-charcoal)]/80 nav-text max-w-3xl mx-auto font-medium"
        >
          {caption}
        </motion.figcaption>
      )}
    </motion.figure>
  );
}
