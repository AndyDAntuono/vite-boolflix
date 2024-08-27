<template>
    <main>
        <div class="container">
            <div class="row">
                <!--
                <div class="col-3">
                    <div class="card" v-for="film in store.filmList" :key="film.id">
                        <div class="border rounded  w-90 m-1">
                            <img src="" alt="film-img">
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">{{film.title}} </li>
                                <li class="list-group-item">{{film.original_title}} </li>
                                <li class="list-group-item">{{film.original_language}}</li>
                                <li class="list-group-item">Voto</li>
                              </ul>
                        </div>
                    </div>
                </div>
                -->
                <ul>
                    <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
                  </ul>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="">
    
</style>