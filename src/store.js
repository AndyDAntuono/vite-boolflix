import {reactive} from 'vue';

export const store = reactive({
    apiFilmsUrl: "https://api.themoviedb.org/3/search/movie?api_key=39a7800c2fa4b4fe7feebf4a5edf8f00&language=it_IT&query=",
    apiTvShowsUrl:"https://api.themoviedb.org/3/search/tv?api_key=39a7800c2fa4b4fe7feebf4a5edf8f00&language=it_IT&query=",
});