<template>
  <div id="app">
    <SearchInput :search-fn="searchVideos" />
  </div>
</template>

<script>
import SearchInput from './components/SearchInput.vue'

import api from './services/api'

export default {
  name: 'App',

  components: {
    SearchInput
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
