<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import { store } from './store.js';

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
      searchQuery: "",
      movies: [],
      allMovies: [],
      tvShows: [],
      allTvShows: [],
      }
    },
  methods: {
    updateSearchQuery(query) {
       this.searchQuery = query;
      axios.get(store.apiFilmsUrl+query).then((response) => {
        console.log(response.data)
        this.movies = response.data.results
      });
      axios.get(store.apiTvShowsUrl+query).then((response) => {
        console.log(response.data)
        this.tvShows = response.data.results
      });
    }
  }
};
</script>

<template>
  <div id="app">
    <AppHeader @update-search="updateSearchQuery" />
    <AppMain 
    :movies="movies" 
    :tvShows="tvShows"
    />
  </div>
</template>

<!--
<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>
-->

<style lang="scss">
@use './styles/generals.scss';
</style>
