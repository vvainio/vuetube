<template>
  <input
    v-model.trim="searchTerm"
    class="appearance-none bg-grey-lighter block border border-transparent ds-input
           focus:bg-white focus:border-grey-light leading-normal ml-4 pl-4
           placeholder-grey-darkest pr-4 py-2 rounded transition w-full"
    type="search"
    placeholder="Search for videos"
    @keydown.enter="onEnter"
  >
</template>

<script>
export default {
  name: 'SearchInput',

  data: () => ({
    searchTerm: ''
  }),

  methods: {
    onEnter () {
      if (this.searchTerm) {
        this.$store.dispatch('searchVideos', this.searchTerm)
      }
    }
  }
}
</script>

<style scoped>
  input {
    outline: 0;
  }
</style>
