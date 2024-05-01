import { ReactNode } from 'react';

import classes from './CardButton.module.scss';

interface CardButtonProps {
  children: ReactNode;
}

const CardButton = ({ children }: CardButtonProps) => {
  return <button className={classes.card_button}>{children}</button>;
};

export default CardButton;
