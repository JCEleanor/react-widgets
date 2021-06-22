import axios from 'axios'
const KEY = 'AIzaSyAU0DAyK4RPJ1KzH7-6304MLcv2KJFWBdE' //restricted, only allow localhost:3000

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    type: 'video',
    key: KEY,
  },
})
