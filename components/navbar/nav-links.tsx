import { useTranslations } from 'next-intl';
import type { NavTheme } from '@/store/use-nav-theme';

const linkThemes: Record<NavTheme, string> = {
  dark: 'text-text-muted hover:border-accent hover:text-text',
  light: 'text-text-dim hover:border-accent-deep hover:text-bg',
};

const activeLinkThemes: Record<NavTheme, string> = {
  dark: 'border-accent text-accent',
  light: 'border-accent-deep text-accent-deep',
};

export function NavLinks({ activeTheme }: { activeTheme: NavTheme }) {
  const t = useTranslations('nav');

  return (
    <div className="flex items-center gap-8 justify-self-center text-sm tracking-[0.14em] uppercase">
      <a
        className={`${activeLinkThemes[activeTheme]} border-b py-1 transition-colors`}
        href="#home"
        aria-current="location"
      >
        {t('home')}
      </a>
      <a
        className={`${linkThemes[activeTheme]} border-b border-transparent py-1 transition-colors`}
        href="#experience"
      >
        {t('experience')}
      </a>
      <a
        className={`${linkThemes[activeTheme]} border-b border-transparent py-1 transition-colors`}
        href="#contact"
      >
        {t('contact')}
      </a>
    </div>
  );
}
