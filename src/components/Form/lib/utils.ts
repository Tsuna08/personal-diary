export const INITIAL_STATE = {
  isValid: {
    title: true,
    date: true,
    post: true
  },
  values: {
    title: '',
    date: '',
    post: '',
    tag: ''
  },
  isFormReadyToSubmit: false
};

export const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, values: { ...state.values, ...action.payload } };
    case 'CLEAR':
      return { ...state, values: INITIAL_STATE.values };
    case 'RESET_VALIDITY':
      return { ...state, isValid: INITIAL_STATE.isValid };
    case 'SUBMIT': {
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
