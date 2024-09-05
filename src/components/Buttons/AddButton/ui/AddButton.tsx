import { CardButton } from '@/components/Buttons/CardButton';

import classes from './AddButton.module.scss';

interface AddButtonProps {
  title: string;
  onClick?: () => void;
}

export const AddButton = ({ title, onClick }: AddButtonProps) => (
  <CardButton className={classes.add_button} onClick={onClick}>
    <div className={classes.icon} />
    {title}
  </CardButton>
);
