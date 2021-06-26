import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import ImageList from './ImageList'
import Loader from './Loader'

const accessKey = 'chzVfBfxLQfBD7vCxOrjFP3xi3ubjFWAzkJ3Bg8Z7tE'

const Infinite = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = (count = 10) => {
    const apiRoot = 'https://api.unsplash.com'

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        console.log(res.data)
        setImages([...images, ...res.data])
      })
  }

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      {/* <SearchBox onSubmit={onSearchSubmit} /> */}
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <ImageList images={images} />
      </InfiniteScroll>
    </div>
  )
}

export default Infinite
