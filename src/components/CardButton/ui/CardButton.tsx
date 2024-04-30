import { ReactNode } from 'react';

import classes from './CardButton.module.scss';

interface CardButtonProps {
  children: ReactNode;
}

const CardButton = ({ children }: CardButtonProps) => {
  return <div className={classes.card_button}>{children}</div>;
};

export default CardButton;
