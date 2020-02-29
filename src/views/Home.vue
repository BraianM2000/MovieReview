<template>
  <div class="home">

    <CardCarousel />

    <b-container class="container-news">
      <h3>Ultimas peliculas</h3>
      <b-row>
        <b-col v-on:click="seeMovie(movie.id)" class="container-movie text-center" v-bind:key="movie.id" v-for="movie in Movies">
          <div>
            <b-img rounded width="220" v-bind:src="baseUrl+movie.poster_path" alt=""></b-img>
            <p>{{movie.title}}</p>
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
<<<<<<< HEAD
export default {
  data(){
    return{

    }
  },
  created(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=eac810b6ade616ce25d01396797173f0&sort_by=popularity.desc&region=US&include_video=true&page=1')
    .then(res => res.json())
    .then(res => console.log(res))

    fetch('https://api.themoviedb.org/3/movie/454626/videos?api_key=eac810b6ade616ce25d01396797173f0&language=en-US')
    .then(res => res.json())
    .then(res => console.log(res))
=======
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
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eac810b6ade616ce25d01396797173f0&language=es-CO&page=1')
    .then(res => res.json())
    .then(res => 
      this.Movies = res.results)
  },
  methods:{
    seeMovie(id){
      this.$router.push('/movie/'+id);
    },
    onSlideStart(slide) {
        this.carousel.sliding = true
      },
      onSlideEnd(slide) {
        this.carousel.sliding = false
      }
>>>>>>> 0279e93e854298fb1f73d0001be30b8571400ce1
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