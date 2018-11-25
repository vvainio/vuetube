import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedVideo: null,
    videos: []
  },

  getters: {
    selectedVideo: (state) => state.selectedVideo,
    videos: (state) => state.videos
  },

  mutations: {
    setSelectedVideo (state, video) {
      state.selectedVideo = video
    },

    setVideos (state, data) {
      state.videos = data
    }
  },

  actions: {
    async searchVideos ({ commit }, searchTerm) {
      const data = await api.search(searchTerm)
      commit('setVideos', data.items)
    }
  }
})
