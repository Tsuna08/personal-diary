import classes from './Toggle.module.scss';

export const Toggle = ({ value, onChange }: any) => (
  <div className={classes.root}>
    <label className={classes.switch} htmlFor='toggler'>
      <input
        id='toggler'
        type='checkbox'
        onClick={onChange}
        checked={value}
        readOnly
      />
      <span className={classes.slider} />
      <span className={classes.wave} />
    </label>
  </div>
);
