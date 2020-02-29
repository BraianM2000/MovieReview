<template>
  <div>
      <h3>Home</h3>
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>