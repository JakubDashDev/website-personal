import { useScroll } from 'motion/react';
import { useRef } from 'react';
import { useIsMobile } from '@/hooks/use-media-query';
import { useThemeTrigger } from '@/hooks/use-theme-trigger';

export function useReferencesTheme() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  useThemeTrigger({
    scrollProgress: scrollYProgress,
    setThemeAtProgress: 0,
    disableThemeAtProgress: 0.95,
    theme: isMobile ? 'black' : 'primary',
  });
  useThemeTrigger({
    scrollProgress: scrollYProgress,
    setThemeAtProgress: 0.95,
    disableThemeAtProgress: 1.01,
    theme: 'light',
  });
  useThemeTrigger({
    scrollProgress: sectionProgress,
    setThemeAtProgress: 0,
    disableThemeAtProgress: 0.48,
    theme: 'light',
  });

  return sectionRef;
}
