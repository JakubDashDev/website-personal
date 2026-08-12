import { useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';
import { useLocale } from 'next-intl';
import { useRef, useState } from 'react';
import { useThemeTrigger } from '@/hooks/use-theme-trigger';
import { experiences } from './data';

type ExperienceMonth = { year: number; month: number };

function toMonthIndex({ year, month }: ExperienceMonth) {
  return year * 12 + month - 1;
}

function formatMonth({ year, month }: ExperienceMonth) {
  return `${String(month).padStart(2, '0')}.${year}`;
}

export function useExperienceDates() {
  const locale = useLocale();
  const now = new Date();
  const currentMonth = { year: now.getUTCFullYear(), month: now.getUTCMonth() + 1 };
  const firstProfessionalMonth = Math.min(...experiences.map(({ start }) => toMonthIndex(start)));
  const totalMonths = Math.max(0, toMonthIndex(currentMonth) - firstProfessionalMonth);
  const totalExperience = new Intl.NumberFormat(locale, {
    style: 'unit',
    unit: 'year',
    unitDisplay: 'long',
    maximumFractionDigits: 1,
  }).format(totalMonths / 12);

  return { formatMonth, totalExperience };
}

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
