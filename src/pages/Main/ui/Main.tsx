import Button from '../../../components/Button';
import CardButton from '../../../components/CardButton/ui/CardButton';
import DiaryItem from '../../../components/DiaryItem/ui/DiaryItem';

const Main = () => {
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
    <>
      <h1>Заголовок</h1>
      <p>Текст</p>
      <Button text='Сохранить' onClick={() => {}} />
      <CardButton>Новое воспоминание</CardButton>
      {data.map((item, index) => (
        <CardButton key={index}>
          <DiaryItem title={item.title} date={item.date} text={item.text} />
        </CardButton>
      ))}
    </>
  );
};

export default Main;
