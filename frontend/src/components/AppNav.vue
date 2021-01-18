<template>
  <nav class="top-nav">
      <!-- <router-link :to="{'name': 'Home'}">Home</router-link> |
      <router-link :to="{'name': 'About'}">About</router-link> -->
      <router-link :to="{'name': 'Home'}">
          <img class="logo" src="@/assets/img/vidli-logo.png" alt="Logomarca do Vitli">
      </router-link>

      <ul>
          <li>
             <router-link :to="{'name': 'Home'}">Home</router-link>
          </li>
          |
          <li>
              <router-link :to="{'name': 'upload'}">Add Video</router-link>
          </li>
      </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppNav'
}
</script>

<style lang="sass" scoped>
@import '@/assets/css/variables.sass'

.top-nav 
    position: fixed
    top: 0
    left: 0
    width: 100%
    background: $main-gray
    color: $highlighted
    height: 55px
    z-index: 999    
    display: flex
    align-items: center
    justify-content: space-between


    .logo
        width: 80px
        padding: 5px 15px 8px

    ul
        display: flex
        list-style: none
        float: right
        margin-right: 15px
        padding: 0
        display: flex
        align-items: center
    a
        color: $highlighted
        text-decoration: none
        display: inline-block
        padding: 5px 15px
        margin: 0

</style>