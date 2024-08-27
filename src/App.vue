<script>
import { store } from '.store/store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  created() {
    this.findFilm()
  },
  methods: {
    findFilm(){
      axios.get(store.apiFilmsUrl).then((result) => {
        store.filmList = result.results;
      });
    }
  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style lang="scss">
@use './styles/generals.scss';
</style>
