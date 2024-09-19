import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const dataJson = localStorage.getItem(key);
    const parseData = dataJson !== null ? JSON.parse(dataJson) : [];

    if (parseData) setData(parseData);
  }, []);

  const saveData = (updateData: any) => {
    console.log('updateData: ', updateData);
    localStorage.setItem(key, JSON.stringify(updateData));
    setData(updateData);
  };

  return [data, saveData];
};
