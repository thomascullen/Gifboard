import React from 'react'

const Gif = ({gif, onClick}) => (
  <div
    className="gif"
    onClick={onClick}
    style={{backgroundImage: `url(${gif.images.downsized.url})`}}
  />
)

export default Gif
