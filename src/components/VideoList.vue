<template>
  <div>
    <VideoItem
      v-for="video in videos"
      :key="video.etag"
      :video="video"
    />
  </div>
</template>

<script>
import VideoItem from './VideoItem.vue'

export default {
  name: 'VideoList',

  components: {
    VideoItem
  },

  props: {
    videos: {
      type: Array,
      required: true
    }
  },

  methods: {

  }
}
</script>

<style scoped>
</style>
