'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingSequence() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-30 bg-forest"
    >
      {/* Simple, clean loading counter */}
      <div className="text-center">
        <motion.div
          className="text-9xl font-light text-cream tracking-wider mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {String(progress).padStart(2, '0')}
        </motion.div>

        {/* Minimal progress bar */}
        <div className="w-48 h-[1px] bg-cream/20 overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gold"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
