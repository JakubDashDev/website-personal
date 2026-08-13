'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-media-query';
import { useNavTheme } from '@/store/use-nav-theme';

export function useNavbar() {
  const activeTheme = useNavTheme((state) => state.activeTheme);
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactActive, setIsContactActive] = useState(false);
  const activeSection: 'home' | 'experience' | 'contact' = isContactActive
    ? 'contact'
    : activeTheme === 'dark'
      ? 'home'
      : 'experience';

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsContactActive(entry.isIntersecting),
      { rootMargin: '-40% 0px' }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  return {
    activeTheme,
    activeSection,
    isMobile,
    isMenuOpen,
    toggleMenu: () => setIsMenuOpen((isOpen) => !isOpen),
    closeMenu: () => setIsMenuOpen(false),
  };
}

export function useLocaleSwitcher(onSelect?: () => void) {
  const { lang } = useParams<{ lang: string }>();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (locale: string) => {
    const segments = pathname.split('/');

    segments[1] = locale;
    router.replace(segments.join('/'), { scroll: false });
    onSelect?.();
  };

  return { lang, switchLocale };
}
