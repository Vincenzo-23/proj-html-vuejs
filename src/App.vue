<template>
  <div>
   <HeaderApp :voices="menus" />
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue"

  export default {
    components:{
      HeaderApp,
    },
    data(){
      return{
        menus: [ "Home", "Who We Are", "What We Do", "Where We Work", "Careers", "APPLY", "News"]
      }
    }
  }
</script>

<style lang="scss">

@use "./style/general.scss"

</style>