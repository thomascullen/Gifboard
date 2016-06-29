import React from 'react';
import Gif from './Gif';

const GifList = ({gifs, onGifClick}) => (
  <ul className={gifs.length > 0 ? "gifs gifs--show" : "gifs"}>
    {gifs.map((gif, i) =>
      <Gif key={i} gif={gif} onClick={() => onGifClick(gif)}/>
    )}
  </ul>
)

export default GifList
