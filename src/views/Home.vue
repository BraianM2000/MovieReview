<template>
  <div class="home">
    <div>
      <!--
      <b-carousel
      id="carousel-movies"
      v-model="carousel.slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
        
        
        <b-carousel-slide
          content-visible-up="sm"
          v-bind:caption="Movies[0].original_title">
          <template v-slot:img>
            <img
              class="img-carousel d-block img-fluid"
              v-on:click="seeMovie(Movies[0].id)"
              v-bind:src="baseUrl+Movies[0].backdrop_path">
          </template>
        </b-carousel-slide>
        
        <b-carousel-slide
          content-visible-up="sm"
          v-bind:caption="Movies[1].original_title">
          <template v-slot:img>
            <img
              class="img-carousel d-block img-fluid"
              v-on:click="seeMovie(Movies[1].id)"
              v-bind:src="baseUrl+Movies[1].backdrop_path">
          </template>
        </b-carousel-slide>
        
        <b-carousel-slide
          content-visible-up="sm"
          v-bind:caption="Movies[2].original_title">
          <template v-slot:img>
            <img
              class="img-carousel d-block img-fluid"
              v-on:click="seeMovie(Movies[2].id)"
              v-bind:src="baseUrl+Movies[2].backdrop_path">
          </template>
        </b-carousel-slide>
        
        <b-carousel-slide
          content-visible-up="sm"
          v-bind:caption="Movies[3].original_title">
          <template v-slot:img>
            <img
              class="img-carousel d-block img-fluid"
              v-on:click="seeMovie(Movies[3].id)"
              v-bind:src="baseUrl+Movies[3].backdrop_path">
          </template>
        </b-carousel-slide>
        
        <b-carousel-slide
          content-visible-up="sm"
          v-bind:caption="Movies[4].original_title">
          <template v-slot:img>
            <img
              class="img-carousel d-block img-fluid"
              v-on:click="seeMovie(Movies[4].id)"
              v-bind:src="baseUrl+Movies[4].backdrop_path">
          </template>
        </b-carousel-slide>
        
      </b-carousel>
      -->
      <CardCarousel />
    </div>


    <b-container class="container-news">
      <h3>Ultimas peliculas</h3>
      <b-row>
        <b-col v-on:click="seeMovie(movie.id)" class="container-movie text-center" v-bind:key="movie.id" v-for="movie in Movies">
          <div>
            <b-img rounded width="220" v-bind:src="baseUrl+movie.poster_path" alt=""></b-img>
            <p>{{movie.original_title}}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
      <!--
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/szby7ZHLnkA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
      </div>-->
  </div>
</template> 

<script>
import CardCarousel from '@/components/card-carousel.vue'

export default {
  components:{
    CardCarousel
  },
  data(){
    return{
      Movies: [],
      baseUrl: "https://image.tmdb.org/t/p/original/",
      carousel: {
        slide: 0,
        sliding: null
      }
    }
  },
  created(){
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eac810b6ade616ce25d01396797173f0&region=US&page=1')
    .then(res => res.json())
    .then(res => 
      this.Movies = res.results)
    /*
    fetch('https://api.themoviedb.org/3/movie/454626/videos?api_key=eac810b6ade616ce25d01396797173f0&language=en-US')
    .then(res => res.json())
    .then(res => console.log(res))
    */
  },
  methods:{
    seeMovie(id){
      console.log(id);
    },
    onSlideStart(slide) {
        this.carousel.sliding = true
      },
      onSlideEnd(slide) {
        this.carousel.sliding = false
      }
  }
}
</script>

<style>
.container-movie{
  margin: 20px 0px 20px 0px;
}

.container-movie:hover{
  cursor: pointer;
}

.container-news{
  margin-top: 30px;
}

.title-carousel{
  font-family: 'Robot', sans-serif;
}

.img-carousel:hover{
  cursor: pointer;
}

</style>