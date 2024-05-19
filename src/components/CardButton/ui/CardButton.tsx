import { ReactNode } from 'react';

import classes from './CardButton.module.scss';

interface CardButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const CardButton = ({ children, className, onClick }: CardButtonProps) => {
  return (
    <button className={`${classes.card_button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CardButton;
