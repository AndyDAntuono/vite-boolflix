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
                <h2>FILM</h2>
                <ul v-for="movie in movies" :key="movie.id">
                  <li>{{ movie.title }}</li>
                  <li>{{ movie.original_title }}</li>
                  <li>{{ movie.original_language }}</li>
                  <li>{{ movie.vote_average }}</li>
                </ul>
            </div>
            <div class="row">
                <h2>Telefilm</h2>
                <ul v-for="tvShow in tvShows" :key="tvShow.id">
                    <li>{{ tvShow.name }}</li>
                    <li>{{ tvShow.original_name }}</li>
                    <li>{{ tvShow.original_language }}</li>
                    <li>{{ tvShow.vote_average }}</li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  props: {
    //i TIPI di dato hanno la lettera INIZIALE in MAIUSCOLO!
    movies: Object,
    tvShows: Object,
  }
};
</script>
<style lang="">
    
</style>