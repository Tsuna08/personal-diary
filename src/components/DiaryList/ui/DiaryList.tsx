import CardButton from '@/components/CardButton';
import DiaryItem from '@/components/DiaryItem';
import { Note } from '@/types/types';

interface DiaryListProps {
  notes: Note[];
}

const DiaryList = ({ notes }: DiaryListProps) => {
  if (notes.length === 0) {
    return <p>Записей нет, добавьте новую</p>;
  }

  const sortNote = (a: Note, b: Note) => (a.date < b.date ? 1 : -1);

  return (
    <>
      {notes?.sort(sortNote).map((item) => (
        <CardButton key={item.id}>
          <DiaryItem title={item.title} date={item.date} text={item.text} />
        </CardButton>
      ))}
    </>
  );
};

export default DiaryList;
