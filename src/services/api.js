const API_KEY = process.env.VUE_APP_API_KEY
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

class API {
  constructor () {
    if (!API_KEY) {
      throw new Error("Environment variable 'VUE_APP_API_KEY' is required.")
    }
  }

  async search (searchTerm = '') {
    const url = new URL(ROOT_URL)

    const params = {
      key: API_KEY,
      part: 'snippet',
      q: searchTerm,
      type: 'video'
    }

    url.search = new URLSearchParams(params)

    try {
      const response = await fetch(url)
      const body = await response.json()
      return body
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default new API()
