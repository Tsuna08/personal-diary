import { useState } from 'react';

import DiaryAddButton from '@/components/DiaryAddButton';
import DiaryForm from '@/components/DiaryForm';
import DiaryList from '@/components/DiaryList';
import Header from '@/components/Header';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Note } from '@/types/types';

import Content from '../../Content';
import LeftPanel from '../../LeftPanel';
import classes from './BaseLayout.module.scss';

const BaseLayout = () => {
  const [data, setData] = useLocalStorage('data');
  const [showForm, setShowForm] = useState(false);

  const mapNotes = (notes: Note[]) => {
    if (!notes) return [];
    return notes.map((item) => ({ ...item, date: new Date(item.date) }));
  };

  const addNote = (note: Note) =>
    setData([
      ...mapNotes(data),
      {
        id:
          data.length > 0
            ? Math.max(...data.map((item: Note) => item.id)) + 1
            : 1,
        text: note.text,
        title: note.title,
        date: new Date(note.date)
      }
    ]);

  return (
    <>
      <Header />
      <div className={classes.layout}>
        <LeftPanel>
          <DiaryAddButton onClick={() => setShowForm(true)} />
          <DiaryList notes={mapNotes(data)} />
        </LeftPanel>
        <Content>{showForm && <DiaryForm onSubmit={addNote} />}</Content>
      </div>
    </>
  );
};

export default BaseLayout;
