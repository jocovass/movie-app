const INITIAL_STATE = {
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'loading':
      return { loading: true };
    case 'loading-finished':
      return { loading: false };
    default:
      return state;
  }
};

export default reducer;
