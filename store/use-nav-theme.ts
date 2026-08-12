import { create } from 'zustand';

export type NavTheme = 'dark' | 'black' | 'light' | 'primary';

interface NavThemeState {
  activeTheme: NavTheme;
  setActiveTheme: (activeTheme: NavTheme) => void;
}

export const useNavTheme = create<NavThemeState>((set) => ({
  activeTheme: 'dark',
  setActiveTheme: (activeTheme) => set({ activeTheme }),
}));
