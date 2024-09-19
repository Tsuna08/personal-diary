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
  const [selectNote, setSelectNote] = useState({});

  const mapNotes = (notes: Note[]) => {
    if (!notes) return [];
    return notes.map((item) => ({ ...item, date: new Date(item.date) }));
  };

  const handleSubmit = (note: Note) => {
    if (!note.id) addNote(note);
    editNote(note);
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
      ...mapNotes(data).map((item) => {
        if (item.id === note.id) return { ...note, date: new Date(note.date) };
        return item;
      })
    ]);

  const handleSelected = (note: Note) => {
    setSelectNote(note);
    setShowForm(true);
  };

  return (
    <>
      <Header />
      <main className={classes.layout}>
        <LeftPanel>
          <AddButton title='Новое воспоминание' onClick={() => setShowForm(true)} />
          <List notes={mapNotes(data)} changeSelected={handleSelected} />
        </LeftPanel>
        <Content>{showForm && <Form onSubmit={handleSubmit} data={selectNote} />}</Content>
      </main>
    </>
  );
};

export default BaseLayout;
