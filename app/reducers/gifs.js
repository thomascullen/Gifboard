const gifs = (state = {
  fetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case 'REQUEST_GIFS':
      return Object.assign({}, state, {
       fetching: true,
       items: []
      })
    case 'RECEIVE_GIFS':
      return Object.assign({}, state, {
        fetching: false,
        items: action.gifs,
      })
    case 'RESET':
    case 'SET_SEARCH':
    return Object.assign({}, state, {
      fetching: false,
      items: [],
    })
    default:
      return state
  }
}

export default gifs
