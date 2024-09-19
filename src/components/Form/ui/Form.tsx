import classNames from 'classnames';
import { ChangeEvent, FormEvent, useEffect, useReducer, useRef } from 'react';

import { Button } from '@/components';
import { FormValid, Note, TypesActionForm } from '@/types/root';

import { formReducer, INITIAL_STATE } from '../lib/utils';
import classes from './Form.module.scss';

interface FormProps {
  data?: Note;
  onDelete: (id: number) => void;
  onSubmit: (note: Note) => void;
}

export const Form = ({ data, onDelete, onSubmit }: FormProps) => {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const postRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!data) return dispatchForm({ type: TypesActionForm.CLEAR });

    dispatchForm({ type: TypesActionForm.SET_VALUE, payload: { ...data } });
  }, [data]);

  useEffect(() => {
    let timeId: NodeJS.Timeout;

    if (!isValid.title || !isValid.date || !isValid.post) {
      focusError(isValid);
      timeId = setTimeout(() => dispatchForm({ type: TypesActionForm.RESET_VALIDITY }), 2000);
    }

    return () => clearTimeout(timeId);
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: TypesActionForm.CLEAR });
    }
  }, [isFormReadyToSubmit]);

  const focusError = (isValid: FormValid) => {
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
    dispatchForm({ type: TypesActionForm.SUBMIT });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    dispatchForm({
      type: TypesActionForm.SET_VALUE,
      payload: { [target.name]: target.value }
    });
  };

  return (
    <form className={classes.form} onSubmit={addDiaryItem}>
      <section className={classes.field}>
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
        {data?.id && (
          <button type='button' className={classes.button} onClick={() => onDelete(data.id)}>
            <div className={classes.iconButton} />
          </button>
        )}
      </section>
      <section className={classes.field}>
        <label htmlFor='date' className={classes.label}>
          <div className={classNames(classes.icon, classes.iconCalendar)} />
          <span>Дата</span>
        </label>
        <input
          ref={dateRef}
          id='date'
          type='date'
          name='date'
          value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''}
          className={classNames(classes.input, { [classes.error]: !isValid.date })}
          onChange={handleChange}
        />
      </section>
      <section className={classes.field}>
        <label htmlFor='tag' className={classes.label}>
          <div className={classNames(classes.icon, classes.iconFolder)} />
          <span>Метки</span>
        </label>
        <input
          id='tag'
          type='text'
          name='tag'
          value={values.tag}
          className={classes.input}
          onChange={handleChange}
        />
      </section>
      <section className={classes.field}>
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
      </section>

      <Button text='Сохранить' />
    </form>
  );
};
