//import {reactive} from 'vue';

export const store = reactive({
    apiFilmsUrl: "https://api.themoviedb.org/3/search/movie?api_key=39a7800c2fa4b4fe7feebf4a5edf8f00&query=batman",
    filmList: [],
    apiTvShowsUrl: "",
    tvShowList: [],
})