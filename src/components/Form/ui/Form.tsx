import classNames from 'classnames';
import { ChangeEvent, FormEvent, useEffect, useReducer, useRef } from 'react';

import { Button, Input, Textarea } from '@/components';
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
        <Input
          ref={titleRef}
          value={values.title}
          className={classes.inputTitle}
          isError={!isValid.title}
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
        <Input
          ref={dateRef}
          id='date'
          type='date'
          value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''}
          isError={!isValid.date}
          onChange={handleChange}
        />
      </section>

      <section className={classes.field}>
        <label htmlFor='tag' className={classes.label}>
          <div className={classNames(classes.icon, classes.iconFolder)} />
          <span>Метки</span>
        </label>
        <Input id='tag' value={values.tag} className={classes.input} onChange={handleChange} />
      </section>

      <section className={classes.field}>
        <Textarea
          ref={postRef}
          value={values.post}
          isError={!isValid.post}
          onChange={handleChange}
        />
      </section>

      <Button text='Сохранить' />
    </form>
  );
};
