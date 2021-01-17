<template>
  <div id="app">
    <AppNav />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue';

export default {
  components: {
    AppNav
  }
}
</script>

<style lang="scss">
@use '@/assets/css/main';

#app {
  overflow: hidden
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-2em)
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
</style>
