import { useState } from 'react';

import DiaryAddButton from '@/components/DiaryAddButton';
import DiaryForm from '@/components/DiaryForm';
import DiaryList from '@/components/DiaryList';
import Header from '@/components/Header';
import { Note } from '@/types/types';

import Content from '../../Content';
import LeftPanel from '../../LeftPanel';
import classes from './BaseLayout.module.scss';

const BaseLayout = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showForm, setShowForm] = useState(false);

  const addNote = (note: Note) =>
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id:
          prevNotes.length > 0
            ? Math.max(...prevNotes.map((item) => item.id)) + 1
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
          <DiaryList notes={notes} />
        </LeftPanel>
        <Content>{showForm && <DiaryForm onSubmit={addNote} />}</Content>
      </div>
    </>
  );
};

export default BaseLayout;
