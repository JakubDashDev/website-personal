import { useScroll } from 'motion/react';
import { useRef } from 'react';
import { useThemeTrigger } from '@/hooks/use-theme-trigger';

export function useContactTheme() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: entranceProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  useThemeTrigger({
    scrollProgress: entranceProgress,
    setThemeAtProgress: 0,
    disableThemeAtProgress: 0.95,
    theme: 'light',
  });
  useThemeTrigger({
    scrollProgress: entranceProgress,
    setThemeAtProgress: 0.95,
    disableThemeAtProgress: 1.01,
    theme: 'dark',
  });
  useThemeTrigger({
    scrollProgress: sectionProgress,
    setThemeAtProgress: 0,
    theme: 'dark',
  });

  return sectionRef;
}
