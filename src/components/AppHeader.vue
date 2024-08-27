<template>
    <div class="container bg-dark py-2 mb-3">
        <header>
            <!--
            <div class="row">
                <div class="col-4">
                    <div class="d-flex justify-content-center align-items-center">
                        <h1 class="rounded bg-danger text-white p-1">Boolfix</h1>
                    </div>
                </div>
                <div class="col-8">
                    <div>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="d-inline form-control mr-sm-2 w-75" type="search" v-model="store.filmCard" placeholder="Search" aria-label="Search">
                            <button class="d-inline btn btn-outline-success ms-2 my-2 my-sm-0" type="submit" @click="onSearch">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            -->
            <input type="text" v-model="searchQuery" placeholder="Cerca un film..."/>
            <button @click="onSearch">Cerca</button>
        </header>
    </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    onSearch() {
      this.$emit("update-search", this.searchQuery);
    }
  }
};
</script>
<style lang="">
    
</style>