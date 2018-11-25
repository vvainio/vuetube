<template>
  <input
    class="appearance-none bg-grey-lighter block border border-transparent ds-input
           focus:bg-white focus:border-grey-light focus:outline-0 leading-normal
           ml-4 pl-4 placeholder-grey-darkest pr-4 py-2 rounded transition w-full"
    v-model.trim="searchTerm"
    type="search"
    placeholder="Search for videos"
    @keydown.enter="onEnter"
  >
</template>

<script>
export default {
  name: 'SearchInput',

  props: {
    searchFn: {
      type: Function,
      required: true
    }
  },

  data: () => ({
    searchTerm: ''
  }),

  methods: {
    onEnter () {
      if (this.searchTerm) {
        this.searchFn(this.searchTerm)
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
