import { CardButton, ListItem } from '@/components';
import { Note } from '@/types/types';

interface ListProps {
  notes: Note[];
}

export const List = ({ notes }: ListProps) => {
  if (notes.length === 0) {
    return <p>Записей нет, добавьте новую</p>;
  }

  const sortNote = (a: Note, b: Note) => (a.date < b.date ? 1 : -1);

  return (
    <>
      {notes?.sort(sortNote).map((item) => (
        <CardButton key={item.id}>
          <ListItem title={item.title} date={item.date} text={item.text} />
        </CardButton>
      ))}
    </>
  );
};
