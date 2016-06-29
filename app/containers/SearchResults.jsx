import { connect } from 'react-redux';
import GifList from '../components/GifList';
import { copyGif } from '../actions';
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

const mapStateToProps = (state) => {
  return {
    gifs: state.gifs.items,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGifClick: (gif) => {
      dispatch(copyGif(gif));
      ipcRenderer.send('copy-gif');
    }
  }
}

const SearchResults = connect(mapStateToProps, mapDispatchToProps)(GifList);

export default SearchResults;
