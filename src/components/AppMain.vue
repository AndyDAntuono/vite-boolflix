<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="card" v-for="film in store.filmList" :key="film.id">
                        <div class="border rounded  w-90 m-1">
                            <img src="" alt="film-img">
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <!--titolo-->
                                <li class="list-group-item"> {{film.title}} </li>
                                <!--titolo originale-->
                                <li class="list-group-item">{{film.original_title}} </li>
                                <!--lingua-->
                                <li class="list-group-item">{{film.original_language}}</li>
                                <!--voto-->
                                <li class="list-group-item">Voto</li>
                              </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    
}
</script>
<style lang="">
    
</style>