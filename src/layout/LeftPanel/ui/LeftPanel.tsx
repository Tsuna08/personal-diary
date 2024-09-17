import { ReactNode } from 'react';

import classes from './LeftPanel.module.scss';

interface LeftPanelProps {
  children: ReactNode;
}

export const LeftPanel = ({ children }: LeftPanelProps) => <article className={classes.panel}>{children}</article>;
