<template>
   <div class="card-box">
      <VideoCard v-for="card in cardData" :key="card.id"
        :videoID = "card.id"
        :thumbnail = "card.thumbnail_url"
        :videoURL = "card.video_url"
        :isFavorite = "card.favorited"
        :title="card.title" 
        description= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, eius. Perferendis, voluptates. Aut id iusto explicabo rem enim modi velit praesentium a voluptatem, aliquam rerum deleniti deserunt pariatur facere porro!>"
        duration= "5min"
      />


   </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import VideoCard from '@/components/VideoCard.vue'

export default {
  name: 'VideoBox',
  components: {
    VideoCard
  },
  data(){
      return {
          videos: [],
          cardData: []
      }
  },
  methods: {
    async createCards(vdos){
      for(let i=0; i<vdos.length;i++) {
        
        let vdo = await axios.get(`http://www.youtube.com/oembed?url=${vdos[i].video_url}&format=json`)
        let video = this.videos[i]

        this.cardData.push({
          "id": video._id,
          "title": vdo.data.title,
          "thumbnail_url": vdo.data.thumbnail_url,
          "video_url": video.video_url,
          "favorited": video.favorited
        })
      }
    }
  },
  async created(){
    const config = {
      headers: { 'Accept': 'application/json' }
    }
    try {
      const res = await axios.get(`http://localhost:3000/api`, config);

      this.videos = res.data
      this.createCards(this.videos)
    } catch (e) {
      console.log(e);
    }
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

  .favorited
    order: -1

</style>