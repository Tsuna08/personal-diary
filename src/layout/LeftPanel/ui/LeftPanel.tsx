import { ReactNode } from 'react';

import classes from './LeftPanel.module.scss';

interface LeftPanelProps {
  children: ReactNode;
}

export const LeftPanel = ({ children }: LeftPanelProps) => {
  return <div className={classes.panel}>{children}</div>;
};
