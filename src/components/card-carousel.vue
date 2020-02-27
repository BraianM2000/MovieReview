<template>
    <div>
        <b-container class="container-news">
            <h3>Proximamente</h3>
            <!--Display in lg and xl-->
            <b-carousel
                class="d-none d-lg-block d-xl-block container-carousel"
                controls
                indicators>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[0].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[1].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[2].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[3].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[4].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[5].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[6].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[7].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[8].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[9].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[10].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[11].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[12].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[13].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[14].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[15].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[16].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[17].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[18].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[19].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
            </b-carousel>

            <!--Display in md-->
            <b-carousel
                class="d-none d-md-block d-lg-none container-carousel"
                controls
                indicators>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[0].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[1].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[2].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[3].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[4].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[5].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[6].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[7].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[8].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[9].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[10].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[11].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[12].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[13].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[14].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[15].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[16].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[17].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
                <b-carousel-slide>
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[18].poster_path" alt=""></b-img>
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+Movies[19].poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
            </b-carousel>

            <!--Display in sm and xs-->
            <b-carousel
                class="d-sm-block d-md-none container-carousel"
                controls
                indicators>
                <b-carousel-slide v-bind:key="movie.id" v-for="movie in Movies">
                    <template v-slot:img>
                        <div class="text-center">
                            <b-img class="img-carousel" height="350" v-bind:src="baseUrl+movie.poster_path" alt=""></b-img>
                        </div>
                    </template>
                </b-carousel-slide>
            </b-carousel>
            <!--
            <b-row>
                <b-col v-on:click="seeMovie(movie.id)" class="container-movie text-center" v-bind:key="movie.id" v-for="movie in Movies">
                <div>
                    <b-img rounded width="220" v-bind:src="baseUrl+movie.poster_path" alt=""></b-img>
                    <p>{{movie.original_title}}</p>
                </div>
                </b-col>
            </b-row>
            -->
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
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=eac810b6ade616ce25d01396797173f0&region=US&page=1')
        .then(res => res.json())
        .then(res => 
        this.Movies = res.results)
    }
}
</script>

<style>
.img-carousel{
    margin: 20px;
}

.container-carousel{
    background: #343a40;
}
</style>