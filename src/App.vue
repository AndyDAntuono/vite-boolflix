<script setup>
import { store } from '.store/store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  created() {
    //nome metodi
  },
  methods: {
    //searchfilm? selectfilm?
  },
  data() {
    return {
      store,
    }
  }
}

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss">
@use './styles/generals.scss';
</style>
