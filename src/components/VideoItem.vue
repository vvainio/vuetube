<template>
  <div class="flex items-center mb-4 border rounded cursor-pointer">
    <div class="w-1/4">
      <img
        :alt="video.snippet.title"
        :src="video.snippet.thumbnails.high.url"
      >
    </div>
    <div class="w-3/4 p-2">
      {{ video.snippet.title }}
    </div>
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
