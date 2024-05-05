import Button from '../../../components/Button';
import CardButton from '../../../components/CardButton';
import DiaryAddButton from '../../../components/DiaryAddButton';
import DiaryItem from '../../../components/DiaryItem';
import DiaryList from '../../../components/DiaryList';
import Header from '../../../components/Header';
import Content from '../../Content';
import LeftPanel from '../../LeftPanel';
import classes from './BaseLayout.module.scss';

const BaseLayout = () => {
  const data = [
    {
      title: 'Прохождение новых курсов',
      text: 'Навыки сами себя не прокачают',
      date: new Date()
    },
    {
      title: 'Поход в горы',
      text: 'В горах шикарные виды',
      date: new Date()
    }
  ];

  return (
    <div className={classes.layout}>
      <LeftPanel>
        <Header />
        <DiaryList>
          <DiaryAddButton />
          {data.map((item, index) => (
            <CardButton key={index}>
              <DiaryItem title={item.title} date={item.date} text={item.text} />
            </CardButton>
          ))}
        </DiaryList>
      </LeftPanel>
      <Content>
        <h1>Заголовок</h1>
        <p>Текст</p>
        <Button text='Сохранить' onClick={() => {}} />
      </Content>
    </div>
  );
};

export default BaseLayout;
