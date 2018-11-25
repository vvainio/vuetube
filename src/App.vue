<template>
  <div
    id="app"
    class="container mx-auto p-4"
  >
    <header class="flex border-b mb-4 pb-4">
      <img
        class="logo"
        src="./assets/logo.png"
      >
      <span class="logo-color cursor-default leading-normal text-2xl">ueTube</span>
      <SearchInput :search-fn="searchVideos" />
    </header>

    <div class="flex mb-4">
      <div class="w-2/3 mr-2">
        <VideoDetail class="flex-1" :video="selectedVideo" />
      </div>
      <div class="w-1/3 ml-2">
        <VideoList
          class="flex-1"
          :videos="videos"
          :select-fn="selectVideo"
        />
      </div>
    </div>
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
    },

    selectVideo (video) {
      this.selectedVideo = video
      document.title = `VueTube - ${video.snippet.title}`
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
}

.logo {
  width: 42px;
  height: 42px;
}

.logo-color {
  color: #47b784;
}
</style>
