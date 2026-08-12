'use client';

import { useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import type { NavTheme } from '@/store/use-nav-theme';
import { useLocaleSwitcher } from './hooks';

const activeThemes: Record<NavTheme, string> = {
  dark: 'border-accent text-accent',
  black: 'border-white text-white',
  light: 'border-accent-deep text-accent-deep',
  primary: 'border-white text-white',
};

const inactiveThemes: Record<NavTheme, string> = {
  dark: 'border-transparent text-text-muted hover:border-accent hover:text-text',
  black: 'border-transparent text-white/55 hover:border-white hover:text-white',
  light: 'border-transparent text-text-dim hover:border-accent-deep hover:text-bg',
  primary: 'border-transparent text-white/55 hover:border-white hover:text-white',
};

export function LocaleSwitcher({
  activeTheme,
  onSelect,
}: {
  activeTheme: NavTheme;
  onSelect: () => void;
}) {
  const t = useTranslations('nav');
  const { lang, switchLocale } = useLocaleSwitcher(onSelect);

  return (
    <ul
      className="nav-label flex items-center gap-3 justify-self-center text-xs uppercase lg:justify-self-end lg:text-sm"
      aria-label={t('language')}
    >
      {routing.locales.map((locale) => {
        const isActive = locale === lang;

        return (
          <li key={locale}>
            <button
              className={`${isActive ? activeThemes[activeTheme] : inactiveThemes[activeTheme]} cursor-pointer border-b py-1 transition-colors`}
              type="button"
              aria-pressed={isActive}
              onClick={() => switchLocale(locale)}
            >
              {locale.toUpperCase()}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
