<template>
    <main>
        <div class="container">
            <div class="row">
                <h2>FILM</h2>
                <div class="d-flex">
                    <div class="col-3"  v-for="movie in movies" :key="movie.id">
                        <div class="card">
                            <div class="poster border rounded  w-90 m-1">
                                <img class="poster-img" :src="` https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="poster">
                            </div>
                            <div class="info card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{{ movie.title }}</li>
                                    <li class="list-group-item">{{ movie.original_title }}</li>
                                    <li class="list-group-item">{{ movie.original_language }} <img class="flag-w" :src="`../../public/flags/${movie.original_language}.svg`" alt=""></li>
                                    <li class="list-group-item">
                                        <span v-for="star in getStars(movie.vote_average)" :key="star" class="fa-solid fa-star"</span>
                                        <span v-for="emptyStar in 5 - getStars(movie.vote_average)" :key="emptyStar" class="fa-regular fa-star"></span>
                                    </li>
                                    <li class="list-group-item">{{movie.overview}}</li>
                                  </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!--
                <h2>FILM</h2>
                <ul v-for="movie in movies" :key="movie.id">
                    <li><img :src="` https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="poster"></li>
                    <li>{{ movie.title }}</li>
                    <li>{{ movie.original_title }}</li>
                    <li>{{ movie.original_language }} <img class="flag-w" :src="`../../public/flags/${movie.original_language}.svg`" alt=""></li>
                    <li>
                        <span v-for="star in getStars(movie.vote_average)" :key="star" class="fa-solid fa-star"</span>
                        <span v-for="emptyStar in 5 - getStars(movie.vote_average)" :key="emptyStar" class="fa-regular fa-star"></span>
                    </li>
                </ul>
                -->
            </div>
            <div class="row">
                <h2>TELEFILM</h2>
                <div class="d-flex wrap mt-3" >
                    <div class="col-3" v-for="tvShow in tvShows" :key="tvShow.id">
                        <div class="card">
                            <div class="poster border rounded  w-90 m-1">
                                <img class="poster-img" :src="` https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`" alt="poster">
                            </div>
                            <div class="info card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{{ tvShow.name }}</li>
                                    <li class="list-group-item">{{ tvShow.original_name }}</li>
                                    <li class="list-group-item">{{ tvShow.original_language }} <img class="flag-w" :src="`../../public/flags/${tvShow.original_language}.svg`" alt=""></li>
                                    <li class="list-group-item">
                                        <span v-for="star in getStars(tvShow.vote_average)" :key="star" class="fa-solid fa-star"</span>
                                        <span v-for="emptyStar in 5 - getStars(tvShow.vote_average)" :key="emptyStar" class="fa-regular fa-star"></span>
                                    </li>
                                    <li class="list-group-item">{{tvShow.overview}}</li>
                                  </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!--
                <ul v-for="tvShow in tvShows" :key="tvShow.id">
                    <li><img :src="` https://image.tmdb.org/t/p/w342/${tvShow.poster_path}`" alt="poster"></li>
                    <li>{{ tvShow.name }}</li>
                    <li>{{ tvShow.original_name }}</li>
                    <li>{{ tvShow.original_language }} <img class="flag-w" :src="`../../public/flags/${tvShow.original_language}.svg`" alt=""></li>
                    <li>
                        <span v-for="star in getStars(tvShow.vote_average)" :key="star" class="fa-solid fa-star"></span>
                        <span v-for="emptyStar in 5 - getStars(tvShow.vote_average)" :key="emptyStar" class="fa-regular fa-star"></span>
                    </li>
                </ul>
                -->
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
    .poster {
        display: block;
    }
    .poster-img {
        width: 100%;
    }
    .info {
        display: none;
    }
    .card:hover .poster {
        display: none;
    }
    .card:hover .info  {
        display: block;
    }
    .flag-w {
        width: 30px;
    };
    .fa-solid {
        color:#FFD43B;
    }
</style>