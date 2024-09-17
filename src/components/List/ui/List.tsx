import { CardButton, ListItem } from '@/components';
import { Note } from '@/types/root';

interface ListProps {
  notes: Note[];
  changeSelected: (item: Note) => void;
}

export const List = ({ notes, changeSelected }: ListProps) => {
  if (notes.length === 0) return <p>Записей нет, добавьте новую</p>;

  const sortNote = (a: Note, b: Note) => (a.date < b.date ? 1 : -1);

  return (
    <>
      {notes?.sort(sortNote).map((item) => (
        <CardButton key={item.id} onClick={() => changeSelected(item)}>
          <ListItem title={item.title} date={item.date} post={item.post} />
        </CardButton>
      ))}
    </>
  );
};
