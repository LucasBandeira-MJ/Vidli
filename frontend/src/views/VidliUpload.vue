<template>
  <div class="uploader">
    <label for="video-url">Cole a URL do seu video para adiciona-lo a sua lista:</label>
    <input type="text" name="video-url" id="video-url" v-model="videoURL">
    <button @click.prevent="uploadVidli()">Enviar video</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VidliUpload',
  date() {
    return {
      videoURL: 'nada'
    }
  },
  methods: {
    async uploadVidli() {
      await axios.post(`http://localhost:3000/api`, {
        "video_provider": "youtube",
        "video_url": this.videoURL
      }).then(function (res) {
      console.log(res)
      })
      .catch(function (err) {
        console.log(err)
      })
      this.$router.push('/');
    }
  }
}
</script>

<style lang="sass" scoped>
.uploader
  width: 100%
  display: flex
  flex-direction: column
  min-height: 90vh
  justify-content: center
  align-items: center

  label
    cursor: pointer

  input
    font-size: 22px
    width: 500px
    margin: 20px
    color: #42cf07

  button
    color: #fff
    text-transform: uppercase
    padding: 10px
    width: 200px
    border-radius: 20px
    border: none
    background-color: #42cf07
    font-size: 18px
    letter-spacing: 1px
    cursor: pointer
  
</style>
