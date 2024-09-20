import classNames from 'classnames';
import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';

import classes from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
}

export const Textarea = forwardRef(
  (
    { id, value, className, isError = false, onChange }: TextareaProps,
    ref?: ForwardedRef<HTMLTextAreaElement> | null
  ) => {
    return (
      <textarea
        id={id}
        ref={ref}
        value={value}
        rows={10}
        className={classNames(classes.input, className, { [classes.error]: isError })}
        onChange={onChange}
      />
    );
  }
);
