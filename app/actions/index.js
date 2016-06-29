import fetch from 'isomorphic-fetch'
const electron = window.require('electron');
const clipboard = electron.clipboard;

let timer;

export const search = (query) => {
  return function(dispatch) {
    dispatch(setSearch(query));
    clearTimeout(timer);
    return new Promise((resolve, reject) => {
      timer = setTimeout(() => {
        resolve();
      }, 500);
    }).then(() => {
      dispatch(fetchGifs(query));
    })
  }
}

export const fetchGifs = (query) => {
  return function(dispatch) {
    dispatch(requestGifs);

    return fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
      .then(response => response.json())
      .then(json => dispatch(receiveGifs(json)))
  }
}

export const copyGif = (gif) => {
  return function(dispatch) {
    const url = gif.images.downsized.url
    clipboard.write({ text: url });
    dispatch(reset);
  }
}

export const setSearch = (query) => {
  return {
    type: 'SET_SEARCH',
    query,
    gifs: []
  }
}

export const requestGifs = {
  type: 'REQUEST_GIFS'
}

export const receiveGifs = (json) => {
  return {
    type: 'RECEIVE_GIFS',
    gifs: json.data
  }
}

export const reset = {
  type: "RESET",
}
