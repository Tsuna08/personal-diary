import classes from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => (
  <button onClick={onClick} className={`${classes.button} ${classes.accent}`}>
    {text}
  </button>
);
