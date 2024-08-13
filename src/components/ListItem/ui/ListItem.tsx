import classes from './ListItem.module.scss';

interface ListItemProps {
  title: string;
  date: Date;
  text: string;
}

export const ListItem = ({ title, date, text }: ListItemProps) => {
  const formatDate = new Intl.DateTimeFormat('ru-RU').format(date);
  return (
    <>
      <h2 className={classes.header}>{title}</h2>
      <h2 className={classes.content}>
        <div className={classes.date}>{formatDate}</div>
        <div className={classes.text}>{text}</div>
      </h2>
    </>
  );
};
