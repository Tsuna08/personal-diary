export interface Note {
  id: number;
  title: string;
  date: Date;
  text: string;
}

export enum Themes {
  dark = 'dark',
  light = 'light'
}
