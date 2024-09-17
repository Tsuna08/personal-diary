import classes from './ListItem.module.scss';

interface ListItemProps {
  title: string;
  date: Date;
  post?: string;
}

export const ListItem = ({ title, date, post }: ListItemProps) => {
  const formatDate = new Intl.DateTimeFormat('ru-RU').format(date);
  return (
    <article className={classes.article}>
      <h2>{title}</h2>
      <span className={classes.date}>{formatDate}</span>
      <span className={classes.post}>{post}</span>
    </article>
  );
};
