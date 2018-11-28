<template>
  <div>
    <VideoItem
      v-for="video in videos"
      :key="video.etag"
      :video="video"
      @click.native="$emit('on-select', video)"
    />
  </div>
</template>

<script>
import VideoItem from '@/components/VideoItem'

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
  }
}
</script>

<style scoped>
</style>
