<template>
  <div>
    <template v-if="video">
      <div class="embedded-container">
        <iframe
          allowfullscreen
          frameborder="0"
          :src="videoUrl"
        />
      </div>
      <div class="mt-4">
        <div class="font-medium text-2xl mb-2">{{ video.snippet.title }}</div>
        <div>{{ video.snippet.description }}</div>
      </div>
    </template>

    <template v-else>
      No video selected
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const BASE_URL = 'https://www.youtube.com/embed/'

export default {
  name: 'VideoDetail',

  computed: {
    ...mapGetters({
      video: 'selectedVideo'
    }),

    videoUrl () {
      const { videoId } = this.video.id
      return `${BASE_URL}/${videoId}`
    }
  }
}
</script>

<style scoped>
  .embedded-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
