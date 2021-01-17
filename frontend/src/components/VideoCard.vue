<template>
  <div class="video-card yt" :class="{'favorited': favorited}">
      <div class="stats">
            <img @click="favoriteVideo(videoID)" class="star" src="@/assets/img/svg/dashed-star.png" alt="estrela de favorito">
    

          <div class="watched">
              <img @click="deleteVideo(videoID)" src="@/assets/img/svg/cancel-icon.svg" alt="">
          </div>
      </div>

        <a href="#" @click="sendIframe" >
            <img class="thumb" :src="thumbnail" alt="thumbnail">
        </a>
      <p class="video-title">
          {{ title }}
      </p>

      <!-- <p class="description"> {{ description }} </p> -->

      <!-- <p class="duration"> {{ duration }} </p> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'VideoCard',
    props: {
        thumbnail: {
            type: String,
            default: 'lofi-room.jpg'
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        videoID: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            default: false
        },
        iframeString: {
            type: String
        }
    },
    methods: {
        async favoriteVideo(videoID) {
            this.favorited = !this.favorited;
            
            await axios.patch(`http://localhost:3000/api/${videoID}`, {
                "favorited": this.favorited
            })
            .catch((err) => console.log(err ))
        },
        async deleteVideo(videoID){
            await axios.delete(`http://localhost:3000/api/${videoID}`)
            .then(this.$router.go())
        },
        sendIframe() {
            this.$emit("openPlayer", this.iframeString)
        }
    },
    data() {
        return {
            favorited: this.isFavorite
        }
    }
}
</script>

<style lang="sass" scoped>
.video-card
    width: 280px
    background: #fff
    margin: 10px auto
    border-radius: 5px

    &.yt
        border-top: 5px solid #c4302b 

    .star
        width: 30px
        cursor: pointer
        position: absolute
        top: 5px
        left: 5px

        
    .watched
        position: absolute
        top: 8px
        right: 5px
        cursor: pointer

        img
            width: 30px
    
    .stats
        width: 100%
        height: 45px
        position: relative
    .thumb
        width: 100%
        filter: grayscale(50%)

    .video-title
        margin: 0 auto
        width: 100%
        text-align: center
        font-weight: bold
        padding: 0px 10px
        box-sizing: border-box

    .description
        font-size: 16px
        font-size: 14px
        background-color: #a5a5a5
        padding: 10px
        margin: 5px 0 0

    .duration
        font-weight: bold
        width: 100%
        text-align: center
        background-color: #000
        color: #fff
        margin: 0
        padding: 5px 0
    &.favorited
        .star
            content: url("../assets/img/svg/star.svg")    
</style>