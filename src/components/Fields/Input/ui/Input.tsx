import classNames from 'classnames';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export const Input = forwardRef(
  (
    { id, type = 'text', value, className, isError = false, onChange }: InputProps,
    ref?: ForwardedRef<HTMLInputElement> | null
  ) => {
    return (
      <input
        ref={ref}
        id={id}
        type={type}
        value={value}
        className={classNames(classes.input, className, { [classes.error]: isError })}
        onChange={onChange}
      />
    );
  }
);
