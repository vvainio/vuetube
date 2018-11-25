<template>
  <div id="app">
    <SearchInput :search-fn="searchVideos" />
    <VideoList :videos="videos" />
  </div>
</template>

<script>
import SearchInput from './components/SearchInput.vue'
import VideoList from './components/VideoList.vue'

import api from './services/api'

export default {
  name: 'App',

  components: {
    SearchInput,
    VideoList
  },

  data: () => ({
    videos: []
  }),

  methods: {
    async searchVideos (searchTerm) {
      const data = await api.search(searchTerm)
      this.videos = data.items
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
