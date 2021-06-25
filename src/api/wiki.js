import axios from 'axios'

const wikiSearch = async (term) => {
  const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    params: {
      action: 'query',
      list: 'search',
      origin: '*',
      format: 'json',
      srsearch: term,
    },
  })
  const result = data.query.search
  return result
}

export default wikiSearch
