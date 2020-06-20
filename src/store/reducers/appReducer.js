const INITIAL_STATE = {
  loading: false,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'loading':
      return { loading: true };
    case 'loading-finished':
      return { loading: false };
    default:
      return state;
  }
};

export default appReducer;
