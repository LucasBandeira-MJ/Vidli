<template>
  <div class="home">
   <div class="card-box">
      <VideoCard 
        thumbnail = "gdq-screen.jpg"
        title="Lo fi no Lyrics" 
        description= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, eius. Perferendis, voluptates. Aut id iusto explicabo rem enim modi velit praesentium a voluptatem, aliquam rerum deleniti deserunt pariatur facere porro!>"
        duration= "5min"
      />
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VideoCard from '@/components/VideoCard.vue'

export default {
  name: 'Home',
  components: {
    VideoCard
  }
}
</script>

<style lang="sass" scoped>
body
  background: #dfdfdf

.card-box
  max-width: 1100px
  margin: auto
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(280px, auto))

</style>
