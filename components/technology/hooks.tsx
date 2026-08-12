import { useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';
import { useRef, useState } from 'react';

export function useTechnologyMotion() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleGroups, setVisibleGroups] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const nextVisibleGroups = progress >= 0.275 ? 3 : progress >= 0.125 ? 2 : progress > 0 ? 1 : 0;
    setVisibleGroups(nextVisibleGroups);
  });

  return { reduceMotion, sectionRef, visibleGroups };
}
