import type { MotionValue } from 'motion/react';
import { useMotionValueEvent } from 'motion/react';
import { type NavTheme, useNavTheme } from '@/store/use-nav-theme';

interface ThemeTriggerOptions {
  scrollProgress: MotionValue<number>;
  setThemeAtProgress: number;
  disableThemeAtProgress?: number;
  theme: NavTheme;
  disabled?: boolean;
}

export function useThemeTrigger({
  scrollProgress,
  setThemeAtProgress,
  disableThemeAtProgress = 1,
  theme,
  disabled,
}: ThemeTriggerOptions) {
  const setActiveTheme = useNavTheme((state) => state.setActiveTheme);

  useMotionValueEvent(scrollProgress, 'change', (progress) => {
    if (!disabled && progress > setThemeAtProgress && progress < disableThemeAtProgress) {
      setActiveTheme(theme);
    }
  });
}
