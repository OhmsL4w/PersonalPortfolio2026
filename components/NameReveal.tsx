'use client';

import { motion } from 'framer-motion';

interface NameRevealProps {
  isComplete: boolean;
}

export default function NameReveal({ isComplete }: NameRevealProps) {
  const name = "OHM RATHOD";

  return (
    <motion.div
      initial={false}
      animate={{
        top: isComplete ? '2rem' : '50%',
        y: isComplete ? 0 : '-50%',
      }}
      transition={{
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="fixed left-1/2 -translate-x-1/2 z-20"
    >
      {/* White square container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: isComplete ? 0.6 : 1,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="relative bg-white px-16 py-12 md:px-24 md:py-16"
      >
        {/* Thin gold border on white square */}
        <div className="absolute inset-0 border border-gold/30 pointer-events-none" />

        {/* Name in metallic gold - fixed blur issue */}
        <h1
          className="relative text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-center z-10 font-serif"
          style={{
            background: 'linear-gradient(to bottom, #E4C558, #D4AF37, #B8962E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {name.split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + i * 0.2,
                duration: 0.6,
              }}
              className="block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtle tagline - hide when moved to top */}
        {!isComplete && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center text-cognac-dark text-xs md:text-sm tracking-[0.3em] mt-6 uppercase font-light"
          >
            Developer • Designer
          </motion.p>
        )}

        {/* Corner decorations - hide when moved to top */}
        {!isComplete &&
          [
            { top: '-2px', left: '-2px', borderTop: '1px', borderLeft: '1px' },
            { top: '-2px', right: '-2px', borderTop: '1px', borderRight: '1px' },
            { bottom: '-2px', left: '-2px', borderBottom: '1px', borderLeft: '1px' },
            { bottom: '-2px', right: '-2px', borderBottom: '1px', borderRight: '1px' },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
              className="absolute w-6 h-6 border-gold pointer-events-none"
              style={pos as React.CSSProperties}
            />
          ))}
      </motion.div>
    </motion.div>
  );
}
