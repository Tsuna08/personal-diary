import Button from '@/components/Button';
import { Note } from '@/types/types';

import classes from './DiaryForm.module.scss';

interface DiaryFormProps {
  onSubmit: (note: Note) => void;
}

const DiaryForm = ({ onSubmit }: DiaryFormProps) => {
  const addDiaryItem = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event?.target as HTMLFormElement);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps as never);
  };

  return (
    <form className={classes.form} onSubmit={addDiaryItem}>
      <input type='text' name='title' />
      <input type='date' name='date' />
      <input type='text' name='tag' />
      <textarea name='post' cols={30} rows={10} />
      <Button text='Сохранить' />
    </form>
  );
};

export default DiaryForm;
