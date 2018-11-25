<template>
  <input
    v-model.trim="searchTerm"
    type="search"
    placeholder="Search YouTube"
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
</style>
