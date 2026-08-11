import { useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';
import { useRef, useState } from 'react';
import { useThemeTrigger } from '@/hooks/use-theme-trigger';

export function useExperienceMotion() {
  const reduceMotion = useReducedMotion();
  const [visibleRoles, setVisibleRoles] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: entranceProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  useMotionValueEvent(entranceProgress, 'change', (progress) => {
    const nextVisibleRoles = progress >= 0.78 ? 2 : progress >= 0.6 ? 1 : 0;
    setVisibleRoles((current) => Math.max(current, nextVisibleRoles));
  });

  useThemeTrigger({
    scrollProgress: entranceProgress,
    setThemeAtProgress: 0,
    disableThemeAtProgress: 0.95,
    theme: 'dark',
  });
  useThemeTrigger({
    scrollProgress: entranceProgress,
    setThemeAtProgress: 0.95,
    disableThemeAtProgress: 1.01,
    theme: 'primary',
  });

  return { reduceMotion, sectionRef, visibleRoles };
}
