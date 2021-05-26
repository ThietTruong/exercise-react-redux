import React from 'react'

function GifItem({ index, url }) {
  return (
    <div className='gif-iem'>
      <img src={url} />
      <div className="gif-name">Gif number {index}</div>
    </div>
  )
}

export default GifItem;
