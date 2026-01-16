'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSequence from './LoadingSequence';

interface Section {
  id: string;
  title: string;
  content?: string;
}

const sections: Section[] = [
  { id: 'experience', title: 'EXPERIENCE' },
  { id: 'projects', title: 'PROJECTS' },
  { id: 'interests', title: 'INTERESTS' },
  { id: 'about', title: 'ABOUT' },
];

export default function LandingPage() {
  const [stage, setStage] = useState<'loading' | 'complete'>('loading');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  useEffect(() => {
    // Complete the intro after 3 seconds
    const completeTimer = setTimeout(() => {
      setStage('complete');
    }, 3000);

    return () => {
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden" id="landing">
      {/* Background - lighter green */}
      <div className="fixed inset-0 bg-forest" />

      {/* Loading Sequence */}
      <AnimatePresence>
        {stage === 'loading' && <LoadingSequence />}
      </AnimatePresence>

      {/* Main Content - reveals after loading */}
      {stage === 'complete' && (
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Name at top - single line, loading from bottom to top */}
          <motion.header
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="pt-8 pb-6 px-8"
          >
            <div className="relative bg-white px-12 py-6 inline-block">
              <div className="absolute inset-0 border border-gold/30 pointer-events-none" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] text-center font-serif text-gold whitespace-nowrap">
                OHM RATHOD
              </h1>
            </div>
          </motion.header>

          {/* 4-column grid */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
            className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.23, 1, 0.32, 1],
                  delay: 0.7 + index * 0.1
                }}
                onClick={() => setSelectedSection(section.id)}
                className="relative bg-cream/5 border border-gold/20 backdrop-blur-sm cursor-pointer group hover:border-gold/40 transition-all duration-300 flex items-center justify-center"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] text-cream group-hover:text-gold transition-colors duration-300">
                  {section.title}
                </h2>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Modal/Tab for expanded section */}
      <AnimatePresence>
        {selectedSection && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSection(null)}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />

            {/* Modal content */}
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="fixed inset-x-0 bottom-0 top-20 bg-cream z-50 overflow-auto"
            >
              <div className="max-w-6xl mx-auto p-8 md:p-12">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-forest font-serif">
                    {sections.find(s => s.id === selectedSection)?.title}
                  </h2>
                  <button
                    onClick={() => setSelectedSection(null)}
                    className="text-forest/60 hover:text-forest transition-colors text-sm tracking-widest"
                  >
                    CLOSE ✕
                  </button>
                </div>
                <div className="text-forest/80">
                  <p>Content coming soon...</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
