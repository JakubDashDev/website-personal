import { useTranslations } from 'next-intl';
import type { NavTheme } from '@/store/use-nav-theme';

const linkThemes: Record<NavTheme, string> = {
  dark: 'text-text-muted hover:border-accent hover:text-text',
  light: 'text-text-dim hover:border-accent-deep hover:text-bg',
  primary: 'text-white/55 hover:border-white hover:text-white',
};

const activeLinkThemes: Record<NavTheme, string> = {
  dark: 'border-accent text-accent',
  light: 'border-accent-deep text-accent-deep',
  primary: 'border-white text-white',
};

export function NavLinks({
  activeTheme,
  activeSection,
}: {
  activeTheme: NavTheme;
  activeSection: 'home' | 'experience';
}) {
  const t = useTranslations('nav');
  const homeIsActive = activeSection === 'home';
  const experienceIsActive = activeSection === 'experience';

  return (
    <div className="nav-label flex items-center gap-8 justify-self-center text-sm uppercase">
      <a
        className={`${homeIsActive ? activeLinkThemes[activeTheme] : `${linkThemes[activeTheme]} border-transparent`} border-b py-1 transition-colors`}
        href="#home"
        aria-current={homeIsActive ? 'location' : undefined}
      >
        {t('home')}
      </a>
      <a
        className={`${experienceIsActive ? activeLinkThemes[activeTheme] : `${linkThemes[activeTheme]} border-transparent`} border-b py-1 transition-colors`}
        href="#experience"
        aria-current={experienceIsActive ? 'location' : undefined}
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
