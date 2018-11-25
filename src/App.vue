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
      <SearchInput />
    </header>

    <div class="flex mb-4">
      <div class="w-2/3 mr-2">
        <VideoDetail class="flex-1" />
      </div>
      <div class="w-1/3 ml-2">
        <VideoList class="flex-1" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput'
import VideoDetail from '@/components/VideoDetail'
import VideoList from '@/components/VideoList'

export default {
  name: 'App',

  components: {
    SearchInput,
    VideoDetail,
    VideoList
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
