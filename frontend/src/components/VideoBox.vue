<template>
   <div class="card-box">
      <VideoCard v-for="card in cardData" :key="card.id"
        :videoID = "card.id"
        :thumbnail = "card.thumbnail_url"
        :isFavorite = "card.favorited"
        :title="card.title"
        :iframeString="card.html"
        description= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, eius. Perferendis, voluptates. Aut id iusto explicabo rem enim modi velit praesentium a voluptatem, aliquam rerum deleniti deserunt pariatur facere porro!>"
        duration= "5min"
        v-on:openPlayer="openPlayer($event)"/>

    <VideoViewer v-on:closePlayer="closePlayer" />
   </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import VideoCard from '@/components/VideoCard.vue'
import VideoViewer from '@/components/VideoViewer.vue'

export default {
  name: 'VideoBox',
  components: {
    VideoViewer,
    VideoCard
  },
  data(){
      return {
          videos: [],
          cardData: [],
          onPlayer: '<iframe width="200" height="113" src="https://www.youtube.com/embed/Udk8YHOy0EU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      }
  },
  methods: {
    async pullVideos(){
        const config = {
        headers: { 'Accept': 'application/json' }
      }
      try {
        const res = await axios.get(`api`, config);

        this.videos = res.data
        this.createCards(this.videos)
      } catch (err) {
        console.log(err);
      }
    },
    async createCards(vdos){
      for(let i=0; i<vdos.length;i++) {
        
        let vdo = await axios.get(`http://www.youtube.com/oembed?url=${vdos[i].video_url}&format=json`)
        let video = this.videos[i]

        this.cardData.push({
          "id": video._id,
          "title": vdo.data.title,
          "thumbnail_url": vdo.data.thumbnail_url,
          "video_url": video.video_url,
          "favorited": video.favorited,
          "html": vdo.data.html
        })
      }
    },
    openPlayer(e){
      let viewer = document.getElementsByClassName("viewer")
      let iframebox = document.getElementById("iframe-box")

      iframebox.innerHTML = e; 
      iframebox.children[0].style.width = "100%"
      iframebox.children[0].style.height = "100%"
      viewer[0].classList.add("active")

    },
    closePlayer() {
      let viewer = document.getElementsByClassName("viewer")
      viewer[0].classList.remove("active")
    }
  },
   created(){
    this.pullVideos()
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