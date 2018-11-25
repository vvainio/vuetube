<template>
  <div>
    <VideoItem
      v-for="video in videos"
      :key="video.etag"
      :video="video"
      @click.native="$store.commit('setSelectedVideo', video)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import VideoItem from '@/components/VideoItem'

export default {
  name: 'VideoList',

  components: {
    VideoItem
  },

  computed: {
    ...mapGetters(['videos'])
  }
}
</script>

<style scoped>
</style>
