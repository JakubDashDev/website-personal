import { useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';
import { useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-media-query';
import { useThemeTrigger } from '@/hooks/use-theme-trigger';

export function useTechnologyMotion() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const [visibleGroups, setVisibleGroups] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: entranceProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const nextVisibleGroups = progress >= 0.275 ? 3 : progress >= 0.125 ? 2 : progress > 0 ? 1 : 0;
    setVisibleGroups(nextVisibleGroups);
  });

  useThemeTrigger({
    scrollProgress: entranceProgress,
    setThemeAtProgress: 0,
    disableThemeAtProgress: 0.95,
    theme: 'primary',
    disabled: !isMobile,
  });
  useThemeTrigger({
    scrollProgress: entranceProgress,
    setThemeAtProgress: 0.95,
    disableThemeAtProgress: 1.01,
    theme: 'black',
    disabled: !isMobile,
  });

  return { reduceMotion, sectionRef, visibleGroups: isMobile ? 3 : visibleGroups };
}
