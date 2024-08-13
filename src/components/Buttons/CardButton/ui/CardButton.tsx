import { ReactNode } from 'react';

import classes from './CardButton.module.scss';

interface CardButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CardButton = ({
  children,
  className,
  onClick
}: CardButtonProps) => (
  <button className={`${classes.card_button} ${className}`} onClick={onClick}>
    {children}
  </button>
);
