import React from 'react';
import { connect } from 'react-redux';
import { search, fetchGifs, resetGifs } from '../actions';
const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.typingTimer = undefined;
  }

  componentDidMount() {
    ipcRenderer.on('window-focus', () => {
      this.refs.input.focus();
    })

    ipcRenderer.on('window-blur', () => {
      this.refs.input.value = '';
    })
  }

  onChange(e) {
    this.props.dispatch(search(e.target.value));
  }

  onKeyDown(e) {
    clearTimeout(this.typingTimer);
    this.props.dispatch(resetGifs);
  }

  onKeyUp(e) {
    this.typingTimer = setTimeout(this.submit, 500);
  }

  submit() {
    this.props.dispatch(fetchGifs(this.refs.input.value));
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          ref="input"
          onChange={this.onChange}
          value={this.props.query}
          placeholder="Enter a keyword and hit return"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.search,
  }
}

Search = connect(mapStateToProps)(Search)
export default Search
