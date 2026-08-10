'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const smoothEase = [0.16, 1, 0.3, 1] as const;
const exitEase = [0.7, 0, 0.2, 1] as const;

export function Intro() {
  const t = useTranslations('intro');
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  if (!visible || reduceMotion) return null;

  return (
    <motion.div
      className="bg-bg pointer-events-none fixed inset-0 z-90 flex items-center justify-center"
      aria-hidden="true"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: [1, 1, 0], y: [0, 0, -25] }}
      transition={{ duration: 2, delay: 0.4, times: [0, 0.9, 1], ease: exitEase }}
      onAnimationComplete={() => setVisible(false)}
    >
      <div className="text-center">
        <div className="overflow-hidden px-0.5">
          <motion.div
            className="text-text text-7xl leading-none font-medium tracking-[-0.04em]"
            initial={{ opacity: 0, y: '120%', rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: smoothEase }}
          >
            Jakub Cieślik
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-5 h-px w-85 origin-left bg-[linear-gradient(90deg,transparent,var(--accent),transparent)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 1] }}
          transition={{ duration: 1.5, delay: 0.35, times: [0, 0.55, 1], ease: exitEase }}
        />
        <motion.div
          className="text-text-muted mt-4.5 text-xs tracking-[0.32em] uppercase"
          initial={{ opacity: 0, y: '120%', rotate: 3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: smoothEase }}
        >
          {t('role')}
        </motion.div>
      </div>
    </motion.div>
  );
}
