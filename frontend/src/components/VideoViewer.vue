<template>
  <div class="viewer">
      <div class="video-box">
          <div id="iframe-box"></div>
          <img class="cancel-icon" @click="closePlayer" src="@/assets/img/svg/cancel-icon.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name: 'VideoViewer',
    props: {
        toView: {
            type: String,
            required: false
        }
    },
    methods: {
        closePlayer() {
            this.$emit("closePlayer")
        }
    }
}
</script>

<style lang="sass" scoped>
.viewer
    position: fixed
    top: 0
    left: 0
    padding-top: 25px
    width: 100%
    background: rgba(0, 0, 0, 0.9)
    display: flex
    align-items: center
    justify-content: center
    visibility: hidden
    transition: 0.5s ease
    height: 0
    &.active
        visibility: visible
        height: 100vh

    .video-box
        background: #fff
        border-radius: 5px
        padding: 50px 30px 25px
        width: 95%
        max-width: 700px
        height: 60%
        position: relative

        #iframe-box
            width: 100%
            height: 100%

    .cancel-icon
        position: absolute
        top: 8px
        right: 12px
        width: 30px
        cursor: pointer

</style>