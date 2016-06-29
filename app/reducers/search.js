const search = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return action.query;
    case 'RESET':
      return '';
    default:
      return state;
  }
}

export default search
