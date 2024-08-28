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
                    <li><img :src="` https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="poster"></li>
                    <li>{{ movie.title }}</li>
                    <li>{{ movie.original_title }}</li>
                    <li>{{ movie.original_language }} <img class="flag-w" :src="`../../public/flags/${movie.original_language}.svg`" alt=""></li>
                    <!--<li>{{ movie.vote_average }}</li>-->
                    <li>
                        <span v-for="star in getStars(movie.vote_average)" :key="star" class="fa-solid fa-star"</span>
                        <span v-for="emptyStar in 5 - getStars(movie.vote_average)" :key="emptyStar" class="fa-regular fa-star"></span>
                    </li>
                </ul>
            </div>
            <div class="row">
                <h2>Telefilm</h2>
                <ul v-for="tvShow in tvShows" :key="tvShow.id">
                    <li><img :src="` https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`" alt="poster"></li>
                    <li>{{ tvShow.name }}</li>
                    <li>{{ tvShow.original_name }}</li>
                    <li>{{ tvShow.original_language }} <img class="flag-w" :src="`../../public/flags/${tvShow.original_language}.svg`" alt=""></li>
                    <!--<li>{{ tvShow.vote_average }}</li>-->
                    <li>
                        <span v-for="star in getStars(tvShow.vote_average)" :key="star" class="fa-solid fa-star"></span>
                        <span v-for="emptyStar in 5 - getStars(tvShow.vote_average)" :key="emptyStar" class="fa-regular fa-star"></span>
                    </li>
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
    getStars: Function,
  }
};
</script>
<style lang="scss">
    .flag-w {
        width: 30px;
    };
    .fa-solid {
        color:#FFD43B;
    }
</style>