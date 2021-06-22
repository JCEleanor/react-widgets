import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from './api/youtube'

const Youtube = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    onFormSubmit('Korean street food')
  }, [])

  const onFormSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm,
      },
    })
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onFormSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={(video) => {
                setSelectedVideo(video)
              }}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Youtube
