import { createContext, Dispatch, ReactNode, useEffect, useState } from 'react';

import { getTheme } from '@/hooks/getTheme';
import { Themes } from '@/types/root';

interface ThemeProps {
  theme?: Themes;
  setTheme?: Dispatch<Themes>;
}

export const ThemeContext = createContext<ThemeProps>({});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
