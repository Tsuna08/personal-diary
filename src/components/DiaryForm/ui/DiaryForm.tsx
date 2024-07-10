import classNames from 'classnames';
import { ChangeEvent, FormEvent, useEffect, useReducer, useRef } from 'react';

import { Button } from '@/components';
import { Note } from '@/types/types';

import { formReducer, INITIAL_STATE } from '../lib/utils';
import classes from './DiaryForm.module.scss';

interface DiaryFormProps {
  onSubmit: (note: Note) => void;
}

const DiaryForm = ({ onSubmit }: DiaryFormProps) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const postRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    let timeId: any;

    if (!isValid.title || !isValid.date || !isValid.post) {
      focusError(isValid);
      timeId = setTimeout(() => dispatchForm({ type: 'RESET_VALIDITY' }), 2000);
    }

    return () => clearTimeout(timeId);
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit]);

  const focusError = (isValid: any) => {
    switch (true) {
      case !isValid.title:
        titleRef?.current?.focus();
        break;
      case !isValid.date:
        dateRef?.current?.focus();
        break;
      case !isValid.post:
        postRef?.current?.focus();
        break;
    }
  };

  const addDiaryItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

  return (
    <form className={classes.form} onSubmit={addDiaryItem}>
      <div className={classes.field}>
        <input
          ref={titleRef}
          type='text'
          name='title'
          value={values.title}
          className={classNames(classes.input, classes.inputTitle, {
            [classes.error]: !isValid.title
          })}
          onChange={handleChange}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor='date' className={classes.label}>
          <img src='/calendar.svg' alt='Calendar' className={classes.icon} />
          <span>Дата</span>
        </label>
        <input
          ref={dateRef}
          id='date'
          type='date'
          name='date'
          value={values.date}
          className={classNames(classes.input, classes.inputTitle, {
            [classes.error]: !isValid.date
          })}
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
          className={classNames(classes.input, classes.inputTitle)}
          onChange={handleChange}
        />
      </div>
      <div className={classes.field}>
        <textarea
          ref={postRef}
          name='post'
          rows={10}
          value={values.post}
          className={classNames(classes.input, {
            [classes.error]: !isValid.post
          })}
          onChange={handleChange}
        />
      </div>

      <Button text='Сохранить' />
    </form>
  );
};

export default DiaryForm;
