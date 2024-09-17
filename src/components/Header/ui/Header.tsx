import { useContext } from 'react';

import { Toggle } from '@/components';
import { ThemeContext } from '@/providers/ThemeProvider';
import { Themes } from '@/types/root';

import classes from './Header.module.scss';

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo} />
      <Toggle
        onChange={() => {
          if (theme === Themes.light) setTheme?.(Themes.dark);
          if (theme === Themes.dark) setTheme?.(Themes.light);
        }}
        value={theme === Themes.dark}
      />
    </header>
  );
};
