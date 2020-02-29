<template>
    <div>
        <b-container class="container-news">
            <h3>Recomendaciones de la semana</h3>
            <b-carousel
                class="container-carousel"
                controls
                indicators>
                <b-carousel-slide
                    v-bind:img-src="baseUrl+Movies[0].backdrop_path">
                </b-carousel-slide>
                <b-carousel-slide
                    v-bind:img-src="baseUrl+Movies[1].backdrop_path">
                </b-carousel-slide>
                <b-carousel-slide
                    v-bind:img-src="baseUrl+Movies[2].backdrop_path">
                </b-carousel-slide>
                <b-carousel-slide
                    v-bind:img-src="baseUrl+Movies[3].backdrop_path">
                </b-carousel-slide>
                <b-carousel-slide
                    v-bind:img-src="baseUrl+Movies[4].backdrop_path">
                </b-carousel-slide>
            </b-carousel>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return{
            Movies: [],
            baseUrl: "https://image.tmdb.org/t/p/original/",
        }
    },
    created() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=eac810b6ade616ce25d01396797173f0&region=US&page=1')
        .then(res => res.json())
        .then(res => 
        this.Movies = res.results)
    }
}
</script>

<style>
</style>