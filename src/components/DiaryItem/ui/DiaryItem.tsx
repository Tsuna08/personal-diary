import classes from './DiaryItem.module.scss';

interface DiaryItemProps {
  title: string;
  date: Date;
  text: string;
}

const DiaryItem = ({ title, date, text }: DiaryItemProps) => {
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

export default DiaryItem;
