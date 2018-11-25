<template>
  <div id="app">
    <SearchInput :search-fn="searchVideos" />
    <VideoDetail :video="selectedVideo" />
    <VideoList :videos="videos" />
  </div>
</template>

<script>
import SearchInput from './components/SearchInput.vue'
import VideoDetail from './components/VideoDetail.vue'
import VideoList from './components/VideoList.vue'

import api from './services/api'

export default {
  name: 'App',

  components: {
    SearchInput,
    VideoDetail,
    VideoList
  },

  data: () => ({
    selectedVideo: null,
    videos: []
  }),

  methods: {
    async searchVideos (searchTerm) {
      const data = await api.search(searchTerm)
      this.videos = data.items
      this.selectedVideo = data.items[0]
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
