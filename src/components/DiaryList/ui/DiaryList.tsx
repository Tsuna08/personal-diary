import { ReactNode } from 'react';

import classes from './DiaryList.module.scss';

interface DiaryListProps {
  children: ReactNode;
}

const DiaryList = ({ children }: DiaryListProps) => {
  return <div className={classes.list}>{children}</div>;
};

export default DiaryList;
