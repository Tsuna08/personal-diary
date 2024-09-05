import { Themes } from '@/types/root';

export const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}` as Themes;
  if ([Themes.light, Themes.dark].includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return Themes.light;

  return Themes.dark;
};
