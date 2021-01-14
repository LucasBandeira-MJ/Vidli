<template>
  <div class="video-card yt">
      <div class="stats">
          <img @click="favoriteVideo($event)" class="star" :class="{'favorite': isFavorite}" src="@/assets/img/svg/dashed-star.png" alt="estrela de favorito">

          <div class="watched">
              <img src="@/assets/img/svg/check-icon.svg" alt="">
          </div>
      </div>

      <img class="thumb" :src="thumb" alt="thumbnail">
      <p class="video-title">
          {{ title }}
      </p>

      <p class="description">
          {{ description }}
      </p>

      <p class="duration">
          {{ duration }}
      </p>
  </div>
</template>

<script>
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
        duration: {
            type: String,
            required: false
        },
        isFavorite: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            thumb: require('@/assets/img/' + this.thumbnail),
        }
    },
    methods: {
        favoriteVideo(e) {
            this.isFavorite = !this.isFavorite;
        }
    }
}
</script>

<style lang="sass" scoped>
.video-card
    width: 280px
    background: #fff
    margin: 10px 

    &.yt
        border-top: 5px solid red

    .star
        width: 30px
        cursor: pointer
        position: absolute
        top: 5px
        left: 5px

        &.favorite
            content: url("../assets/img/svg/star.svg")
    .watched
        position: absolute
        top: 8px
        right: 5px

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
</style>