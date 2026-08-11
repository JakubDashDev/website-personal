'use client';

import { useTranslations } from 'next-intl';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { NavTheme } from '@/store/use-nav-theme';

const activeThemes: Record<NavTheme, string> = {
  dark: 'border-accent text-accent',
  light: 'border-accent-deep text-accent-deep',
};

const inactiveThemes: Record<NavTheme, string> = {
  dark: 'border-transparent text-text-muted hover:border-accent hover:text-text',
  light: 'border-transparent text-text-dim hover:border-accent-deep hover:text-bg',
};

export function LocaleSwitcher({ activeTheme }: { activeTheme: NavTheme }) {
  const t = useTranslations('nav');
  const { lang } = useParams<{ lang: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (locale: string) => {
    const segments = pathname.split('/');

    segments[1] = locale;
    router.replace(segments.join('/'), { scroll: false });
  };

  return (
    <ul
      className="flex items-center gap-3 justify-self-end text-sm tracking-[0.14em] uppercase"
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
