<template>
  <div>
    <div class="container-info-movie info-movie">  
      <b-container class="container-info"> 
        <b-row>
          <b-col class="text-center" lg="4">
            <div>
              <b-img class="image-movie" rounded width="300" v-bind:src="baseUrl+Movie.poster_path" alt=""></b-img>
            </div>
            <div class="calification-movie">
              <b-button icon variant="dark" class="star-movie">
                <b-icon icon="star"></b-icon>
              </b-button>
              <b-button icon variant="dark" class="star-movie">
                <b-icon icon="star"></b-icon>
              </b-button>
              <b-button icon variant="dark" class="star-movie">
                <b-icon icon="star"></b-icon>
              </b-button>
              <b-button icon variant="dark" class="star-movie">
                <b-icon icon="star"></b-icon>
              </b-button>
              <b-button icon variant="dark" class="star-movie">
                <b-icon icon="star"></b-icon>
              </b-button>
            </div>
          </b-col>
          <b-col>
            <h3 class="title-movie text-info-movie"><strong>{{Movie.title}}</strong></h3>
            <div>
              <h4 class="text-info-movie"><strong>Sinopsis:</strong></h4>
              <p class="text-info-movie">{{Movie.overview}}</p>
            </div>
            <p class="text-info-movie"><strong>Fecha de estreno: </strong> {{Movie.release_date}}</p>
            <p class="text-info-movie"><strong>Título original: </strong> {{Movie.original_title}}</p>
            <p class="text-info-movie"><strong>Duración: </strong>{{Movie.runtime}} minutos</p>
            <h4 class="text-info-movie"><strong>Generos:</strong></h4>
            <div class="">
              <b-button variant="dark" to="/" class="text-info-movie button-movie" v-bind:key="genre.id" v-for="genre in Movie.genres">{{genre.name}}</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div>
      <b-container class="container-info-movie">
        <b-row class="justify-content-center">
          <b-col lg="10">
            <b-embed
              type="iframe"
              aspect="16by9"
              v-bind:src="UrlVideo+KeyVideos[0].key"
              allowfullscreen>
            </b-embed>
          </b-col>
        </b-row>
      </b-container>  
    </div>
    
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      Movie: {},
      baseUrl: "https://image.tmdb.org/t/p/original/",
      UrlVideo: "https://www.youtube.com/embed/",
      KeyVideos: []
    }
  },
  created() {
    fetch('https://api.themoviedb.org/3/movie/'+ this.$route.params.id +'?api_key=eac810b6ade616ce25d01396797173f0&language=es')
    .then(res => res.json())
    .then(res => 
      this.Movie = res);

    fetch('https://api.themoviedb.org/3/movie/'+ this.$route.params.id +'/videos?api_key=eac810b6ade616ce25d01396797173f0')
    .then(res => res.json())
    .then(res => this.KeyVideos = res.results)
  }
}
</script>

<style>
.info-movie{
  background: #dc3545; 
}

.container-info-movie{
  margin-top: 40px;
}

.container-info{
  padding-top: 40px;
  padding-bottom: 40px;
}

.movie-genres{
  display: flex;
}

.text-info-movie{
  color: white;
  font-family: 'Roboto', sans-serif;
}

.title-movie{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 30px;
}

.button-movie{
  margin-top: 10px;
  margin-right: 10px;
}

.star-movie{
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
}

.image-movie:hover{
  cursor: pointer;
}

.calification-movie{
  margin-top: 20px;
}
</style>