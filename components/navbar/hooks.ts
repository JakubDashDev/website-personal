'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-media-query';
import { useNavTheme } from '@/store/use-nav-theme';

export function useNavbar() {
  const activeTheme = useNavTheme((state) => state.activeTheme);
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection: 'home' | 'experience' = activeTheme === 'dark' ? 'home' : 'experience';

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
