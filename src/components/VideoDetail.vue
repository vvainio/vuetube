<template>
  <div>
    <template v-if="video">
      <iframe :src="videoUrl" />
      <div>
        <div>{{ video.snippet.title }}</div>
        <div>{{ video.snippet.description }}</div>
      </div>
    </template>
  </div>
</template>

<script>
const BASE_URL = 'https://www.youtube.com/embed/'

export default {
  name: 'VideoDetail',

  props: {
    video: {
      type: Object,
      default: null
    }
  },

  computed: {
    videoUrl () {
      const { videoId } = this.video.id
      return `${BASE_URL}/${videoId}`
    }
  }
}
</script>

<style scoped>
</style>
