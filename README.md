# VueTube

A very basic [Vue.js](https://vuejs.org) client for YouTube. See the [vuex](https://github.com/vvainio/vuetube/tree/vuex) branch for an alternative implementation using [Vuex](https://vuex.vuejs.org) for state handling.

## Project setup

### Prerequisites
For local development, a valid YouTube API key is required. See [Google Developer's guide](https://developers.google.com/youtube/v3/getting-started) on how to obtain one. The key should be specified using [Vue's environment variables](https://cli.vuejs.org/guide/mode-and-env.html), for example by creating a `.env.local` file in the project's root with the following contents:
```
VUE_APP_API_KEY=<apikey>
```

### Project setup

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
