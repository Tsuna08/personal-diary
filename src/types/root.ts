export interface Note {
  id: number;
  title: string;
  date: Date;
  tag?: string;
  post?: string;
}

export enum Themes {
  dark = 'dark',
  light = 'light'
}

export enum TypesActionForm {
  SET_VALUE = 'SET_VALUE',
  CLEAR = 'CLEAR',
  RESET_VALIDITY = 'RESET_VALIDITY',
  SUBMIT = 'SUBMIT'
}

export interface FormValid {
  title: boolean;
  date: boolean;
  post: boolean;
}
