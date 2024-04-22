<template>
  <div class="background">
    <HeaderApp :voices="menus" />
    <MainApp />
  </div>
  
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue"
import MainApp from "./components/MainApp.vue"

  export default {
    components:{
      HeaderApp,
      MainApp,
    },
    data(){
      return{
        menus: [ "Home", "Who We Are", "What We Do", "Where We Work", "Careers", "APPLY", "News"]
      }
    }
  }
</script>

<style lang="scss">

@use "./style/general.scss";


.background{
  background-image: url(/public/images/1-hero-image.png);
  background-size: cover;
  background-position: center;
  
  
}

</style>