import classes from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${classes.button} ${classes.accent}`}>
      {text}
    </button>
  );
};

export default Button;
