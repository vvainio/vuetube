<template>
  <div>
    <img
      height="100px"
      :alt="video.snippet.title"
      :src="video.snippet.thumbnails.high.url"
    >
    {{ video.snippet.title }}
  </div>
</template>

<script>
export default {
  name: 'VideoItem',

  props: {
    video: {
      type: Object,
      required: true
    }
  },

  methods: {

  }
}
</script>

<style scoped>
</style>
