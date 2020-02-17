<template>
  <div class="container">
    <h1 class="text-center mt-5 text-light">My app</h1>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>

  export default {

    created() {
      this.$store.dispatch("initApp")
    }

  }
</script>

<style>
  html {
    height: 100% !impostant;
  }
  body {
    background-color: #002436;
    /*background-image: linear-gradient(to right top, #051937, #002436, #022b2d, #203028, #32342d);*/
  }

  .page-enter, .page-leave-active {
    opacity: 0;
    transform: scale(0);
    
  }

  .page-enter-active, .page-leave {
    transition: all, .5s;
  }



</style>
