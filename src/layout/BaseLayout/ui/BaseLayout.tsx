import { useState } from 'react';

import { AddButton, Form, Header, List } from '@/components';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Content } from '@/layout/Content';
import { LeftPanel } from '@/layout/LeftPanel';
import { Note } from '@/types/root';

import classes from './BaseLayout.module.scss';

const BaseLayout = () => {
  const [data, setData] = useLocalStorage('data');
  const [showForm, setShowForm] = useState(false);
  const [selectNote, setSelectNote] = useState<Note | undefined>();

  const mapNotes = (notes: Note[]) => {
    if (!notes) return [];
    return notes.map((item) => ({ ...item, date: new Date(item.date) }));
  };

  const addNote = (note: Note) =>
    setData([
      ...mapNotes(data),
      {
        ...note,
        id: data.length > 0 ? Math.max(...data.map((item: Note) => item.id)) + 1 : 1,
        date: new Date(note.date)
      }
    ]);

  const editNote = (note: Note) =>
    setData([
      ...mapNotes(data).map((item) =>
        item.id === note.id ? { ...note, date: new Date(note.date) } : item
      )
    ]);

  const handleSubmit = (note: Note) => {
    if (!note.id) return addNote(note);
    editNote(note);
  };

  const handleAdd = () => {
    setSelectNote(undefined);
    setShowForm(true);
  };

  const handleSelected = (note: Note) => {
    setSelectNote(note);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setData([...mapNotes(data).filter((item) => item.id !== id)]);
    setShowForm(false);
  };

  return (
    <>
      <Header />
      <main className={classes.layout}>
        <LeftPanel>
          <AddButton title='Новое воспоминание' onClick={handleAdd} />
          <List notes={mapNotes(data)} changeSelected={handleSelected} />
        </LeftPanel>
        <Content>
          {showForm && <Form onDelete={handleDelete} onSubmit={handleSubmit} data={selectNote} />}
        </Content>
      </main>
    </>
  );
};

export default BaseLayout;
