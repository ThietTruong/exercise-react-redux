import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import GifItem from './GifItem/GifItem'

function Gif() {
  const gifs = useSelector(state => state.gif.gif);

  const [gifSearch, setGifSearch] = useState(gifs);
  const handleOnChange = (e) => {
    if (gifs.length > 0) {
      const tempGif = gifs.filter(gif => gif.id == e.target.value);
      setGifSearch(tempGif);
    }
    if (e.target.value == "") {
      setGifSearch(gifs)
    }
  }
  return (
    <div className='gif'>
      <div className='gif-search'>
        <input className="gif-input" type='text' placeholder='enter id....' onChange={handleOnChange} />
      </div>
      <div className='gif-list'>
        {gifSearch && gifSearch.map((gif, index) => {
          return (
            <GifItem key={index} url={gif.url} index={gif.id} />
          )
        })}
      </div>
    </div>

  )
}

export default Gif;
