import CardButton from '../../../components/CardButton';
import classes from './DiaryAddButton.module.scss';

// interface DiaryAddButtonProps {}

const DiaryAddButton = () => {
  return (
    <CardButton className={classes.add_button}>Новое воспоминание</CardButton>
  );
};

export default DiaryAddButton;
