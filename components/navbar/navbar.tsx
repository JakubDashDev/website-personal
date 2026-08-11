'use client';

import { useTranslations } from 'next-intl';
import { type NavTheme, useNavTheme } from '@/store/use-nav-theme';
import { LocaleSwitcher } from './locale-switcher';
import { NavLinks } from './nav-links';

const navThemes: Record<NavTheme, string> = {
  dark: 'bg-bg/85',
  light: 'bg-band-light/90',
};

const logoThemes: Record<NavTheme, string> = {
  dark: 'text-white font-bold hover:text-accent',
  light: 'text-bg hover:text-accent-deep',
};

export function Navbar() {
  const t = useTranslations('nav');
  const activeTheme = useNavTheme((state) => state.activeTheme);

  return (
    <nav
      className={`${navThemes[activeTheme]} px-page fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center py-8 backdrop-blur-[14px] transition-colors duration-500`}
      aria-label={t('label')}
    >
      <a
        className={`${logoThemes[activeTheme]} justify-self-start text-xl tracking-[0.06em] transition-colors duration-500`}
        href="#home"
      >
        JakubDashDev
      </a>
      <NavLinks activeTheme={activeTheme} />
      <LocaleSwitcher activeTheme={activeTheme} />
    </nav>
  );
}
