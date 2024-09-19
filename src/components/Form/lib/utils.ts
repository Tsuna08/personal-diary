import { FormValid, Note, TypesActionForm } from '@/types/root';
interface FormAction {
  readonly type: TypesActionForm;
  readonly payload?: Note | { [x: string]: string };
}

interface FormState {
  isValid: FormValid;
  values: {
    title: string;
    date: string;
    post: string;
    tag: string;
  };
  isFormReadyToSubmit?: false;
}

export const INITIAL_STATE = {
  isValid: { title: true, date: true, post: true },
  values: { title: '', date: '', post: '', tag: '' },
  isFormReadyToSubmit: false
};

export const formReducer = (state: FormState, action: FormAction): any => {
  switch (action.type) {
    case TypesActionForm.SET_VALUE:
      return { ...state, values: { ...state.values, ...action.payload } };
    case TypesActionForm.CLEAR:
      return { ...state, values: INITIAL_STATE.values };
    case TypesActionForm.RESET_VALIDITY:
      return { ...state, isValid: INITIAL_STATE.isValid };
    case TypesActionForm.SUBMIT: {
      const titleValidity = state.values.title.toString().trim().length;
      const postValidity = state.values.post.toString().trim().length;
      const dateValidity = state.values.date;

      return {
        ...state,
        isValid: {
          title: titleValidity,
          date: dateValidity,
          post: postValidity
        },
        isFormReadyToSubmit: titleValidity && dateValidity && postValidity
      };
    }
  }
};
