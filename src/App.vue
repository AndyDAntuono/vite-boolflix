<script>
import { store } from './store.js';
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
    //this.getFilm()
  },
  methods: {
    findFilm(){
      axios.get(store.apiFilmsUrl).then((result) => {
        store.filmList = result.results;
      });
    },
    //il seguente metodo l'ho inserito solo come "ispirazione" con lo scopo di modificarlo succesivamente per le esigenze dell'esercizio corrente
    filterContacts() {
            const searchLower = this.searchContact.toLowerCase();
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(searchLower)
            );
        },
    //getFilm(){axios.get(store.)}
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
