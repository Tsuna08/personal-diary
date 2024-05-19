import CardButton from '../../../components/CardButton';
import classes from './DiaryAddButton.module.scss';

interface DiaryAddButtonProps {
  onClick?: () => void;
}

const DiaryAddButton = ({ onClick }: DiaryAddButtonProps) => {
  return (
    <CardButton className={classes.add_button} onClick={onClick}>
      <img className={classes.icon} src='/plus.svg' alt='Plus' />
      Новое воспоминание
    </CardButton>
  );
};

export default DiaryAddButton;
