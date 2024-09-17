import classes from './Toggle.module.scss';
interface ToggleProps {
  value?: boolean;
  onChange?: React.MouseEventHandler<HTMLInputElement>;
}

export const Toggle = ({ value, onChange }: ToggleProps) => (
  <section className={classes.root}>
    <label className={classes.switch} htmlFor='toggler'>
      <input id='toggler' type='checkbox' checked={value} onClick={onChange} readOnly />
      <span className={classes.slider} />
      <span className={classes.wave} />
    </label>
  </section>
);
