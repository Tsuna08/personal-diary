import { ChangeEvent, useEffect, useReducer } from 'react';

import Button from '@/components/Button';
import { Note } from '@/types/types';

import { formReducer, INITIAL_STATE } from '../lib/utils';
import classes from './DiaryForm.module.scss';

interface DiaryFormProps {
  onSubmit: (note: Note) => void;
}

const DiaryForm = ({ onSubmit }: DiaryFormProps) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;

  useEffect(() => {
    let timeId: any;
    if (!isValid.title || !isValid.date || !isValid.post)
      timeId = setTimeout(() => dispatchForm({ type: 'RESET_VALIDITY' }), 2000);

    return () => clearTimeout(timeId);
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit]);

  const addDiaryItem = () => {
    dispatchForm({ type: 'SUBMIT' });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    dispatchForm({
      type: 'SET_VALUE',
      payload: { [target.name]: target.value }
    });
  };

  const errorStyle = { border: '1px solid red' };
  return (
    <form className={classes.form} onSubmit={addDiaryItem}>
      <div className={classes.field}>
        <input
          type='text'
          name='title'
          value={values.title}
          className={`${classes.input} ${classes.inputTitle}`}
          style={!isValid.title ? errorStyle : {}}
          onChange={handleChange}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor='date' className={classes.label}>
          <img src='/calendar.svg' alt='Calendar' className={classes.icon} />
          <span>Дата</span>
        </label>
        <input
          id='date'
          type='date'
          name='date'
          value={values.date}
          className={`${classes.input} ${classes.inputSmall}`}
          style={!isValid.date ? errorStyle : {}}
          onChange={handleChange}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor='tag' className={classes.label}>
          <img src='/folder.svg' alt='Folder' className={classes.icon} />
          <span>Метки</span>
        </label>
        <input
          id='tag'
          type='text'
          name='tag'
          value={values.tag}
          className={`${classes.input} ${classes.inputSmall}`}
          onChange={handleChange}
        />
      </div>
      <div className={classes.field}>
        <textarea
          name='post'
          rows={10}
          value={values.post}
          className={`${classes.input} `}
          style={!isValid.post ? errorStyle : {}}
          onChange={handleChange}
        />
      </div>

      <Button text='Сохранить' />
    </form>
  );
};

export default DiaryForm;
