'use client';

import { useTranslations } from 'next-intl';
import { PiListThin, PiXThin } from 'react-icons/pi';
import type { NavTheme } from '@/store/use-nav-theme';
import { useNavbar } from './hooks';
import { LocaleSwitcher } from './locale-switcher';
import { NavLinks } from './nav-links';

const navThemes: Record<NavTheme, string> = {
  dark: 'bg-bg/95 lg:bg-bg/85',
  black: 'bg-black/95 lg:bg-transparent',
  light: 'bg-[#f4f4f4]/95 lg:bg-transparent',
  primary: 'bg-secondary/95 lg:bg-transparent',
};

const borderThemes: Record<NavTheme, string> = {
  dark: 'border-white/15',
  black: 'border-white/15',
  light: 'border-black/10',
  primary: 'border-white/15',
};

const logoThemes: Record<NavTheme, string> = {
  dark: 'text-white font-bold hover:text-accent',
  black: 'text-white font-bold hover:text-accent',
  light: 'text-bg hover:text-accent-deep',
  primary: 'text-white font-bold hover:text-accent',
};

const menuButtonThemes: Record<NavTheme, string> = {
  dark: 'border-white/20 text-white hover:border-white/40',
  black: 'border-white/20 text-white hover:border-white/40',
  light: 'border-black/20 text-bg hover:border-black/40',
  primary: 'border-white/20 text-white hover:border-white/40',
};

export function Navbar() {
  const t = useTranslations('nav');
  const { activeTheme, activeSection, isMobile, isMenuOpen, toggleMenu, closeMenu } = useNavbar();

  return (
    <nav
      className={`${navThemes[activeTheme]} ${borderThemes[activeTheme]} px-page fixed inset-x-0 top-0 z-50 grid grid-cols-2 items-center border-b py-4 backdrop-blur-md transition-colors duration-500 lg:grid-cols-3 lg:py-8`}
      aria-label={t('label')}
    >
      <a
        className={`${logoThemes[activeTheme]} justify-self-start text-base tracking-wider transition-colors duration-500 sm:text-xl`}
        href="#home"
        onClick={closeMenu}
      >
        JakubDashDev
      </a>
      <div
        id="mobile-navigation"
        className={`${isMenuOpen ? 'grid-rows-[1fr] pt-4 opacity-100' : 'grid-rows-[0fr] pt-0 opacity-0'} col-span-2 row-start-2 grid overflow-hidden transition-[grid-template-rows,opacity,padding] duration-300 ease-out motion-reduce:transition-none lg:col-start-2 lg:row-start-1 lg:grid-cols-2 lg:grid-rows-[1fr] lg:overflow-visible lg:pt-0 lg:opacity-100`}
        inert={isMobile && !isMenuOpen ? true : undefined}
      >
        <div className="grid min-h-0 grid-cols-1 justify-items-center gap-3 overflow-hidden lg:col-span-2 lg:grid-cols-2 lg:items-center lg:overflow-visible">
          <NavLinks
            activeTheme={activeTheme}
            activeSection={activeSection}
            onNavigate={closeMenu}
          />
          <LocaleSwitcher activeTheme={activeTheme} onSelect={closeMenu} />
        </div>
      </div>
      <button
        type="button"
        className={`${menuButtonThemes[activeTheme]} col-start-2 row-start-1 inline-flex size-10 cursor-pointer items-center justify-center justify-self-end rounded-full border transition-colors lg:hidden`}
        aria-label={t(isMenuOpen ? 'closeMenu' : 'openMenu')}
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <span className="relative size-6" aria-hidden="true">
          <PiListThin
            className={`${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'} absolute inset-0 text-2xl transition-[rotate,opacity] duration-300 motion-reduce:transition-none`}
          />
          <PiXThin
            className={`${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'} absolute inset-0 text-2xl transition-[rotate,opacity] duration-300 motion-reduce:transition-none`}
          />
        </span>
      </button>
    </nav>
  );
}
