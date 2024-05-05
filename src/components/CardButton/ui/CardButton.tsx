import { ReactNode } from 'react';

import classes from './CardButton.module.scss';

interface CardButtonProps {
  children: ReactNode;
  className: string;
}

const CardButton = ({ children, className }: CardButtonProps) => {
  return (
    <button className={`${classes.card_button} ${className}`}>
      {children}
    </button>
  );
};

export default CardButton;
